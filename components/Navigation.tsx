import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-neutral-200">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          <Link
            href="/"
            className="font-display text-2xl text-primary-700 hover:text-primary-600 transition-colors"
          >
            Pure Prana
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="text-secondary-600 hover:text-primary-600 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="text-secondary-600 hover:text-primary-600 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/#products"
              className="text-secondary-600 hover:text-primary-600 transition-colors"
            >
              Products
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
