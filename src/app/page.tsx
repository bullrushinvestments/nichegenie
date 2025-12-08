import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NicheGenie',
  description: 'NicheGenie is an AI-driven content automation platform that helps small businesses and e-commerce entrepreneurs create high-quality, niche-specific blog posts and social media content at scale. It offers a personalized approach by integrating Web3 technology for enhanced data privacy and user engagement.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">NicheGenie</h1>
      <p className="mt-4 text-lg">NicheGenie is an AI-driven content automation platform that helps small businesses and e-commerce entrepreneurs create high-quality, niche-specific blog posts and social media content at scale. It offers a personalized approach by integrating Web3 technology for enhanced data privacy and user engagement.</p>
    </main>
  )
}
