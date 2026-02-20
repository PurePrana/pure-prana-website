'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { Metadata } from 'next';

const AMAZON_LINK = 'https://www.amazon.com/dp/B0CWS4NCCF';

const faqs = [
  {
    q: 'How is this different from taking Shilajit alone?',
    a: 'Most Shilajit supplements are just Shilajit. Power Blend combines 5 synergistic Ayurvedic herbs — Shilajit, Ashwagandha (3000mg equivalent), Gokshura, Mucuna Pruriens, and Safed Musli — designed to work together for energy, vitality, and focus. It\'s the stack, not a single ingredient.',
  },
  {
    q: 'What\'s the actual dosage?',
    a: 'Each capsule contains concentrated extracts: Shilajit 300mg (20:1 extract = 6000mg powder equivalent), Ashwagandha 150mg (20:1 = 3000mg equivalent), Gokshura 150mg (10:1 = 1000mg), plus Mucuna Pruriens and Safed Musli. One capsule daily.',
  },
  {
    q: 'Is this third-party tested?',
    a: 'Yes. Every batch is HPTLC-tested in a US lab. All 5 ingredients passed identification testing. We also test for heavy metals, microbials, and potency. The Certificate of Analysis is available on our Amazon listing.',
  },
  {
    q: 'When will I feel results?',
    a: 'Most men notice improved energy and focus within the first 1-2 weeks. For the full adaptogenic benefits — stamina, strength, recovery — give it 21-30 days of consistent daily use.',
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-700">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-4 text-left"
      >
        <span className="font-medium text-white">{q}</span>
        <span className="text-amber-400 text-xl ml-4">{open ? '−' : '+'}</span>
      </button>
      {open && <p className="pb-4 text-gray-300 text-sm leading-relaxed">{a}</p>}
    </div>
  );
}

