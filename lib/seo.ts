/**
 * SEO and Structured Data Utilities for Pure Prana
 * Optimized for both traditional SEO and AI/LLM discovery (AEO)
 */

import { Product } from './types'
import { BlogPost } from './blog-types'

export const SITE_URL = 'https://gopureprana.com'
export const SITE_NAME = 'Pure Prana'
export const SITE_DESCRIPTION =
  'Premium plant-based Ayurvedic supplements. Authentic formulations backed by traditional wisdom and modern science for holistic wellness.'

export interface OrganizationSchema {
  '@context': 'https://schema.org'
  '@type': 'Organization'
  name: string
  url: string
  logo: string
  description: string
  sameAs: string[]
  contactPoint: {
    '@type': 'ContactPoint'
    contactType: string
    email: string
  }
}

export interface ProductSchema {
  '@context': 'https://schema.org'
  '@type': 'Product'
  name: string
  description: string
  image: string[]
  brand: {
    '@type': 'Brand'
    name: string
  }
  offers: {
    '@type': 'Offer'
    url: string
    priceCurrency: string
    price: number
    availability: string
    seller: {
      '@type': 'Organization'
      name: string
    }
  }
  aggregateRating?: {
    '@type': 'AggregateRating'
    ratingValue: number
    reviewCount: number
    bestRating: number
    worstRating: number
  }
  category: string
  keywords: string
}

export interface ArticleSchema {
  '@context': 'https://schema.org'
  '@type': 'Article'
  headline: string
  description: string
  image?: string
  datePublished: string
  dateModified?: string
  author: {
    '@type': 'Person'
    name: string
    jobTitle?: string
  }
  publisher: {
    '@type': 'Organization'
    name: string
    logo: {
      '@type': 'ImageObject'
      url: string
    }
  }
  mainEntityOfPage: {
    '@type': 'WebPage'
    '@id': string
  }
  keywords: string
  articleSection: string
  wordCount: number
  timeRequired: string
}

export interface FAQSchema {
  '@context': 'https://schema.org'
  '@type': 'FAQPage'
  mainEntity: Array<{
    '@type': 'Question'
    name: string
    acceptedAnswer: {
      '@type': 'Answer'
      text: string
    }
  }>
}

export interface BreadcrumbSchema {
  '@context': 'https://schema.org'
  '@type': 'BreadcrumbList'
  itemListElement: Array<{
    '@type': 'ListItem'
    position: number
    name: string
    item: string
  }>
}

export interface WebSiteSchema {
  '@context': 'https://schema.org'
  '@type': 'WebSite'
  name: string
  url: string
  description: string
  potentialAction: {
    '@type': 'SearchAction'
    target: {
      '@type': 'EntryPoint'
      urlTemplate: string
    }
    'query-input': string
  }
}

// Generate Organization Schema
export function generateOrganizationSchema(): OrganizationSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    description: SITE_DESCRIPTION,
    sameAs: [
      'https://www.amazon.com/stores/PurePrana/page/0B8AA7F9-5A5A-4D93-9D0A-04CE90C18D0D',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'purchase.himalayas@gmail.com',
    },
  }
}

// Generate WebSite Schema with search action for AEO
export function generateWebSiteSchema(): WebSiteSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/blog/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

// Generate Product Schema
export function generateProductSchema(product: Product): ProductSchema {
  const schema: ProductSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.images.map((img) =>
      img.startsWith('http') ? img : `${SITE_URL}${img}`
    ),
    brand: {
      '@type': 'Brand',
      name: SITE_NAME,
    },
    offers: {
      '@type': 'Offer',
      url: product.amazonUrl || `${SITE_URL}/product/${product.slug}`,
      priceCurrency: 'USD',
      price: product.price,
      availability: product.inStock
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      seller: {
        '@type': 'Organization',
        name: SITE_NAME,
      },
    },
    category: product.category,
    keywords: product.tags.join(', '),
  }

  if (product.rating > 0 && product.reviewCount > 0) {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      reviewCount: product.reviewCount,
      bestRating: 5,
      worstRating: 1,
    }
  }

  return schema
}

// Generate Article Schema for blog posts
export function generateArticleSchema(post: BlogPost): ArticleSchema {
  const authorDetails = getAuthorDetails(post.author)

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: post.image
      ? post.image.startsWith('http')
        ? post.image
        : `${SITE_URL}${post.image}`
      : undefined,
    datePublished: post.date,
    dateModified: post.updatedAt || post.date,
    author: {
      '@type': 'Person',
      name: authorDetails.name,
      jobTitle: authorDetails.credentials,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${post.slug}`,
    },
    keywords: post.tags.join(', '),
    articleSection: post.category,
    wordCount: post.readingTime.words,
    timeRequired: `PT${Math.ceil(post.readingTime.minutes)}M`,
  }
}

// Generate FAQ Schema
export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
): FAQSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

// Generate Breadcrumb Schema
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
): BreadcrumbSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  }
}

// Helper to get author details
function getAuthorDetails(author: string) {
  switch (author) {
    case 'Dr. Kamila Desai-Chen':
      return {
        name: 'Kamila Desai-Chen',
        credentials: 'Ayurvedic Wellness Researcher',
      }
    case 'Aria Blackwood':
      return {
        name: 'Aria Blackwood',
        credentials: 'Wellness Practitioner',
      }
    case 'Marcus Rivera-Gonzalez':
      return {
        name: 'Marcus Rivera-Gonzalez',
        credentials: 'Herbal Wellness Researcher',
      }
    default:
      return {
        name: 'Pure Prana Team',
        credentials: 'Wellness Experts',
      }
  }
}

// Generate meta tags for social sharing
export function generateSocialMeta(
  title: string,
  description: string,
  image?: string,
  type: 'website' | 'article' = 'website'
) {
  const imageUrl = image
    ? image.startsWith('http')
      ? image
      : `${SITE_URL}${image}`
    : `${SITE_URL}/images/og-default.jpg`

  return {
    openGraph: {
      title,
      description,
      type,
      siteName: SITE_NAME,
      locale: 'en_US',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  }
}

// Generate canonical URL
export function generateCanonicalUrl(path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `${SITE_URL}${cleanPath}`
}

// AEO-specific: Generate structured content summary for LLMs
export function generateLLMFriendlyContent(content: {
  title: string
  summary: string
  keyPoints: string[]
  category: string
  relatedTopics: string[]
}): string {
  return `
## ${content.title}

**Summary:** ${content.summary}

**Key Points:**
${content.keyPoints.map((point) => `- ${point}`).join('\n')}

**Category:** ${content.category}

**Related Topics:** ${content.relatedTopics.join(', ')}
`.trim()
}
