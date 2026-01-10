'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  getResearchPapers,
  getAllIngredients,
  ResearchPaper,
} from '@/lib/researchPapers'

function ResearchPaperCard({ paper }: { paper: ResearchPaper }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-white rounded-2xl border border-primary-200 p-6 hover:border-primary-300 hover:shadow-lg transition-all duration-300">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex-1">
          <div className="flex flex-wrap gap-2 mb-3">
            {paper.relatedIngredients.map((ingredient) => (
              <span
                key={ingredient}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800"
              >
                {ingredient}
              </span>
            ))}
          </div>
          <h3 className="text-lg font-medium text-primary-900 leading-tight mb-2">
            {paper.title}
          </h3>
          <p className="text-sm text-muted">{paper.authors}</p>
        </div>
      </div>

      {/* Journal & Year */}
      <div className="flex items-center gap-3 mb-4 text-sm">
        <span className="inline-flex items-center gap-1.5 text-brand-700 font-medium">
          <svg
            className="w-4 h-4"
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
          {paper.journal}
        </span>
        <span className="w-1 h-1 bg-primary-300 rounded-full"></span>
        <span className="text-muted">{paper.year}</span>
      </div>

      {/* Summary */}
      <p className="text-body text-muted mb-4 leading-relaxed">
        {paper.summary}
      </p>

      {/* Key Findings - Expandable */}
      <div className="mb-4">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors"
        >
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${
              isExpanded ? 'rotate-180' : ''
            }`}
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
          {isExpanded ? 'Hide' : 'View'} Key Findings
        </button>

        {isExpanded && (
          <div className="mt-3 pl-4 border-l-2 border-primary-200">
            <ul className="space-y-2">
              {paper.keyFindings.map((finding, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-primary-700">
                  <svg
                    className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {finding}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Links */}
      <div className="flex items-center gap-4 pt-4 border-t border-primary-100">
        <a
          href={paper.pubmedUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 hover:text-primary-800 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
          View on PubMed
        </a>
        <a
          href={`https://doi.org/${paper.doi}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 hover:text-primary-800 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
            />
          </svg>
          DOI: {paper.doi}
        </a>
      </div>
    </div>
  )
}

