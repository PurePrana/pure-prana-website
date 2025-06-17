import { Product } from './types'

export const products: Product[] = [
  {
    id: '1',
    name: 'Hormone Balance',
    slug: 'hormone-balance',
    price: 39.99,
    description: 'Premium Ayurvedic formula designed to support hormonal balance and overall wellness. Made with carefully selected herbs following traditional Ayurvedic principles.',
    shortDescription: 'Natural support for hormonal wellness',
    images: [
      '/images/products/hormone-balance.jpg',
    ],
    amazonUrl: 'https://www.amazon.com/dp/B0DZ23LJGJ',
    rating: 4.6,
    reviewCount: 28,
    category: 'Hormonal Support',
    tags: ['hormone-balance', 'wellness', 'ayurveda', 'womens-health'],
    benefits: [
      'Supports hormonal balance',
      'Promotes overall wellness',
      'Made in USA',
      'FDA registered facility',
    ],
    usage: 'Take as directed on the product label',
    featured: true,
    inStock: true,
  },
  {
    id: '2',
    name: 'Power Blend - Vitality Formula',
    slug: 'power-blend-vitality',
    price: 49.99,
    description: 'Powerful combination of Shilajit, Ashwagandha, and Gokshura. This traditional Ayurvedic blend is designed to enhance vitality, energy, and overall performance.',
    shortDescription: 'Premium vitality and energy supplement',
    images: [
      '/images/products/power-blend.png',
    ],
    amazonUrl: 'https://www.amazon.com/Vitality-Shilajit-Ashwagandha-Gokshura-Supplement/dp/B0CWS4NCCF',
    rating: 4.7,
    reviewCount: 156,
    category: 'Energy & Vitality',
    tags: ['shilajit', 'ashwagandha', 'gokshura', 'energy', 'vitality', 'mens-health'],
    benefits: [
      'Boosts energy and stamina',
      'Enhances vitality',
      'Supports strength and performance',
      'Made in USA facility',
    ],
    usage: 'Follow the recommended dosage on the product packaging',
    featured: true,
    inStock: true,
  },
]

export function getFeaturedProducts() {
  return products.filter(product => product.featured)
}

export function getProductsByCategory(category: string) {
  return products.filter(product => product.category === category)
}

export function getProductBySlug(slug: string) {
  return products.find(product => product.slug === slug)
}