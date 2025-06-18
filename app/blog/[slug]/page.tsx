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

  // Get author details
  const authorName = post.author === 'shagun' ? 'Shagun Pandey' : 'Dr. Patel'
  const authorCredentials = post.author === 'shagun' ? 'Certified Ayurveda Practitioner' : 'MD, Clinical Research'
  const authorBio = post.author === 'shagun' 
    ? 'Shagun is a certified Ayurveda practitioner with over 10 years of experience in holistic wellness and traditional medicine.'
    : 'Dr. Patel is a medical doctor specializing in integrative medicine, combining modern clinical research with traditional Ayurvedic practices.'

  return (
    <main className="min-h-screen bg-white">
      <article>
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 bg-gradient-to-b from-primary-50 to-white overflow-hidden">
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(51, 102, 51) 1px, transparent 1px)', backgroundSize: '40px 40px'}} />
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-primary-600 mb-8">
              <Link href="/" className="hover:text-primary-800 transition-colors">Home</Link>
              <span className="text-primary-400">→</span>
              <Link href="/blog" className="hover:text-primary-800 transition-colors">Research & Insights</Link>
              <span className="text-primary-400">→</span>
              <span className="text-primary-800 font-medium truncate max-w-[200px]">{post.title}</span>
            </nav>

            {/* Category & Evidence Badge */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center px-4 py-1.5 bg-white border border-primary-200 text-primary-700 text-sm font-medium rounded-full">
                {post.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </span>
              {(post.category === 'clinical-studies' || post.category === 'research-reviews') && (
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-green-50 border border-green-200 text-green-700 text-sm font-medium rounded-full">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Evidence-Based
                </span>
              )}
              <span className="text-sm text-primary-600">{post.readingTime.text}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-light text-primary-900 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Description */}
            <p className="text-xl text-primary-700 mb-10 leading-relaxed">
              {post.description}
            </p>

            {/* Author & Date */}
            <div className="flex items-center justify-between flex-wrap gap-4 pb-8 border-b border-primary-200">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-200 to-primary-300 rounded-full flex items-center justify-center">
                  <span className="text-primary-800 font-semibold">
                    {authorName.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-primary-900">{authorName}</p>
                  <p className="text-sm text-primary-600">{authorCredentials}</p>
                </div>
              </div>
              
              <div className="text-sm text-primary-600">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                {post.updatedAt && (
                  <span className="ml-3">
                    Updated: {new Date(post.updatedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </span>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-[1fr_320px] gap-12">
              {/* Main Content */}
              <div className="max-w-none">
                {post.image && (
                  <div className="mb-12 -mx-6 lg:mx-0">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={800}
                      height={400}
                      className="rounded-xl w-full shadow-sm"
                      priority
                    />
                  </div>
                )}
                
                {/* Article Content with Enhanced Typography */}
                <div className="prose prose-lg prose-primary max-w-none
                  prose-headings:font-light prose-headings:text-primary-900
                  prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                  prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4
                  prose-p:text-primary-700 prose-p:leading-relaxed prose-p:text-lg
                  prose-a:text-primary-700 prose-a:underline-offset-2 hover:prose-a:text-primary-900
                  prose-strong:text-primary-900 prose-strong:font-medium
                  prose-ul:text-primary-700 prose-li:leading-relaxed
                  prose-blockquote:border-l-primary-300 prose-blockquote:bg-primary-50 prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:rounded-r-lg prose-blockquote:text-primary-800 prose-blockquote:font-normal prose-blockquote:not-italic
                  prose-pre:bg-primary-900 prose-pre:text-primary-100">
                  <MDXRemote 
                    source={post.content} 
                    components={components}
                  />
                </div>

                {/* Citations Section */}
                {post.references && post.references.length > 0 && (
                  <div className="mt-16 pt-8 border-t border-primary-200">
                    <h3 className="text-xl font-light text-primary-900 mb-6">References</h3>
                    <ol className="space-y-3 text-sm text-primary-600">
                      {post.references.map((ref, index) => (
                        <li key={index} className="flex gap-3">
                          <span className="text-primary-400">[{index + 1}]</span>
                          <span>{ref}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                {/* Tags */}
                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-primary-200">
                    <span className="text-sm text-primary-600 font-medium">Topics:</span>
                    {post.tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/blog?tag=${tag}`}
                        className="bg-primary-100 hover:bg-primary-200 px-4 py-1.5 rounded-full text-sm text-primary-700 transition-colors"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                )}

                {/* Author Bio Card */}
                <div className="mt-12 p-8 bg-gradient-to-br from-primary-50 to-white rounded-xl border border-primary-200">
                  <h3 className="text-lg font-medium text-primary-900 mb-4">About the Author</h3>
                  <div className="flex gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-200 to-primary-300 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-800 font-semibold text-xl">
                        {authorName.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-primary-900">{authorName}</p>
                      <p className="text-sm text-primary-600 mb-3">{authorCredentials}</p>
                      <p className="text-sm text-primary-700 leading-relaxed">{authorBio}</p>
                    </div>
                  </div>
                </div>

                {/* Share Section */}
                <div className="flex items-center justify-between gap-4 mt-8 pt-8 border-t border-primary-200">
                  <p className="text-sm text-primary-600">Found this helpful? Share with others:</p>
                  <div className="flex items-center gap-3">
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://pureprana.com/blog/${post.slug}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-primary-100 hover:bg-primary-200 rounded-full flex items-center justify-center text-primary-600 hover:text-primary-800 transition-all"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                      </svg>
                    </a>
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://pureprana.com/blog/${post.slug}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-primary-100 hover:bg-primary-200 rounded-full flex items-center justify-center text-primary-600 hover:text-primary-800 transition-all"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <button
                      onClick={() => navigator.clipboard.writeText(`https://pureprana.com/blog/${post.slug}`)}
                      className="w-10 h-10 bg-primary-100 hover:bg-primary-200 rounded-full flex items-center justify-center text-primary-600 hover:text-primary-800 transition-all"
                      title="Copy link"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="hidden lg:block">
                {/* Sticky wrapper */}
                <div className="sticky top-24">
                  {/* Table of Contents */}
                  <div className="bg-primary-50/50 rounded-xl p-6 mb-8">
                    <h3 className="text-lg font-medium text-primary-900 mb-4">In This Article</h3>
                    <TableOfContents content={post.content} />
                  </div>
                  
                  {/* Trust Badges */}
                  <div className="bg-white rounded-xl border border-primary-200 p-6 mb-8">
                    <h4 className="text-sm font-medium text-primary-900 mb-4">Article Standards</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <p className="text-sm font-medium text-primary-900">Medically Reviewed</p>
                          <p className="text-xs text-primary-600">By licensed practitioners</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <p className="text-sm font-medium text-primary-900">Evidence-Based</p>
                          <p className="text-xs text-primary-600">Backed by research</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <p className="text-sm font-medium text-primary-900">Updated Regularly</p>
                          <p className="text-xs text-primary-600">Latest findings included</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Newsletter CTA */}
                  <div className="bg-gradient-to-br from-primary-100 to-primary-50 rounded-xl p-6">
                    <h3 className="text-lg font-medium text-primary-900 mb-3">
                      Get Research Updates
                    </h3>
                    <p className="text-sm text-primary-700 mb-4">
                      Monthly digest of evidence-based Ayurvedic insights.
                    </p>
                    <form className="space-y-3">
                      <input
                        type="email"
                        placeholder="Your email"
                        className="w-full px-4 py-2.5 bg-white border border-primary-300 rounded-lg text-sm focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                        required
                      />
                      <button
                        type="submit"
                        className="w-full px-4 py-2.5 bg-primary-800 text-white font-medium rounded-lg hover:bg-primary-900 transition-colors text-sm"
                      >
                        Subscribe
                      </button>
                    </form>
                    <p className="text-xs text-primary-600 mt-3">Join 10,000+ readers. No spam.</p>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="py-20 bg-gradient-to-b from-primary-50/30 to-white">
          <div className="max-w-7xl mx-auto px-6">
            <RelatedPosts posts={relatedPosts} />
          </div>
        </section>
      </article>
    </main>
  )
}