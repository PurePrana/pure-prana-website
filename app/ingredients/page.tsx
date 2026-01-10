'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { getAllIngredients, Ingredient } from '@/data/ingredients'
import { getAllConcerns } from '@/data/concerns'

export default function IngredientsPage() {
  const allIngredients = getAllIngredients()
  const concerns = getAllConcerns()

  const [searchQuery, setSearchQuery] = useState('')
  const [selectedConcern, setSelectedConcern] = useState<string | null>(null)

  const filteredIngredients = useMemo(() => {
    return allIngredients.filter((ingredient) => {
      // Filter by search query
      const matchesSearch =
        searchQuery === '' ||
        ingredient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ingredient.sanskritName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ingredient.scientificName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ingredient.description.toLowerCase().includes(searchQuery.toLowerCase())

      // Filter by concern
      const matchesConcern =
        selectedConcern === null || ingredient.concerns.includes(selectedConcern)

      return matchesSearch && matchesConcern
    })
  }, [allIngredients, searchQuery, selectedConcern])

  const handleConcernClick = (concernSlug: string) => {
    if (selectedConcern === concernSlug) {
      setSelectedConcern(null)
    } else {
      setSelectedConcern(concernSlug)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-primary-50/50 to-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-white/90 font-medium">
                5,000+ Years of Ayurvedic Wisdom
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-display font-light mb-6">
              Ingredient Library
            </h1>
            <p className="text-lg md:text-xl text-primary-100 leading-relaxed">
              Explore the sacred herbs and botanicals that power our formulas.
              Each ingredient is carefully selected based on traditional Ayurvedic
              texts and validated by modern scientific research.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 border-b border-primary-100 bg-white sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search ingredients by name, Sanskrit name, or benefits..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pl-14 rounded-xl border border-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-primary-900 placeholder-primary-400 bg-primary-50/50"
              />
              <svg
                className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-primary-400 hover:text-primary-600"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Filter by Concern */}
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setSelectedConcern(null)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                selectedConcern === null
                  ? 'bg-primary-800 text-white'
                  : 'bg-primary-100 text-primary-700 hover:bg-primary-200'
              }`}
            >
              <span>All Ingredients</span>
            </button>
            {concerns.map((concern) => (
              <button
                key={concern.id}
                onClick={() => handleConcernClick(concern.slug)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                  selectedConcern === concern.slug
                    ? 'bg-primary-800 text-white'
                    : `${concern.color} hover:opacity-80`
                }`}
              >
                <span>{concern.icon}</span>
                <span className="font-medium">{concern.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Results Count */}
      <section className="py-4 bg-primary-50/30">
        <div className="container mx-auto px-4">
          <p className="text-center text-primary-600">
            Showing {filteredIngredients.length} of {allIngredients.length} ingredients
            {selectedConcern && (
              <span className="ml-2">
                for{' '}
                <span className="font-medium text-primary-800">
                  {concerns.find((c) => c.slug === selectedConcern)?.name}
                </span>
              </span>
            )}
          </p>
        </div>
      </section>

      {/* Ingredients Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredIngredients.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredIngredients.map((ingredient) => (
                <IngredientCard key={ingredient.id} ingredient={ingredient} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-medium text-primary-900 mb-2">
                No ingredients found
              </h3>
              <p className="text-primary-600 mb-6">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedConcern(null)
                }}
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-800 text-white font-medium rounded-lg hover:bg-primary-900 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Educational Section */}
      <section className="py-16 bg-gradient-to-b from-white to-primary-50/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-display text-primary-900 mb-4">
              The Science of Ayurvedic Herbs
            </h2>
            <p className="text-lg text-primary-700">
              Our ingredients are selected based on both traditional wisdom and modern research
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6 bg-white rounded-xl shadow-soft">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📜</span>
              </div>
              <h3 className="font-medium text-primary-900 mb-2">Traditional Texts</h3>
              <p className="text-sm text-primary-600">
                Referenced in ancient texts like Charaka Samhita and Sushruta Samhita,
                with documented use spanning over 3,000 years
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-soft">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔬</span>
              </div>
              <h3 className="font-medium text-primary-900 mb-2">Clinical Research</h3>
              <p className="text-sm text-primary-600">
                Validated through peer-reviewed studies published in respected
                scientific journals and clinical trials
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-soft">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✅</span>
              </div>
              <h3 className="font-medium text-primary-900 mb-2">Quality Assured</h3>
              <p className="text-sm text-primary-600">
                Sourced from trusted suppliers and tested for purity, potency,
                and safety in FDA-registered facilities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary-900 to-primary-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display text-white mb-4">
            Experience These Ingredients
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Discover how these powerful Ayurvedic herbs work together in our
            carefully crafted formulas for optimal wellness.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-800 font-medium rounded-lg hover:bg-primary-50 transition-all duration-300 transform hover:scale-[1.02] shadow-xl"
          >
            Shop Our Products
            <span className="ml-2">→</span>
          </Link>
        </div>
      </section>
    </main>
  )
}

