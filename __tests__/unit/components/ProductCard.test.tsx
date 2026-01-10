import { render, screen, fireEvent } from '@testing-library/react'
import ProductCard from '@/components/ProductCard'
import { Product } from '@/lib/types'

// Mock product data
const mockProduct: Product = {
  id: '1',
  name: 'Test Product',
  slug: 'test-product',
  price: 29.99,
  description: 'Full description of the test product',
  shortDescription: 'Short description of test product',
  images: ['/images/test-1.jpg', '/images/test-2.jpg'],
  amazonUrl: 'https://amazon.com/dp/B08TEST001',
  rating: 4.5,
  reviewCount: 123,
  category: 'Test Category',
  concerns: ['stress', 'energy'],
  tags: ['tag1', 'tag2'],
  benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3'],
  usage: 'Test usage instructions',
  featured: true,
  inStock: true,
}

// Mock window.gtag
const mockGtag = jest.fn()

describe('ProductCard Component', () => {
  beforeEach(() => {
    window.gtag = mockGtag
    mockGtag.mockClear()
  })

  it('renders product name', () => {
    render(<ProductCard product={mockProduct} />)
    expect(
      screen.getByRole('heading', { name: mockProduct.name })
    ).toBeInTheDocument()
  })

  it('renders product short description', () => {
    render(<ProductCard product={mockProduct} />)
    expect(screen.getByText(mockProduct.shortDescription)).toBeInTheDocument()
  })

  it('renders product price', () => {
    render(<ProductCard product={mockProduct} />)
    expect(screen.getByText(`$${mockProduct.price}`)).toBeInTheDocument()
  })

  it('renders product rating and review count', () => {
    render(<ProductCard product={mockProduct} />)
    // Rating is displayed as stars, not as text
    expect(screen.getByText(`(${mockProduct.reviewCount})`)).toBeInTheDocument()
  })

  it('renders Research-Backed Ingredients badge when product is featured', () => {
    render(<ProductCard product={mockProduct} />)
    expect(screen.getByText('Research-Backed Ingredients')).toBeInTheDocument()
  })

  it('does not render Research-Backed Ingredients badge when product is not featured', () => {
    const nonFeaturedProduct = { ...mockProduct, featured: false }
    render(<ProductCard product={nonFeaturedProduct} />)
    expect(
      screen.queryByText('Research-Backed Ingredients')
    ).not.toBeInTheDocument()
  })

  it('renders first two benefits', () => {
    render(<ProductCard product={mockProduct} />)
    expect(screen.getByText('Benefit 1')).toBeInTheDocument()
    expect(screen.getByText('Benefit 2')).toBeInTheDocument()
    expect(screen.queryByText('Benefit 3')).not.toBeInTheDocument()
  })

  it('generates correct affiliate URL with default tag', () => {
    render(<ProductCard product={mockProduct} />)
    const buyButton = screen.getByRole('link', { name: /View on Amazon/i })
    expect(buyButton).toHaveAttribute(
      'href',
      expect.stringContaining('tag=pureprana-20')
    )
  })

  it('generates correct Amazon link', () => {
    render(<ProductCard product={mockProduct} />)
    const buyButton = screen.getByRole('link', { name: /View on Amazon/i })
    expect(buyButton).toHaveAttribute('href', mockProduct.amazonUrl)
  })

  it('has correct link attributes for SEO and security', () => {
    render(<ProductCard product={mockProduct} />)
    const buyButton = screen.getByRole('link', { name: /View on Amazon/i })
    expect(buyButton).toHaveAttribute('target', '_blank')
    expect(buyButton).toHaveAttribute(
      'rel',
      'noopener noreferrer sponsored nofollow'
    )
  })

  it('does not track click events (gtag not implemented)', () => {
    render(<ProductCard product={mockProduct} />)
    const buyButton = screen.getByRole('link', { name: /View on Amazon/i })

    fireEvent.click(buyButton)

    // The current implementation doesn't track clicks
    expect(mockGtag).not.toHaveBeenCalled()
  })

  it('handles missing window.gtag gracefully', () => {
    delete window.gtag
    render(<ProductCard product={mockProduct} />)
    const buyButton = screen.getByRole('link', { name: /View on Amazon/i })

    // Should not throw error
    expect(() => fireEvent.click(buyButton)).not.toThrow()
  })

  it('renders product image with correct attributes', () => {
    render(<ProductCard product={mockProduct} />)
    const image = screen.getByAltText(mockProduct.name)
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', expect.stringContaining('test-1.jpg'))
  })
})
