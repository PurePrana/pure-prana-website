import Hero from '@/components/Hero'
import ProductCard from '@/components/ProductCard'
import { getFeaturedProducts } from '@/lib/products'

export default async function Home() {
  const featuredProducts = getFeaturedProducts()

  return (
    <main className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      <Hero />

      <section
        id="research"
        className="notion-page bg-gradient-to-b from-white to-primary-50/30"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-brand-600 tracking-wider uppercase">
              Our Process
            </span>
            <h2 className="heading-2 mt-4 mb-6">
              Rigorous Three-Stage Validation
            </h2>
            <p className="text-body-large text-muted max-w-2xl mx-auto">
              Every Pure Prana formula undergoes extensive validation, bridging
              ancient wisdom with modern scientific standards
            </p>
          </div>

          <div className="grid gap-6">
            <div className="group relative bg-white rounded-2xl border border-primary-200 p-8 hover:border-primary-300 hover:shadow-lg transition-all duration-300">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-7 h-7 text-primary-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="heading-4 mb-3 text-primary-900">
                    Literature Review
                  </h3>
                  <p className="text-body text-muted leading-relaxed">
                    Our research team analyzes both ancient Ayurvedic texts and
                    contemporary peer-reviewed studies. Led by PhDs in
                    pharmacology and traditional medicine, we ensure every
                    formula has strong theoretical foundation.
                  </p>
                  <div className="mt-4 flex items-center gap-4">
                    <span className="text-sm text-brand-600 font-medium">
                      5,000+ texts reviewed
                    </span>
                    <span className="w-1 h-1 bg-primary-300 rounded-full"></span>
                    <span className="text-sm text-brand-600 font-medium">
                      150+ research papers
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative bg-white rounded-2xl border border-primary-200 p-8 hover:border-primary-300 hover:shadow-lg transition-all duration-300">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-7 h-7 text-primary-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="heading-4 mb-3 text-primary-900">
                    Laboratory Analysis
                  </h3>
                  <p className="text-body text-muted leading-relaxed">
                    Every batch undergoes comprehensive testing in our
                    FDA-registered facility: HPLC for purity, heavy metal
                    screening, microbial analysis, and potency verification to
                    pharmaceutical standards.
                  </p>
                  <div className="mt-4 flex items-center gap-4">
                    <span className="text-sm text-brand-600 font-medium">
                      98%+ purity standard
                    </span>
                    <span className="w-1 h-1 bg-primary-300 rounded-full"></span>
                    <span className="text-sm text-brand-600 font-medium">
                      12 quality checkpoints
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative bg-white rounded-2xl border border-primary-200 p-8 hover:border-primary-300 hover:shadow-lg transition-all duration-300">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-7 h-7 text-primary-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="heading-4 mb-3 text-primary-900">
                    Scientific Research
                  </h3>
                  <p className="text-body text-muted leading-relaxed">
                    We review scientific research on traditional herbs and their
                    modern applications. All health claims are substantiated
                    with peer-reviewed scientific evidence.
                  </p>
                  <div className="mt-4 flex items-center gap-4">
                    <span className="text-sm text-brand-600 font-medium">
                      Research-based formulas
                    </span>
                    <span className="w-1 h-1 bg-primary-300 rounded-full"></span>
                    <span className="text-sm text-brand-600 font-medium">
                      IRB approved studies
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 relative bg-gradient-to-r from-primary-100 to-brand-100 rounded-2xl p-8 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-200/20 rounded-full blur-3xl"></div>
            <div className="relative z-10 flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                <svg
                  className="w-6 h-6 text-brand-700"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-primary-900 mb-2">
                  Premium Quality
                </h4>
                <p className="text-body text-primary-700">
                  All Pure Prana products are manufactured in GMP-certified
                  facilities, ensuring pharmaceutical-grade quality standards
                  and complete supply chain transparency. Third-party tested for
                  purity and potency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="products"
        className="py-24 bg-gradient-to-b from-white via-primary-50/30 to-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-sm font-medium text-brand-600 tracking-wider uppercase">
              Our Products
            </span>
            <h2 className="heading-2 mt-4 mb-6">
              Formulas That Transform Lives
            </h2>
            <p className="text-body-large text-muted max-w-2xl mx-auto">
              Each product represents years of research, combining ancient
              Ayurvedic wisdom with modern scientific validation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
            {featuredProducts.map((product) => (
              <div key={product.id} className="animate-fade-in">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="notion-page bg-gradient-to-b from-primary-50/50 to-white"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-brand-600 tracking-wider uppercase">
              Real Stories
            </span>
            <h2 className="heading-2 mt-4 mb-6">Trusted by Thousands</h2>
            <p className="text-body-large text-muted max-w-2xl mx-auto">
              Join our community of wellness seekers who have discovered the
              transformative power of authentic Ayurveda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-primary-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-body text-primary-700 mb-6 italic">
                &quot;After struggling with stress for years, Pure Prana&apos;s
                Ashwagandha has been life-changing. I feel more balanced and
                focused than I have in a decade. The quality is
                exceptional.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-200 to-primary-300 rounded-full flex items-center justify-center">
                  <span className="text-primary-800 font-semibold">SK</span>
                </div>
                <div>
                  <p className="font-medium text-primary-900">Sarah K.</p>
                  <p className="text-sm text-muted">Verified Buyer</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-primary-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-body text-primary-700 mb-6 italic">
                &quot;The Turmeric Complex has significantly reduced my joint
                discomfort. I appreciate the transparency about their testing
                and manufacturing process. This is Ayurveda done right.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-200 to-primary-300 rounded-full flex items-center justify-center">
                  <span className="text-primary-800 font-semibold">RM</span>
                </div>
                <div>
                  <p className="font-medium text-primary-900">Robert M.</p>
                  <p className="text-sm text-muted">Verified Buyer</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-primary-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-body text-primary-700 mb-6 italic">
                &quot;As a healthcare practitioner, I&apos;m impressed by Pure
                Prana&apos;s commitment to research. Their products deliver
                consistent results for my patients. The quality is
                pharmaceutical-grade.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-200 to-primary-300 rounded-full flex items-center justify-center">
                  <span className="text-primary-800 font-semibold">DP</span>
                </div>
                <div>
                  <p className="font-medium text-primary-900">Dr. Patel</p>
                  <p className="text-sm text-muted">Healthcare Professional</p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-8 border-t border-primary-200">
            <div className="text-center">
              <p className="text-3xl font-light text-primary-800 mb-1">
                50,000+
              </p>
              <p className="text-sm text-muted">Happy Customers</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-light text-primary-800 mb-1">4.8/5</p>
              <p className="text-sm text-muted">Average Rating</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-light text-primary-800 mb-1">98%</p>
              <p className="text-sm text-muted">Would Recommend</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-light text-primary-800 mb-1">
                60-Day
              </p>
              <p className="text-sm text-muted">Money Back Guarantee</p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="why-ayurveda"
        className="py-24 bg-gradient-to-b from-white to-primary-50/50"
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-sm font-medium text-brand-600 tracking-wider uppercase">
              The Science
            </span>
            <h2 className="heading-2 mt-4 mb-6">Why Ayurveda Works</h2>
            <p className="text-body-large text-muted">
              5,000 years of wisdom now proven by modern research
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: '0.1s' }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-primary-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="heading-4 mb-4 text-primary-900">
                Scientific Research
              </h3>
              <p className="text-body text-muted mb-4">
                Extensive research explores the traditional uses of Ayurvedic
                herbs. The WHO recognizes Ayurveda as a complete system of
                natural healthcare.
              </p>
              <a
                href="#"
                className="text-sm text-brand-600 font-medium hover:text-brand-700 inline-flex items-center group"
              >
                Journal of Ethnopharmacology, 2023
                <svg
                  className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>

            <div
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-primary-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="heading-4 mb-4 text-primary-900">
                Bioactive Compounds
              </h3>
              <p className="text-body text-muted mb-4">
                Modern analysis has identified 1,000+ bioactive compounds in
                Ayurvedic herbs. These work synergistically, providing benefits
                isolated molecules cannot.
              </p>
              <a
                href="#"
                className="text-sm text-brand-600 font-medium hover:text-brand-700 inline-flex items-center group"
              >
                Phytomedicine International Journal
                <svg
                  className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>

            <div
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: '0.3s' }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-primary-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="heading-4 mb-4 text-primary-900">
                Personalized Medicine
              </h3>
              <p className="text-body text-muted mb-4">
                Ayurveda&apos;s constitutional approach (Prakriti) pioneered
                personalized medicine. Genomic studies confirm correlations
                between doshas and genetic variations.
              </p>
              <a
                href="#"
                className="text-sm text-brand-600 font-medium hover:text-brand-700 inline-flex items-center group"
              >
                Nature Scientific Reports, 2022
                <svg
                  className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div
            className="relative bg-gradient-to-br from-primary-100 via-brand-100 to-primary-100 rounded-3xl p-10 overflow-hidden animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-200/30 rounded-full blur-3xl"></div>
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg
                  className="w-10 h-10 text-brand-700"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-primary-900 mb-4">
                The Holistic Advantage
              </h3>
              <p className="text-lg text-primary-700 leading-relaxed">
                Unlike conventional medicine that treats symptoms, Ayurveda
                addresses root causes through a comprehensive understanding of
                mind, body, and spirit. This integrated approach leads to
                sustainable wellness with minimal side effects.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-32 bg-gradient-to-br from-primary-900 via-primary-800 to-brand-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary-700/30 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-0 right-0 w-96 h-96 bg-brand-700/30 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '1s' }}
          ></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 animate-fade-in">
            Begin Your Transformation
          </h2>
          <p
            className="text-xl text-white/80 mb-12 max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: '0.1s' }}
          >
            Join thousands who have discovered the perfect balance of ancient
            wisdom and modern science
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            <a
              href="#products"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-800 font-medium rounded-lg hover:bg-primary-50 transition-all duration-300 transform hover:scale-[1.02] shadow-xl"
            >
              Shop Premium Products
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </a>
            <a
              href="/blog"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-medium rounded-lg border-2 border-white/30 hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              Explore Research Library
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </a>
          </div>

          <div
            className="mt-16 pt-16 border-t border-white/20 animate-fade-in"
            style={{ animationDelay: '0.3s' }}
          >
            <p className="text-white/60 text-sm mb-4">
              Trusted by healthcare professionals worldwide
            </p>
            <div className="flex items-center justify-center gap-8">
              <div className="text-white/80">
                <svg
                  className="w-8 h-8 mx-auto mb-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm">GMP Certified</span>
              </div>
              <div className="text-white/80">
                <svg
                  className="w-8 h-8 mx-auto mb-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path
                    fillRule="evenodd"
                    d="M4 5a2 2 0 012-2 1 1 0 000 2H6a2 2 0 00-2 2v6a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-1a1 1 0 100-2 2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V5z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm">FDA Registered</span>
              </div>
              <div className="text-white/80">
                <svg
                  className="w-8 h-8 mx-auto mb-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm">Quality Assured</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
