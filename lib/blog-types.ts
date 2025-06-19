export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  category: string
  tags: string[]
  image?: string
  featured?: boolean
  readingTime: {
    text: string
    minutes: number
    time: number
    words: number
  }
  content: string
  excerpt?: string
  updatedAt?: string
  references?: Array<{
    title: string
    url: string
    source: string
  }>
}

export interface BlogCategory {
  name: string
  slug: string
  description: string
  count: number
}

export interface Author {
  name: string
  bio: string
  avatar?: string
  role?: string
}

export const AUTHORS: Record<string, Author> = {
  shagun: {
    name: 'Shagun Pandey',
    bio: 'Ayurvedic wellness enthusiast and co-founder of Pure Prana. Passionate about bringing ancient wisdom to modern wellness.',
    role: 'Co-Founder',
  },
  shivam: {
    name: 'Shivam Dixit',
    bio: 'Technology and wellness advocate. Building Pure Prana to make Ayurveda accessible to everyone.',
    role: 'Co-Founder',
  },
}

export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    name: 'Ayurveda Basics',
    slug: 'ayurveda-basics',
    description: 'Learn the fundamentals of Ayurvedic principles and practices',
    count: 0,
  },
  {
    name: 'Product Guides',
    slug: 'product-guides',
    description:
      'In-depth guides about our Ayurvedic products and their benefits',
    count: 0,
  },
  {
    name: 'Wellness Tips',
    slug: 'wellness-tips',
    description:
      'Practical tips for incorporating Ayurveda into your daily life',
    count: 0,
  },
  {
    name: 'Recipes',
    slug: 'recipes',
    description: 'Ayurvedic recipes and remedies for health and wellness',
    count: 0,
  },
]
