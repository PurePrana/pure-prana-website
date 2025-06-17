import Hero from '@/components/Hero'
import ProductCard from '@/components/ProductCard'
import { getFeaturedProducts } from '@/lib/products'

export default function Home() {
  const featuredProducts = getFeaturedProducts()

  return (
    <main className="min-h-screen">
      <Hero />

      <section id="products" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 font-display text-primary-700 mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Discover our most popular Ayurvedic products, carefully selected for 
              their quality and effectiveness. Available on Amazon with fast shipping.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <a 
              href="https://www.amazon.com/s?k=pure+prana+ayurveda&tag=pureprana-20"
              target="_blank"
              rel="noopener noreferrer sponsored nofollow"
              className="btn-secondary inline-block"
            >
              View All Products on Amazon
            </a>
          </div>
        </div>
      </section>

      <section id="why-ayurveda" className="py-20 bg-primary-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 font-display text-primary-700 text-center mb-12">
              Why Choose Ayurveda?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="heading-4 mb-4 text-primary-600">5000 Years of Wisdom</h3>
                <p className="text-body">
                  Ayurveda is one of the world&apos;s oldest holistic healing systems, 
                  developed in India over 5,000 years ago. It&apos;s based on the belief 
                  that health and wellness depend on a delicate balance between the 
                  mind, body, and spirit.
                </p>
              </div>

              <div className="card">
                <h3 className="heading-4 mb-4 text-primary-600">Natural & Holistic</h3>
                <p className="text-body">
                  Unlike conventional medicine that often treats symptoms, Ayurveda 
                  addresses the root cause of health issues. It uses natural herbs, 
                  minerals, and lifestyle practices to restore balance and promote 
                  long-term wellness.
                </p>
              </div>

              <div className="card">
                <h3 className="heading-4 mb-4 text-primary-600">Personalized Approach</h3>
                <p className="text-body">
                  Ayurveda recognizes that each person is unique. It provides 
                  personalized recommendations based on your individual constitution 
                  (dosha), ensuring treatments that work specifically for your body 
                  type and needs.
                </p>
              </div>

              <div className="card">
                <h3 className="heading-4 mb-4 text-primary-600">Proven Results</h3>
                <p className="text-body">
                  Modern research continues to validate what Ayurvedic practitioners 
                  have known for millennia. Studies show the effectiveness of 
                  Ayurvedic herbs like Ashwagandha, Turmeric, and Shilajit in 
                  supporting various aspects of health.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-2 font-display text-primary-700 mb-8">
              Start Your Wellness Journey Today
            </h2>
            <p className="text-lg text-secondary-600 mb-8">
              Join thousands who have discovered the transformative power of 
              authentic Ayurvedic products. Your path to natural wellness begins here.
            </p>
            <a 
              href="#products"
              className="btn-primary text-lg px-8 py-3 inline-block"
            >
              Shop Our Products
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}