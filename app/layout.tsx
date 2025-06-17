import type { Metadata } from 'next'
import { Inter, Playfair_Display, Crimson_Text } from 'next/font/google'
import Navigation from '@/components/Navigation'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

const crimson = Crimson_Text({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-crimson',
})

export const metadata: Metadata = {
  title: 'Pure Prana - Ayurvedic Wellness',
  description: 'Pure Prana offers authentic Ayurvedic products for holistic wellness',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${crimson.variable}`}>
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}