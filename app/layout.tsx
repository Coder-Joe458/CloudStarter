import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CloudStarter - Deploy your backend services with one click',
  description: 'From code to production, just one click. No need to configure servers, CI/CD or cloud platform permissions.',
  keywords: ['deployment', 'cloud services', 'one-click deployment', 'backend services', 'CloudStarter'],
  authors: [{ name: 'CloudStarter Team' }],
  openGraph: {
    title: 'CloudStarter - Deploy your backend services with one click',
    description: 'From code to production, just one click. No need to configure servers, CI/CD or cloud platform permissions.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 