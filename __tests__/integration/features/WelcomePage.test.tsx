import React from 'react'
import { render, screen } from '@testing-library/react'

// Mock the dependencies
jest.mock('@/lib/products', () => ({
  getAllProducts: jest.fn(() => [
    {
      id: '1',
      name: 'Test Product 1',
      slug: 'test-product-1',
      price: 29.95,
      shortDescription: 'Test description 1',
      images: ['/images/test1.jpg'],
      comingSoon: false,
    },
    {
      id: '2',
      name: 'Test Product 2',
      slug: 'test-product-2',
      price: 34.95,
      shortDescription: 'Test description 2',
      images: ['/images/test2.jpg'],
      comingSoon: false,
    },
  ]),
}))

jest.mock('@/lib/blog', () => ({
  getFeaturedPosts: jest.fn(() => [
    {
      slug: 'test-post',
      title: 'Test Blog Post',
      description: 'A test blog post',
      category: 'wellness-tips',
      image: '/images/blog/test.jpg',
    },
  ]),
}))

jest.mock('@/components/NewsletterSignup', () => {
  return function MockNewsletterSignup() {
    return <div data-testid="newsletter-signup">Newsletter Signup</div>
  }
})

// Import after mocks
import WelcomePage from '@/app/welcome/page'

describe('Welcome Page', () => {
  it('should render welcome message', () => {
    render(<WelcomePage />)

    expect(screen.getByText('Welcome to the Pure Prana Family')).toBeInTheDocument()
  })

  it('should render thank you badge', () => {
    render(<WelcomePage />)

    expect(screen.getByText('Thank You for Your Purchase!')).toBeInTheDocument()
  })

  it('should render getting started guide', () => {
    render(<WelcomePage />)

    expect(screen.getByText('Getting Started with Your Supplement')).toBeInTheDocument()
    expect(screen.getByText('Start Slow')).toBeInTheDocument()
    expect(screen.getByText('Be Consistent')).toBeInTheDocument()
    expect(screen.getByText('Track Your Progress')).toBeInTheDocument()
  })

  it('should render exclusive resources section', () => {
    render(<WelcomePage />)

    expect(screen.getByText('Exclusive Resources for You')).toBeInTheDocument()
    expect(screen.getByText('Research & Insights Blog')).toBeInTheDocument()
    expect(screen.getByText('The Science Behind Our Formulas')).toBeInTheDocument()
    expect(screen.getByText('Ingredient Guide')).toBeInTheDocument()
    expect(screen.getByText('Wellness Quiz')).toBeInTheDocument()
  })

  it('should render featured articles section', () => {
    render(<WelcomePage />)

    expect(screen.getByText('Start Reading')).toBeInTheDocument()
    expect(screen.getByText('Test Blog Post')).toBeInTheDocument()
  })

  it('should render product collection section', () => {
    render(<WelcomePage />)

    expect(screen.getByText('Explore Our Complete Collection')).toBeInTheDocument()
    expect(screen.getByText('Test Product 1')).toBeInTheDocument()
    expect(screen.getByText('Test Product 2')).toBeInTheDocument()
  })

  it('should render newsletter signup', () => {
    render(<WelcomePage />)

    expect(screen.getByText('Stay Connected')).toBeInTheDocument()
    expect(screen.getByTestId('newsletter-signup')).toBeInTheDocument()
  })

  it('should render contact section', () => {
    render(<WelcomePage />)

    expect(screen.getByText("Questions? We're Here to Help")).toBeInTheDocument()
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
    expect(screen.getByText('Leave a Review')).toBeInTheDocument()
  })

  it('should render trust badges', () => {
    render(<WelcomePage />)

    expect(screen.getByText('Made in USA')).toBeInTheDocument()
    expect(screen.getByText('100% Plant-Based')).toBeInTheDocument()
    expect(screen.getByText('Third-Party Tested')).toBeInTheDocument()
    expect(screen.getByText('5000+ Years')).toBeInTheDocument()
  })

  it('should have links to key pages', () => {
    render(<WelcomePage />)

    const blogLink = screen.getAllByRole('link', { name: /blog/i })[0]
    expect(blogLink).toHaveAttribute('href', '/blog')

    const scienceLink = screen.getByRole('link', { name: /science behind/i })
    expect(scienceLink).toHaveAttribute('href', '/science')

    const quizLink = screen.getByRole('link', { name: /wellness quiz/i })
    expect(quizLink).toHaveAttribute('href', '/quiz')

    const contactLink = screen.getByRole('link', { name: /contact us/i })
    expect(contactLink).toHaveAttribute('href', '/contact')
  })

  it('should have external link to Amazon store', () => {
    render(<WelcomePage />)

    const amazonLink = screen.getByRole('link', { name: /leave a review/i })
    expect(amazonLink).toHaveAttribute('target', '_blank')
    expect(amazonLink).toHaveAttribute('rel', 'noopener noreferrer')
  })
})
