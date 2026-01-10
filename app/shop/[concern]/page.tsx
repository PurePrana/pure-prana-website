import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ProductCard from '@/components/ProductCard'
import { getProductsByConcern, getAllProducts } from '@/lib/products'
import { getConcernBySlug, getAllConcerns } from '@/lib/concerns'

interface Props {
  params: { concern: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const concern = getConcernBySlug(params.concern)

  if (!concern) {
    return {
      title: 'Products | Pure Prana',
    }
  }

  return {
    title: `${concern.name} Supplements | Pure Prana`,
    description: `${concern.description}. Shop our Ayurvedic supplements for ${concern.name.toLowerCase()}.`,
  }
}

export async function generateStaticParams() {
  const concerns = getAllConcerns()
  return concerns.map((concern) => ({
    concern: concern.slug,
  }))
}

export default function ConcernPage({ params }: Props) {
  const concern = getConcernBySlug(params.concern)

  if (!concern) {
    notFound()
  }

  const products = getProductsByConcern(params.concern)
  const allConcerns = getAllConcerns()

  return (
    <main className="min-h-screen bg-gradient-to-b from-primary-50/50 to-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-4xl mb-4 block">{concern.icon}</span>
            <h1 className="text-4xl md:text-5xl font-display font-light mb-6">
              {concern.name}
            </h1>
            <p className="text-lg md:text-xl text-primary-100 leading-relaxed">
              {concern.description}
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb & Other Concerns */}
      <section className="py-6 border-b border-primary-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-muted mb-4">
            <Link href="/shop" className="hover:text-primary-700">
              Shop
            </Link>
            <span>/</span>
            <span className="text-primary-900">{concern.name}</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {allConcerns.map((c) => (
              <Link
                key={c.id}
                href={`/shop/${c.slug}`}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm transition-all ${
                  c.slug === params.concern
                    ? 'bg-primary-800 text-white'
                    : `${c.color} hover:opacity-80`
                }`}
              >
                <span>{c.icon}</span>
                <span>{c.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {products.length > 0 ? (
            <>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-display text-primary-900">
                  {products.length} Product{products.length !== 1 ? 's' : ''} for {concern.name}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <span className="text-6xl mb-4 block">{concern.icon}</span>
              <h2 className="text-2xl font-display text-primary-900 mb-4">
                Coming Soon
              </h2>
              <p className="text-muted mb-8">
                We&apos;re working on products for {concern.name.toLowerCase()}. Check back soon!
              </p>
              <Link
                href="/shop"
                className="inline-flex items-center px-6 py-3 bg-primary-800 text-white rounded-lg hover:bg-primary-900 transition-colors"
              >
                Browse All Products
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Related Categories */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-display text-primary-900 mb-8 text-center">
            Explore Other Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {allConcerns
              .filter((c) => c.slug !== params.concern)
              .slice(0, 4)
              .map((c) => (
                <Link
                  key={c.id}
                  href={`/shop/${c.slug}`}
                  className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <span className="text-3xl mb-2 block">{c.icon}</span>
                  <h3 className="font-medium text-primary-900">{c.name}</h3>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  )
}
