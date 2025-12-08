import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NicheGenie',
  description: 'NicheGenie is an AI-driven content automation platform that helps small businesses and e-commerce entrepreneurs create high-quality, niche-specific blog posts and social media content at scale. It offers a personalized approach by integrating Web3 technology for enhanced data privacy and user engagement.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
