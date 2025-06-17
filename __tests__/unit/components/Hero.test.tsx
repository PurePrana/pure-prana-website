import { render, screen } from '@testing-library/react'
import Hero from '@/components/Hero'

describe('Hero Component', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { name: /Pure Prana/i, level: 1 })
    expect(heading).toBeInTheDocument()
  })

  it('renders the tagline', () => {
    render(<Hero />)
    const tagline = screen.getByText(/Discover Ancient Ayurvedic Wisdom for Modern Wellness/i)
    expect(tagline).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<Hero />)
    const description = screen.getByText(/Experience the healing power of authentic Ayurvedic products/i)
    expect(description).toBeInTheDocument()
  })

  it('renders the CTA buttons', () => {
    render(<Hero />)
    const shopButton = screen.getByRole('link', { name: /Shop Now on Amazon/i })
    const learnButton = screen.getByRole('link', { name: /Learn About Ayurveda/i })
    
    expect(shopButton).toBeInTheDocument()
    expect(shopButton).toHaveAttribute('href', '#products')
    expect(learnButton).toBeInTheDocument()
    expect(learnButton).toHaveAttribute('href', '#why-ayurveda')
  })

  it('renders all statistic items', () => {
    render(<Hero />)
    const stats = [
      { value: '100%', label: 'Natural Ingredients' },
      { value: '50k+', label: 'Happy Customers' },
      { value: '4.7★', label: 'Average Rating' },
      { value: '30+', label: 'Premium Products' }
    ]

    stats.forEach(stat => {
      expect(screen.getByText(stat.value)).toBeInTheDocument()
      expect(screen.getByText(stat.label)).toBeInTheDocument()
    })
  })

  it('has proper styling classes', () => {
    render(<Hero />)
    const section = screen.getByText('Pure Prana').closest('section')
    expect(section).toHaveClass('relative', 'overflow-hidden', 'bg-gradient-to-br')
  })
})