import Link from 'next/link'
import Image from 'next/image'
import { BlogPost } from '@/lib/blog-types'

interface RelatedPostsProps {
  posts: BlogPost[]
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null

  return (
    <section className="mt-16 pt-16 border-t border-neutral-200">
      <h2 className="heading-3 text-primary-700 mb-8">Related Articles</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
            <article className="h-full">
              {post.image && (
                <div className="relative aspect-[16/9] overflow-hidden rounded-lg mb-4">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              <h3 className="font-medium text-primary-700 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                {post.title}
              </h3>

              <p className="text-sm text-secondary-600 line-clamp-2">
                {post.description}
              </p>

              <div className="flex items-center gap-3 mt-3 text-sm text-secondary-500">
                <span>{post.readingTime.text}</span>
                <span>•</span>
                <span>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                  })}
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  )
}