function IngredientCard({ ingredient }: { ingredient: Ingredient }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-white rounded-xl shadow-soft border border-primary-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Card Header */}
      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="text-4xl flex-shrink-0">{ingredient.icon}</div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-medium text-primary-900 mb-1">
              {ingredient.name}
            </h3>
            <p className="text-sm text-primary-600 italic mb-1">
              {ingredient.sanskritName}
            </p>
            <p className="text-xs text-primary-400">
              {ingredient.scientificName}
            </p>
          </div>
        </div>

        <p className="text-primary-700 text-sm leading-relaxed mb-4 line-clamp-3">
          {ingredient.description}
        </p>

        {/* Key Benefits */}
        <div className="mb-4">
          <h4 className="text-xs font-semibold text-primary-500 uppercase tracking-wider mb-2">
            Key Benefits
          </h4>
          <div className="flex flex-wrap gap-2">
            {ingredient.benefits.slice(0, 3).map((benefit, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-full"
              >
                {benefit}
              </span>
            ))}
          </div>
        </div>

        {/* Traditional Uses (Expandable) */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-800 transition-colors"
        >
          <span>{isExpanded ? 'Hide' : 'Show'} traditional uses</span>
          <svg
            className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-primary-100 animate-fade-in">
            <h4 className="text-xs font-semibold text-primary-500 uppercase tracking-wider mb-2">
              Traditional Ayurvedic Uses
            </h4>
            <ul className="space-y-1">
              {ingredient.traditionalUses.map((use, index) => (
                <li key={index} className="text-sm text-primary-700 flex items-start gap-2">
                  <span className="text-primary-400 mt-1">•</span>
                  <span>{use}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-primary-500">Origin:</span>
                <span className="ml-1 text-primary-700">{ingredient.origin}</span>
              </div>
              <div>
                <span className="text-primary-500">Part used:</span>
                <span className="ml-1 text-primary-700">{ingredient.partUsed}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Card Footer - Related Products */}
      {ingredient.relatedProducts.length > 0 && (
        <div className="px-6 py-4 bg-primary-50/50 border-t border-primary-100">
          <h4 className="text-xs font-semibold text-primary-500 uppercase tracking-wider mb-2">
            Found In
          </h4>
          <div className="flex flex-wrap gap-2">
            {ingredient.relatedProducts.slice(0, 2).map((productSlug) => (
              <Link
                key={productSlug}
                href={`/product/${productSlug}`}
                className="inline-flex items-center gap-1 px-3 py-1 bg-white border border-primary-200 text-primary-700 text-xs rounded-full hover:bg-primary-100 hover:border-primary-300 transition-colors"
              >
                <span className="capitalize">{productSlug.replace(/-/g, ' ')}</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            ))}
            {ingredient.relatedProducts.length > 2 && (
              <span className="inline-flex items-center px-3 py-1 text-primary-500 text-xs">
                +{ingredient.relatedProducts.length - 2} more
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
