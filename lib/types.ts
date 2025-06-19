export interface Product {
  id: string
  name: string
  slug: string
  price: number
  description: string
  shortDescription: string
  images: string[]
  amazonUrl: string
  rating: number
  reviewCount: number
  category: string
  tags: string[]
  benefits: string[]
  usage: string
  featured: boolean
  inStock: boolean
}

export interface ProductCategory {
  id: string
  name: string
  slug: string
  description: string
  productCount: number
}

export interface ProductReview {
  id: string
  productId: string
  author: string
  rating: number
  date: string
  title: string
  content: string
  verified: boolean
}
