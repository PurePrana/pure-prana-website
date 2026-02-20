'use client';

import Image from 'next/image';
import { useState } from 'react';

const AMAZON_LINK = 'https://www.amazon.com/dp/B0DZ23LJGJ';

/* ─── FAQ Data ─── */
const faqs = [
  {
    q: 'How is this different from every other hormone supplement?',
    a: 'Most supplements hide behind "proprietary blends" so you never know what you\'re actually getting. We show every herb, every dosage, every extraction ratio. Six specific Ayurvedic herbs — not a kitchen-sink multivitamin. Each one chosen for a reason, dosed at clinically meaningful levels.',
  },
  {
    q: 'I\'ve wasted money on supplements before. Why would this work?',
    a: 'Fair question. Most hormone supplements give you one trendy ingredient at a low dose. This formula uses 6 herbs that have been used together in Ayurveda for thousands of years — Shatavari and Ashwagandha at potent 10:1 and 20:1 extracts (3000mg equivalent each). It\'s the synergy and the dosage that matter.',
  },
  {
    q: 'How long before I notice anything?',
    a: 'Most women report improved mood and less bloating within 2–3 weeks. For deeper hormonal shifts (cycle regulation, hot flash reduction), give it 6–8 weeks of consistent daily use. One capsule a day.',
  },
  {
    q: 'Is this safe? Any side effects?',
    a: 'All herbs are food-grade, vegan, non-GMO, and 3rd party tested for purity. Manufactured in a GMP-certified facility in the USA. That said, always check with your doctor if you\'re on medication.',
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-green-900/20">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-4 text-left"
      >
        <span className="font-medium text-gray-800">{q}</span>
        <span className="text-amber-600 text-xl ml-4 shrink-0">{open ? '−' : '+'}</span>
      </button>
      {open && <p className="pb-4 text-gray-600 text-sm leading-relaxed">{a}</p>}
    </div>
  );
}

/* ─── Supplement Facts ─── */
const ingredients = [
  { name: 'Shatavari Extract', amount: '300mg', ratio: '10:1', equiv: '3,000mg', role: 'Hormone regulation & reproductive health' },
  { name: 'Ashwagandha Extract', amount: '150mg', ratio: '20:1', equiv: '3,000mg', role: 'Cortisol control & stress adaptation' },
  { name: 'Tribulus Terrestris', amount: '100mg', ratio: '10:1', equiv: '500mg', role: 'Libido & vitality support' },
  { name: 'Ashoka Extract', amount: '50mg', ratio: '10:1', equiv: '500mg', role: 'Menstrual comfort & uterine health' },
  { name: 'Lodhra Extract', amount: '10mg', ratio: '10:1', equiv: '100mg', role: 'Hormonal balance & cycle regularity' },
  { name: 'Guduchi', amount: '10mg', ratio: '—', equiv: '10mg', role: 'Immune support & detoxification' },
];

