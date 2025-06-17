export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="container py-12">
        <header className="text-center mb-16">
          <h1 className="heading-1 font-display text-primary-700 mb-4">
            Pure Prana
          </h1>
          <p className="text-xl text-secondary-600">
            Ayurvedic Wellness & Natural Living
          </p>
        </header>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="card">
            <h2 className="heading-4 mb-4 text-primary-600">Natural Products</h2>
            <p className="text-body mb-4">
              Discover our range of authentic Ayurvedic products crafted with care.
            </p>
            <button className="btn-primary">
              Explore Products
            </button>
          </div>

          <div className="card">
            <h2 className="heading-4 mb-4 text-secondary-600">Wellness Blog</h2>
            <p className="text-body mb-4">
              Learn about Ayurvedic practices and holistic health tips.
            </p>
            <button className="btn-secondary">
              Read Articles
            </button>
          </div>

          <div className="card md:col-span-2 lg:col-span-1">
            <h2 className="heading-4 mb-4 text-accent-600">About Pure Prana</h2>
            <p className="text-body mb-4">
              Our journey in bringing ancient wisdom to modern wellness.
            </p>
            <button className="btn-outline">
              Learn More
            </button>
          </div>
        </section>

        <section className="bg-primary-50 rounded-lg p-8 text-center">
          <h2 className="heading-2 font-display mb-4">Design System Preview</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="space-y-2">
              <div className="h-16 bg-primary-600 rounded"></div>
              <p className="text-small">Primary</p>
            </div>
            <div className="space-y-2">
              <div className="h-16 bg-secondary-600 rounded"></div>
              <p className="text-small">Secondary</p>
            </div>
            <div className="space-y-2">
              <div className="h-16 bg-accent-500 rounded"></div>
              <p className="text-small">Accent</p>
            </div>
            <div className="space-y-2">
              <div className="h-16 bg-neutral-400 rounded"></div>
              <p className="text-small">Neutral</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}