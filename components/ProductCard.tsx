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


  return (
    <article className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col overflow-hidden border border-primary-100">
      <div className="relative aspect-square bg-gradient-to-br from-primary-50 to-primary-100/50 overflow-hidden">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain group-hover:scale-105 transition-transform duration-700 ease-out p-4"
          priority={product.featured}
        />
        
        {/* Premium badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.featured && (
            <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-sm text-primary-800 px-3 py-1.5 text-xs font-medium rounded-full shadow-sm">
              <svg className="w-3.5 h-3.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Research-Backed Ingredients</span>
            </span>
          )}
        </div>
        
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center bg-primary-800/90 backdrop-blur-sm text-white px-3 py-1.5 text-xs font-medium rounded-full">
            Made in USA
          </span>
        </div>

        {/* Gradient overlay at bottom */}
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-white/80 to-transparent pointer-events-none" />
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-medium text-primary-900 mb-2 line-clamp-2 group-hover:text-primary-700 transition-colors">
          {product.name}
        </h3>
        
        <p className="text-body text-muted mb-4 line-clamp-2 flex-1">
          {product.shortDescription}
        </p>

        {/* Benefits with icons */}
        <div className="space-y-2 mb-6">
          {product.benefits.slice(0, 2).map((benefit, index) => (
            <div key={index} className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-primary-600">{benefit}</span>
            </div>
          ))}
        </div>

        {/* Rating and price */}
        <div className="flex items-center justify-between mb-6 pb-6 border-b border-primary-100">
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => {
                const filled = i < Math.floor(product.rating)
                const halfFilled = i === Math.floor(product.rating) && product.rating % 1 !== 0
                
                return (
                  <div key={i} className="relative">
                    {/* Background star (gray) */}
                    <svg 
                      className="w-4 h-4 text-gray-300" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    
                    {/* Filled star (yellow) */}
                    {filled && (
                      <svg 
                        className="w-4 h-4 text-yellow-500 absolute inset-0" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    )}
                    
                    {/* Half-filled star */}
                    {halfFilled && (
                      <svg 
                        className="w-4 h-4 text-yellow-500 absolute inset-0" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                        style={{ clipPath: 'inset(0 50% 0 0)' }}
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    )}
                  </div>
                )
              })}
            </div>
            <span className="text-sm text-muted">({product.reviewCount})</span>
          </div>
          <div className="text-right">
            <span className="text-2xl font-light text-primary-900">
              ${product.price}
            </span>
          </div>
        </div>

        <a
          href={getAffiliateUrl(product.amazonUrl)}
          target="_blank"
          rel="noopener noreferrer sponsored nofollow"
          className="inline-flex items-center justify-center w-full px-6 py-3 bg-primary-800 text-white font-medium rounded-lg hover:bg-primary-900 transition-all duration-300 transform group-hover:scale-[1.02] mt-auto"
        >
          View on Amazon
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </article>
  )
}