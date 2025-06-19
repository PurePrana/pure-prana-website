// Mock API handlers for testing
// Can be used with MSW (Mock Service Worker) if needed

import { mockProducts, mockProductCategories } from '../fixtures/products'

export const handlers = {
  // Product handlers
  getProducts: () => {
    return Promise.resolve({
      products: mockProducts,
      total: mockProducts.length,
      page: 1,
      pageSize: 10,
    })
  },

  getProduct: (id: string) => {
    const product = mockProducts.find((p) => p.id === id)
    if (!product) {
      return Promise.reject(new Error('Product not found'))
    }
    return Promise.resolve(product)
  },

  getProductsByCategory: (category: string) => {
    const filtered = mockProducts.filter((p) => p.category === category)
    return Promise.resolve({
      products: filtered,
      total: filtered.length,
    })
  },

  // Category handlers
  getCategories: () => {
    return Promise.resolve(mockProductCategories)
  },

  // Search handlers
  searchProducts: (query: string) => {
    const results = mockProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase())
    )
    return Promise.resolve({
      products: results,
      total: results.length,
    })
  },

  // Newsletter handlers
  subscribeNewsletter: (email: string) => {
    if (!email || !email.includes('@')) {
      return Promise.reject(new Error('Invalid email'))
    }
    return Promise.resolve({
      success: true,
      message: 'Successfully subscribed to newsletter',
    })
  },

  // Contact form handlers
  submitContactForm: (data: any) => {
    if (!data.email || !data.message) {
      return Promise.reject(new Error('Missing required fields'))
    }
    return Promise.resolve({
      success: true,
      message: 'Your message has been sent successfully',
    })
  },
}

// Helper to mock fetch responses
export const mockApiResponse = (data: any, options = {}) => {
  return Promise.resolve({
    ok: true,
    status: 200,
    json: () => Promise.resolve(data),
    ...options,
  } as Response)
}

// Helper to mock fetch errors
export const mockApiError = (message: string, status = 500) => {
  return Promise.resolve({
    ok: false,
    status,
    statusText: message,
    json: () => Promise.resolve({ error: message }),
  } as Response)
}
