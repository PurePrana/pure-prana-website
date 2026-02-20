'use client'

import Image from 'next/image'
import { useState } from 'react'

const AMAZON_LINK = 'https://www.amazon.com/dp/B0DZ23LJGJ'

/* ───── FAQ ───── */
const faqs = [
  {
    q: 'Can this actually help regulate my cycle with PCOS?',
    a: "Shatavari has been used for centuries in Ayurveda specifically for women's reproductive health. Combined with Ashwagandha (which helps lower cortisol and may reduce elevated androgens), many women with PCOS report cycle improvements within 2-3 months of consistent use. Results vary — this isn't a cure, but it supports your body's natural hormone balance.",
  },
  {
    q: 'How is this different from inositol or Ovasitol?',
    a: 'Inositol works primarily on insulin sensitivity. This formula takes a different approach — targeting stress hormones (Ashwagandha), estrogen support (Shatavari), and inflammation (Guduchi). Some women use both. They address different pieces of the PCOS puzzle.',
  },
  {
    q: 'How long before I see results?',
    a: "Most women notice improved energy and mood within 2-3 weeks. For cycle changes, give it 2-3 full cycles (8-12 weeks). PCOS didn't develop overnight, and herbal support works gradually with your body, not against it.",
  },
  {
    q: 'Is it safe to take with Metformin or birth control?',
    a: "These are food-grade Ayurvedic herbs, not synthetic hormones. That said, always check with your doctor before combining supplements with medication — especially if you're on hormone therapy or blood sugar medication.",
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-purple-900/20">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-4 text-left"
      >
        <span className="font-medium text-gray-800 text-[15px]">{q}</span>
        <span className="text-purple-500 text-xl ml-4 shrink-0">
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
export default function PCOSv1Page() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="bg-gradient-to-b from-purple-50 via-pink-50/30 to-white px-4 pt-8 pb-10 text-center max-w-lg mx-auto">
        <p className="text-purple-600 text-xs font-semibold uppercase tracking-widest mb-4">
          For Women with PCOS
        </p>
        <h1 className="text-[28px] sm:text-3xl font-bold mb-4 leading-tight text-gray-900">
          PCOS Took Your Cycle.
          <br />
          <span className="text-purple-600">
            Ayurveda Can Help You Get It Back.
          </span>
        </h1>
        <p className="text-gray-600 text-base mb-6 leading-relaxed max-w-sm mx-auto">
          Shatavari, Ashwagandha & 4 other Ayurvedic herbs that support natural
          cycle regulation — without synthetic hormones or band-aid fixes.
        </p>

        <div className="relative w-52 h-52 mx-auto mb-5">
          <Image
            src="/images/products/hormone-balance.jpg"
            alt="Pure Prana Hormonal Balance — Ayurvedic PCOS Support"
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
          className="inline-block bg-purple-600 hover:bg-purple-500 text-white font-bold py-3.5 px-8 rounded-full text-lg transition-colors shadow-lg shadow-purple-200"
        >
          Get It on Amazon — $29.95
        </a>
        <p className="text-gray-400 text-xs mt-2">
          ✓ Free Prime Shipping · 60 Capsules (2-month supply)
        </p>
      </section>

      {/* The Reality of PCOS */}
      <section className="px-4 py-10 bg-purple-50/40">
        <div className="max-w-lg mx-auto">
          <h2 className="text-xl font-bold text-center mb-2 text-gray-900">
            If You Have PCOS, You Know.
          </h2>
          <p className="text-center text-gray-500 text-sm mb-6">
            It&apos;s not just &quot;irregular periods.&quot; It&apos;s
            everything.
          </p>
          <div className="space-y-3">
            {[
              {
                emoji: '🩸',
                text: 'Periods that vanish for months — or show up whenever they want',
              },
              {
                emoji: '😔',
                text: 'Acne that makes you feel like a teenager again (not in a good way)',
              },
              {
                emoji: '💇‍♀️',
                text: "Hair thinning on your head while growing where you don't want it",
              },
              {
                emoji: '⚖️',
                text: 'Weight that clings to your midsection no matter what you do',
              },
              {
                emoji: '😩',
                text: 'Fatigue, brain fog, and mood swings that nobody sees',
              },
              {
                emoji: '💊',
                text: 'Being told "just take birth control" — like that fixes anything',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white rounded-xl p-3.5 shadow-sm"
              >
                <span className="text-xl shrink-0">{item.emoji}</span>
                <p className="text-gray-700 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shatavari — The Star */}
      <section className="px-4 py-10">
        <div className="max-w-lg mx-auto">
          <h2 className="text-xl font-bold text-center mb-2 text-gray-900">
            Meet Shatavari — The &quot;Queen of Herbs&quot;
          </h2>
          <p className="text-center text-gray-500 text-sm mb-6">
            Used for thousands of years in Ayurveda specifically for
            women&apos;s reproductive health.
          </p>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 mb-6">
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              Shatavari (Asparagus racemosus) literally translates to{' '}
              <strong>&quot;she who has a hundred husbands&quot;</strong> — a
              nod to its power for women&apos;s vitality. It&apos;s been the
              go-to herb in Ayurvedic medicine for:
            </p>
            <ul className="space-y-2">
              {[
                'Supporting healthy estrogen levels',
                'Nourishing the reproductive system',
                'Promoting regular ovulation',
                'Easing PMS and hormonal mood swings',
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-gray-700"
                >
                  <span className="text-purple-500 mt-0.5">✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed text-center italic">
            &quot;I haven&apos;t had my period in 5 years. Started taking
            Shatavari + Ashwagandha and it came back in 3 months.&quot;
            <br />
            <span className="text-gray-400 text-xs not-italic">— r/PCOS</span>
          </p>
        </div>
      </section>

      {/* The 6-Herb Formula */}
      <section className="px-4 py-10 bg-gray-50">
        <div className="max-w-lg mx-auto">
          <h2 className="text-xl font-bold text-center mb-6 text-gray-900">
            6 Herbs Working Together for Your Cycle
          </h2>
          <div className="space-y-4">
            {[
              {
                name: 'Shatavari',
                dose: '3000mg equiv.',
                role: 'Estrogen support & reproductive nourishment',
                emoji: '🌿',
              },
              {
                name: 'Ashwagandha',
                dose: '3000mg equiv.',
                role: 'Lowers cortisol & helps reduce elevated androgens',
                emoji: '🧘‍♀️',
              },
              {
                name: 'Tribulus Terrestris',
                dose: '500mg',
                role: 'Supports healthy hormone regulation & ovulation',
                emoji: '🌸',
              },
              {
                name: 'Ashoka',
                dose: '500mg',
                role: 'Traditional uterine tonic — supports cycle regularity',
                emoji: '🌺',
              },
              {
                name: 'Lodhra',
                dose: '100mg',
                role: 'Used in Ayurveda for reproductive & hormonal support',
                emoji: '🍃',
              },
              {
                name: 'Guduchi',
                dose: '10mg',
                role: 'Immune support & inflammation balance',
                emoji: '✨',
              },
            ].map((herb, i) => (
              <div key={i} className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg">{herb.emoji}</span>
                  <h3 className="font-bold text-gray-900">{herb.name}</h3>
                  <span className="text-purple-600 text-xs font-medium ml-auto">
                    {herb.dose}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{herb.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Journey */}
      <section className="px-4 py-10">
        <div className="max-w-lg mx-auto">
          <h2 className="text-xl font-bold text-center mb-6 text-gray-900">
            What the Journey Looks Like
          </h2>
          <div className="space-y-4">
            {[
              {
                week: 'Weeks 1-2',
                title: 'The Foundation',
                desc: 'Better sleep, calmer mood, more energy. The adaptogens are getting to work.',
                emoji: '🌱',
              },
              {
                week: 'Weeks 3-6',
                title: 'The Shift',
                desc: 'Less bloating, fewer cravings, skin starts to clear. You feel more like yourself.',
                emoji: '🌿',
              },
              {
                week: 'Weeks 6-12',
                title: 'The Breakthrough',
                desc: 'Cycle changes begin. Periods may become more regular. This is where consistency pays off.',
                emoji: '🌸',
              },
            ].map((phase, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <span className="text-2xl">{phase.emoji}</span>
                  {i < 2 && <div className="w-px h-full bg-purple-200 mt-1" />}
                </div>
                <div className="pb-4">
                  <p className="text-purple-600 text-xs font-semibold uppercase">
                    {phase.week}
                  </p>
                  <h3 className="font-bold text-gray-900">{phase.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-xs mt-4">
            Individual results vary. These timelines reflect common experiences
            shared in PCOS communities.
          </p>
        </div>
      </section>

      {/* Social Proof Quotes */}
      <section className="px-4 py-10 bg-purple-50/40">
        <div className="max-w-lg mx-auto">
          <h2 className="text-xl font-bold text-center mb-6 text-gray-900">
            What Women Are Saying
          </h2>
          <div className="space-y-4">
            {[
              {
                quote:
                  'Reduced my free testosterone by 51% in 3 months with herbal supplements. My doctor was shocked.',
                source: 'r/PCOS',
              },
              {
                quote:
                  "After years of nothing working, I tried Shatavari. Got my period back within 2 cycles. Still can't believe it.",
                source: 'r/PCOS',
              },
              {
                quote:
                  'I was so tired of being told to just take birth control. Wanted something that actually worked WITH my body.',
                source: 'r/WomensHealth',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-5 shadow-sm">
                <p className="text-gray-700 text-sm italic leading-relaxed">
                  &quot;{item.quote}&quot;
                </p>
                <p className="text-gray-400 text-xs mt-2">— {item.source}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-xs mt-4">
            Paraphrased from public Reddit posts. Individual results vary.
          </p>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="px-4 py-8">
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
      <section className="px-4 py-10 bg-gradient-to-b from-purple-50 to-white">
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
            Ready to Support Your Cycle Naturally?
          </h2>
          <p className="text-gray-600 text-sm mb-1">
            Pure Prana Hormonal Balance
          </p>
          <p className="text-gray-600 text-sm mb-4">
            60 capsules · 2-month supply ·{' '}
            <strong className="text-gray-900">$29.95</strong>
          </p>
          <a
            href={AMAZON_LINK}
            className="inline-block bg-purple-600 hover:bg-purple-500 text-white font-bold py-3.5 px-8 rounded-full text-lg transition-colors shadow-lg shadow-purple-200"
          >
            Get It on Amazon →
          </a>
          <p className="text-gray-400 text-xs mt-3">
            Free Prime shipping · No subscription needed
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-10">
        <div className="max-w-lg mx-auto">
          <h2 className="text-xl font-bold text-center mb-6 text-gray-900">
            Common Questions
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
            before starting any supplement, especially if you have a medical
            condition or take medication. Individual results may vary.
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
            className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-2.5 px-5 rounded-full text-sm transition-colors"
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
