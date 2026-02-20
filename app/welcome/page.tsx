import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getAllProducts } from '@/lib/products'
import { getFeaturedPosts } from '@/lib/blog'
import NewsletterSignup from '@/components/NewsletterSignup'

export const metadata: Metadata = {
  title: 'Welcome to Pure Prana - Your Ayurvedic Wellness Journey Starts Here',
  description:
    'Thank you for choosing Pure Prana! Access exclusive wellness resources, usage guides, and join our community for ongoing support on your Ayurvedic wellness journey.',
  robots: 'noindex, nofollow', // QR landing page should not be indexed
}

export default function WelcomePage() {
  const products = getAllProducts().filter((p) => !p.comingSoon)
  const featuredPosts = getFeaturedPosts().slice(0, 3)

  return (
    <main className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 2px 2px, rgb(51, 102, 51) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            Thank You for Your Purchase!
          </div>

          <h1 className="text-4xl md:text-5xl font-light text-primary-900 mb-6 leading-tight">
            Welcome to the Pure Prana Family
          </h1>

          <p className="text-xl text-primary-700 mb-8 leading-relaxed max-w-2xl mx-auto">
            You&apos;ve taken an important step on your wellness journey.
            We&apos;re here to support you every step of the way with resources,
            guidance, and a community that cares.
          </p>
        </div>
      </section>

      {/* Quick Start Guide */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-light text-primary-900 text-center mb-12">
            Getting Started with Your Supplement
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-light text-primary-700">1</span>
              </div>
              <h3 className="text-xl font-medium text-primary-900 mb-3">
                Start Slow
              </h3>
              <p className="text-primary-600">
                Take 1 capsule daily with food. Ayurvedic herbs work best when
                introduced gradually to your routine.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-light text-primary-700">2</span>
              </div>
              <h3 className="text-xl font-medium text-primary-900 mb-3">
                Be Consistent
              </h3>
              <p className="text-primary-600">
                Take your supplement at the same time each day. Most people
                notice benefits within 2-4 weeks of consistent use.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-light text-primary-700">3</span>
              </div>
              <h3 className="text-xl font-medium text-primary-900 mb-3">
                Track Your Progress
              </h3>
              <p className="text-primary-600">
                Keep a simple journal of how you feel. Notice changes in energy,
                mood, and overall wellness over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Exclusive Resources */}
      <section className="py-16 bg-gradient-to-b from-primary-50/50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-light text-primary-900 text-center mb-4">
            Exclusive Resources for You
          </h2>
          <p className="text-center text-primary-600 mb-12 max-w-2xl mx-auto">
            As a Pure Prana customer, you have access to our complete library of
            wellness guides, research, and Ayurvedic wisdom.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Link
              href="/blog"
              className="group p-8 bg-white rounded-xl border border-primary-200 hover:border-primary-400 hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-200 transition-colors">
                  <svg
                    className="w-6 h-6 text-primary-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-primary-900 mb-2 group-hover:text-primary-700">
                    Research & Insights Blog
                  </h3>
                  <p className="text-primary-600">
                    Evidence-based articles on Ayurvedic herbs, wellness tips,
                    and how to get the most from your supplements.
                  </p>
                </div>
              </div>
            </Link>

            <Link
              href="/science"
              className="group p-8 bg-white rounded-xl border border-primary-200 hover:border-primary-400 hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-200 transition-colors">
                  <svg
                    className="w-6 h-6 text-primary-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-primary-900 mb-2 group-hover:text-primary-700">
                    The Science Behind Our Formulas
                  </h3>
                  <p className="text-primary-600">
                    Learn about the research supporting our ingredients and why
                    we chose each herb for our formulations.
                  </p>
                </div>
              </div>
            </Link>

            <Link
              href="/ingredients"
              className="group p-8 bg-white rounded-xl border border-primary-200 hover:border-primary-400 hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-200 transition-colors">
                  <svg
                    className="w-6 h-6 text-primary-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-primary-900 mb-2 group-hover:text-primary-700">
                    Ingredient Guide
                  </h3>
                  <p className="text-primary-600">
                    Deep dive into each Ayurvedic herb we use, their traditional
                    uses, and modern research findings.
                  </p>
                </div>
              </div>
            </Link>

            <Link
              href="/quiz"
              className="group p-8 bg-white rounded-xl border border-primary-200 hover:border-primary-400 hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-200 transition-colors">
                  <svg
                    className="w-6 h-6 text-primary-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-primary-900 mb-2 group-hover:text-primary-700">
                    Wellness Quiz
                  </h3>
                  <p className="text-primary-600">
                    Discover which supplements might complement your current
                    routine based on your wellness goals.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-light text-primary-900 text-center mb-4">
              Start Reading
            </h2>
            <p className="text-center text-primary-600 mb-12">
              Popular articles to help you on your wellness journey
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-xl border border-primary-200 overflow-hidden hover:shadow-lg transition-all"
                >
                  {post.image && (
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-wider text-primary-600 mb-2">
                      {post.category.replace('-', ' ')}
                    </p>
                    <h3 className="font-medium text-primary-900 mb-2 group-hover:text-primary-700 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-primary-600 line-clamp-2">
                      {post.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Product Lineup */}
      <section className="py-16 bg-gradient-to-b from-primary-50/50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-light text-primary-900 text-center mb-4">
            Explore Our Complete Collection
          </h2>
          <p className="text-center text-primary-600 mb-12">
            Each formula is crafted with premium Ayurvedic herbs for specific
            wellness goals
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 8).map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.slug}`}
                className="group bg-white rounded-xl border border-primary-200 overflow-hidden hover:shadow-lg transition-all"
              >
                {product.images[0] && (
                  <div className="relative h-40 overflow-hidden bg-primary-50">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-4">
                  <h3 className="font-medium text-primary-900 mb-1 group-hover:text-primary-700">
                    {product.name}
                  </h3>
                  <p className="text-sm text-primary-600 line-clamp-2">
                    {product.shortDescription}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              View All Products
              <svg
                className="w-5 h-5"
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
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="max-w-xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-light text-primary-900 mb-4">
              Stay Connected
            </h2>
            <p className="text-primary-600">
              Join our community for exclusive wellness tips, special offers,
              and early access to new products.
            </p>
          </div>
          <NewsletterSignup />
        </div>
      </section>

      {/* Contact & Support */}
      <section className="py-16 bg-gradient-to-b from-primary-50/50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-light text-primary-900 mb-4">
            Questions? We&apos;re Here to Help
          </h2>
          <p className="text-primary-600 mb-8">
            Our team is passionate about your wellness journey and ready to
            assist with any questions about our products or Ayurvedic wellness.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Contact Us
            </Link>
            <a
              href="https://www.amazon.com/stores/PurePrana/page/0B8AA7F9-5A5A-4D93-9D0A-04CE90C18D0D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-primary-300 text-primary-700 rounded-lg hover:bg-primary-50 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
              Leave a Review
            </a>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white border-t border-primary-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-6 h-6 text-primary-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <p className="text-sm font-medium text-primary-900">
                GMP Certified
              </p>
              <p className="text-xs text-primary-600">Third-Party Tested</p>
            </div>

            <div>
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-6 h-6 text-primary-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <p className="text-sm font-medium text-primary-900">
                100% Plant-Based
              </p>
              <p className="text-xs text-primary-600">Natural Ingredients</p>
            </div>

            <div>
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-6 h-6 text-primary-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="text-sm font-medium text-primary-900">
                Third-Party Tested
              </p>
              <p className="text-xs text-primary-600">Quality Verified</p>
            </div>

            <div>
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-6 h-6 text-primary-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="text-sm font-medium text-primary-900">
                5000+ Years
              </p>
              <p className="text-xs text-primary-600">Ayurvedic Tradition</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
