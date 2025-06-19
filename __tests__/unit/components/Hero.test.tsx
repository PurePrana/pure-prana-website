import { render, screen } from '@testing-library/react'
import Hero from '@/components/Hero'

describe('Hero Component', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', {
      name: /Pure Prana/i,
      level: 1,
    })
    expect(heading).toBeInTheDocument()
  })

  it('renders the tagline', () => {
    render(<Hero />)
    const tagline = screen.getByText(
      /Where ancient wisdom meets modern science/i
    )
    expect(tagline).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<Hero />)
    const description = screen.getByText(
      /Every Pure Prana formula is rooted in 5,000 years of Ayurvedic tradition/i
    )
    expect(description).toBeInTheDocument()
  })

  it('renders the CTA buttons', () => {
    render(<Hero />)
    const shopButton = screen.getByRole('link', {
      name: /Explore Our Products/i,
    })
    const learnButton = screen.getByRole('link', {
      name: /View Clinical Research/i,
    })

    expect(shopButton).toBeInTheDocument()
    expect(shopButton).toHaveAttribute('href', '#products')
    expect(learnButton).toBeInTheDocument()
    expect(learnButton).toHaveAttribute('href', '#research')
  })

  it('renders all statistic items', () => {
    render(<Hero />)
    const stats = [
      { value: '98%', label: 'Pure Potency' },
      { value: '15+', label: 'Clinical Studies' },
      { value: '50K+', label: 'Happy Customers' },
      { value: '4.8★', label: 'Average Rating' },
    ]

    stats.forEach((stat) => {
      expect(screen.getByText(stat.value)).toBeInTheDocument()
      expect(screen.getByText(stat.label)).toBeInTheDocument()
    })
  })

  it('has proper styling classes', () => {
    render(<Hero />)
    const section = screen.getByText('Pure Prana').closest('section')
    expect(section).toHaveClass('relative', 'overflow-hidden')
  })
})
