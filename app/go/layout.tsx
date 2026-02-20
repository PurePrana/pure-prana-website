import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pure Prana Ayurveda — Premium Ayurvedic Supplements',
  description:
    'Clinically-inspired Ayurvedic supplements trusted by 50,000+ customers. GMP-Certified, FDA-registered facility.',
}

// Meta Pixel is now loaded site-wide from the root layout via <MetaPixel />
export default function GoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
