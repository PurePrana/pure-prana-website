'use client'

import Image from 'next/image'
import { Product } from '@/lib/types'

interface ProductCardProps {
  product: Product
  affiliateTag?: string
}

export default function ProductCard({ product, affiliateTag = 'pureprana-20' }: ProductCardProps) {
  const getAffiliateUrl = (amazonUrl: string) => {
    const url = new URL(amazonUrl)
    // Ensure affiliate tag is added
    url.searchParams.set('tag', affiliateTag)
    // Add tracking parameters
    url.searchParams.set('linkCode', 'll1')
    url.searchParams.set('ref_', 'as_li_ss_tl')
    return url.toString()
  }

  const handleProductClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'affiliate',
        event_label: product.name,
        value: product.price
      })
    }
  }

  return (
    <article className="card-hover h-full flex flex-col overflow-hidden">
      <div className="relative aspect-square bg-primary-50">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
        {product.featured && (
          <span className="absolute top-3 left-3 bg-white text-primary-900 px-3 py-1.5 text-xs font-medium border border-primary-200 rounded">
            ✓ Validated
          </span>
        )}
        <span className="absolute top-3 right-3 bg-white text-primary-900 px-3 py-1.5 text-xs font-medium border border-primary-200 rounded">
          USA
        </span>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="heading-4 mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        <p className="text-body text-muted mb-4 line-clamp-2 flex-1">
          {product.shortDescription}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            <span className="font-medium">{product.rating}</span>
            <span className="text-brand">★</span>
            <span className="text-small text-muted">({product.reviewCount})</span>
          </div>
          <span className="text-xl font-medium">
            ${product.price}
          </span>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {product.benefits.slice(0, 2).map((benefit, index) => (
            <span 
              key={index} 
              className="text-xs text-muted"
            >
              • {benefit}
            </span>
          ))}
        </div>

        <a
          href={getAffiliateUrl(product.amazonUrl)}
          target="_blank"
          rel="noopener noreferrer sponsored nofollow"
          onClick={handleProductClick}
          className="btn-primary w-full text-center mt-auto"
        >
          View on Amazon →
        </a>
      </div>
    </article>
  )
}