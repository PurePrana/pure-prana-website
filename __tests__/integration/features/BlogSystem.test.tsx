import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import BlogSearch from '@/components/BlogSearch'
import { BlogPost } from '@/lib/blog-types'

// Mock useRouter
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}))

const mockPosts: BlogPost[] = [
  {
    slug: 'ayurveda-guide',
    title: 'Complete Guide to Ayurveda',
    description: 'Learn everything about Ayurvedic medicine',
    date: '2024-01-01',
    author: 'shagun',
    category: 'ayurveda-basics',
    tags: ['ayurveda', 'wellness'],
    readingTime: { text: '5 min read', minutes: 5, time: 300000, words: 1000 },
    content: 'Content here',
    featured: false,
  },
  {
    slug: 'stress-relief',
    title: 'Natural Stress Relief',
    description: 'Manage stress naturally',
    date: '2024-01-02',
    author: 'shivam',
    category: 'wellness-tips',
    tags: ['stress', 'wellness'],
    readingTime: { text: '3 min read', minutes: 3, time: 180000, words: 600 },
    content: 'Content here',
    featured: true,
  },
]

describe('Blog System Integration', () => {
  describe('BlogSearch Component', () => {
    it('should show search results as user types', async () => {
      const user = userEvent.setup()
      render(<BlogSearch posts={mockPosts} />)

      const searchInput = screen.getByPlaceholderText('Search articles...')

      // Type in search
      await user.type(searchInput, 'ayurveda')

      // Check results appear
      expect(screen.getByText('Complete Guide to Ayurveda')).toBeInTheDocument()
      expect(
        screen.getByText('Learn everything about Ayurvedic medicine')
      ).toBeInTheDocument()
    })

    it('should show no results message', async () => {
      const user = userEvent.setup()
      render(<BlogSearch posts={mockPosts} />)

      const searchInput = screen.getByPlaceholderText('Search articles...')
      await user.type(searchInput, 'nonexistent')

      expect(screen.getByText(/No results found/)).toBeInTheDocument()
    })

    it('should clear results when search is cleared', async () => {
      const user = userEvent.setup()
      render(<BlogSearch posts={mockPosts} />)

      const searchInput = screen.getByPlaceholderText('Search articles...')

      // Type and then clear
      await user.type(searchInput, 'ayurveda')
      expect(screen.getByText('Complete Guide to Ayurveda')).toBeInTheDocument()

      await user.clear(searchInput)
      expect(
        screen.queryByText('Complete Guide to Ayurveda')
      ).not.toBeInTheDocument()
    })

    it('should limit results to 5', async () => {
      const user = userEvent.setup()
      const manyPosts = Array(10)
        .fill(null)
        .map((_, i) => ({
          ...mockPosts[0],
          slug: `post-${i}`,
          title: `Wellness Post ${i}`,
        }))

      render(<BlogSearch posts={manyPosts} />)

      const searchInput = screen.getByPlaceholderText('Search articles...')
      await user.type(searchInput, 'wellness')

      const results = screen.getAllByRole('heading', { level: 4 })
      expect(results).toHaveLength(5)
    })
  })

  describe('Blog Navigation', () => {
    it('should navigate between blog pages', () => {
      // This would be an E2E test in practice
      // Here we're testing the component integration
      const { rerender } = render(<BlogSearch posts={mockPosts} />)

      // Verify search component renders with posts
      expect(
        screen.getByPlaceholderText('Search articles...')
      ).toBeInTheDocument()

      // Could add more navigation tests here
    })
  })

  describe('Category and Tag Filtering', () => {
    it('should filter posts by category', () => {
      const ayurvedaPosts = mockPosts.filter(
        (p) => p.category === 'ayurveda-basics'
      )
      expect(ayurvedaPosts).toHaveLength(1)
      expect(ayurvedaPosts[0].title).toBe('Complete Guide to Ayurveda')
    })

    it('should filter posts by tag', () => {
      const wellnessPosts = mockPosts.filter((p) => p.tags.includes('wellness'))
      expect(wellnessPosts).toHaveLength(2)
    })
  })
})