export default function SciencePage() {
  const allPapers = getResearchPapers()
  const ingredients = getAllIngredients()
  const [selectedIngredient, setSelectedIngredient] = useState<string>('All')

  const filteredPapers =
    selectedIngredient === 'All'
      ? allPapers
      : allPapers.filter((paper) =>
          paper.relatedIngredients.some(
            (ing) => ing.toLowerCase() === selectedIngredient.toLowerCase()
          )
        )

  return (
    <main className="min-h-screen bg-gradient-to-b from-primary-50/50 to-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-700/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-700/30 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-sm font-medium text-primary-300 tracking-wider uppercase mb-4">
              Research & Evidence
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-light mb-6">
              Science-Backed Formulas
            </h1>
            <p className="text-lg md:text-xl text-primary-100 leading-relaxed mb-8">
              Every Pure Prana product is rooted in rigorous scientific research.
              Explore the peer-reviewed studies that validate our traditional
              Ayurvedic ingredients and their modern health benefits.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-800 font-medium rounded-lg hover:bg-primary-50 transition-all duration-300"
              >
                Shop Products
              </Link>
              <a
                href="#research"
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent text-white font-medium rounded-lg border-2 border-white/30 hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                Explore Research
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-white border-b border-primary-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-3xl md:text-4xl font-light text-primary-900 mb-2 group-hover:text-brand-700 transition-colors">
                50+
              </div>
              <div className="text-sm text-muted">Clinical Studies Reviewed</div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-light text-primary-900 mb-2 group-hover:text-brand-700 transition-colors">
                15+
              </div>
              <div className="text-sm text-muted">Research-Backed Ingredients</div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-light text-primary-900 mb-2 group-hover:text-brand-700 transition-colors">
                10,000+
              </div>
              <div className="text-sm text-muted">Study Participants</div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-light text-primary-900 mb-2 group-hover:text-brand-700 transition-colors">
                5,000+
              </div>
              <div className="text-sm text-muted">Years of Ayurvedic Wisdom</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-gradient-to-b from-white to-primary-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-sm font-medium text-brand-600 tracking-wider uppercase">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-light text-primary-900 mt-4 mb-6">
              Bridging Ancient Wisdom & Modern Science
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              We believe in the power of Ayurveda, validated through rigorous
              scientific research. Each ingredient in our formulas is backed by
              peer-reviewed studies and clinical trials.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
              <h3 className="text-xl font-medium text-primary-900 mb-3">
                Literature Review
              </h3>
              <p className="text-muted leading-relaxed">
                We analyze thousands of peer-reviewed studies, meta-analyses, and
                systematic reviews to identify ingredients with the strongest
                scientific evidence.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
              <h3 className="text-xl font-medium text-primary-900 mb-3">
                Clinical Evidence
              </h3>
              <p className="text-muted leading-relaxed">
                We prioritize ingredients tested in randomized, double-blind,
                placebo-controlled trials - the gold standard of clinical
                research.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-primary-900 mb-3">
                Quality Assurance
              </h3>
              <p className="text-muted leading-relaxed">
                Every batch is tested for purity, potency, and safety in our
                GMP-certified, FDA-registered facility to ensure you receive the
                highest quality supplements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Papers Section */}
      <section id="research" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-sm font-medium text-brand-600 tracking-wider uppercase">
              Published Research
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-light text-primary-900 mt-4 mb-6">
              Featured Studies
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              Explore peer-reviewed research on the key ingredients in our
              formulas. Each study is published in reputable scientific journals
              and available on PubMed.
            </p>
          </div>

          {/* Filter by Ingredient */}
          <div className="mb-10">
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setSelectedIngredient('All')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedIngredient === 'All'
                    ? 'bg-primary-900 text-white'
                    : 'bg-primary-100 text-primary-700 hover:bg-primary-200'
                }`}
              >
                All Studies ({allPapers.length})
              </button>
              {ingredients.map((ingredient) => {
                const count = allPapers.filter((p) =>
                  p.relatedIngredients.some(
                    (ing) => ing.toLowerCase() === ingredient.toLowerCase()
                  )
                ).length
                return (
                  <button
                    key={ingredient}
                    onClick={() => setSelectedIngredient(ingredient)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedIngredient === ingredient
                        ? 'bg-primary-900 text-white'
                        : 'bg-primary-100 text-primary-700 hover:bg-primary-200'
                    }`}
                  >
                    {ingredient} ({count})
                  </button>
                )
              })}
            </div>
          </div>

          {/* Papers Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {filteredPapers.map((paper) => (
              <ResearchPaperCard key={paper.id} paper={paper} />
            ))}
          </div>

          {filteredPapers.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted">
                No studies found for the selected ingredient.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full mb-4">
              <svg
                className="w-6 h-6 text-primary-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-primary-900 mb-3">
              Scientific Disclaimer
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              The research presented on this page represents peer-reviewed
              scientific studies on individual ingredients. These studies are
              provided for educational purposes only. The statements on this
              website have not been evaluated by the Food and Drug
              Administration. Our products are not intended to diagnose, treat,
              cure, or prevent any disease. Individual results may vary. Always
              consult with a qualified healthcare professional before starting
              any supplement regimen.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-brand-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary-700/30 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-0 right-0 w-96 h-96 bg-brand-700/30 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '1s' }}
          ></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-light text-white mb-6">
            Experience Science-Backed Wellness
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Join thousands who trust Pure Prana for premium, research-validated
            Ayurvedic supplements that deliver real results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-800 font-medium rounded-lg hover:bg-primary-50 transition-all duration-300 transform hover:scale-[1.02] shadow-xl"
            >
              Shop Our Products
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
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-medium rounded-lg border-2 border-white/30 hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              Read Our Blog
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
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
