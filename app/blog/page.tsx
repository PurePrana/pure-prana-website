import { getPaginatedPosts, getAllPosts } from '@/lib/blog'
import BlogPostCard from '@/components/BlogPostCard'
import BlogPagination from '@/components/BlogPagination'
import BlogSearch from '@/components/BlogSearch'
import Link from 'next/link'

export const metadata = {
  title: 'Blog - Pure Prana',
  description: 'Explore Ayurvedic wisdom, wellness tips, and natural health guides from Pure Prana.',
}

interface BlogPageProps {
  searchParams: {
    page?: string
  }
}

export default function BlogPage({ searchParams }: BlogPageProps) {
  const currentPage = Number(searchParams.page) || 1
  const { posts, totalPages, totalPosts } = getPaginatedPosts(currentPage, 9)
  const allPosts = getAllPosts()

  return (
    <main className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      {/* Hero Section */}
      <section className="notion-page bg-white/80">
        <div className="max-w-3xl mx-auto">
          <h1 className="heading-1 mb-4 text-primary-800">
            Research & Insights
          </h1>
          <p className="text-body-large text-primary-600 mb-8">
            Evidence-based articles on Ayurvedic medicine and wellness
          </p>

          {/* Search Bar */}
          <div className="mb-8">
            <BlogSearch posts={allPosts} />
          </div>
            
          {/* Quick Links */}
          <div className="flex flex-wrap gap-2">
            <Link 
              href="/blog?category=clinical-studies"
              className="btn-ghost text-sm"
            >
              Clinical Studies
            </Link>
            <Link 
              href="/blog?category=research-reviews"
              className="btn-ghost text-sm"
            >
              Research Reviews
            </Link>
            <Link 
              href="/blog?category=traditional-texts"
              className="btn-ghost text-sm"
            >
              Traditional Texts
            </Link>
            <Link 
              href="/blog?category=modern-applications"
              className="btn-ghost text-sm"
            >
              Modern Applications
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="notion-page bg-gradient-to-b from-white to-primary-50">
        <div className="max-w-5xl mx-auto">
          {posts.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {posts.map((post) => (
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
              <h2 className="heading-3 text-secondary-600 mb-4">
                No blog posts yet
              </h2>
              <p className="text-body text-secondary-500 mb-8">
                We&apos;re working on creating valuable content for you. Check back soon!
              </p>
              <Link href="/" className="btn-primary">
                Back to Homepage
              </Link>
            </div>
          )}

          {/* Newsletter CTA */}
          <div className="notion-callout mt-16">
            <span className="text-xl">📧</span>
            <div className="flex-1">
              <h3 className="heading-4 mb-2">
                Stay Updated
              </h3>
              <p className="text-body text-primary-600 mb-6">
                Get monthly research digests and evidence-based insights delivered to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-primary-200 rounded-md focus:outline-none focus:border-primary-300"
                  required
                />
                <button
                  type="submit"
                  className="btn-primary"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}