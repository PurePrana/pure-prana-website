import Hero from '@/components/Hero'
import ProductCard from '@/components/ProductCard'
import { getFeaturedProducts } from '@/lib/products'

export default function Home() {
  const featuredProducts = getFeaturedProducts()

  return (
    <main className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      <Hero />

      <section id="research" className="notion-page">
        <div className="max-w-3xl mx-auto">
          <div className="block-spacing">
            <h2 className="heading-2 mb-4">
              Our Research Process
            </h2>
            <p className="text-body text-muted">
              Every Pure Prana product undergoes a three-stage validation process
            </p>
          </div>
            
          <div className="space-y-4">
            <div className="notion-toggle group">
              <div className="flex gap-3 p-4 rounded-lg hover:bg-primary-50 transition-colors cursor-pointer">
                <span className="text-xl mt-0.5">📚</span>
                <div className="flex-1">
                  <h3 className="heading-4 mb-2">Literature Review</h3>
                  <p className="text-body text-muted">
                    We analyze both ancient Ayurvedic texts and contemporary peer-reviewed studies. 
                    Our research team includes PhDs in pharmacology and traditional medicine.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="notion-toggle group">
              <div className="flex gap-3 p-4 rounded-lg hover:bg-primary-50 transition-colors cursor-pointer">
                <span className="text-xl mt-0.5">🧪</span>
                <div className="flex-1">
                  <h3 className="heading-4 mb-2">Laboratory Analysis</h3>
                  <p className="text-body text-muted">
                    Every batch undergoes comprehensive testing: HPLC for purity, heavy metal screening, 
                    microbial analysis, and potency verification in our FDA-registered facility.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="notion-toggle group">
              <div className="flex gap-3 p-4 rounded-lg hover:bg-primary-50 transition-colors cursor-pointer">
                <span className="text-xl mt-0.5">📊</span>
                <div className="flex-1">
                  <h3 className="heading-4 mb-2">Clinical Validation</h3>
                  <p className="text-body text-muted">
                    We partner with research institutions to conduct and review clinical studies. 
                    All health claims are substantiated with scientific evidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="notion-callout mt-8">
            <span className="text-xl">🇺🇸</span>
            <p className="text-body">
              <strong>Made in USA:</strong> All Pure Prana products are manufactured in our GMP-certified, 
              FDA-registered facility in California, ensuring the highest quality standards.
            </p>
          </div>
        </div>
      </section>

      <section id="products" className="notion-page bg-white/50">
        <div className="max-w-5xl mx-auto">
          <div className="block-spacing">
            <h2 className="heading-2 mb-4">
              Featured Products
            </h2>
            <p className="text-body text-muted mb-8">
              Research-validated formulations, manufactured in our FDA-registered facility
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <a 
              href="https://www.amazon.com/s?k=pure+prana+ayurveda&tag=pureprana-20"
              target="_blank"
              rel="noopener noreferrer sponsored nofollow"
              className="btn-primary"
            >
              View All Products →
            </a>
          </div>
        </div>
      </section>

      <section id="why-ayurveda" className="notion-page">
        <div className="max-w-3xl mx-auto">
          <div className="block-spacing">
            <h2 className="heading-2 mb-4">
              Why Ayurveda Works
            </h2>
            <p className="text-body text-muted">
              Modern research validates ancient wisdom
            </p>
          </div>
          
          <div className="notion-divider"></div>
            
          <div className="content-spacing">
            <div className="content-block">
              <h3 className="heading-3 mb-4">Clinical Evidence</h3>
              <p className="text-body mb-4">
                Over 150 clinical trials validate Ayurvedic medicine's effectiveness. 
                The WHO recognizes Ayurveda as a complete system of natural healthcare.
              </p>
              <p className="text-small text-muted">
                → Journal of Ethnopharmacology, 2023
              </p>
            </div>

            <div className="content-block">
              <h3 className="heading-3 mb-4">Bioactive Compounds</h3>
              <p className="text-body mb-4">
                Modern analysis has identified 1,000+ bioactive compounds in Ayurvedic herbs. 
                These work synergistically, providing benefits isolated molecules cannot.
              </p>
              <p className="text-small text-muted">
                → Phytomedicine International Journal
              </p>
            </div>

            <div className="content-block">
              <h3 className="heading-3 mb-4">Personalized Medicine</h3>
              <p className="text-body mb-4">
                Ayurveda's constitutional approach (Prakriti) pioneered personalized medicine. 
                Genomic studies confirm correlations between doshas and genetic variations.
              </p>
              <p className="text-small text-muted">
                → Nature Scientific Reports, 2022
              </p>
            </div>
          </div>
          
          <div className="notion-callout mt-8">
            <span className="text-xl">💡</span>
            <div>
              <p className="text-body font-medium mb-2">Key Insight</p>
              <p className="text-body text-muted">
                Ayurveda's holistic approach addresses root causes rather than symptoms, 
                leading to sustainable wellness outcomes with minimal side effects.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="notion-page bg-gradient-to-br from-primary-100 to-primary-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-2 mb-4">
            Start Your Journey
          </h2>
          <p className="text-body text-muted mb-8">
            Experience the power of scientifically-validated Ayurveda
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a 
              href="#products"
              className="btn-brand"
            >
              Shop Products
            </a>
            <a 
              href="/blog"
              className="btn-secondary"
            >
              Read Research
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}