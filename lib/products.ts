import { Product } from './types'

export const products: Product[] = [
  {
    id: '1',
    name: 'Pure Himalayan Shilajit',
    slug: 'pure-himalayan-shilajit',
    price: 49.99,
    description: 'Authentic Himalayan Shilajit resin, sourced from high altitudes. Rich in fulvic acid and minerals for enhanced vitality and wellness.',
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
    description: 'Premium organic Ashwagandha root powder. A powerful adaptogen that helps manage stress and promotes overall well-being.',
    shortDescription: 'Stress-relieving adaptogenic herb powder',
    images: [
      '/images/ashwagandha-1.jpg',
      '/images/ashwagandha-2.jpg',
    ],
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
    description: 'Traditional Ayurvedic formula combining three fruits. Supports digestive health and gentle detoxification.',
    shortDescription: 'Classic digestive and detox formula',
    images: [
      '/images/triphala-1.jpg',
      '/images/triphala-2.jpg',
    ],
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
  {
    id: '4',
    name: 'Brahmi Brain Tonic',
    slug: 'brahmi-brain-tonic',
    price: 29.99,
    description: 'Brahmi (Bacopa Monnieri) is renowned for enhancing cognitive function and memory. Perfect for students and professionals.',
    shortDescription: 'Memory and focus enhancing herb',
    images: [
      '/images/brahmi-1.jpg',
      '/images/brahmi-2.jpg',
    ],
    amazonUrl: 'https://amazon.com/dp/B08BRAHMI01',
    rating: 4.4,
    reviewCount: 127,
    category: 'Brain Health',
    tags: ['memory', 'focus', 'cognitive', 'studying'],
    benefits: [
      'Improves memory retention',
      'Enhances concentration',
      'Reduces mental fatigue',
      'Supports brain health',
    ],
    usage: 'Take 1 capsule twice daily with meals',
    featured: true,
    inStock: true,
  },
  {
    id: '5',
    name: 'Turmeric Curcumin Complex',
    slug: 'turmeric-curcumin-complex',
    price: 34.99,
    description: 'High-potency turmeric extract with black pepper for maximum absorption. Powerful anti-inflammatory and antioxidant support.',
    shortDescription: 'Anti-inflammatory golden spice extract',
    images: [
      '/images/turmeric-1.jpg',
      '/images/turmeric-2.jpg',
    ],
    amazonUrl: 'https://amazon.com/dp/B08TURMERIC',
    rating: 4.8,
    reviewCount: 456,
    category: 'Supplements',
    tags: ['anti-inflammatory', 'joints', 'immunity', 'antioxidant'],
    benefits: [
      'Reduces inflammation',
      'Supports joint health',
      'Boosts immunity',
      'Powerful antioxidant',
    ],
    usage: 'Take 2 capsules daily with food',
    featured: true,
    inStock: true,
  },
  {
    id: '6',
    name: 'Neem Leaf Powder',
    slug: 'neem-leaf-powder',
    price: 18.99,
    description: 'Pure neem leaf powder for skin health and blood purification. A powerful natural detoxifier with antibacterial properties.',
    shortDescription: 'Natural detox and skin health support',
    images: [
      '/images/neem-1.jpg',
      '/images/neem-2.jpg',
    ],
    amazonUrl: 'https://amazon.com/dp/B08NEEMLEAF',
    rating: 4.3,
    reviewCount: 89,
    category: 'Herbs',
    tags: ['detox', 'skin', 'antibacterial', 'blood-purifier'],
    benefits: [
      'Purifies blood naturally',
      'Supports clear skin',
      'Natural antibacterial',
      'Boosts liver function',
    ],
    usage: 'Mix 1/2 teaspoon in water once daily',
    featured: false,
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