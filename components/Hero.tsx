export default function Hero() {
  return (
    <section className="notion-page bg-gradient-to-br from-white via-primary-50 to-white">
      <div className="max-w-3xl mx-auto">
        <div className="block-spacing">
          <h1 className="heading-1 mb-4 animate-fade-in text-primary-800">
            Pure Prana
          </h1>
          <p className="text-xl text-primary-600 mb-8 animate-fade-in" style={{animationDelay: '0.1s'}}>
            Ancient wisdom validated by modern science
          </p>
        </div>
        
        <div className="notion-divider"></div>
        
        <div className="content-spacing animate-fade-in" style={{animationDelay: '0.2s'}}>
          <p className="text-body-large text-primary-700">
            We bridge millennia-old Ayurvedic traditions with contemporary research methodologies. 
            Every formula undergoes rigorous testing in our <span className="text-brand-700 font-medium">FDA-registered facilities</span> in the USA.
          </p>
          
          <p className="text-body text-primary-600">
            Our mission: Transform traditional remedies into evidence-based solutions for modern wellness challenges.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <a 
              href="#research" 
              className="btn-primary"
            >
              View Research
            </a>
            <a 
              href="#products" 
              className="btn-secondary"
            >
              Browse Products
            </a>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in" style={{animationDelay: '0.3s'}}>
          <div className="text-left">
            <p className="text-3xl font-medium text-primary-800 mb-1">100%</p>
            <p className="text-small text-primary-600">Pure Ingredients</p>
          </div>
          <div className="text-left">
            <p className="text-3xl font-medium text-primary-800 mb-1">15+</p>
            <p className="text-small text-primary-600">Clinical Studies</p>
          </div>
          <div className="text-left">
            <p className="text-3xl font-medium text-primary-800 mb-1">FDA</p>
            <p className="text-small text-primary-600">Registered Facility</p>
          </div>
          <div className="text-left">
            <p className="text-3xl font-medium text-primary-800 mb-1">4.7★</p>
            <p className="text-small text-primary-600">Customer Rating</p>
          </div>
        </div>
      </div>
    </section>
  )
}