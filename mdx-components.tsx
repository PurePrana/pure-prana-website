import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import Link from 'next/link'
import ProductCard from '@/components/ProductCard'
import { products } from '@/lib/products'
import NewsletterSignup from '@/components/NewsletterSignup'
import EmailCaptureBar from '@/components/EmailCaptureBar'
import ShareButtons from '@/components/ShareButtons'
import FDADisclaimer from '@/components/FDADisclaimer'

// Helper function to create slug from text
function createSlug(text: any): string {
  return String(text)
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/--+/g, '-') // Replace multiple hyphens with single hyphen
    .trim()
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    // Override default elements
    h1: ({ children }) => {
      const id = createSlug(children)
      return (
        <h1
          id={id}
          className="heading-1 font-display text-primary-700 mb-6 mt-8"
        >
          {children}
        </h1>
      )
    },
    h2: ({ children }) => {
      const id = createSlug(children)
      return (
        <h2
          id={id}
          className="heading-2 font-display text-primary-700 mb-4 mt-8"
        >
          {children}
        </h2>
      )
    },
    h3: ({ children }) => {
      const id = createSlug(children)
      return (
        <h3 id={id} className="heading-3 text-primary-600 mb-3 mt-6">
          {children}
        </h3>
      )
    },
    h4: ({ children }) => {
      const id = createSlug(children)
      return (
        <h4 id={id} className="heading-4 text-primary-600 mb-2 mt-4">
          {children}
        </h4>
      )
    },
    p: ({ children }) => (
      <p className="text-body text-secondary-600 mb-4">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc pl-6 mb-4 text-secondary-600">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal pl-6 mb-4 text-secondary-600">{children}</ol>
    ),
    li: ({ children }) => <li className="mb-2">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary-300 pl-4 italic text-secondary-600 my-6">
        {children}
      </blockquote>
    ),
    a: ({ href, children }) => {
      const isInternal = href && (href.startsWith('/') || href.startsWith('#'))
      if (isInternal) {
        return (
          <Link
            href={href}
            className="text-primary-600 hover:text-primary-700 underline"
          >
            {children}
          </Link>
        )
      }
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-600 hover:text-primary-700 underline"
        >
          {children}
        </a>
      )
    },
    img: ({ src, alt }) => (
      <img
        src={src || ''}
        alt={alt || ''}
        className="rounded-lg my-8 w-full max-w-4xl mx-auto block"
        loading="lazy"
      />
    ),
    em: ({ children }) => (
      <em className="italic text-secondary-500">{children}</em>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold text-secondary-700">{children}</strong>
    ),
    pre: ({ children }) => (
      <pre className="bg-neutral-100 rounded-lg p-4 overflow-x-auto mb-4">
        {children}
      </pre>
    ),
    code: ({ children }) => (
      <code className="bg-neutral-100 px-1 py-0.5 rounded text-sm">
        {children}
      </code>
    ),

    // Custom components
    ProductCard: ({ productId }: { productId: string }) => {
      const product = products.find((p) => p.id === productId)
      if (!product) return null
      return <ProductCard product={product} />
    },

    // Newsletter signup component
    NewsletterSignup,

    // Premium teaser - removed functionality, returns null
    PremiumTeaser: () => null,

    // Email capture bar
    EmailCaptureBar,

    // Share buttons
    ShareButtons,

    // FDA Disclaimer
    FDADisclaimer,

    // Callout box
    Callout: ({
      type = 'info',
      children,
    }: {
      type?: 'info' | 'warning' | 'tip'
      children: React.ReactNode
    }) => {
      const styles = {
        info: 'bg-blue-50 border-blue-200 text-blue-800',
        warning: 'bg-amber-50 border-amber-200 text-amber-800',
        tip: 'bg-green-50 border-green-200 text-green-800',
      }
      return (
        <div className={`border-l-4 p-4 my-6 rounded-r-lg ${styles[type]}`}>
          {children}
        </div>
      )
    },
  }
}
