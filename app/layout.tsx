import type { Metadata } from 'next'
import { Inter, Playfair_Display, Crimson_Text } from 'next/font/google'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { MetaPixel } from '@/components/MetaPixel'
import {
  generateOrganizationSchema,
  generateWebSiteSchema,
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
} from '@/lib/seo'
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
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} - Premium Plant-Based Ayurvedic Supplements`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'plant-based supplements',
    'ayurvedic supplements',
    'herbal supplements',
    'natural wellness',
    'ashwagandha',
    'brahmi',
    'shilajit',
    'ayurveda',
    'holistic health',
    'USA made supplements',
    'vegan supplements',
    'adaptogenic herbs',
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} - Premium Plant-Based Ayurvedic Supplements`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/images/og-default.jpg`,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - Ayurvedic Wellness`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} - Premium Plant-Based Ayurvedic Supplements`,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/images/og-default.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: SITE_URL,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = generateOrganizationSchema()
  const websiteSchema = generateWebSiteSchema()

  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${crimson.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className={inter.className}>
        <MetaPixel />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
