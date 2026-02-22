'use client'

import Image from 'next/image'
import { useState } from 'react'

const AMAZON_LINK = 'https://www.amazon.com/dp/B0DZ23LJGJ?maas=maas_adg_api_582148481881009074_macro_2_358&ref_=aa_maas&tag=maas&aa_campaignid={{campaign.id}}&aa_adgroupid={{adset.id}}&aa_creativeid={{ad.id}}'

/* ─── Herb Data ─── */
const herbs = [
  {
    name: 'Shatavari',
    dose: '3,000mg equiv. (300mg, 10:1)',
    icon: '🌿',
    role: 'The Queen of Herbs',
    desc: "Used for centuries in Ayurveda specifically for women's reproductive health. Shatavari supports estrogen balance, soothes the reproductive system, and helps your body adapt to hormonal transitions — whether that's PMS, perimenopause, or menopause.",
  },
  {
    name: 'Ashwagandha',
    dose: '3,000mg equiv. (150mg, 20:1)',
    icon: '🧘',
    role: 'The Stress Adapter',
    desc: "Your hormones don't exist in isolation — cortisol (your stress hormone) directly disrupts estrogen, progesterone, and thyroid function. Ashwagandha is the most studied adaptogen in Ayurveda, helping regulate cortisol so your other hormones can do their jobs.",
  },
  {
    name: 'Tribulus Terrestris',
    dose: '500mg equiv. (100mg, 10:1)',
    icon: '⚡',
    role: 'The Vitality Herb',
    desc: "Supports healthy libido and energy levels that often decline with hormonal imbalance. Works synergistically with Shatavari to address the full spectrum of women's vitality.",
  },
  {
    name: 'Ashoka',
    dose: '500mg equiv. (50mg, 10:1)',
    icon: '🌸',
    role: 'The Uterine Tonic',
    desc: 'Named after the word for "without sorrow" in Sanskrit. Ashoka has been used for millennia to support uterine health, ease menstrual discomfort, and promote regular cycles.',
  },
  {
    name: 'Lodhra',
    dose: '100mg equiv. (10mg, 10:1)',
    icon: '🌺',
    role: 'The Hormone Regulator',
    desc: 'A lesser-known but powerful Ayurvedic herb that supports the pituitary gland — the "master gland" that controls your entire hormonal cascade. Lodhra helps restore order from the top down.',
  },
  {
    name: 'Guduchi',
    dose: '10mg',
    icon: '🛡️',
    role: 'The Immune Protector',
    desc: 'Known as "Amrita" (the root of immortality) in Ayurveda. Supports immune function and detoxification, creating a clean internal environment where hormones can function optimally.',
  },
]

const faqs = [
  {
    q: 'What makes Ayurvedic formulas different from Western supplements?',
    a: "Western supplements typically isolate a single compound. Ayurveda uses synergistic combinations — herbs that enhance each other's effects. Shatavari + Ashwagandha together address both the reproductive and stress-response systems simultaneously. That's why single-herb supplements often disappoint.",
  },
  {
    q: 'Is there actual science behind Ayurveda?',
    a: 'Yes. Ashwagandha alone has over 600 published studies. Shatavari, Tribulus, and Ashoka all have growing bodies of peer-reviewed research. Ayurveda identified these combinations thousands of years ago — modern science is now validating what traditional practitioners already knew.',
  },
  {
    q: 'How is this different from the maca / evening primrose / multivitamin I already tried?',
    a: 'Those are single-action ingredients. Maca stimulates energy, evening primrose provides fatty acids, multivitamins spread tiny doses across dozens of nutrients. This formula uses 6 targeted herbs at potent extract ratios (10:1 and 20:1) that work together on the hormonal system as a whole — stress response, reproductive health, cycle regulation, and immune support.',
  },
  {
    q: 'How long does it take to work?',
    a: 'Adaptogens build in your system over time. Most women notice mood and energy improvements in 2–3 weeks. Deeper hormonal shifts (cycle regularity, hot flash reduction) typically take 6–8 weeks. One capsule daily — consistency is key.',
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-green-900/20">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-4 text-left"
      >
        <span className="font-medium text-gray-800">{q}</span>
        <span className="text-amber-600 text-xl ml-4 shrink-0">
          {open ? '−' : '+'}
        </span>
      </button>
      {open && (
        <p className="pb-4 text-gray-600 text-sm leading-relaxed">{a}</p>
      )}
    </div>
  )
}

