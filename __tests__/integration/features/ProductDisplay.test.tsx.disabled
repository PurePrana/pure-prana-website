import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

// Example integration test for product display feature
// This shows how to test multiple components working together

// Mock data
const mockProduct = {
  id: '1',
  name: 'Himalayan Shilajit',
  price: 49.99,
  description: 'Pure Himalayan Shilajit resin for vitality and wellness',
  images: [
    '/images/product-1.jpg',
    '/images/product-2.jpg',
    '/images/product-3.jpg',
  ],
  amazonUrl: 'https://amazon.com/dp/B123456789',
  rating: 4.5,
  reviewCount: 128,
}

// Mock API call
const mockFetchProduct = jest.fn()

// Mock components for demonstration
const ProductCard = ({ product, onClick }: any) => (
  <div onClick={() => onClick(product.id)} role="article">
    <h3>{product.name}</h3>
    <p>${product.price}</p>
    <button>View Details</button>
  </div>
)

const ProductDetail = ({ productId }: any) => {
  const [product, setProduct] = React.useState<any>(null)
  const [loading, setLoading] = React.useState(true)
  const [selectedImage, setSelectedImage] = React.useState(0)

  React.useEffect(() => {
    mockFetchProduct(productId).then((data: any) => {
      setProduct(data)
      setLoading(false)
    })
  }, [productId])

  if (loading) return <div>Loading...</div>
  if (!product) return <div>Product not found</div>

  return (
    <div>
      <h1>{product.name}</h1>
      <div data-testid="image-gallery">
        <img
          src={product.images[selectedImage]}
          alt={product.name}
          data-testid="main-image"
        />
        <div>
          {product.images.map((img: string, idx: number) => (
            <button
              key={idx}
              onClick={() => setSelectedImage(idx)}
              data-testid={`thumb-${idx}`}
            >
              <img src={img} alt={`${product.name} ${idx + 1}`} />
            </button>
          ))}
        </div>
      </div>
      <p>${product.price}</p>
      <p>{product.description}</p>
      <a href={product.amazonUrl} target="_blank" rel="noopener noreferrer">
        Buy on Amazon
      </a>
    </div>
  )
}

const ProductPage = () => {
  const [selectedProduct, setSelectedProduct] = React.useState<string | null>(null)

  if (selectedProduct) {
    return <ProductDetail productId={selectedProduct} />
  }

  return (
    <div>
      <h2>Our Products</h2>
      <ProductCard product={mockProduct} onClick={setSelectedProduct} />
    </div>
  )
}

describe('Product Display Integration', () => {
  beforeEach(() => {
    mockFetchProduct.mockClear()
    mockFetchProduct.mockResolvedValue(mockProduct)
  })

  // Test 1: Product list to detail navigation
  it('navigates from product list to product detail', async () => {
    const user = userEvent.setup()
    render(<ProductPage />)

    // Verify product card is displayed
    expect(screen.getByText('Our Products')).toBeInTheDocument()
    expect(screen.getByText('Himalayan Shilajit')).toBeInTheDocument()
    expect(screen.getByText('$49.99')).toBeInTheDocument()

    // Click on product
    await user.click(screen.getByRole('button', { name: /view details/i }))

    // Wait for product detail to load
    await waitFor(() => {
      expect(mockFetchProduct).toHaveBeenCalledWith('1')
    })

    // Verify product detail is displayed
    await waitFor(() => {
      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
        'Himalayan Shilajit'
      )
    })
    expect(screen.getByText(mockProduct.description)).toBeInTheDocument()
  })

  // Test 2: Image gallery functionality
  it('allows switching between product images', async () => {
    const user = userEvent.setup()
    render(<ProductDetail productId="1" />)

    // Wait for product to load
    await waitFor(() => {
      expect(screen.getByTestId('main-image')).toBeInTheDocument()
    })

    const mainImage = screen.getByTestId('main-image') as HTMLImageElement
    expect(mainImage.src).toContain('product-1.jpg')

    // Click on second thumbnail
    await user.click(screen.getByTestId('thumb-1'))
    expect(mainImage.src).toContain('product-2.jpg')

    // Click on third thumbnail
    await user.click(screen.getByTestId('thumb-2'))
    expect(mainImage.src).toContain('product-3.jpg')
  })

  // Test 3: API error handling
  it('handles API errors gracefully', async () => {
    mockFetchProduct.mockRejectedValueOnce(new Error('API Error'))
    
    render(<ProductDetail productId="1" />)

    await waitFor(() => {
      expect(screen.getByText('Product not found')).toBeInTheDocument()
    })
  })

  // Test 4: Amazon affiliate link
  it('includes proper Amazon affiliate link', async () => {
    render(<ProductDetail productId="1" />)

    await waitFor(() => {
      const amazonLink = screen.getByText('Buy on Amazon') as HTMLAnchorElement
      expect(amazonLink).toHaveAttribute('href', mockProduct.amazonUrl)
      expect(amazonLink).toHaveAttribute('target', '_blank')
      expect(amazonLink).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })

  // Test 5: Loading state
  it('shows loading state while fetching product', async () => {
    // Mock a delayed response
    mockFetchProduct.mockImplementationOnce(
      () => new Promise((resolve) => setTimeout(() => resolve(mockProduct), 100))
    )

    render(<ProductDetail productId="1" />)
    
    expect(screen.getByText('Loading...')).toBeInTheDocument()
    
    await waitFor(() => {
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument()
    })
  })
})