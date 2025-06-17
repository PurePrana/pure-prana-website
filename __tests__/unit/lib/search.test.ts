import { createSearchIndex, searchPosts } from '@/lib/search'
import { BlogPost } from '@/lib/blog-types'

describe('Search Utilities', () => {
  const mockPosts: BlogPost[] = [
    {
      slug: 'ayurveda-basics',
      title: 'Introduction to Ayurveda',
      description: 'Learn the basics of Ayurvedic medicine',
      date: '2024-01-01',
      author: 'shagun',
      category: 'ayurveda-basics',
      tags: ['ayurveda', 'health', 'wellness'],
      readingTime: {
        text: '5 min read',
        minutes: 5,
        time: 300000,
        words: 1000
      },
      content: 'Ayurveda is an ancient system of medicine from India.',
      featured: false
    },
    {
      slug: 'stress-relief-tips',
      title: 'Natural Stress Relief Techniques',
      description: 'Discover natural ways to manage stress',
      date: '2024-01-02',
      author: 'shivam',
      category: 'wellness-tips',
      tags: ['stress', 'anxiety', 'wellness'],
      readingTime: {
        text: '3 min read',
        minutes: 3,
        time: 180000,
        words: 600
      },
      content: 'Managing stress naturally with herbs and lifestyle changes.',
      featured: true
    },
    {
      slug: 'ashwagandha-guide',
      title: 'Complete Guide to Ashwagandha',
      description: 'Everything about the powerful adaptogenic herb',
      date: '2024-01-03',
      author: 'shagun',
      category: 'product-guides',
      tags: ['ashwagandha', 'herbs', 'stress'],
      readingTime: {
        text: '7 min read',
        minutes: 7,
        time: 420000,
        words: 1400
      },
      content: 'Ashwagandha is a powerful herb for stress and anxiety.',
      featured: false
    }
  ]

  describe('createSearchIndex', () => {
    it('should create a search index from posts', () => {
      const index = createSearchIndex(mockPosts)
      expect(index).toBeDefined()
      expect(index.search).toBeDefined()
    })

    it('should handle empty posts array', () => {
      const index = createSearchIndex([])
      expect(index).toBeDefined()
    })
  })

  describe('searchPosts', () => {
    it('should find posts by title', () => {
      const results = searchPosts(mockPosts, 'ayurveda')
      
      expect(results).toHaveLength(1)
      expect(results[0].item.slug).toBe('ayurveda-basics')
    })

    it('should find posts by description', () => {
      const results = searchPosts(mockPosts, 'natural ways')
      
      expect(results).toHaveLength(1)
      expect(results[0].item.slug).toBe('stress-relief-tips')
    })

    it('should find posts by tags', () => {
      const results = searchPosts(mockPosts, 'stress')
      
      expect(results).toHaveLength(2)
      expect(results.map(r => r.item.slug)).toContain('stress-relief-tips')
      expect(results.map(r => r.item.slug)).toContain('ashwagandha-guide')
    })

    it('should find posts by content', () => {
      const results = searchPosts(mockPosts, 'herbs')
      
      expect(results.length).toBeGreaterThan(0)
    })

    it('should return empty array for no matches', () => {
      const results = searchPosts(mockPosts, 'nonexistent')
      expect(results).toHaveLength(0)
    })

    it('should handle empty query', () => {
      const results = searchPosts(mockPosts, '')
      expect(results).toHaveLength(0)
    })

    it('should handle whitespace query', () => {
      const results = searchPosts(mockPosts, '   ')
      expect(results).toHaveLength(0)
    })

    it('should rank results by relevance', () => {
      const results = searchPosts(mockPosts, 'ashwagandha')
      
      expect(results).toHaveLength(1)
      expect(results[0].item.slug).toBe('ashwagandha-guide')
      expect(results[0].score).toBeDefined()
      expect(results[0].score).toBeGreaterThanOrEqual(0)
    })

    it('should be case insensitive', () => {
      const results1 = searchPosts(mockPosts, 'AYURVEDA')
      const results2 = searchPosts(mockPosts, 'ayurveda')
      
      expect(results1).toHaveLength(results2.length)
      expect(results1[0].item.slug).toBe(results2[0].item.slug)
    })
  })
})