export default function AyurvedicV2Page() {
  return (
    <div className="min-h-screen bg-stone-50 text-gray-900 pb-24">
      {/* Hero */}
      <section className="bg-gradient-to-b from-emerald-950 via-green-900 to-green-800 px-4 pt-10 pb-12 text-center">
        <p className="text-amber-400 text-xs font-semibold tracking-widest uppercase mb-4">
          The science of synergy
        </p>
        <h1 className="text-white text-3xl sm:text-4xl font-bold leading-tight mb-4 max-w-md mx-auto">
          Western Supplements Treat Symptoms.
          <span className="text-amber-400"> Ayurveda Treats the System.</span>
        </h1>
        <p className="text-green-200 text-base max-w-sm mx-auto mb-8">
          Most supplements give you one herb. We give you six that work
          together.
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
        <div className="flex items-center justify-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`text-lg ${i < 4 ? 'text-amber-400' : 'text-amber-400/50'}`}
            >
              ★
            </span>
          ))}
          <span className="text-green-200 text-sm ml-2">4.6 · 47 reviews</span>
        </div>
      </section>

      {/* The Problem with Western Approach */}
      <section className="px-4 py-10 max-w-lg mx-auto">
        <h2 className="text-xl font-bold text-gray-900 mb-3 text-center">
          Why single-ingredient supplements keep failing you
        </h2>
        <p className="text-gray-600 text-sm text-center mb-8 max-w-sm mx-auto">
          Your hormonal system is a web of interconnected signals. Throwing one
          ingredient at it is like fixing an orchestra by tuning one instrument.
        </p>
        <div className="grid grid-cols-2 gap-3">
          {[
            {
              icon: '💊',
              label: 'Maca',
              issue:
                "Stimulates energy but doesn't address cortisol or cycle regulation",
            },
            {
              icon: '💊',
              label: 'Evening Primrose',
              issue:
                "Provides GLA fatty acids but doesn't touch stress hormones",
            },
            {
              icon: '💊',
              label: 'Multivitamins',
              issue: 'Tiny doses of 30+ nutrients — not enough of anything',
            },
            {
              icon: '💊',
              label: 'Vitex / Chasteberry',
              issue:
                'Works on one pathway but ignores adrenal & immune factors',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-lg p-3 border border-red-100 shadow-sm"
            >
              <span className="text-lg">{item.icon}</span>
              <p className="font-semibold text-sm text-gray-900 mt-1">
                {item.label}
              </p>
              <p className="text-xs text-gray-500 mt-1">{item.issue}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Ayurvedic Approach */}
      <section className="bg-green-900 px-4 py-10 text-center">
        <div className="max-w-lg mx-auto">
          <p className="text-amber-400 text-xs font-semibold tracking-widest uppercase mb-3">
            The Ayurvedic approach
          </p>
          <h2 className="text-white text-xl font-bold mb-3">
            Treat the system, not the symptom
          </h2>
          <p className="text-green-200 text-sm max-w-sm mx-auto mb-6">
            Ayurveda doesn&apos;t isolate — it orchestrates. Each herb in this
            formula targets a different part of your hormonal ecosystem.
            Together, they create balance that no single ingredient can achieve
            alone.
          </p>
          <div className="grid grid-cols-3 gap-4 text-center">
            {[
              { icon: '🧘', label: 'Stress Response', desc: 'Ashwagandha' },
              {
                icon: '🌿',
                label: 'Reproductive Health',
                desc: 'Shatavari + Ashoka',
              },
              { icon: '🛡️', label: 'Immune & Detox', desc: 'Guduchi + Lodhra' },
            ].map((pillar, i) => (
              <div key={i}>
                <span className="text-3xl">{pillar.icon}</span>
                <p className="text-amber-400 text-xs font-semibold mt-2">
                  {pillar.label}
                </p>
                <p className="text-green-300 text-xs mt-1">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The 6 Herbs — Deep Dive */}
      <section className="px-4 py-10 max-w-lg mx-auto">
        <h2 className="text-xl font-bold text-gray-900 mb-2 text-center">
          6 herbs. Each one chosen for a reason.
        </h2>
        <p className="text-gray-500 text-sm text-center mb-8">
          No fillers. No trendy add-ons. Every ingredient earns its place.
        </p>
        <div className="space-y-4">
          {herbs.map((herb, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-green-100 shadow-sm overflow-hidden"
            >
              <div className="bg-green-50 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{herb.icon}</span>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">
                      {herb.name}
                    </p>
                    <p className="text-amber-700 text-xs font-medium">
                      {herb.role}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono text-green-800 bg-green-100 px-2 py-1 rounded">
                  {herb.dose}
                </span>
              </div>
              <div className="px-4 py-3">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {herb.desc}
                </p>
              </div>
            </div>
          ))}
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
              <span className="text-xs font-medium text-gray-700">
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-10 max-w-lg mx-auto">
        <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
          Questions a smart woman would ask
        </h2>
        <div>
          {faqs.map((faq, i) => (
            <FAQItem key={i} {...faq} />
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-10 text-center max-w-lg mx-auto">
        <p className="text-gray-900 font-bold text-lg mb-2">
          Ready to try the system approach?
        </p>
        <p className="text-gray-600 text-sm mb-6">
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
  )
}
