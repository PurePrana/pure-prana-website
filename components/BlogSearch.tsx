'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { searchPosts } from '@/lib/search'
import { BlogPost } from '@/lib/blog-types'

interface BlogSearchProps {
  posts: BlogPost[]
}

export default function BlogSearch({ posts }: BlogSearchProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<BlogPost[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    if (query.trim()) {
      const searchResults = searchPosts(posts, query)
      setResults(searchResults.map(r => r.item).slice(0, 5))
      setIsOpen(true)
    } else {
      setResults([])
      setIsOpen(false)
    }
  }, [query, posts])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/blog/search?q=${encodeURIComponent(query)}`)
      setIsOpen(false)
    }
  }

  return (
    <div ref={searchRef} className="relative w-full max-w-md">
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles..."
            className="w-full px-4 py-2 pl-10 pr-4 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-500"
          />
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </form>

      {/* Search Results Dropdown */}
      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-neutral-200 overflow-hidden z-50">
          <div className="p-2">
            <p className="text-xs text-secondary-500 px-3 py-1">
              {results.length} results for &ldquo;{query}&rdquo;
            </p>
          </div>
          <ul className="divide-y divide-neutral-100">
            {results.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="block px-4 py-3 hover:bg-primary-50 transition-colors"
                  onClick={() => {
                    setIsOpen(false)
                    setQuery('')
                  }}
                >
                  <h4 className="font-medium text-primary-700 text-sm mb-1 line-clamp-1">
                    {post.title}
                  </h4>
                  <p className="text-xs text-secondary-600 line-clamp-2">
                    {post.description}
                  </p>
                  <div className="flex items-center gap-3 mt-1 text-xs text-secondary-500">
                    <span>{post.readingTime.text}</span>
                    <span>•</span>
                    <span>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <div className="p-3 bg-neutral-50 border-t border-neutral-200">
            <button
              onClick={handleSubmit}
              className="text-sm text-primary-600 hover:text-primary-700 font-medium w-full text-center"
            >
              View all results →
            </button>
          </div>
        </div>
      )}

      {/* No Results */}
      {isOpen && query.trim() && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-neutral-200 p-6 text-center z-50">
          <p className="text-sm text-secondary-600">
            No results found for &ldquo;{query}&rdquo;
          </p>
          <p className="text-xs text-secondary-500 mt-2">
            Try searching with different keywords
          </p>
        </div>
      )}
    </div>
  )
}