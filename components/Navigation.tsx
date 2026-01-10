'use client'

import { useState } from 'react'
import Link from 'next/link'
import { getAllConcerns } from '@/lib/concerns'

export default function Navigation() {
  const [isShopOpen, setIsShopOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const concerns = getAllConcerns()

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-neutral-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link
            href="/"
            className="font-display text-2xl text-primary-700 hover:text-primary-600 transition-colors"
          >
            Pure Prana
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-secondary-600 hover:text-primary-600 transition-colors"
            >
              Home
            </Link>

            {/* Shop Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsShopOpen(true)}
              onMouseLeave={() => setIsShopOpen(false)}
            >
              <Link
                href="/shop"
                className="text-secondary-600 hover:text-primary-600 transition-colors inline-flex items-center gap-1"
              >
                Shop
                <svg
                  className={`w-4 h-4 transition-transform ${isShopOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              {/* Dropdown Menu */}
              {isShopOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-primary-100 py-2 z-50">
                  <Link
                    href="/shop"
                    className="block px-4 py-2 text-primary-900 font-medium hover:bg-primary-50 transition-colors"
                  >
                    All Products
                  </Link>
                  <div className="border-t border-primary-100 my-2" />
                  <div className="px-4 py-1 text-xs text-muted uppercase tracking-wider">
                    Shop by Concern
                  </div>
                  {concerns.map((concern) => (
                    <Link
                      key={concern.id}
                      href={`/shop/${concern.slug}`}
                      className="flex items-center gap-2 px-4 py-2 text-secondary-600 hover:bg-primary-50 hover:text-primary-700 transition-colors"
                    >
                      <span>{concern.icon}</span>
                      <span>{concern.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/blog"
              className="text-secondary-600 hover:text-primary-600 transition-colors"
            >
              Blog
            </Link>

            <Link
              href="/shop"
              className="px-4 py-2 bg-primary-700 text-white rounded-lg hover:bg-primary-800 transition-colors"
            >
              Shop Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-primary-100 pt-4">
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className="px-4 py-2 text-secondary-600 hover:bg-primary-50 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/shop"
                className="px-4 py-2 text-secondary-600 hover:bg-primary-50 rounded-lg font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Shop All Products
              </Link>
              <div className="px-4 py-1 text-xs text-muted uppercase tracking-wider">
                Shop by Concern
              </div>
              {concerns.map((concern) => (
                <Link
                  key={concern.id}
                  href={`/shop/${concern.slug}`}
                  className="flex items-center gap-2 px-4 py-2 text-secondary-600 hover:bg-primary-50 rounded-lg ml-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>{concern.icon}</span>
                  <span>{concern.name}</span>
                </Link>
              ))}
              <Link
                href="/blog"
                className="px-4 py-2 text-secondary-600 hover:bg-primary-50 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
