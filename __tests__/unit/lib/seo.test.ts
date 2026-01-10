import {
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateProductSchema,
  generateArticleSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  generateSocialMeta,
  generateCanonicalUrl,
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
} from '@/lib/seo'
import { Product } from '@/lib/types'
import { BlogPost } from '@/lib/blog-types'

describe('SEO Utilities', () => {
  describe('Constants', () => {
    it('should have correct site URL', () => {
      expect(SITE_URL).toBe('https://gopureprana.com')
    })

    it('should have correct site name', () => {
      expect(SITE_NAME).toBe('Pure Prana')
    })

    it('should have a meaningful site description', () => {
      expect(SITE_DESCRIPTION).toBeTruthy()
      expect(SITE_DESCRIPTION.length).toBeGreaterThan(50)
    })
  })

  describe('generateOrganizationSchema', () => {
    it('should generate valid organization schema', () => {
      const schema = generateOrganizationSchema()

      expect(schema['@context']).toBe('https://schema.org')
      expect(schema['@type']).toBe('Organization')
      expect(schema.name).toBe(SITE_NAME)
      expect(schema.url).toBe(SITE_URL)
      expect(schema.logo).toContain(SITE_URL)
      expect(schema.contactPoint).toBeDefined()
      expect(schema.contactPoint['@type']).toBe('ContactPoint')
    })
  })

  describe('generateWebSiteSchema', () => {
    it('should generate valid website schema with search action', () => {
      const schema = generateWebSiteSchema()

      expect(schema['@context']).toBe('https://schema.org')
      expect(schema['@type']).toBe('WebSite')
      expect(schema.name).toBe(SITE_NAME)
      expect(schema.url).toBe(SITE_URL)
      expect(schema.potentialAction).toBeDefined()
      expect(schema.potentialAction['@type']).toBe('SearchAction')
      expect(schema.potentialAction.target.urlTemplate).toContain('search')
    })
  })

  describe('generateProductSchema', () => {
    const mockProduct: Product = {
      id: '1',
      name: 'Test Product',
      slug: 'test-product',
      price: 29.95,
      description: 'A test product description',
      shortDescription: 'Short description',
      images: ['/images/test.jpg'],
      amazonUrl: 'https://amazon.com/test',
      rating: 4.5,
      reviewCount: 100,
      category: 'Wellness',
      concerns: ['stress'],
      tags: ['test', 'wellness'],
      benefits: ['Benefit 1', 'Benefit 2'],
      usage: 'Take 1 daily',
      featured: true,
      inStock: true,
    }

    it('should generate valid product schema', () => {
      const schema = generateProductSchema(mockProduct)

      expect(schema['@context']).toBe('https://schema.org')
      expect(schema['@type']).toBe('Product')
      expect(schema.name).toBe(mockProduct.name)
      expect(schema.description).toBe(mockProduct.description)
      expect(schema.brand.name).toBe(SITE_NAME)
    })

    it('should include offer information', () => {
      const schema = generateProductSchema(mockProduct)

      expect(schema.offers['@type']).toBe('Offer')
      expect(schema.offers.price).toBe(mockProduct.price)
      expect(schema.offers.priceCurrency).toBe('USD')
      expect(schema.offers.availability).toBe('https://schema.org/InStock')
    })

    it('should include aggregate rating when available', () => {
      const schema = generateProductSchema(mockProduct)

      expect(schema.aggregateRating).toBeDefined()
      expect(schema.aggregateRating?.ratingValue).toBe(mockProduct.rating)
      expect(schema.aggregateRating?.reviewCount).toBe(mockProduct.reviewCount)
      expect(schema.aggregateRating?.bestRating).toBe(5)
    })

    it('should not include rating when zero', () => {
      const productNoRating = { ...mockProduct, rating: 0, reviewCount: 0 }
      const schema = generateProductSchema(productNoRating)

      expect(schema.aggregateRating).toBeUndefined()
    })

    it('should handle out of stock products', () => {
      const outOfStockProduct = { ...mockProduct, inStock: false }
      const schema = generateProductSchema(outOfStockProduct)

      expect(schema.offers.availability).toBe('https://schema.org/OutOfStock')
    })

    it('should generate full image URLs', () => {
      const schema = generateProductSchema(mockProduct)

      expect(schema.image[0]).toContain(SITE_URL)
    })
  })

  describe('generateArticleSchema', () => {
    const mockPost: BlogPost = {
      slug: 'test-post',
      title: 'Test Blog Post',
      description: 'A test blog post description',
      date: '2025-01-01',
      author: 'Dr. Kamila Desai-Chen',
      category: 'wellness-tips',
      tags: ['test', 'blog'],
      featured: true,
      readingTime: {
        text: '5 min read',
        minutes: 5,
        time: 300000,
        words: 1000,
      },
      content: 'This is the blog content',
      excerpt: 'Test excerpt',
    }

    it('should generate valid article schema', () => {
      const schema = generateArticleSchema(mockPost)

      expect(schema['@context']).toBe('https://schema.org')
      expect(schema['@type']).toBe('Article')
      expect(schema.headline).toBe(mockPost.title)
      expect(schema.description).toBe(mockPost.description)
    })

    it('should include author information', () => {
      const schema = generateArticleSchema(mockPost)

      expect(schema.author['@type']).toBe('Person')
      expect(schema.author.name).toBe('Kamila Desai-Chen')
      expect(schema.author.jobTitle).toBe('Ayurvedic Wellness Researcher')
    })

    it('should include publisher information', () => {
      const schema = generateArticleSchema(mockPost)

      expect(schema.publisher['@type']).toBe('Organization')
      expect(schema.publisher.name).toBe(SITE_NAME)
      expect(schema.publisher.logo.url).toContain(SITE_URL)
    })

    it('should include date information', () => {
      const schema = generateArticleSchema(mockPost)

      expect(schema.datePublished).toBe(mockPost.date)
      expect(schema.dateModified).toBe(mockPost.date)
    })

    it('should use updatedAt for dateModified when available', () => {
      const postWithUpdate = { ...mockPost, updatedAt: '2025-01-15' }
      const schema = generateArticleSchema(postWithUpdate)

      expect(schema.dateModified).toBe('2025-01-15')
    })

    it('should include word count and reading time', () => {
      const schema = generateArticleSchema(mockPost)

      expect(schema.wordCount).toBe(1000)
      expect(schema.timeRequired).toBe('PT5M')
    })
  })

  describe('generateFAQSchema', () => {
    const mockFAQs = [
      { question: 'What is Ayurveda?', answer: 'Ayurveda is an ancient system of medicine.' },
      { question: 'Are supplements safe?', answer: 'Quality supplements from reputable sources are generally safe.' },
    ]

    it('should generate valid FAQ schema', () => {
      const schema = generateFAQSchema(mockFAQs)

      expect(schema['@context']).toBe('https://schema.org')
      expect(schema['@type']).toBe('FAQPage')
      expect(schema.mainEntity).toHaveLength(2)
    })

    it('should format questions correctly', () => {
      const schema = generateFAQSchema(mockFAQs)

      expect(schema.mainEntity[0]['@type']).toBe('Question')
      expect(schema.mainEntity[0].name).toBe(mockFAQs[0].question)
      expect(schema.mainEntity[0].acceptedAnswer['@type']).toBe('Answer')
      expect(schema.mainEntity[0].acceptedAnswer.text).toBe(mockFAQs[0].answer)
    })
  })

  describe('generateBreadcrumbSchema', () => {
    const mockBreadcrumbs = [
      { name: 'Home', url: '/' },
      { name: 'Blog', url: '/blog' },
      { name: 'Test Post', url: '/blog/test-post' },
    ]

    it('should generate valid breadcrumb schema', () => {
      const schema = generateBreadcrumbSchema(mockBreadcrumbs)

      expect(schema['@context']).toBe('https://schema.org')
      expect(schema['@type']).toBe('BreadcrumbList')
      expect(schema.itemListElement).toHaveLength(3)
    })

    it('should include correct positions', () => {
      const schema = generateBreadcrumbSchema(mockBreadcrumbs)

      expect(schema.itemListElement[0].position).toBe(1)
      expect(schema.itemListElement[1].position).toBe(2)
      expect(schema.itemListElement[2].position).toBe(3)
    })

    it('should generate full URLs for relative paths', () => {
      const schema = generateBreadcrumbSchema(mockBreadcrumbs)

      expect(schema.itemListElement[0].item).toBe(`${SITE_URL}/`)
      expect(schema.itemListElement[1].item).toBe(`${SITE_URL}/blog`)
    })
  })

  describe('generateSocialMeta', () => {
    it('should generate OpenGraph metadata', () => {
      const meta = generateSocialMeta('Test Title', 'Test Description')

      expect(meta.openGraph.title).toBe('Test Title')
      expect(meta.openGraph.description).toBe('Test Description')
      expect(meta.openGraph.siteName).toBe(SITE_NAME)
      expect(meta.openGraph.locale).toBe('en_US')
    })

    it('should generate Twitter metadata', () => {
      const meta = generateSocialMeta('Test Title', 'Test Description')

      expect(meta.twitter.card).toBe('summary_large_image')
      expect(meta.twitter.title).toBe('Test Title')
      expect(meta.twitter.description).toBe('Test Description')
    })

    it('should use default image when not provided', () => {
      const meta = generateSocialMeta('Test', 'Description')

      expect(meta.openGraph.images[0].url).toContain('og-default.jpg')
    })

    it('should use provided image', () => {
      const meta = generateSocialMeta('Test', 'Description', '/images/custom.jpg')

      expect(meta.openGraph.images[0].url).toContain('custom.jpg')
    })

    it('should handle absolute image URLs', () => {
      const absoluteUrl = 'https://example.com/image.jpg'
      const meta = generateSocialMeta('Test', 'Description', absoluteUrl)

      expect(meta.openGraph.images[0].url).toBe(absoluteUrl)
    })
  })

  describe('generateCanonicalUrl', () => {
    it('should generate canonical URL for path', () => {
      const url = generateCanonicalUrl('/blog/test-post')
      expect(url).toBe(`${SITE_URL}/blog/test-post`)
    })

    it('should handle paths without leading slash', () => {
      const url = generateCanonicalUrl('blog/test-post')
      expect(url).toBe(`${SITE_URL}/blog/test-post`)
    })
  })
})
