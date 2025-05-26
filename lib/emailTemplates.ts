export const getWaitlistConfirmationEmail = (discordUrl: string) => {
  return {
    subject: 'Welcome to CloudStarter Beta - Your Registration is Confirmed',
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome to CloudStarter</title>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              text-align: center;
              padding: 40px 0;
              background: linear-gradient(135deg, #2563eb, #3b82f6);
              border-radius: 12px;
              margin-bottom: 30px;
            }
            .header h1 {
              color: white;
              margin: 0;
              font-size: 28px;
            }
            .rocket {
              font-size: 40px;
              margin-bottom: 10px;
            }
            .content {
              padding: 0 20px;
            }
            .discord-section {
              background: linear-gradient(135deg, #667eea, #764ba2);
              padding: 25px;
              border-radius: 12px;
              margin: 25px 0;
              text-align: center;
              color: white;
            }
            .discord-section h3 {
              color: white;
              margin-top: 0;
            }
            .discord-section p {
              color: #f0f0f0;
            }
            .discord-button {
              display: inline-block;
              background: linear-gradient(135deg, #ff6b6b, #ee5a24);
              color: white;
              padding: 15px 30px;
              text-decoration: none;
              border-radius: 10px;
              font-weight: 700;
              font-size: 16px;
              margin-top: 15px;
              box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
              transition: all 0.3s ease;
              text-transform: uppercase;
              letter-spacing: 1px;
            }
            .discord-button:hover {
              background: linear-gradient(135deg, #ee5a24, #ff6b6b);
              box-shadow: 0 6px 20px rgba(255, 107, 107, 0.4);
              transform: translateY(-2px);
            }
            .footer {
              text-align: center;
              padding: 20px 0;
              color: #666;
              font-size: 14px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="rocket">🚀</div>
            <h1>Welcome to CloudStarter!</h1>
          </div>
          
          <div class="content">
            <h2>Thank you for joining our beta waitlist!</h2>
            
            <p>Thank you for your interest in CloudStarter. You have been successfully added to our beta testing program and will receive early access to our deployment platform.</p>
            
            <h3>What happens next?</h3>
            <ul>
              <li><strong>Beta Access:</strong> We'll notify you as soon as beta testing begins</li>
              <li><strong>Early Features:</strong> Get first access to new deployment features</li>
              <li><strong>Community Access:</strong> Join our Discord community for updates and discussions</li>
              <li><strong>Special Pricing:</strong> Exclusive early-bird pricing when we launch</li>
            </ul>
            
            <div class="discord-section">
              <h3>🎮 Join Our Community</h3>
              <p>Connect with other developers, get updates, and share feedback in our Discord server:</p>
              <a href="${discordUrl}" class="discord-button">Join Discord Community</a>
            </div>
            
            <div style="background: #f0f9ff; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2563eb;">
              <p style="margin: 0; font-size: 14px;"><strong>Important:</strong> Please add our email address to your contacts to ensure you receive all updates.</p>
            </div>
            
            <p>Thank you for your interest in CloudStarter. We look forward to having you as part of our beta community.</p>
            
            <p>Best regards,<br>
            The CloudStarter Team</p>
          </div>
          
          <div class="footer">
            <p>© 2024 CloudStarter. Making deployment simple.</p>
            <p>You received this email because you signed up for our beta waitlist.</p>
            <p><a href="mailto:unsubscribe@cloudstarter.com?subject=Unsubscribe" style="color: #666; text-decoration: underline;">Unsubscribe</a> | <a href="mailto:support@cloudstarter.com" style="color: #666; text-decoration: underline;">Contact Support</a></p>
            <p style="font-size: 12px; color: #999;">CloudStarter, Inc. | Beta Testing Program</p>
          </div>
        </body>
      </html>
    `,
    text: `
Welcome to CloudStarter Beta Waitlist! 🚀

Thank you for joining our beta waitlist! We're excited to have you on board.

What happens next?
- Beta Access: We'll notify you as soon as beta testing begins
- Early Features: Get first access to new deployment features  
- Community Access: Join our Discord community for updates and discussions
- Special Pricing: Exclusive early-bird pricing when we launch

Join Our Discord Community: ${discordUrl}

Thanks again for your interest in CloudStarter!

Best regards,
The CloudStarter Team

© 2024 CloudStarter. Making deployment simple.
You received this email because you signed up for our beta waitlist.
    `
  }
} 