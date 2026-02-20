'use client';

import React from 'react';

// ─── Types ───────────────────────────────────────────────────────────────────
export interface Benefit {
  icon: string;
  title: string;
  desc: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface ProductPageProps {
  name: string;
  asin: string;
  headline: string;
  subhead: string;
  rating: number;
  reviewCount: number;
  benefits: Benefit[];
  faqs: FAQ[];
  imagePlaceholder?: string;
}

// ─── Star Rating ─────────────────────────────────────────────────────────────
function Stars({ rating }: { rating: number }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} className={`w-5 h-5 ${i <= Math.round(rating) ? 'text-amber-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
        </svg>
      ))}
    </span>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────
export function Hero({ name, headline, subhead, asin, imagePlaceholder }: Pick<ProductPageProps, 'name' | 'headline' | 'subhead' | 'asin' | 'imagePlaceholder'>) {
  return (
    <section className="pt-8 pb-12 px-4 text-center max-w-2xl mx-auto">
      {/* Product image placeholder */}
      <div className="mx-auto mb-8 w-56 h-56 rounded-2xl bg-gradient-to-br from-emerald-900/30 to-emerald-800/10 border border-emerald-800/20 flex items-center justify-center">
        <span className="text-emerald-600/40 text-sm font-medium">{imagePlaceholder || `${name} Image`}</span>
      </div>
      <p className="text-amber-500 font-semibold text-sm tracking-widest uppercase mb-3">Pure Prana Ayurveda</p>
      <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">{headline}</h1>
      <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">{subhead}</p>
      <CTAButton asin={asin} />
    </section>
  );
}

// ─── Benefits ────────────────────────────────────────────────────────────────
export function Benefits({ benefits }: { benefits: Benefit[] }) {
  return (
    <section className="py-12 px-4 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-white text-center mb-8">Why Thousands Are Making the Switch</h2>
      <div className="grid gap-6">
        {benefits.map((b, i) => (
          <div key={i} className="flex gap-4 items-start bg-emerald-950/30 border border-emerald-800/20 rounded-xl p-5">
            <span className="text-3xl flex-shrink-0">{b.icon}</span>
            <div>
              <h3 className="font-semibold text-white mb-1">{b.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{b.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Social Proof ────────────────────────────────────────────────────────────
export function SocialProof({ rating, reviewCount }: { rating: number; reviewCount: number }) {
  return (
    <section className="py-12 px-4 max-w-2xl mx-auto text-center">
      <div className="bg-gradient-to-br from-emerald-950/50 to-emerald-900/20 border border-emerald-800/30 rounded-2xl p-8">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Stars rating={rating} />
          <span className="text-white font-bold text-lg">{rating}</span>
        </div>
        <p className="text-gray-300 mb-6">Based on {reviewCount} verified reviews</p>
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <div className="text-center">
            <p className="text-2xl font-bold text-amber-400">50K+</p>
            <p className="text-gray-400">Customers Trust Us</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-amber-400">4.8★</p>
            <p className="text-gray-400">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Trust Badges ────────────────────────────────────────────────────────────
const badges = [
  { icon: '🏭', label: 'GMP Certified' },
  { icon: '🏛️', label: 'FDA Registered Facility' },
  { icon: '🔬', label: 'Third-Party Tested' },
  { icon: '✅', label: '60-Day Guarantee' },
];

export function TrustBadges() {
  return (
    <section className="py-10 px-4 max-w-2xl mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {badges.map((b, i) => (
          <div key={i} className="text-center p-4 rounded-xl bg-emerald-950/20 border border-emerald-800/15">
            <span className="text-2xl block mb-2">{b.icon}</span>
            <p className="text-xs font-medium text-gray-300">{b.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
export function FAQSection({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = React.useState<number | null>(null);
  return (
    <section className="py-12 px-4 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-3">
        {faqs.map((f, i) => (
          <div key={i} className="border border-emerald-800/20 rounded-xl overflow-hidden">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex justify-between items-center p-5 text-left text-white font-medium hover:bg-emerald-950/20 transition"
            >
              {f.q}
              <span className={`ml-2 transition-transform ${open === i ? 'rotate-180' : ''}`}>▾</span>
            </button>
            {open === i && (
              <div className="px-5 pb-5 text-gray-400 text-sm leading-relaxed">{f.a}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── CTA Button ──────────────────────────────────────────────────────────────
export function CTAButton({ asin }: { asin: string }) {
  return (
    <a
      href={`AMAZON_LINK_${asin}`}
      className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold py-4 px-8 rounded-full text-lg shadow-lg shadow-amber-500/20 transition-all hover:scale-105 active:scale-95"
    >
      Get Yours on Amazon
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
    </a>
  );
}

// ─── Sticky Footer CTA ──────────────────────────────────────────────────────
export function StickyFooterCTA({ asin, price = '$29.95' }: { asin: string; price?: string }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-emerald-950/95 backdrop-blur border-t border-emerald-800/30 p-4 z-50">
      <div className="max-w-2xl mx-auto flex items-center justify-between">
        <div>
          <p className="text-white font-bold">{price}</p>
          <p className="text-gray-400 text-xs">Free Prime Shipping</p>
        </div>
        <a
          href={`AMAZON_LINK_${asin}`}
          className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold py-3 px-6 rounded-full text-sm shadow-lg transition-all hover:scale-105 active:scale-95"
        >
          Get Yours on Amazon →
        </a>
      </div>
    </div>
  );
}

// ─── Full Page Wrapper ───────────────────────────────────────────────────────
export function WarmupPage(props: ProductPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-emerald-950/10 to-gray-950 pb-24">
      <Hero {...props} />
      <Benefits benefits={props.benefits} />
      <SocialProof rating={props.rating} reviewCount={props.reviewCount} />
      <TrustBadges />
      <div className="text-center py-8"><CTAButton asin={props.asin} /></div>
      <FAQSection faqs={props.faqs} />
      <StickyFooterCTA asin={props.asin} />
    </div>
  );
}
