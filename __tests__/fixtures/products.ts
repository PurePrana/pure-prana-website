// Test fixtures for products

export const mockProducts = [
  {
    id: '1',
    name: 'Pure Himalayan Shilajit',
    slug: 'pure-himalayan-shilajit',
    price: 49.99,
    description:
      'Authentic Himalayan Shilajit resin, sourced from high altitudes. Rich in fulvic acid and minerals for enhanced vitality and wellness.',
    shortDescription: 'Premium quality Shilajit resin from the Himalayas',
    images: [
      '/images/shilajit-1.jpg',
      '/images/shilajit-2.jpg',
      '/images/shilajit-3.jpg',
    ],
    amazonUrl: 'https://amazon.com/dp/B08SHILAJIT',
    rating: 4.7,
    reviewCount: 342,
    category: 'Supplements',
    tags: ['energy', 'vitality', 'minerals', 'adaptogen'],
    benefits: [
      'Boosts energy and stamina',
      'Supports immune system',
      'Rich in fulvic acid',
      'Contains 85+ minerals',
    ],
    usage: 'Take a pea-sized amount daily with warm water or milk',
    featured: true,
    inStock: true,
  },
  {
    id: '2',
    name: 'Organic Ashwagandha Powder',
    slug: 'organic-ashwagandha-powder',
    price: 24.99,
    description:
      'Premium organic Ashwagandha root powder. A powerful adaptogen that helps manage stress and promotes overall well-being.',
    shortDescription: 'Stress-relieving adaptogenic herb powder',
    images: ['/images/ashwagandha-1.jpg', '/images/ashwagandha-2.jpg'],
    amazonUrl: 'https://amazon.com/dp/B08ASHWAGAN',
    rating: 4.5,
    reviewCount: 218,
    category: 'Herbs',
    tags: ['stress-relief', 'adaptogen', 'anxiety', 'sleep'],
    benefits: [
      'Reduces stress and anxiety',
      'Improves sleep quality',
      'Enhances focus and memory',
      'Supports hormonal balance',
    ],
    usage: 'Mix 1/2 teaspoon in warm water or milk twice daily',
    featured: true,
    inStock: true,
  },
  {
    id: '3',
    name: 'Triphala Churna',
    slug: 'triphala-churna',
    price: 19.99,
    description:
      'Traditional Ayurvedic formula combining three fruits. Supports digestive health and gentle detoxification.',
    shortDescription: 'Classic digestive and detox formula',
    images: ['/images/triphala-1.jpg', '/images/triphala-2.jpg'],
    amazonUrl: 'https://amazon.com/dp/B08TRIPHALA',
    rating: 4.6,
    reviewCount: 156,
    category: 'Digestive Health',
    tags: ['digestion', 'detox', 'immunity', 'traditional'],
    benefits: [
      'Supports healthy digestion',
      'Gentle daily detox',
      'Boosts immunity',
      'Promotes regular bowel movements',
    ],
    usage: 'Take 1 teaspoon with warm water before bed',
    featured: false,
    inStock: true,
  },
]

export const mockProductCategories = [
  {
    id: 'supplements',
    name: 'Supplements',
    slug: 'supplements',
    description: 'Natural Ayurvedic supplements for optimal health',
    productCount: 12,
  },
  {
    id: 'herbs',
    name: 'Herbs',
    slug: 'herbs',
    description: 'Pure, organic herbs and herbal powders',
    productCount: 18,
  },
  {
    id: 'digestive-health',
    name: 'Digestive Health',
    slug: 'digestive-health',
    description: 'Products for digestive wellness and gut health',
    productCount: 8,
  },
]

export const mockProductReviews = [
  {
    id: '1',
    productId: '1',
    author: 'Sarah M.',
    rating: 5,
    date: '2024-01-15',
    title: 'Life-changing energy boost!',
    content:
      'I have been taking this Shilajit for 3 months now and the difference in my energy levels is remarkable. Highly recommend!',
    verified: true,
  },
  {
    id: '2',
    productId: '1',
    author: 'John D.',
    rating: 4,
    date: '2024-01-10',
    title: 'Great quality, strong taste',
    content:
      'The product quality is excellent, just as described. The taste takes some getting used to, but the benefits are worth it.',
    verified: true,
  },
]
