import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import Link from 'next/link'
import ProductCard from '@/components/ProductCard'
import { products } from '@/lib/products'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    // Override default elements
    h1: ({ children }) => (
      <h1 className="heading-1 font-display text-primary-700 mb-6 mt-8">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="heading-2 font-display text-primary-700 mb-4 mt-8">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="heading-3 text-primary-600 mb-3 mt-6">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="heading-4 text-primary-600 mb-2 mt-4">{children}</h4>
    ),
    p: ({ children }) => (
      <p className="text-body text-secondary-600 mb-4">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc pl-6 mb-4 text-secondary-600">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal pl-6 mb-4 text-secondary-600">{children}</ol>
    ),
    li: ({ children }) => (
      <li className="mb-2">{children}</li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary-300 pl-4 italic text-secondary-600 my-6">
        {children}
      </blockquote>
    ),
    a: ({ href, children }) => {
      const isInternal = href && (href.startsWith('/') || href.startsWith('#'))
      if (isInternal) {
        return (
          <Link href={href} className="text-primary-600 hover:text-primary-700 underline">
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
      <div className="my-8">
        <Image
          src={src || ''}
          alt={alt || ''}
          width={800}
          height={400}
          className="rounded-lg"
          sizes="(max-width: 768px) 100vw, 800px"
        />
      </div>
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
      const product = products.find(p => p.id === productId)
      if (!product) return null
      return <ProductCard product={product} />
    },
    
    // Newsletter signup component
    NewsletterSignup: () => (
      <div className="bg-primary-50 rounded-lg p-8 my-8 text-center">
        <h3 className="heading-3 text-primary-700 mb-4">
          Get Ayurvedic Wellness Tips
        </h3>
        <p className="text-body mb-6">
          Join our newsletter for exclusive content and special offers
        </p>
        <form className="max-w-md mx-auto flex gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-500"
            required
          />
          <button
            type="submit"
            className="btn-primary"
          >
            Subscribe
          </button>
        </form>
      </div>
    ),
    
    // Callout box
    Callout: ({ type = 'info', children }: { type?: 'info' | 'warning' | 'tip', children: React.ReactNode }) => {
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