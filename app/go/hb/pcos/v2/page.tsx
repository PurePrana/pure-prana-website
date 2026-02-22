'use client'

import Image from 'next/image'
import { useState } from 'react'

const AMAZON_LINK = 'https://www.amazon.com/dp/B0DZ23LJGJ?maas=maas_adg_api_582148481881009074_macro_2_358&ref_=aa_maas&tag=maas&aa_campaignid={{campaign.id}}&aa_adgroupid={{adset.id}}&aa_creativeid={{ad.id}}'

/* ───── FAQ ───── */
const faqs = [
  {
    q: 'How do these herbs actually work for PCOS?',
    a: 'PCOS involves multiple hormonal imbalances — elevated androgens, insulin resistance, high cortisol, and inflammation. Each herb in this formula targets a specific mechanism: Shatavari supports estrogen balance, Ashwagandha reduces cortisol (which drives androgen production), Tribulus supports healthy LH/FSH ratios, and Guduchi addresses chronic inflammation. They work on different pathways simultaneously.',
  },
  {
    q: 'Can I take this alongside inositol or Berberine?',
    a: 'Many women with PCOS stack supplements. These Ayurvedic herbs work on different mechanisms than inositol (insulin signaling) or Berberine (glucose metabolism), so they can complement each other. Always verify with your healthcare provider for your specific situation.',
  },
  {
    q: "What's the clinical evidence for Shatavari and Ashwagandha?",
    a: 'Ashwagandha has multiple clinical trials showing significant cortisol reduction (up to 30%) and stress hormone regulation. Shatavari has been studied for its phytoestrogenic properties and effects on reproductive health. Both have thousands of years of use in Ayurvedic medicine. While more PCOS-specific trials are needed, the mechanisms of action align directly with PCOS pathology.',
  },
  {
    q: 'How long do I need to take it?',
    a: 'Hormonal changes take time. Most women notice energy and mood improvements in 2-3 weeks. Cycle regulation typically takes 2-3 full cycles (8-12 weeks). We recommend committing to at least 3 months to properly evaluate results.',
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-teal-900/15">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-4 text-left"
      >
        <span className="font-medium text-gray-800 text-[15px]">{q}</span>
        <span className="text-teal-600 text-xl ml-4 shrink-0">
          {open ? '−' : '+'}
        </span>
      </button>
      {open && (
        <p className="pb-4 text-gray-600 text-sm leading-relaxed">{a}</p>
      )}
    </div>
  )
}

