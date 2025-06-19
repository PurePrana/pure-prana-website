'use client'

import { useState } from 'react'
import BlogPostCard from '@/components/BlogPostCard'
import BlogPagination from '@/components/BlogPagination'
import BlogSearch from '@/components/BlogSearch'
import Link from 'next/link'
import { BlogPost } from '@/lib/blog-types'

interface BlogClientProps {
  posts: BlogPost[]
  allPosts: BlogPost[]
  featuredPosts: BlogPost[]
  currentPage: number
  totalPages: number
}

export default function BlogClient({
  posts,
  allPosts,
  featuredPosts,
  currentPage,
  totalPages,
}: BlogClientProps) {
  // Newsletter form state
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [isSubscribing, setIsSubscribing] = useState(false)
  const [subscriptionMessage, setSubscriptionMessage] = useState<{
    type: 'success' | 'error'
    text: string
  } | null>(null)

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubscribing(true)
    setSubscriptionMessage(null)

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: newsletterEmail,
          source: 'blog-page-footer',
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setSubscriptionMessage({
          type: 'success',
          text: 'Successfully subscribed! Check your email for confirmation.',
        })
        setNewsletterEmail('')
      } else {
        setSubscriptionMessage({
          type: 'error',
          text: data.error || 'Failed to subscribe. Please try again.',
        })
      }
    } catch (error) {
      console.error('Subscription error:', error)
      setSubscriptionMessage({
        type: 'error',
        text: 'Network error. Please check your connection and try again.',
      })
    } finally {
      setIsSubscribing(false)
    }
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Premium Background */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-primary-50 to-white">
        {/* Subtle pattern overlay */}
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

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="max-w-4xl">
            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-primary-700">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-medium">Peer-Reviewed Sources</span>
              </div>
              <span className="text-primary-300">•</span>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
                <span className="font-medium">Medical Experts</span>
              </div>
              <span className="text-primary-300">•</span>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-medium">Evidence-Based</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-light text-primary-900 mb-6 leading-tight">
              Research & Insights
            </h1>

            <p className="text-xl md:text-2xl text-primary-700 mb-12 leading-relaxed max-w-3xl">
              Where ancient Ayurvedic wisdom meets modern clinical research.
              Every article is reviewed by our medical advisory board.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl">
              <BlogSearch posts={allPosts} />
            </div>
          </div>
        </div>
      </section>

      {/* Research Standards Section */}
      <section className="py-16 bg-gradient-to-b from-white to-primary-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-primary-900 mb-4">
              Our Research Standards
            </h2>
            <p className="text-lg text-primary-700 max-w-2xl mx-auto">
              Every piece of content undergoes rigorous review to ensure
              accuracy and value
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-medium text-primary-900 mb-2">
                Fact-Checked
              </h3>
              <p className="text-sm text-primary-600">
                Every claim verified against scientific literature
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="font-medium text-primary-900 mb-2">
                150+ Studies
              </h3>
              <p className="text-sm text-primary-600">
                Referenced from peer-reviewed journals
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="font-medium text-primary-900 mb-2">
                Expert Review
              </h3>
              <p className="text-sm text-primary-600">
                Medical advisory board approval
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-medium text-primary-900 mb-2">
                Updated Monthly
              </h3>
              <p className="text-sm text-primary-600">
                Latest research incorporated regularly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredPosts.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-light text-primary-900 mb-4">
                Featured Research
              </h2>
              <p className="text-lg text-primary-700">
                Our most impactful evidence-based articles
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {featuredPosts.map((post, index) => (
                <article
                  key={post.slug}
                  className={`${index === 0 ? 'md:col-span-3' : ''}`}
                >
                  <BlogPostCard post={post} featured={index === 0} />
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles Section */}
      <section className="py-20 bg-gradient-to-b from-primary-50/30 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-light text-primary-900 mb-4">
                All Articles
              </h2>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/blog?category=clinical-studies"
                  className="inline-flex items-center px-4 py-2 bg-white border border-primary-200 rounded-full text-sm font-medium text-primary-700 hover:bg-primary-50 hover:border-primary-300 transition-colors"
                >
                  Clinical Studies
                </Link>
                <Link
                  href="/blog?category=research-reviews"
                  className="inline-flex items-center px-4 py-2 bg-white border border-primary-200 rounded-full text-sm font-medium text-primary-700 hover:bg-primary-50 hover:border-primary-300 transition-colors"
                >
                  Research Reviews
                </Link>
                <Link
                  href="/blog?category=traditional-texts"
                  className="inline-flex items-center px-4 py-2 bg-white border border-primary-200 rounded-full text-sm font-medium text-primary-700 hover:bg-primary-50 hover:border-primary-300 transition-colors"
                >
                  Traditional Texts
                </Link>
                <Link
                  href="/blog?category=modern-applications"
                  className="inline-flex items-center px-4 py-2 bg-white border border-primary-200 rounded-full text-sm font-medium text-primary-700 hover:bg-primary-50 hover:border-primary-300 transition-colors"
                >
                  Modern Applications
                </Link>
              </div>
            </div>

            {posts.length > 0 ? (
              <>
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  {posts.slice(3).map((post) => (
                    <BlogPostCard key={post.slug} post={post} />
                  ))}
                </div>

                {totalPages > 1 && (
                  <BlogPagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                  />
                )}
              </>
            ) : (
              <div className="text-center py-16">
                <h2 className="text-2xl font-light text-primary-700 mb-4">
                  Content Coming Soon
                </h2>
                <p className="text-lg text-primary-600 mb-8">
                  We&apos;re preparing evidence-based articles for you.
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary-800 text-white font-medium rounded-lg hover:bg-primary-900 transition-colors"
                >
                  Back to Homepage
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-primary-900 to-primary-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-light text-white mb-4">
            Stay Informed with Evidence-Based Insights
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Join our community of wellness seekers. Get monthly research
            summaries and expert-reviewed articles delivered to your inbox.
          </p>

          <form
            onSubmit={handleNewsletterSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <input
              type="email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg text-primary-900 placeholder-primary-500 focus:outline-none focus:ring-2 focus:ring-white/50"
              required
              disabled={isSubscribing}
            />
            <button
              type="submit"
              disabled={isSubscribing}
              className="px-8 py-3 bg-white text-primary-800 font-medium rounded-lg hover:bg-primary-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubscribing ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>

          {subscriptionMessage && (
            <div
              className={`mt-4 p-3 rounded-lg text-sm ${subscriptionMessage.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'} max-w-md mx-auto`}
            >
              {subscriptionMessage.text}
            </div>
          )}

          <p className="text-sm text-white/60 mt-4">
            No spam. Unsubscribe anytime. Read by 10,000+ wellness enthusiasts.
          </p>
        </div>
      </section>
    </main>
  )
}
