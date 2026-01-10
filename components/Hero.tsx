import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Premium background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/50 via-primary-800/40 to-brand-900/50 z-10" />
        <Image
          src="/images/hero-himalayan-herbs.jpg"
          alt="Himalayan herbs landscape"
          fill
          className="object-cover"
          priority
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-3xl">
          {/* Premium badge */}
          <div
            className="inline-flex items-center gap-2 bg-black/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-8"
            style={{ animation: 'fadeIn 0.6s ease-out forwards' }}
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-white/90 font-medium">
              GMP-Certified • Third-Party Tested • Premium Quality
            </span>
          </div>

          <h1
            className="text-5xl md:text-7xl font-light text-white mb-6 leading-[1.1]"
            style={{
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
              animation: 'fadeIn 0.6s ease-out forwards',
            }}
          >
            Pure Prana
          </h1>

          <p
            className="text-2xl md:text-3xl text-white/90 font-light mb-8"
            style={{
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
              animation: 'fadeIn 0.6s ease-out 0.1s forwards',
            }}
          >
            Where ancient wisdom meets modern science
          </p>

          <p
            className="text-lg text-white/80 mb-12 max-w-2xl leading-relaxed"
            style={{
              textShadow: '0 1px 3px rgba(0,0,0,0.3)',
              animation: 'fadeIn 0.6s ease-out 0.2s forwards',
            }}
          >
            Every Pure Prana formula is rooted in 5,000 years of Ayurvedic
            tradition, validated through rigorous clinical research, and
            manufactured to the highest standards in our California facility.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4"
            style={{ animation: 'fadeIn 0.6s ease-out 0.3s forwards' }}
          >
            <a
              href="#products"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-800 font-medium rounded-lg hover:bg-primary-50 transition-all duration-300 transform hover:scale-[1.02] shadow-xl"
            >
              Explore Our Products
              <span className="ml-2">→</span>
            </a>
            <a
              href="#research"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-medium rounded-lg border-2 border-white/30 hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              View Clinical Research
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-16 border-t border-white/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white/80">
              <div
                className="text-center"
                style={{ animation: 'fadeIn 0.6s ease-out 0.4s forwards' }}
              >
                <p className="text-4xl font-light mb-2">98%</p>
                <p className="text-sm">Pure Potency</p>
              </div>
              <div
                className="text-center"
                style={{ animation: 'fadeIn 0.6s ease-out 0.5s forwards' }}
              >
                <p className="text-4xl font-light mb-2">15+</p>
                <p className="text-sm">Clinical Studies</p>
              </div>
              <div
                className="text-center"
                style={{ animation: 'fadeIn 0.6s ease-out 0.6s forwards' }}
              >
                <p className="text-4xl font-light mb-2">50K+</p>
                <p className="text-sm">Happy Customers</p>
              </div>
              <div
                className="text-center"
                style={{ animation: 'fadeIn 0.6s ease-out 0.7s forwards' }}
              >
                <p className="text-4xl font-light mb-2">4.8★</p>
                <p className="text-sm">Average Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  )
}
