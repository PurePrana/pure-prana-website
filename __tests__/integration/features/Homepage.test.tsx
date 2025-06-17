import { render, screen } from '@testing-library/react'
import Home from '@/app/page'
import { getFeaturedProducts } from '@/lib/products'

// Mock the components
jest.mock('@/components/Hero', () => {
  return function MockHero() {
    return <div data-testid="hero">Hero Component</div>
  }
})

jest.mock('@/components/ProductCard', () => {
  return function MockProductCard({ product }: any) {
    return <div data-testid={`product-${product.id}`}>{product.name}</div>
  }
})

describe('Homepage Integration', () => {
  it('renders the hero section', () => {
    render(<Home />)
    expect(screen.getByTestId('hero')).toBeInTheDocument()
  })

  it('renders featured products section with correct heading', () => {
    render(<Home />)
    const heading = screen.getByRole('heading', { name: /Featured Products/i })
    expect(heading).toBeInTheDocument()
  })

  it('renders all featured products', () => {
    render(<Home />)
    const featuredProducts = getFeaturedProducts()
    
    featuredProducts.forEach(product => {
      expect(screen.getByTestId(`product-${product.id}`)).toBeInTheDocument()
      expect(screen.getByText(product.name)).toBeInTheDocument()
    })
  })

  it('renders View All Products link with correct attributes', () => {
    render(<Home />)
    const viewAllLink = screen.getByRole('link', { name: /View All Products on Amazon/i })
    
    expect(viewAllLink).toBeInTheDocument()
    expect(viewAllLink).toHaveAttribute('href', 'https://www.amazon.com/s?k=pure+prana+ayurveda&tag=pureprana-20')
    expect(viewAllLink).toHaveAttribute('target', '_blank')
    expect(viewAllLink).toHaveAttribute('rel', 'noopener noreferrer sponsored nofollow')
  })

  it('renders Why Choose Ayurveda section', () => {
    render(<Home />)
    const whyAyurvedaHeading = screen.getByRole('heading', { name: /Why Choose Ayurveda\?/i })
    expect(whyAyurvedaHeading).toBeInTheDocument()
  })

  it('renders all Ayurveda benefit cards', () => {
    render(<Home />)
    const benefits = [
      '5000 Years of Wisdom',
      'Natural & Holistic',
      'Personalized Approach',
      'Proven Results'
    ]
    
    benefits.forEach(benefit => {
      expect(screen.getByRole('heading', { name: benefit })).toBeInTheDocument()
    })
  })

  it('renders CTA section', () => {
    render(<Home />)
    const ctaHeading = screen.getByRole('heading', { name: /Start Your Wellness Journey Today/i })
    const ctaButton = screen.getByRole('link', { name: /Shop Our Products/i })
    
    expect(ctaHeading).toBeInTheDocument()
    expect(ctaButton).toBeInTheDocument()
    expect(ctaButton).toHaveAttribute('href', '#products')
  })

  it('has proper section IDs for navigation', () => {
    const { container } = render(<Home />)
    
    expect(container.querySelector('#products')).toBeInTheDocument()
    expect(container.querySelector('#why-ayurveda')).toBeInTheDocument()
  })

  it('has proper semantic structure', () => {
    const { container } = render(<Home />)
    
    const main = container.querySelector('main')
    expect(main).toBeInTheDocument()
    expect(main).toHaveClass('min-h-screen')
    
    const sections = container.querySelectorAll('section')
    expect(sections.length).toBeGreaterThan(0)
  })
})