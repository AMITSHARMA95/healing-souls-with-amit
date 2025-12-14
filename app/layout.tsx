import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Healing Souls with Amit | Emotional Listening & Life Guidance',
  description:
    'Private, confidential emotional listening and life guidance. Support for breakups, divorce, trauma, and life confusion. No judgment, completely discreet.',
  keywords:
    'emotional support, life guidance, breakup support, divorce support, emotional listening, private counseling',
  authors: [{ name: 'Amit Sharma' }],
  creator: 'Amit Sharma',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://healingsoulswithait.com',
    title: 'Healing Souls with Amit | Emotional Listening & Life Guidance',
    description: 'Private, confidential emotional listening and life guidance.',
    siteName: 'Healing Souls with Amit',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Healing Souls with Amit',
    description: 'Private, confidential emotional listening and life guidance.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
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
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-dark text-text-light antialiased">
        {children}
      </body>
    </html>
  )
}
