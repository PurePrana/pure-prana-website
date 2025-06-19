import { render, screen } from '@testing-library/react'
import BlogPostCard from '@/components/BlogPostCard'
import { BlogPost } from '@/lib/blog-types'

const mockPost: BlogPost = {
  slug: 'test-post',
  title: 'Test Blog Post',
  description:
    'This is a test blog post description that should be displayed in the card',
  date: '2024-01-15',
  author: 'shagun',
  category: 'wellness-tips',
  tags: ['test', 'blog'],
  image: '/images/test-post.jpg',
  featured: true,
  readingTime: {
    text: '5 min read',
    minutes: 5,
    time: 300000,
    words: 1000,
  },
  content: 'Post content goes here',
}

describe('BlogPostCard Component', () => {
  it('renders post title', () => {
    render(<BlogPostCard post={mockPost} />)
    expect(
      screen.getByRole('heading', { name: mockPost.title })
    ).toBeInTheDocument()
  })

  it('renders post description', () => {
    render(<BlogPostCard post={mockPost} />)
    expect(screen.getByText(mockPost.description)).toBeInTheDocument()
  })

  it('renders formatted date with author info', () => {
    render(<BlogPostCard post={mockPost} />)
    // The date is shown in the author section
    // Check for either January 14 or 15 due to timezone differences
    const dateRegex = /January 1[45], 2024/
    expect(screen.getByText(dateRegex)).toBeInTheDocument()
  })

  it('renders reading time', () => {
    render(<BlogPostCard post={mockPost} />)
    expect(screen.getByText('5 min read')).toBeInTheDocument()
  })

  it('renders category text', () => {
    render(<BlogPostCard post={mockPost} />)
    expect(screen.getByText('Wellness Tips')).toBeInTheDocument()
  })

  it('renders post image when provided', () => {
    render(<BlogPostCard post={mockPost} />)
    const image = screen.getByAltText(mockPost.title)
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute(
      'src',
      expect.stringContaining('test-post.jpg')
    )
  })

  it('renders without image when not provided', () => {
    const postWithoutImage = { ...mockPost, image: undefined }
    render(<BlogPostCard post={postWithoutImage} />)
    expect(screen.queryByRole('img')).not.toBeInTheDocument()
  })

  it('renders correct links to blog post', () => {
    render(<BlogPostCard post={mockPost} />)
    const links = screen.getAllByRole('link')

    links.forEach((link) => {
      expect(link).toHaveAttribute('href', `/blog/${mockPost.slug}`)
    })
  })

  it('renders Read link', () => {
    render(<BlogPostCard post={mockPost} />)
    expect(screen.getByText('Read →')).toBeInTheDocument()
  })

  it('applies hover effects classes', () => {
    render(<BlogPostCard post={mockPost} />)
    const article = screen.getByRole('article')
    expect(article).toHaveClass('hover:shadow-md', 'transition-all')
  })

  it('truncates long descriptions', () => {
    const longDescription =
      'This is a very long description that should be truncated. '.repeat(10)
    const postWithLongDesc = { ...mockPost, description: longDescription }

    render(<BlogPostCard post={postWithLongDesc} />)
    // Find the description element by partial content
    const description = screen.getByText((content, element) => {
      return (
        element?.textContent === longDescription &&
        element?.classList.contains('line-clamp-3')
      )
    })
    expect(description).toBeInTheDocument()
  })

  it('formats category name correctly', () => {
    const testCases = [
      { category: 'ayurveda-basics', expected: 'Ayurveda Basics' },
      { category: 'product-guides', expected: 'Product Guides' },
      { category: 'wellness-tips', expected: 'Wellness Tips' },
    ]

    testCases.forEach(({ category, expected }) => {
      const { unmount } = render(
        <BlogPostCard post={{ ...mockPost, category }} />
      )
      expect(screen.getByText(expected)).toBeInTheDocument()
      // Clean up for next iteration
      unmount()
    })
  })
})