/* ───── PAGE ───── */
export default function PCOSv2Page() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="bg-gradient-to-b from-teal-50 via-emerald-50/20 to-white px-4 pt-8 pb-10 text-center max-w-lg mx-auto">
        <p className="text-teal-700 text-xs font-semibold uppercase tracking-widest mb-4">
          Science-Backed Ayurveda for PCOS
        </p>
        <h1 className="text-[26px] sm:text-3xl font-bold mb-4 leading-tight text-gray-900">
          6 Ayurvedic Herbs That Target What PCOS{' '}
          <span className="text-teal-700">Actually Does</span> to Your Body
        </h1>
        <p className="text-gray-600 text-base mb-6 leading-relaxed max-w-sm mx-auto">
          PCOS isn&apos;t one problem — it&apos;s five. Elevated androgens.
          Cortisol spikes. Estrogen imbalance. Inflammation. Insulin resistance.
          Here&apos;s how each herb addresses a different piece.
        </p>

        <div className="relative w-48 h-48 mx-auto mb-5">
          <Image
            src="/images/products/hormone-balance.jpg"
            alt="Pure Prana Hormonal Balance — 6 Ayurvedic Herbs for PCOS"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="flex items-center justify-center gap-1 mb-4">
          <span className="text-amber-400 text-lg">★★★★★</span>
          <span className="text-gray-900 font-bold ml-1">4.6</span>
          <span className="text-gray-500 text-sm ml-1">(47 reviews)</span>
        </div>

        <a
          href={AMAZON_LINK}
          className="inline-block bg-teal-700 hover:bg-teal-600 text-white font-bold py-3.5 px-8 rounded-full text-lg transition-colors shadow-lg shadow-teal-200"
        >
          Get It on Amazon — $29.95
        </a>
        <p className="text-gray-400 text-xs mt-2">
          60 Capsules · 2-Month Supply · Free Prime Shipping
        </p>
      </section>

      {/* The PCOS Mechanism */}
      <section className="px-4 py-10 bg-gray-50">
        <div className="max-w-lg mx-auto">
          <h2 className="text-xl font-bold text-center mb-2 text-gray-900">
            Why PCOS Is So Hard to Fix
          </h2>
          <p className="text-center text-gray-500 text-sm mb-6">
            It&apos;s not one broken thing. It&apos;s a cascade.
          </p>
          <div className="space-y-3">
            {[
              {
                label: 'High Cortisol',
                detail:
                  'Stress drives your adrenals to produce more androgens (testosterone, DHEA-S)',
                icon: '📈',
              },
              {
                label: 'Elevated Androgens',
                detail:
                  'Cause acne, hair loss, hirsutism, and block normal ovulation',
                icon: '⚡',
              },
              {
                label: 'Estrogen Imbalance',
                detail:
                  'Without regular ovulation, progesterone drops — periods vanish',
                icon: '🔄',
              },
              {
                label: 'Chronic Inflammation',
                detail:
                  'Drives insulin resistance, which feeds back into more androgen production',
                icon: '🔥',
              },
              {
                label: 'Insulin Resistance',
                detail:
                  'Tells your ovaries to make even more testosterone — the vicious cycle',
                icon: '🔁',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg">{item.icon}</span>
                  <h3 className="font-bold text-gray-900 text-sm">
                    {item.label}
                  </h3>
                </div>
                <p className="text-gray-600 text-xs leading-relaxed ml-7">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-teal-700 text-sm font-medium mt-6">
            A single-ingredient approach can&apos;t address all of this.
            That&apos;s why this formula uses 6 herbs.
          </p>
        </div>
      </section>

      {/* Herb Breakdown — Clinical */}
      <section className="px-4 py-10">
        <div className="max-w-lg mx-auto">
          <h2 className="text-xl font-bold text-center mb-2 text-gray-900">
            How Each Herb Targets PCOS
          </h2>
          <p className="text-center text-gray-500 text-sm mb-6">
            Mechanism of action, not marketing.
          </p>
          <div className="space-y-5">
            {[
              {
                name: 'Shatavari',
                dose: '3000mg equivalent',
                target: 'Estrogen & Reproductive Support',
                mechanism:
                  'Contains steroidal saponins (shatavarins) that support healthy estrogen activity. Nourishes the reproductive system and promotes regular ovulation. Known as the "Queen of Herbs" for women in Ayurveda.',
                color: 'bg-purple-50 border-purple-200',
                tag: '🌿',
              },
              {
                name: 'Ashwagandha',
                dose: '3000mg equivalent',
                target: 'Cortisol & Androgen Reduction',
                mechanism:
                  'Clinically shown to reduce cortisol by up to 30%. Lower cortisol = lower adrenal androgen output. Also supports thyroid function (common PCOS co-occurrence) and reduces chronic stress that worsens every PCOS symptom.',
                color: 'bg-amber-50 border-amber-200',
                tag: '🧘‍♀️',
              },
              {
                name: 'Tribulus Terrestris',
                dose: '500mg',
                target: 'Hormone Regulation & Ovulation',
                mechanism:
                  'Supports healthy LH (luteinizing hormone) levels and may promote regular ovulation. Used traditionally for reproductive vitality and hormonal equilibrium.',
                color: 'bg-pink-50 border-pink-200',
                tag: '🌸',
              },
              {
                name: 'Ashoka',
                dose: '500mg',
                target: 'Uterine Health & Cycle Regularity',
                mechanism:
                  'One of the most important herbs in Ayurveda for the female reproductive system. Traditionally used to support healthy uterine lining and regular menstruation.',
                color: 'bg-rose-50 border-rose-200',
                tag: '🌺',
              },
              {
                name: 'Lodhra',
                dose: '100mg',
                target: 'Hormonal & Reproductive Balance',
                mechanism:
                  'Classical Ayurvedic herb used specifically for female hormonal disorders. Studied for its potential to support healthy hormone ratios in women with reproductive imbalances.',
                color: 'bg-green-50 border-green-200',
                tag: '🍃',
              },
              {
                name: 'Guduchi',
                dose: '10mg',
                target: 'Inflammation & Immune Modulation',
                mechanism:
                  'Potent adaptogen and anti-inflammatory. Addresses the chronic low-grade inflammation that underlies insulin resistance in PCOS. Also supports immune balance and detoxification.',
                color: 'bg-teal-50 border-teal-200',
                tag: '✨',
              },
            ].map((herb, i) => (
              <div key={i} className={`${herb.color} border rounded-2xl p-5`}>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg">{herb.tag}</span>
                  <h3 className="font-bold text-gray-900">{herb.name}</h3>
                  <span className="text-teal-700 text-xs font-medium ml-auto bg-teal-100 px-2 py-0.5 rounded-full">
                    {herb.dose}
                  </span>
                </div>
                <p className="text-teal-800 text-xs font-semibold uppercase tracking-wide mb-2">
                  {herb.target}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {herb.mechanism}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison: What You've Tried vs This */}
      <section className="px-4 py-10 bg-gray-50">
        <div className="max-w-lg mx-auto">
          <h2 className="text-xl font-bold text-center mb-6 text-gray-900">
            What You&apos;ve Tried vs. What This Does Differently
          </h2>
          <div className="space-y-4">
            {[
              {
                tried: 'Birth Control',
                problem:
                  "Masks symptoms, doesn't fix the root cause. Periods disappear again when you stop.",
                different:
                  "These herbs support your body's own hormone production so changes persist.",
              },
              {
                tried: 'Metformin',
                problem:
                  'Addresses insulin resistance but ignores cortisol, estrogen, and inflammation.',
                different:
                  'Multi-pathway approach: cortisol (Ashwagandha), estrogen (Shatavari), inflammation (Guduchi) — all at once.',
              },
              {
                tried: 'Inositol / Ovasitol',
                problem:
                  "Great for insulin signaling, but that's one piece. Doesn't address stress hormones or estrogen.",
                different:
                  "Complements inositol by covering the pathways it doesn't touch. Many women use both.",
              },
              {
                tried: 'Spearmint Tea',
                problem:
                  "Mild anti-androgen effect, but you'd need 2+ cups daily and it's just one mechanism.",
                different:
                  '6 concentrated herbal extracts targeting multiple PCOS mechanisms in 1 capsule/day.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl overflow-hidden shadow-sm"
              >
                <div className="bg-red-50 px-4 py-2.5">
                  <p className="text-red-800 text-sm font-bold">
                    ❌ {item.tried}
                  </p>
                  <p className="text-red-700/70 text-xs mt-0.5">
                    {item.problem}
                  </p>
                </div>
                <div className="bg-teal-50 px-4 py-2.5">
                  <p className="text-teal-800 text-sm font-bold">
                    ✅ This Formula
                  </p>
                  <p className="text-teal-700/70 text-xs mt-0.5">
                    {item.different}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Talk from PCOS Communities */}
      <section className="px-4 py-10">
        <div className="max-w-lg mx-auto">
          <h2 className="text-xl font-bold text-center mb-6 text-gray-900">
            What Women in PCOS Communities Report
          </h2>
          <div className="space-y-4">
            {[
              {
                stat: '51%',
                label:
                  'reduction in free testosterone in 3 months with herbal supplements',
                source: 'r/PCOS',
              },
              {
                stat: '5 years',
                label:
                  'without a period — got it back with Shatavari + Ashwagandha',
                source: 'r/PCOS',
              },
              {
                stat: '2-3',
                label:
                  'cycles is what most women report before seeing cycle regulation',
                source: 'Multiple sources',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl p-5"
              >
                <p className="text-teal-700 text-3xl font-bold">{item.stat}</p>
                <p className="text-gray-700 text-sm mt-1">{item.label}</p>
                <p className="text-gray-400 text-xs mt-1">— {item.source}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-xs mt-4">
            Paraphrased from public posts. Individual results vary. Not clinical
            claims.
          </p>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="px-4 py-8 bg-gray-50">
        <div className="max-w-lg mx-auto">
          <div className="grid grid-cols-4 gap-3 text-center">
            {[
              { emoji: '🇺🇸', label: 'Made in USA' },
              { emoji: '✅', label: 'GMP Certified' },
              { emoji: '🔬', label: '3rd Party Tested' },
              { emoji: '🌱', label: '100% Vegan' },
            ].map((badge, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <span className="text-2xl">{badge.emoji}</span>
                <span className="text-gray-600 text-[10px] font-medium leading-tight">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product CTA */}
      <section className="px-4 py-10 bg-gradient-to-b from-teal-50 to-white">
        <div className="max-w-lg mx-auto text-center">
          <div className="relative w-44 h-44 mx-auto mb-4">
            <Image
              src="/images/products/hormone-balance.jpg"
              alt="Pure Prana Hormonal Balance"
              fill
              className="object-contain"
            />
          </div>
          <h2 className="text-xl font-bold mb-2 text-gray-900">
            Address PCOS at Multiple Pathways
          </h2>
          <p className="text-gray-600 text-sm mb-1">
            Pure Prana Hormonal Balance
          </p>
          <p className="text-gray-600 text-sm mb-4">
            6 Ayurvedic herbs · 60 capsules ·{' '}
            <strong className="text-gray-900">$29.95</strong>
          </p>
          <a
            href={AMAZON_LINK}
            className="inline-block bg-teal-700 hover:bg-teal-600 text-white font-bold py-3.5 px-8 rounded-full text-lg transition-colors shadow-lg shadow-teal-200"
          >
            Get It on Amazon →
          </a>
          <p className="text-gray-400 text-xs mt-3">
            Free Prime shipping · No subscription · 2-month supply
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-10">
        <div className="max-w-lg mx-auto">
          <h2 className="text-xl font-bold text-center mb-6 text-gray-900">
            Questions About PCOS &amp; This Formula
          </h2>
          {faqs.map((faq, i) => (
            <FAQItem key={i} {...faq} />
          ))}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="px-4 py-6 bg-gray-50">
        <div className="max-w-lg mx-auto">
          <p className="text-gray-400 text-[10px] leading-relaxed text-center">
            *These statements have not been evaluated by the Food and Drug
            Administration. This product is not intended to diagnose, treat,
            cure, or prevent any disease. Consult your healthcare provider
            before starting any supplement, especially if you have PCOS or take
            medication. Individual results may vary. Reddit quotes are
            paraphrased from public posts and do not constitute endorsement.
          </p>
        </div>
      </section>

      {/* Sticky Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 px-4 py-3 z-50">
        <div className="max-w-lg mx-auto flex items-center justify-between">
          <div>
            <p className="font-bold text-gray-900 text-sm">Hormonal Balance</p>
            <p className="text-gray-500 text-xs">$29.95 · 60 capsules</p>
          </div>
          <a
            href={AMAZON_LINK}
            className="bg-teal-700 hover:bg-teal-600 text-white font-bold py-2.5 px-5 rounded-full text-sm transition-colors"
          >
            Get on Amazon →
          </a>
        </div>
      </div>

      {/* Bottom spacer for sticky bar */}
      <div className="h-20" />
    </div>
  )
}
