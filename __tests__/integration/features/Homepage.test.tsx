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
    const heading = screen.getByRole('heading', { name: /Formulas That Transform Lives/i })
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

  it('renders Shop Premium Products link', () => {
    render(<Home />)
    const shopLink = screen.getByRole('link', { name: /Shop Premium Products/i })
    
    expect(shopLink).toBeInTheDocument()
    expect(shopLink).toHaveAttribute('href', '#products')
  })

  it('renders Why Ayurveda Works section', () => {
    render(<Home />)
    const whyAyurvedaHeading = screen.getByRole('heading', { name: /Why Ayurveda Works/i })
    expect(whyAyurvedaHeading).toBeInTheDocument()
  })

  it('renders all Ayurveda benefit cards', () => {
    render(<Home />)
    const benefits = [
      'Scientific Research',
      'Bioactive Compounds',
      'Personalized Medicine'
    ]
    
    benefits.forEach(benefit => {
      expect(screen.getByRole('heading', { name: benefit })).toBeInTheDocument()
    })
  })

  it('renders CTA section', () => {
    render(<Home />)
    const ctaHeading = screen.getByRole('heading', { name: /Begin Your Transformation/i })
    const ctaButton = screen.getByRole('link', { name: /Shop Premium Products/i })
    
    expect(ctaHeading).toBeInTheDocument()
    expect(ctaButton).toBeInTheDocument()
    expect(ctaButton).toHaveAttribute('href', '#products')
  })

  it('has proper section IDs for navigation', () => {
    const { container } = render(<Home />)
    
    expect(container.querySelector('#products')).toBeInTheDocument()
    expect(container.querySelector('#why-ayurveda')).toBeInTheDocument()
    expect(container.querySelector('#research')).toBeInTheDocument()
    expect(container.querySelector('#testimonials')).toBeInTheDocument()
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