import Link from 'next/link'
import Image from 'next/image'
import { BlogPost } from '@/lib/blog-types'

interface BlogPostCardProps {
  post: BlogPost
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <article className="card-hover h-full flex flex-col">
      {post.image && (
        <Link href={`/blog/${post.slug}`} className="block relative aspect-[16/9] overflow-hidden rounded-t-lg">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
      )}
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-3 mb-4 text-small text-muted">
          <span>
            {post.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
          </span>
          <span>•</span>
          <span>{post.readingTime.text}</span>
        </div>

        <Link href={`/blog/${post.slug}`} className="group">
          <h3 className="heading-3 mb-3 text-primary-800 group-hover:text-brand-700 transition-colors line-clamp-2">
            {post.title}
          </h3>
        </Link>

        <p className="text-body text-primary-600 mb-4 flex-1 line-clamp-3">
          {post.description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-primary-100">
          <span className="text-small text-muted">{formattedDate}</span>
          
          <Link 
            href={`/blog/${post.slug}`}
            className="text-sm font-medium hover:text-brand-700 transition-colors"
          >
            Read more →
          </Link>
        </div>
      </div>
    </article>
  )
}