import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import SupplementFacts from '@/components/SupplementFacts'
import { getProductBySlug, getAllProducts } from '@/lib/products'
import { getConcernBySlug } from '@/data/concerns'
import {
  generateProductSchema,
  generateBreadcrumbSchema,
  SITE_URL,
} from '@/lib/seo'

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductBySlug(params.slug)

  if (!product) {
    return {
      title: 'Product Not Found | Pure Prana',
    }
  }

  const imageUrl = product.images[0]?.startsWith('http')
    ? product.images[0]
    : `${SITE_URL}${product.images[0]}`

  return {
    title: `${product.name} - Ayurvedic ${product.category} Supplement`,
    description: product.description,
    keywords: [
      product.name,
      ...product.tags,
      'ayurvedic supplement',
      'plant-based',
      'natural supplement',
      product.category,
    ].join(', '),
    openGraph: {
      title: `${product.name} | Pure Prana`,
      description: product.shortDescription,
      type: 'website',
      images: [
        {
          url: imageUrl,
          width: 800,
          height: 800,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} | Pure Prana`,
      description: product.shortDescription,
      images: [imageUrl],
    },
    alternates: {
      canonical: `${SITE_URL}/product/${product.slug}`,
    },
  }
}

export async function generateStaticParams() {
  const products = getAllProducts()
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export default function ProductPage({ params }: Props) {
  const product = getProductBySlug(params.slug)

  if (!product) {
    notFound()
  }

  const isComingSoon = product.comingSoon || !product.amazonUrl
  const concern = product.concerns[0] ? getConcernBySlug(product.concerns[0]) : null

  // Generate structured data for SEO/AEO
  const productSchema = generateProductSchema(product)
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Shop', url: '/shop' },
  ]
  if (concern) {
    breadcrumbItems.push({ name: concern.name, url: `/shop/${concern.slug}` })
  }
  breadcrumbItems.push({ name: product.name, url: `/product/${product.slug}` })
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems)

  return (
    <main className="min-h-screen bg-gradient-to-b from-primary-50/50 to-white">
      {/* JSON-LD Structured Data for SEO/AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      {/* Breadcrumb */}
      <div className="bg-white border-b border-primary-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-muted">
            <Link href="/shop" className="hover:text-primary-700">
              Shop
            </Link>
            <span>/</span>
            {concern && (
              <>
                <Link href={`/shop/${concern.slug}`} className="hover:text-primary-700">
                  {concern.name}
                </Link>
                <span>/</span>
              </>
            )}
            <span className="text-primary-900">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="relative">
              <div className="sticky top-24">
                <div className="relative aspect-square bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-2xl overflow-hidden">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-contain p-8"
                    priority
                  />

                  {isComingSoon && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <span className="bg-white text-primary-800 px-6 py-3 rounded-full font-medium text-lg">
                        Coming Soon
                      </span>
                    </div>
                  )}

                  {!isComingSoon && (
                    <>
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-sm text-primary-800 px-3 py-1.5 text-sm font-medium rounded-full shadow-sm">
                          <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Research-Backed
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="inline-flex items-center bg-primary-800/90 text-white px-3 py-1.5 text-sm font-medium rounded-full">
                          Made in USA
                        </span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div>
              {concern && (
                <Link
                  href={`/shop/${concern.slug}`}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm mb-4 ${concern.color}`}
                >
                  <span>{concern.icon}</span>
                  <span>{concern.name}</span>
                </Link>
              )}

              <h1 className="text-3xl md:text-4xl font-display text-primary-900 mb-4">
                {product.name}
              </h1>

              <p className="text-lg text-muted mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Rating */}
              {!isComingSoon && product.reviewCount > 0 && (
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-500' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-muted">
                    {product.rating} ({product.reviewCount} reviews)
                  </span>
                </div>
              )}

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-8">
                <span className="text-4xl font-light text-primary-900">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-muted">60 Capsules</span>
              </div>

              {/* Benefits */}
              <div className="mb-8">
                <h3 className="font-medium text-primary-900 mb-4">Key Benefits</h3>
                <div className="space-y-3">
                  {product.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-primary-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                {isComingSoon ? (
                  <button
                    disabled
                    className="flex-1 inline-flex items-center justify-center px-8 py-4 bg-gray-300 text-gray-500 font-medium rounded-lg cursor-not-allowed text-lg"
                  >
                    Coming Soon
                  </button>
                ) : (
                  <a
                    href={product.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-8 py-4 bg-[#FF9900] text-white font-medium rounded-lg hover:bg-[#e88b00] transition-all text-lg"
                  >
                    <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                    Buy on Amazon
                  </a>
                )}
              </div>

              {/* Usage */}
              <div className="bg-primary-50 rounded-xl p-6 mb-8">
                <h3 className="font-medium text-primary-900 mb-2">How to Use</h3>
                <p className="text-muted">{product.usage}</p>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-3 bg-white rounded-lg border border-primary-100">
                  <div className="text-2xl mb-1">🌿</div>
                  <div className="text-xs text-muted">100% Natural</div>
                </div>
                <div className="text-center p-3 bg-white rounded-lg border border-primary-100">
                  <div className="text-2xl mb-1">🇺🇸</div>
                  <div className="text-xs text-muted">Made in USA</div>
                </div>
                <div className="text-center p-3 bg-white rounded-lg border border-primary-100">
                  <div className="text-2xl mb-1">✓</div>
                  <div className="text-xs text-muted">GMP Certified</div>
                </div>
                <div className="text-center p-3 bg-white rounded-lg border border-primary-100">
                  <div className="text-2xl mb-1">🔬</div>
                  <div className="text-xs text-muted">Lab Tested</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supplement Facts Section */}
      {product.supplementFacts && (
        <section className="py-12 bg-primary-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-display text-primary-900 mb-8 text-center">
              Supplement Facts
            </h2>
            <div className="flex justify-center">
              <SupplementFacts facts={product.supplementFacts} productName={product.name} />
            </div>
          </div>
        </section>
      )}

      {/* Back to Shop */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <Link
            href="/shop"
            className="inline-flex items-center text-primary-700 hover:text-primary-900 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Products
          </Link>
        </div>
      </section>
    </main>
  )
}
