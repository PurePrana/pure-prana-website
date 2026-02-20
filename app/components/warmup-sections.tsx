'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

// ─── Types ───────────────────────────────────────────────────────────────────
export interface Benefit {
  icon: string
  title: string
  desc: string
}

export interface FAQ {
  q: string
  a: string
}

export interface Ingredient {
  name: string
  desc: string
}

export interface ProductPageProps {
  name: string
  asin: string
  tagline: string
  headline: string
  subhead: string
  rating: number
  reviewCount: number
  price: string
  imageSlug: string
  benefits: Benefit[]
  ingredients?: Ingredient[]
  faqs: FAQ[]
  accentColor?: string // tailwind color class prefix e.g. 'amber', 'rose', 'violet'
}

function amazonLink(asin: string) {
  return `https://www.amazon.com/dp/${asin}?maas=maas_adg_api_4924382344301_macro_1_1&ref_=aa_maas&tag=maas`
}

// ─── Star Rating ─────────────────────────────────────────────────────────────
function Stars({
  rating,
  size = 'md',
}: {
  rating: number
  size?: 'sm' | 'md'
}) {
  const cls = size === 'sm' ? 'w-4 h-4' : 'w-5 h-5'
  return (
    <span
      className="inline-flex items-center gap-0.5"
      aria-label={`${rating} out of 5 stars`}
    >
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          className={`${cls} ${i <= Math.round(rating) ? 'text-amber-400' : 'text-gray-600'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
        </svg>
      ))}
    </span>
  )
}

// ─── Prime Badge ─────────────────────────────────────────────────────────────
function PrimeBadge() {
  return (
    <span className="inline-flex items-center gap-1 text-[#00A8E1] font-bold text-sm">
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M2 18.5A1.5 1.5 0 013.5 17h17a1.5 1.5 0 010 3h-17A1.5 1.5 0 012 18.5zM14.08 7.41a.5.5 0 00-.86 0L12 10.26l-1.22-2.85a.5.5 0 00-.86 0L8 12h8l-1.92-4.59z" />
      </svg>
      prime
    </span>
  )
}

// ─── Hero ────────────────────────────────────────────────────────────────────
export function Hero({
  name,
  tagline,
  headline,
  subhead,
  asin,
  imageSlug,
  rating,
  reviewCount,
  price,
}: ProductPageProps) {
  return (
    <section className="pt-6 pb-8 px-4 max-w-lg mx-auto">
      {/* Brand */}
      <div className="text-center mb-6">
        <p className="text-amber-500 font-semibold text-xs tracking-[0.2em] uppercase">
          Pure Prana Ayurveda
        </p>
      </div>

      {/* Product Image */}
      <div className="mx-auto mb-6 w-64 h-64 relative">
        <Image
          src={`/images/products/${imageSlug}.jpg`}
          alt={name}
          fill
          className="object-contain drop-shadow-2xl"
          priority
        />
      </div>

      {/* Rating badge */}
      <div className="flex items-center justify-center gap-2 mb-4">
        <Stars rating={rating} size="sm" />
        <span className="text-amber-400 font-semibold text-sm">{rating}</span>
        <span className="text-gray-500 text-sm">({reviewCount} reviews)</span>
      </div>

      {/* Tagline */}
      <p className="text-center text-amber-400/80 text-sm font-medium mb-2">
        {tagline}
      </p>

      {/* Headline */}
      <h1 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight text-center mb-3">
        {headline}
      </h1>
      <p className="text-gray-400 text-base text-center mb-6 max-w-md mx-auto leading-relaxed">
        {subhead}
      </p>

      {/* CTA */}
      <div className="text-center">
        <a
          href={amazonLink(asin)}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold py-3.5 px-8 rounded-full text-base shadow-lg shadow-amber-500/25 transition-all hover:scale-105 active:scale-95"
        >
          Get It on Amazon — {price}
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
        <p className="text-gray-500 text-xs mt-2 flex items-center justify-center gap-1">
          ✓ Free shipping with <PrimeBadge /> · 60-day guarantee
        </p>
      </div>
    </section>
  )
}

// ─── Benefits ────────────────────────────────────────────────────────────────
export function Benefits({
  benefits,
  sectionTitle,
}: {
  benefits: Benefit[]
  sectionTitle?: string
}) {
  return (
    <section className="py-10 px-4 max-w-lg mx-auto">
      <h2 className="text-xl font-bold text-white text-center mb-6">
        {sectionTitle || 'Why It Works'}
      </h2>
      <div className="grid gap-4">
        {benefits.map((b, i) => (
          <div
            key={i}
            className="flex gap-3.5 items-start bg-white/[0.03] border border-white/[0.06] rounded-2xl p-4"
          >
            <span className="text-2xl flex-shrink-0 mt-0.5">{b.icon}</span>
            <div>
              <h3 className="font-semibold text-white text-sm mb-0.5">
                {b.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{b.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── Key Ingredients ─────────────────────────────────────────────────────────
export function KeyIngredients({ ingredients }: { ingredients: Ingredient[] }) {
  if (!ingredients?.length) return null
  return (
    <section className="py-10 px-4 max-w-lg mx-auto">
      <h2 className="text-xl font-bold text-white text-center mb-6">
        Key Ingredients
      </h2>
      <div className="grid gap-3">
        {ingredients.map((ing, i) => (
          <div
            key={i}
            className="bg-emerald-950/30 border border-emerald-800/20 rounded-xl p-4"
          >
            <p className="text-amber-400 font-semibold text-sm">{ing.name}</p>
            <p className="text-gray-400 text-xs mt-1 leading-relaxed">
              {ing.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── Social Proof ────────────────────────────────────────────────────────────
export function SocialProof({
  rating,
  reviewCount,
}: {
  rating: number
  reviewCount: number
}) {
  return (
    <section className="py-10 px-4 max-w-lg mx-auto">
      <div className="bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.06] rounded-2xl p-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-1">
          <Stars rating={rating} />
          <span className="text-white font-bold text-lg">{rating}/5</span>
        </div>
        <p className="text-gray-400 text-sm mb-5">
          {reviewCount}+ verified Amazon reviews
        </p>
        <div className="flex justify-center gap-8 text-sm">
          <div className="text-center">
            <p className="text-2xl font-bold text-white">GMP</p>
            <p className="text-gray-500 text-xs">Certified</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-white">USA</p>
            <p className="text-gray-500 text-xs">Manufactured</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-white">3rd</p>
            <p className="text-gray-500 text-xs">Party Tested</p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Trust Badges ────────────────────────────────────────────────────────────
const badges = [
  { icon: '🌱', label: '100% Plant-Based' },
  { icon: '🏭', label: 'GMP Certified' },
  { icon: '🇺🇸', label: 'Made in USA' },
  { icon: '✅', label: '60-Day Guarantee' },
]

export function TrustBadges() {
  return (
    <section className="py-8 px-4 max-w-lg mx-auto">
      <div className="grid grid-cols-4 gap-2">
        {badges.map((b, i) => (
          <div
            key={i}
            className="text-center p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]"
          >
            <span className="text-xl block mb-1">{b.icon}</span>
            <p className="text-[10px] font-medium text-gray-400 leading-tight">
              {b.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
export function FAQSection({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section className="py-10 px-4 max-w-lg mx-auto">
      <h2 className="text-xl font-bold text-white text-center mb-6">
        Common Questions
      </h2>
      <div className="space-y-2">
        {faqs.map((f, i) => (
          <div
            key={i}
            className="border border-white/[0.06] rounded-xl overflow-hidden"
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex justify-between items-center p-4 text-left text-white text-sm font-medium hover:bg-white/[0.02] transition"
            >
              {f.q}
              <span
                className={`ml-2 text-gray-500 transition-transform text-xs ${open === i ? 'rotate-180' : ''}`}
              >
                ▾
              </span>
            </button>
            {open === i && (
              <div className="px-4 pb-4 text-gray-400 text-sm leading-relaxed">
                {f.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── Sticky Footer CTA ──────────────────────────────────────────────────────
export function StickyFooterCTA({
  asin,
  price,
  name,
}: {
  asin: string
  price: string
  name: string
}) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-gray-950/95 backdrop-blur-lg border-t border-white/[0.06] p-3 z-50 transition-transform duration-300 ${visible ? 'translate-y-0' : 'translate-y-full'}`}
    >
      <div className="max-w-lg mx-auto flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="text-white font-bold text-sm truncate">{name}</p>
          <p className="text-gray-400 text-xs">{price} · Free Prime Shipping</p>
        </div>
        <a
          href={amazonLink(asin)}
          className="flex-shrink-0 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold py-2.5 px-5 rounded-full text-sm shadow-lg transition-all hover:scale-105 active:scale-95"
        >
          Get on Amazon →
        </a>
      </div>
    </div>
  )
}

// ─── Mid-page CTA ────────────────────────────────────────────────────────────
export function MidCTA({ asin, price }: { asin: string; price: string }) {
  return (
    <div className="text-center py-8 px-4">
      <a
        href={amazonLink(asin)}
        className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold py-3.5 px-8 rounded-full text-base shadow-lg shadow-amber-500/25 transition-all hover:scale-105 active:scale-95"
      >
        Get Yours — {price}
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </a>
    </div>
  )
}

// ─── Full Page Wrapper ───────────────────────────────────────────────────────
export function WarmupPage(props: ProductPageProps) {
  return (
    <div className="min-h-screen bg-gray-950 pb-24">
      <Hero {...props} />
      <Benefits benefits={props.benefits} />
      <MidCTA asin={props.asin} price={props.price} />
      {props.ingredients && <KeyIngredients ingredients={props.ingredients} />}
      <SocialProof rating={props.rating} reviewCount={props.reviewCount} />
      <TrustBadges />
      <FAQSection faqs={props.faqs} />
      <MidCTA asin={props.asin} price={props.price} />
      <StickyFooterCTA
        asin={props.asin}
        price={props.price}
        name={props.name}
      />
    </div>
  )
}
