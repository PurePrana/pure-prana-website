import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 to-accent-50 py-20 md:py-32">
      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-primary-700 mb-6">
            Pure Prana
          </h1>
          <p className="text-xl md:text-2xl text-secondary-600 mb-8">
            Discover Ancient Ayurvedic Wisdom for Modern Wellness
          </p>
          <p className="text-lg text-secondary-600 mb-12 max-w-2xl mx-auto">
            Experience the healing power of authentic Ayurvedic products sourced 
            directly from the Himalayas. Trusted by thousands for natural health 
            and vitality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#products" 
              className="btn-primary text-lg px-8 py-3 inline-block"
            >
              Shop Now on Amazon
            </a>
            <a 
              href="#why-ayurveda" 
              className="btn-outline text-lg px-8 py-3 inline-block"
            >
              Learn About Ayurveda
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-primary-600">100%</p>
            <p className="text-secondary-600 mt-2">Natural Ingredients</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-primary-600">50k+</p>
            <p className="text-secondary-600 mt-2">Happy Customers</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-primary-600">4.7★</p>
            <p className="text-secondary-600 mt-2">Average Rating</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-primary-600">30+</p>
            <p className="text-secondary-600 mt-2">Premium Products</p>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent pointer-events-none"></div>
      
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-accent-300/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary-300/20 rounded-full blur-3xl"></div>
    </section>
  )
}