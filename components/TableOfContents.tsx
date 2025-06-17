'use client'

import { useEffect, useState } from 'react'

interface TOCItem {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  content: string
}

export default function TableOfContents({ content }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState('')
  const [headings, setHeadings] = useState<TOCItem[]>([])

  useEffect(() => {
    // Extract headings from the content
    const headingElements = document.querySelectorAll('article h2, article h3')
    const items: TOCItem[] = Array.from(headingElements).map((heading) => ({
      id: heading.id,
      text: heading.textContent || '',
      level: parseInt(heading.tagName[1]),
    }))
    setHeadings(items)

    // Set up intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-80px 0px -80% 0px' }
    )

    headingElements.forEach((heading) => {
      observer.observe(heading)
    })

    return () => {
      headingElements.forEach((heading) => {
        observer.unobserve(heading)
      })
    }
  }, [content])

  if (headings.length === 0) return null

  return (
    <nav className="sticky top-24">
      <h3 className="heading-4 text-primary-700 mb-4">Table of Contents</h3>
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={`${
              heading.level === 3 ? 'ml-4' : ''
            }`}
          >
            <a
              href={`#${heading.id}`}
              className={`block py-1 text-sm transition-colors ${
                activeId === heading.id
                  ? 'text-primary-600 font-medium'
                  : 'text-secondary-500 hover:text-secondary-700'
              }`}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById(heading.id)?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                })
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}