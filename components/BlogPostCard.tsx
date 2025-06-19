import Link from 'next/link'
import Image from 'next/image'
import { BlogPost } from '@/lib/blog-types'

interface BlogPostCardProps {
  post: BlogPost
  featured?: boolean
}

export default function BlogPostCard({
  post,
  featured = false,
}: BlogPostCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  // Get author display name based on our new personas
  const getAuthorInfo = (author: string) => {
    switch (author) {
      case 'Dr. Kamila Desai-Chen':
        return { name: 'Kamila Desai-Chen', credentials: 'Wellness Researcher' }
      case 'Aria Blackwood':
        return { name: 'Aria Blackwood', credentials: 'Wellness Practitioner' }
      case 'Marcus Rivera-Gonzalez':
        return {
          name: 'Marcus Rivera-Gonzalez',
          credentials: 'Herbal Researcher',
        }
      default:
        return { name: 'Pure Prana Team', credentials: 'Wellness Experts' }
    }
  }

  const authorInfo = getAuthorInfo(post.author)
  const authorName = authorInfo.name
  const authorCredentials = authorInfo.credentials

  if (featured) {
    return (
      <article className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-primary-100">
        <div className="grid md:grid-cols-2 gap-0">
          {post.image && (
            <Link
              href={`/blog/${post.slug}`}
              className="block relative aspect-[16/10] overflow-hidden"
            >
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </Link>
          )}

          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full">
                {post.category
                  .replace('-', ' ')
                  .replace(/\b\w/g, (l) => l.toUpperCase())}
              </span>
              <span className="text-sm text-primary-600">
                {post.readingTime.text}
              </span>
            </div>

            <Link href={`/blog/${post.slug}`} className="group">
              <h3 className="text-3xl font-light text-primary-900 mb-4 group-hover:text-primary-700 transition-colors leading-tight">
                {post.title}
              </h3>
            </Link>

            <p className="text-lg text-primary-700 mb-6 leading-relaxed">
              {post.description}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-200 to-primary-300 rounded-full flex items-center justify-center">
                  <span className="text-primary-800 font-semibold text-sm">
                    {authorName
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-primary-900">
                    {authorName}
                  </p>
                  <p className="text-xs text-primary-600">
                    {authorCredentials}
                  </p>
                </div>
              </div>

              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center text-primary-700 font-medium hover:text-primary-900 transition-colors"
              >
                Read article
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </article>
    )
  }

  return (
    <article className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col border border-primary-100">
      {post.image && (
        <Link
          href={`/blog/${post.slug}`}
          className="block relative aspect-[16/10] overflow-hidden"
        >
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          {/* Evidence badge for certain categories */}
          {(post.category === 'clinical-studies' ||
            post.category === 'research-reviews') && (
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-sm text-green-700 px-3 py-1.5 text-xs font-medium rounded-full shadow-sm">
                <svg
                  className="w-3.5 h-3.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Evidence-Based
              </span>
            </div>
          )}
        </Link>
      )}

      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-3 mb-4 text-sm">
          <span className="text-primary-600">
            {post.category
              .replace('-', ' ')
              .replace(/\b\w/g, (l) => l.toUpperCase())}
          </span>
          <span className="text-primary-300">•</span>
          <span className="text-primary-600">{post.readingTime.text}</span>
        </div>

        <Link href={`/blog/${post.slug}`} className="group">
          <h3 className="text-xl font-light text-primary-900 mb-3 group-hover:text-primary-700 transition-colors line-clamp-2 leading-snug">
            {post.title}
          </h3>
        </Link>

        <p className="text-base text-primary-700 mb-6 flex-1 line-clamp-3 leading-relaxed">
          {post.description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-6 border-t border-primary-100">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-200 to-primary-300 rounded-full flex items-center justify-center">
              <span className="text-primary-800 font-semibold text-xs">
                {authorName
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </span>
            </div>
            <div>
              <p className="text-sm font-medium text-primary-900">
                {authorName}
              </p>
              <p className="text-xs text-primary-600">{formattedDate}</p>
            </div>
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="text-sm font-medium text-primary-700 hover:text-primary-900 transition-colors"
          >
            Read →
          </Link>
        </div>
      </div>
    </article>
  )
}
