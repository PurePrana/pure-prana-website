'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@/lib/types'

interface ProductLinkProps {
  product: Product
  variant?: 'inline' | 'card' | 'minimal'
  showPrice?: boolean
  showRating?: boolean
  className?: string
}

export default function ProductLink({
  product,
  variant = 'card',
  showPrice = true,
  showRating = true,
  className = '',
}: ProductLinkProps) {
  if (variant === 'inline') {
    return (
      <Link
        href={`/product/${product.slug}`}
        className={`inline-flex items-center gap-2 text-primary-700 hover:text-primary-900 font-medium underline underline-offset-2 ${className}`}
      >
        {product.name}
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </Link>
    )
  }

  if (variant === 'minimal') {
    return (
      <Link
        href={`/product/${product.slug}`}
        className={`group flex items-center gap-3 p-3 rounded-lg border border-primary-200 hover:border-primary-400 hover:bg-primary-50 transition-all ${className}`}
      >
        {product.images[0] && (
          <div className="relative w-12 h-12 flex-shrink-0">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover rounded"
            />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <p className="font-medium text-primary-900 group-hover:text-primary-700 truncate">
            {product.name}
          </p>
          <p className="text-sm text-primary-600">{product.shortDescription}</p>
        </div>
        <svg
          className="w-5 h-5 text-primary-400 group-hover:text-primary-600 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </Link>
    )
  }

  // Default: card variant
  return (
    <div
      className={`bg-gradient-to-br from-primary-50 to-white rounded-xl border border-primary-200 overflow-hidden my-8 ${className}`}
    >
      <div className="flex flex-col sm:flex-row">
        {product.images[0] && (
          <div className="relative w-full sm:w-48 h-48 flex-shrink-0">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="p-6 flex-1">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-wider text-primary-600 mb-1">
                Featured Product
              </p>
              <h3 className="text-xl font-medium text-primary-900 mb-2">
                {product.name}
              </h3>
            </div>
            {showPrice && (
              <p className="text-xl font-semibold text-primary-800">
                ${product.price.toFixed(2)}
              </p>
            )}
          </div>

          <p className="text-primary-700 mb-4 line-clamp-2">
            {product.shortDescription}
          </p>

          {showRating && product.rating > 0 && (
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.round(product.rating)
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-primary-600">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>
          )}

          <div className="flex flex-wrap gap-3">
            <Link
              href={`/product/${product.slug}`}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              Learn More
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
            {product.amazonUrl && (
              <a
                href={product.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-primary-300 text-primary-700 rounded-lg hover:bg-primary-50 transition-colors"
              >
                Buy on Amazon
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
