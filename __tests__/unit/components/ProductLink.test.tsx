import React from 'react'
import { render, screen } from '@testing-library/react'
import ProductLink from '@/components/ProductLink'
import { Product } from '@/lib/types'

const mockProduct: Product = {
  id: '1',
  name: 'Test Product',
  slug: 'test-product',
  price: 29.95,
  description: 'A test product description for testing purposes',
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

describe('ProductLink Component', () => {
  describe('inline variant', () => {
    it('should render product name as link', () => {
      render(<ProductLink product={mockProduct} variant="inline" />)

      const link = screen.getByRole('link')
      expect(link).toHaveTextContent('Test Product')
      expect(link).toHaveAttribute('href', '/product/test-product')
    })

    it('should apply inline styling', () => {
      render(<ProductLink product={mockProduct} variant="inline" />)

      const link = screen.getByRole('link')
      expect(link).toHaveClass('inline-flex')
    })
  })

  describe('minimal variant', () => {
    it('should render product name and description', () => {
      render(<ProductLink product={mockProduct} variant="minimal" />)

      expect(screen.getByText('Test Product')).toBeInTheDocument()
      expect(screen.getByText('Short description')).toBeInTheDocument()
    })

    it('should be a clickable link', () => {
      render(<ProductLink product={mockProduct} variant="minimal" />)

      const link = screen.getByRole('link')
      expect(link).toHaveAttribute('href', '/product/test-product')
    })
  })

  describe('card variant (default)', () => {
    it('should render full product card', () => {
      render(<ProductLink product={mockProduct} />)

      expect(screen.getByText('Test Product')).toBeInTheDocument()
      expect(screen.getByText('Short description')).toBeInTheDocument()
      expect(screen.getByText('Featured Product')).toBeInTheDocument()
    })

    it('should show price when showPrice is true', () => {
      render(<ProductLink product={mockProduct} showPrice={true} />)

      expect(screen.getByText('$29.95')).toBeInTheDocument()
    })

    it('should not show price when showPrice is false', () => {
      render(<ProductLink product={mockProduct} showPrice={false} />)

      expect(screen.queryByText('$29.95')).not.toBeInTheDocument()
    })

    it('should show rating when showRating is true and rating exists', () => {
      render(<ProductLink product={mockProduct} showRating={true} />)

      expect(screen.getByText('4.5 (100 reviews)')).toBeInTheDocument()
    })

    it('should not show rating when showRating is false', () => {
      render(<ProductLink product={mockProduct} showRating={false} />)

      expect(screen.queryByText('4.5 (100 reviews)')).not.toBeInTheDocument()
    })

    it('should render Learn More button', () => {
      render(<ProductLink product={mockProduct} />)

      expect(screen.getByText('Learn More')).toBeInTheDocument()
    })

    it('should render Buy on Amazon button when amazonUrl exists', () => {
      render(<ProductLink product={mockProduct} />)

      const amazonLink = screen.getByText('Buy on Amazon')
      expect(amazonLink).toBeInTheDocument()
      expect(amazonLink.closest('a')).toHaveAttribute('href', mockProduct.amazonUrl)
      expect(amazonLink.closest('a')).toHaveAttribute('target', '_blank')
    })

    it('should not render Buy on Amazon button when amazonUrl is empty', () => {
      const productNoAmazon = { ...mockProduct, amazonUrl: '' }
      render(<ProductLink product={productNoAmazon} />)

      expect(screen.queryByText('Buy on Amazon')).not.toBeInTheDocument()
    })
  })

  describe('custom className', () => {
    it('should apply custom className', () => {
      const { container } = render(
        <ProductLink product={mockProduct} className="custom-class" />
      )

      expect(container.firstChild).toHaveClass('custom-class')
    })
  })
})
