import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { supabaseAdmin } from '@/lib/supabase'
import { getWaitlistConfirmationEmail } from '@/lib/emailTemplates'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      )
    }

    // Check if email already exists in waitlist
    const { data: existingUser, error: checkError } = await supabaseAdmin
      .from('waitlist')
      .select('email')
      .eq('email', email)
      .single()

    if (existingUser) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 409 }
      )
    }

    // Add user to waitlist in Supabase
    const { data, error: insertError } = await supabaseAdmin
      .from('waitlist')
      .insert([
        {
          email,
          created_at: new Date().toISOString(),
          status: 'pending'
        }
      ])
      .select()

    if (insertError) {
      console.error('Supabase insert error:', insertError)
      return NextResponse.json(
        { error: 'Failed to add to waitlist' },
        { status: 500 }
      )
    }

    // Send confirmation email
    const discordUrl = process.env.DISCORD_INVITE_URL || 'https://discord.gg/your_server'
    const emailTemplate = getWaitlistConfirmationEmail(discordUrl)

    const { data: emailData, error: emailError } = await resend.emails.send({
      from: 'CloudStarter <onboarding@resend.dev>',
      to: [email],
      subject: emailTemplate.subject,
      html: emailTemplate.html,
      text: emailTemplate.text,
    })

    if (emailError) {
      console.error('Resend email error:', emailError)
      // Still return success since user was added to database
      // But log the email error for monitoring
    }

    return NextResponse.json({
      success: true,
      message: 'Successfully added to waitlist',
      data: data?.[0]
    })

  } catch (error) {
    console.error('Waitlist API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 