export default function AyurvedicV1Page() {
  return (
    <div className="min-h-screen bg-stone-50 text-gray-900 pb-24">
      {/* Hero */}
      <section className="bg-gradient-to-b from-green-950 to-green-900 px-4 pt-10 pb-12 text-center">
        <p className="text-amber-400 text-sm font-semibold tracking-wide uppercase mb-3">
          For women who&apos;ve tried everything
        </p>
        <h1 className="text-white text-3xl sm:text-4xl font-bold leading-tight mb-4 max-w-md mx-auto">
          Tried Everything for Your Hormones?
          <span className="text-amber-400"> You Haven&apos;t Tried This.</span>
        </h1>
        <p className="text-green-200 text-base max-w-sm mx-auto mb-8">
          This isn&apos;t another random supplement. This is 5,000 years of Ayurvedic medicine in one capsule.
        </p>
        <div className="relative w-52 h-52 mx-auto mb-6">
          <Image
            src="/images/products/hormone-balance.jpg"
            alt="Pure Prana Hormonal Balance"
            fill
            className="object-contain drop-shadow-2xl"
            priority
          />
        </div>
        {/* Rating */}
        <div className="flex items-center justify-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={`text-lg ${i < 4 ? 'text-amber-400' : 'text-amber-400/50'}`}>★</span>
          ))}
          <span className="text-green-200 text-sm ml-2">4.6 · 47 reviews</span>
        </div>
      </section>

      {/* Supplement Fatigue Section */}
      <section className="px-4 py-10 max-w-lg mx-auto">
        <h2 className="text-xl font-bold text-gray-900 mb-4 text-center">
          Sound familiar?
        </h2>
        <div className="space-y-3">
          {[
            '"I\'ve spent hundreds on supplements and nothing changed."',
            '"Everyone says balance your hormones but nobody says HOW."',
            '"Maca, evening primrose, multivitamins... I\'ve tried them all."',
            '"I just want something that actually works."',
          ].map((quote, i) => (
            <div key={i} className="bg-white rounded-lg p-4 border border-green-100 shadow-sm">
              <p className="text-gray-700 text-sm italic">{quote}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600 text-sm mt-6">
          If you&apos;re nodding along — we built this for you.
        </p>
      </section>

      {/* Why This Is Different */}
      <section className="bg-white px-4 py-10">
        <div className="max-w-lg mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-2 text-center">
            We get your skepticism.
          </h2>
          <p className="text-gray-600 text-sm text-center mb-8">
            Here&apos;s exactly what&apos;s inside — no proprietary blends, no hiding.
          </p>

          <div className="space-y-1">
            {/* Header */}
            <div className="grid grid-cols-12 gap-2 text-xs font-semibold text-green-800 uppercase tracking-wide px-3 pb-2 border-b-2 border-green-800">
              <div className="col-span-4">Herb</div>
              <div className="col-span-2 text-center">Dose</div>
              <div className="col-span-2 text-center">Extract</div>
              <div className="col-span-4 text-right">Equiv.</div>
            </div>
            {ingredients.map((ing, i) => (
              <div key={i} className={`grid grid-cols-12 gap-2 text-sm px-3 py-3 rounded ${i % 2 === 0 ? 'bg-green-50' : ''}`}>
                <div className="col-span-4 font-medium text-gray-900">{ing.name}</div>
                <div className="col-span-2 text-center text-gray-600">{ing.amount}</div>
                <div className="col-span-2 text-center text-gray-600">{ing.ratio}</div>
                <div className="col-span-4 text-right font-semibold text-green-800">{ing.equiv}</div>
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-500 mt-4 text-center">
            Every ingredient. Every dosage. No secrets.
          </p>
        </div>
      </section>

      {/* The Difference */}
      <section className="px-4 py-10 max-w-lg mx-auto">
        <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
          Why other supplements failed you
        </h2>
        <div className="space-y-4">
          {[
            { icon: '❌', label: 'Single-herb supplements', desc: 'One ingredient can\'t address a complex hormonal system.' },
            { icon: '❌', label: '"Proprietary blends"', desc: 'Fancy way of saying "we won\'t tell you the dosage."' },
            { icon: '❌', label: 'Low-dose multivitamins', desc: 'A sprinkle of everything, enough of nothing.' },
            { icon: '❌', label: 'Trendy ingredients, no tradition', desc: 'Marketing-driven formulas that change every year.' },
          ].map((item, i) => (
            <div key={i} className="flex gap-3 items-start">
              <span className="text-lg shrink-0">{item.icon}</span>
              <div>
                <p className="font-semibold text-gray-900 text-sm">{item.label}</p>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-green-900 rounded-xl p-6 text-center">
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-wide mb-2">This formula</p>
          <p className="text-white text-lg font-bold mb-2">6 herbs. Real dosages. 5,000 years of use.</p>
          <p className="text-green-200 text-sm">
            Ayurveda doesn&apos;t guess — it uses synergistic combinations refined over millennia.
          </p>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="px-4 py-8 bg-white">
        <div className="max-w-lg mx-auto grid grid-cols-4 gap-3 text-center">
          {[
            { icon: '🇺🇸', label: 'Made in USA' },
            { icon: '✅', label: 'GMP Certified' },
            { icon: '🔬', label: '3rd Party Tested' },
            { icon: '🌱', label: 'Vegan' },
          ].map((badge, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <span className="text-2xl">{badge.icon}</span>
              <span className="text-xs font-medium text-gray-700">{badge.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-10 max-w-lg mx-auto">
        <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
          Still skeptical? Good.
        </h2>
        <div>
          {faqs.map((faq, i) => (
            <FAQItem key={i} {...faq} />
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-10 text-center max-w-lg mx-auto">
        <p className="text-gray-600 text-sm mb-4">
          60 capsules · 2-month supply · $29.95
        </p>
        <a
          href={AMAZON_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors shadow-lg"
        >
          Get on Amazon →
        </a>
        <p className="text-xs text-gray-500 mt-3">
          Free shipping with Prime · 30-day return policy
        </p>
      </section>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-green-950 border-t border-green-800 px-4 py-3 z-50">
        <div className="max-w-lg mx-auto flex items-center justify-between">
          <div>
            <p className="text-white text-sm font-semibold">Hormonal Balance</p>
            <p className="text-green-300 text-xs">$29.95 · 60 capsules</p>
          </div>
          <a
            href={AMAZON_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2.5 px-5 rounded-full text-sm transition-colors"
          >
            Get on Amazon →
          </a>
        </div>
      </div>
    </div>
  );
}
