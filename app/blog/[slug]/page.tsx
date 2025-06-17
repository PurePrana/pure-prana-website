import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getPostBySlug, getAllPosts, getRelatedPosts } from '@/lib/blog'
import { useMDXComponents } from '@/mdx-components'
import TableOfContents from '@/components/TableOfContents'
import AuthorBio from '@/components/AuthorBio'
import RelatedPosts from '@/components/RelatedPosts'
import Link from 'next/link'
import Image from 'next/image'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found - Pure Prana',
    }
  }

  return {
    title: `${post.title} - Pure Prana Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: post.image ? [post.image] : [],
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  
  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post.slug)
  const components = useMDXComponents({})

  return (
    <main className="min-h-screen">
      <article>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-12">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-secondary-500 mb-6">
                <Link href="/" className="hover:text-primary-600">Home</Link>
                <span>/</span>
                <Link href="/blog" className="hover:text-primary-600">Blog</Link>
                <span>/</span>
                <span className="text-primary-600">{post.title}</span>
              </nav>

              {/* Category & Reading Time */}
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                  {post.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </span>
                <span className="text-secondary-600">{post.readingTime.text}</span>
              </div>

              {/* Title */}
              <h1 className="heading-1 font-display text-primary-700 mb-6">
                {post.title}
              </h1>

              {/* Description */}
              <p className="text-xl text-secondary-600 mb-8">
                {post.description}
              </p>

              {/* Author Bio */}
              <AuthorBio authorId={post.author} date={post.date} />
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-[1fr_300px] gap-12">
                {/* Main Content */}
                <div className="prose prose-lg max-w-none">
                  {post.image && (
                    <div className="mb-8 -mx-4 md:mx-0">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={800}
                        height={400}
                        className="rounded-xl w-full"
                        priority
                      />
                    </div>
                  )}
                  
                  <MDXRemote 
                    source={post.content} 
                    components={components}
                  />

                  {/* Tags */}
                  {post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-neutral-200">
                      <span className="text-sm text-secondary-600 font-medium">Tags:</span>
                      {post.tags.map((tag) => (
                        <Link
                          key={tag}
                          href={`/blog?tag=${tag}`}
                          className="bg-neutral-100 hover:bg-neutral-200 px-3 py-1 rounded-full text-sm text-secondary-600 transition-colors"
                        >
                          {tag}
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* Share Section */}
                  <div className="flex items-center gap-4 mt-8 pt-8 border-t border-neutral-200">
                    <span className="text-sm text-secondary-600 font-medium">Share:</span>
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://pureprana.com/blog/${post.slug}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary-500 hover:text-primary-600 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                      </svg>
                    </a>
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://pureprana.com/blog/${post.slug}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary-500 hover:text-primary-600 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Sidebar */}
                <aside className="hidden lg:block">
                  <TableOfContents content={post.content} />
                  
                  {/* Newsletter CTA */}
                  <div className="bg-primary-50 rounded-lg p-6 mt-8">
                    <h3 className="heading-4 text-primary-700 mb-3">
                      Get More Wellness Tips
                    </h3>
                    <p className="text-sm text-secondary-600 mb-4">
                      Subscribe to our newsletter for Ayurvedic insights delivered weekly.
                    </p>
                    <form className="space-y-3">
                      <input
                        type="email"
                        placeholder="Your email"
                        className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:border-primary-500"
                        required
                      />
                      <button
                        type="submit"
                        className="btn-primary w-full text-sm"
                      >
                        Subscribe
                      </button>
                    </form>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <div className="container max-w-6xl mx-auto pb-16">
          <RelatedPosts posts={relatedPosts} />
        </div>
      </article>
    </main>
  )
}