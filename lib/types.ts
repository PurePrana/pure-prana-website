export interface SupplementIngredient {
  name: string
  amount: string
}

export interface SupplementFacts {
  servingSize: string
  servingsPerContainer: number
  ingredients: SupplementIngredient[]
}

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
  concerns: string[]
  tags: string[]
  benefits: string[]
  usage: string
  featured: boolean
  inStock: boolean
  comingSoon?: boolean
  supplementFacts?: SupplementFacts
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
