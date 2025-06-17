import { searchPosts } from '@/lib/search'
import { getAllPosts } from '@/lib/blog'
import BlogPostCard from '@/components/BlogPostCard'
import Link from 'next/link'

export const metadata = {
  title: 'Search Results - Pure Prana Blog',
  description: 'Search results for Ayurvedic wellness articles and guides.',
}

interface SearchPageProps {
  searchParams: {
    q?: string
  }
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams.q || ''
  const allPosts = getAllPosts()
  const results = query ? searchPosts(allPosts, query) : []

  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-secondary-500 mb-6">
              <Link href="/" className="hover:text-primary-600">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-primary-600">Blog</Link>
              <span>/</span>
              <span className="text-primary-600">Search</span>
            </nav>

            <h1 className="heading-1 font-display text-primary-700 mb-4">
              Search Results
            </h1>
            
            {query && (
              <p className="text-lg text-secondary-600">
                {results.length} {results.length === 1 ? 'result' : 'results'} for &ldquo;{query}&rdquo;
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          {query ? (
            results.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {results.map(({ item: post }) => (
                  <BlogPostCard key={post.slug} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h2 className="heading-3 text-secondary-600 mb-4">
                  No results found
                </h2>
                <p className="text-body text-secondary-500 mb-8 max-w-md mx-auto">
                  We couldn&apos;t find any articles matching &ldquo;{query}&rdquo;. 
                  Try searching with different keywords or browse our categories.
                </p>
                <div className="flex gap-4 justify-center">
                  <Link href="/blog" className="btn-primary">
                    Browse All Articles
                  </Link>
                  <Link href="/" className="btn-outline">
                    Back to Homepage
                  </Link>
                </div>
              </div>
            )
          ) : (
            <div className="text-center py-16">
              <h2 className="heading-3 text-secondary-600 mb-4">
                Enter a search query
              </h2>
              <p className="text-body text-secondary-500 mb-8">
                Use the search bar to find articles about Ayurveda, wellness tips, and more.
              </p>
              <Link href="/blog" className="btn-primary">
                Browse All Articles
              </Link>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}