import React from 'react'
import { render as rtlRender, screen, waitForElementToBeRemoved } from '@testing-library/react'
import type { RenderOptions } from '@testing-library/react'

// Custom render function that includes providers
interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  // Add any provider props here
}

function customRender(
  ui: React.ReactElement,
  options?: CustomRenderOptions
) {
  function Wrapper({ children }: { children: React.ReactNode }) {
    return (
      <>
        {/* Add providers here as the project grows */}
        {/* <ThemeProvider> */}
        {/* <CartProvider> */}
        {children}
        {/* </CartProvider> */}
        {/* </ThemeProvider> */}
      </>
    )
  }

  return rtlRender(ui, { wrapper: Wrapper, ...options })
}

// Re-export everything
export * from '@testing-library/react'
export { customRender as render }

// Utility functions for common test scenarios

/**
 * Wait for async operations to complete
 */
export const waitForLoadingToFinish = () =>
  screen.findByText(/loading/i, {}, { timeout: 3000 }).then(() =>
    waitForElementToBeRemoved(() => screen.queryByText(/loading/i))
  )

/**
 * Mock fetch for API calls
 */
export const mockFetch = (data: any) => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(data),
    } as Response)
  )
}

/**
 * Reset all mocks
 */
export const resetMocks = () => {
  jest.clearAllMocks()
  jest.restoreAllMocks()
}

/**
 * Generate mock product data
 */
export const generateMockProduct = (overrides = {}) => ({
  id: '1',
  name: 'Test Product',
  price: 29.99,
  description: 'Test product description',
  images: ['/test-image-1.jpg', '/test-image-2.jpg'],
  amazonUrl: 'https://amazon.com/dp/test',
  rating: 4.5,
  reviewCount: 100,
  ...overrides,
})

/**
 * Generate mock blog post data
 */
export const generateMockBlogPost = (overrides = {}) => ({
  id: '1',
  slug: 'test-post',
  title: 'Test Blog Post',
  excerpt: 'Test excerpt',
  content: 'Test content',
  author: 'Test Author',
  publishedAt: new Date().toISOString(),
  readingTime: '5 min read',
  category: 'Ayurveda',
  tags: ['health', 'wellness'],
  ...overrides,
})

/**
 * Assert element has correct ARIA attributes
 */
export const assertAriaAttributes = (
  element: HTMLElement,
  attributes: Record<string, string>
) => {
  Object.entries(attributes).forEach(([attr, value]) => {
    expect(element).toHaveAttribute(`aria-${attr}`, value)
  })
}

/**
 * Get elements by data-testid
 */
export const getByTestId = (testId: string) =>
  screen.getByTestId(testId)

export const queryByTestId = (testId: string) =>
  screen.queryByTestId(testId)

export const getAllByTestId = (testId: string) =>
  screen.getAllByTestId(testId)