export default function PowerBlendPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero */}
      <section className="px-4 pt-8 pb-10 text-center max-w-lg mx-auto">
        <div className="relative w-64 h-64 mx-auto mb-6">
          <Image
            src="/images/products/power-blend.jpg"
            alt="Pure Prana Power Blend - Shilajit, Ashwagandha & Gokshura"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="flex items-center justify-center gap-1 mb-2">
          <span className="text-amber-400 text-lg">★★★★</span>
          <span className="text-amber-400 text-lg">☆</span>
          <span className="text-white font-bold ml-1">3.9</span>
          <span className="text-gray-400 text-sm ml-1">(93 reviews)</span>
        </div>
        <h1 className="text-3xl font-bold mb-3 leading-tight">
          5 Himalayan Herbs.<br />
          <span className="text-amber-400">One Capsule.</span>
        </h1>
        <p className="text-gray-300 text-base mb-6 leading-relaxed">
          Shilajit + Ashwagandha + Gokshura + Mucuna + Safed Musli — the Ayurvedic power stack for men who want real energy, not caffeine crashes.
        </p>
        <a
          href={AMAZON_LINK}
          className="inline-block bg-amber-500 hover:bg-amber-400 text-black font-bold py-3.5 px-8 rounded-full text-lg transition-colors"
        >
          Get It on Amazon — $29.95
        </a>
        <p className="text-gray-500 text-xs mt-2">✓ Free Prime Shipping · ✓ 60 Veggie Capsules</p>
      </section>

      {/* What's Inside */}
      <section className="bg-gray-900 px-4 py-10">
        <div className="max-w-lg mx-auto">
          <h2 className="text-xl font-bold text-center mb-6">What's Actually Inside</h2>
          <div className="space-y-4">
            {[
              { name: 'Shilajit', dose: '6,000mg equiv.', icon: '🏔️', desc: 'Himalayan mineral resin. Fulvic acid + 80+ trace minerals for cellular energy.' },
              { name: 'Ashwagandha', dose: '3,000mg equiv.', icon: '🌿', desc: 'KSM-66 level dosing. Cortisol regulation, strength, and recovery.' },
              { name: 'Gokshura', dose: '1,000mg equiv.', icon: '💪', desc: 'Tribulus Terrestris. Supports natural testosterone and athletic performance.' },
              { name: 'Mucuna Pruriens', dose: '1,000mg equiv.', icon: '🧠', desc: 'Natural L-DOPA source. Mood, motivation, and dopamine support.' },
              { name: 'Safed Musli', dose: '1,000mg equiv.', icon: '⚡', desc: 'The "white gold" of Ayurveda. Stamina and vitality for men.' },
            ].map((herb) => (
              <div key={herb.name} className="bg-gray-800 rounded-xl p-4 flex gap-4">
                <span className="text-2xl">{herb.icon}</span>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-bold text-white">{herb.name}</span>
                    <span className="text-amber-400 text-sm font-mono">{herb.dose}</span>
                  </div>
                  <p className="text-gray-400 text-sm mt-0.5">{herb.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-xs mt-4">
            20:1 concentrated extracts · Vegetarian capsules · No fillers
          </p>
        </div>
      </section>

      {/* Why Not Just Shilajit */}
      <section className="px-4 py-10">
        <div className="max-w-lg mx-auto">
          <h2 className="text-xl font-bold text-center mb-2">Why Not Just Take Shilajit?</h2>
          <p className="text-gray-400 text-center text-sm mb-6">Because isolated herbs only do part of the job.</p>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-900 rounded-xl p-4 text-center">
              <div className="text-red-400 text-2xl mb-2">✕</div>
              <p className="text-sm font-medium text-gray-300">Other Brands</p>
              <p className="text-xs text-gray-500 mt-1">Random herb mixes, silica capsules, hidden sourcing</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-4 text-center border border-amber-500/30">
              <div className="text-green-400 text-2xl mb-2">✓</div>
              <p className="text-sm font-medium text-white">Power Blend</p>
              <p className="text-xs text-gray-400 mt-1">5 synergistic herbs, veggie capsules, transparent sourcing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-gray-900 px-4 py-8">
        <div className="max-w-lg mx-auto grid grid-cols-4 gap-2 text-center">
          {[
            { icon: '🇺🇸', label: 'Made in USA' },
            { icon: '✅', label: 'GMP Certified' },
            { icon: '🔬', label: '3rd Party Tested' },
            { icon: '🌱', label: '100% Vegan' },
          ].map((badge) => (
            <div key={badge.label}>
              <div className="text-2xl mb-1">{badge.icon}</div>
              <p className="text-xs text-gray-400">{badge.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Social Proof */}
      <section className="px-4 py-10">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-xl font-bold mb-6">What Men Are Saying</h2>
          <div className="space-y-4">
            {[
              { text: '"I see the difference and I loved it. Energy levels are way up."', stars: 5 },
              { text: '"Skip the random mixes — this blend is the ultimate way to take Shilajit."', stars: 5 },
              { text: '"Better than taking 5 separate supplements. One capsule, done."', stars: 4 },
            ].map((review, i) => (
              <div key={i} className="bg-gray-900 rounded-xl p-4 text-left">
                <div className="text-amber-400 text-sm mb-1">{'★'.repeat(review.stars)}{'☆'.repeat(5 - review.stars)}</div>
                <p className="text-gray-300 text-sm italic">{review.text}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-xs mt-3">From verified Amazon purchases</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-900 px-4 py-10">
        <div className="max-w-lg mx-auto">
          <h2 className="text-xl font-bold text-center mb-6">Common Questions</h2>
          {faqs.map((faq) => (
            <FAQItem key={faq.q} {...faq} />
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-12 text-center">
        <div className="max-w-lg mx-auto">
          <p className="text-amber-400 font-bold text-lg mb-2">$29.95 · 60-Day Supply</p>
          <h2 className="text-2xl font-bold mb-4">Ready to Feel the Difference?</h2>
          <a
            href={AMAZON_LINK}
            className="inline-block bg-amber-500 hover:bg-amber-400 text-black font-bold py-3.5 px-8 rounded-full text-lg transition-colors"
          >
            Get Power Blend on Amazon →
          </a>
          <p className="text-gray-500 text-xs mt-3">Free Prime shipping · 60 veggie capsules · GMP certified</p>
        </div>
      </section>

      {/* Sticky Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-950/95 backdrop-blur border-t border-gray-800 px-4 py-3 z-50">
        <div className="max-w-lg mx-auto flex items-center justify-between">
          <div>
            <p className="font-bold text-white text-sm">Power Blend</p>
            <p className="text-amber-400 text-sm font-bold">$29.95 <span className="text-gray-500 font-normal text-xs">Free Prime</span></p>
          </div>
          <a
            href={AMAZON_LINK}
            className="bg-amber-500 hover:bg-amber-400 text-black font-bold py-2.5 px-6 rounded-full text-sm transition-colors"
          >
            Get on Amazon →
          </a>
        </div>
      </div>

      {/* Bottom padding for sticky CTA */}
      <div className="h-20" />
    </div>
  );
}
