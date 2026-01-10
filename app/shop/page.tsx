import { Metadata } from 'next'
import Link from 'next/link'
import ProductCard from '@/components/ProductCard'
import { getAllProducts } from '@/lib/products'
import { getAllConcerns } from '@/lib/concerns'

export const metadata: Metadata = {
  title: 'Shop Ayurvedic Supplements | Pure Prana',
  description:
    'Browse our collection of premium Ayurvedic supplements. Research-backed formulas for energy, immunity, hormonal balance, and more. GMP certified.',
}

export default function ShopPage() {
  const products = getAllProducts()
  const concerns = getAllConcerns()

  return (
    <main className="min-h-screen bg-gradient-to-b from-primary-50/50 to-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-light mb-6">
              Shop Our Collection
            </h1>
            <p className="text-lg md:text-xl text-primary-100 leading-relaxed">
              Premium Ayurvedic supplements crafted with research-backed ingredients.
              Each formula is designed to support your wellness journey naturally.
            </p>
          </div>
        </div>
      </section>

      {/* Shop by Concern */}
      <section className="py-12 border-b border-primary-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-display text-primary-900 mb-6 text-center">
            Shop by Concern
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {concerns.map((concern) => (
              <Link
                key={concern.id}
                href={`/shop/${concern.slug}`}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${concern.color} hover:opacity-80 transition-opacity`}
              >
                <span>{concern.icon}</span>
                <span className="font-medium">{concern.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-display text-primary-900">
              All Products ({products.length})
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-light text-primary-900 mb-2">100%</div>
              <div className="text-sm text-muted">Natural Ingredients</div>
            </div>
            <div>
              <div className="text-3xl font-light text-primary-900 mb-2">GMP</div>
              <div className="text-sm text-muted">Certified Facility</div>
            </div>
            <div>
              <div className="text-3xl font-light text-primary-900 mb-2">USA</div>
              <div className="text-sm text-muted">Made in America</div>
            </div>
            <div>
              <div className="text-3xl font-light text-primary-900 mb-2">FDA</div>
              <div className="text-sm text-muted">Registered Facility</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
