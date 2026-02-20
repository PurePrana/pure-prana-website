'use client'

import { trackMetaEvent } from './MetaPixel'

interface AmazonCTAProps {
  href: string
  children: React.ReactNode
  className?: string
  productName?: string
  angle?: string
  [key: string]: unknown
}

/**
 * Amazon CTA link that fires Meta Pixel InitiateCheckout event on click.
 * Use this instead of raw <a> tags for Amazon links in warmup pages.
 */
export function AmazonCTA({
  href,
  children,
  className,
  productName = 'Hormonal Balance',
  angle,
  ...props
}: AmazonCTAProps) {
  const handleClick = () => {
    trackMetaEvent('InitiateCheckout', {
      content_name: productName,
      content_category: angle || 'warmup_page',
      value: 29.95,
      currency: 'USD',
    })
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  )
}
