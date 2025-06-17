import Image from 'next/image'
import { AUTHORS } from '@/lib/blog-types'

interface AuthorBioProps {
  authorId: string
  date: string
}

export default function AuthorBio({ authorId, date }: AuthorBioProps) {
  const author = AUTHORS[authorId] || AUTHORS.shagun
  
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="flex items-center gap-4 py-6 border-y border-neutral-200">
      <div className="relative w-16 h-16 rounded-full overflow-hidden bg-primary-100">
        {author.avatar ? (
          <Image
            src={author.avatar}
            alt={author.name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-primary-600 font-bold text-xl">
            {author.name.split(' ').map(n => n[0]).join('')}
          </div>
        )}
      </div>
      
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-medium text-primary-700">{author.name}</h3>
          {author.role && (
            <span className="text-sm text-secondary-500">• {author.role}</span>
          )}
        </div>
        <p className="text-sm text-secondary-600">{formattedDate}</p>
      </div>
    </div>
  )
}