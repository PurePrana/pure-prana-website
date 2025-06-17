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
    url.searchParams.set('tag', affiliateTag)
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
    <article className="card group hover:shadow-xl transition-all duration-300 h-full flex flex-col">
      <div className="relative aspect-square overflow-hidden rounded-t-lg bg-neutral-50">
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
          <span className="absolute top-2 left-2 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Featured
          </span>
        )}
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="heading-4 text-primary-700 mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        <p className="text-body text-secondary-600 mb-4 line-clamp-2 flex-1">
          {product.shortDescription}
        </p>

        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1">
            <span className="text-accent-500 font-bold">{product.rating}</span>
            <span className="text-accent-500">★</span>
            <span className="text-small text-secondary-500">({product.reviewCount})</span>
          </div>
          <span className="text-2xl font-bold text-primary-600">
            ${product.price}
          </span>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {product.benefits.slice(0, 2).map((benefit, index) => (
            <span 
              key={index} 
              className="text-xs bg-primary-50 text-primary-700 px-2 py-1 rounded-full"
            >
              {benefit}
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
          Buy on Amazon
        </a>
      </div>
    </article>
  )
}