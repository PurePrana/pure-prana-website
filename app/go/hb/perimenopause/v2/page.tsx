'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const AMAZON_URL = 'https://www.amazon.com/dp/B0DZ23LJGJ'

const symptoms = [
  'Hot flashes — sometimes multiple times a day',
  'Night sweats that wake you at 2am or 3am',
  'Brain fog so thick you forget words mid-sentence',
  'Fatigue that sleep doesn\'t fix',
  'Mood swings that feel completely out of character',
  'Weight gain — especially around the midsection',
  'Low or nonexistent libido',
  'Joint pain that came out of nowhere',
  'Hair thinning or loss',
  'Trouble falling or staying asleep',
]

const herbs = [
  { name: 'Ashwagandha', amount: '3,000mg equiv.', target: 'Cortisol & Stress', desc: 'The #1 adaptogen for stress. Regulates cortisol — the hormone behind hot flashes, insomnia, and that wired-but-tired feeling. Clinically shown to reduce anxiety and improve sleep quality.' },
  { name: 'Shatavari', amount: '3,000mg equiv.', target: 'Estrogen Support', desc: 'Known as the "queen of herbs" in Ayurveda. Contains phytoestrogens that gently support declining estrogen levels — helping with dryness, mood, and overall hormonal balance.' },
  { name: 'Tribulus Terrestris', amount: '500mg', target: 'Libido & Vitality', desc: 'Traditionally used to support sexual health and desire. Helps restore the spark that perimenopause can dim.' },
  { name: 'Ashoka', amount: '500mg', target: 'Mood & Cycle', desc: 'Its name literally means "without sorrow." Used for centuries to support emotional balance and healthy menstrual function during the transition.' },
  { name: 'Lodhra', amount: '100mg', target: 'Hormonal Balance', desc: 'A lesser-known but powerful herb for reproductive health and hormonal regulation.' },
  { name: 'Guduchi', amount: 'Included', target: 'Immune & Rejuvenation', desc: 'Called "the one who protects the body." Supports immune function and cellular health during a time when your body needs extra support.' },
]

const faqs = [
  {
    q: 'How is this different from just buying ashwagandha?',
    a: 'Ashwagandha alone addresses cortisol — but perimenopause involves estrogen, progesterone, cortisol, and more. This formula combines 6 herbs that work together: Shatavari for estrogen support, Ashoka for mood, Tribulus for libido, and more. It\'s a system, not a single ingredient.',
  },
  {
    q: 'When will I start feeling results?',
    a: 'Adaptogens work cumulatively. Some women notice improved sleep within 1–2 weeks. Most feel meaningful changes in hot flashes, mood, and energy by weeks 4–6. We recommend committing to at least 60 days.',
  },
  {
    q: 'Is this safe if I\'m not on HRT?',
    a: 'Yes — this formula is designed to support your body\'s natural hormonal processes whether you\'re on HRT or not. These herbs have been used safely for centuries. As always, consult your doctor if you have specific health concerns.',
  },
  {
    q: 'I\'m 52 and in full menopause. Is this still for me?',
    a: 'Absolutely. The herbs support hormonal balance across the entire transition — perimenopause, menopause, and post-menopause. Many women continue taking adaptogenic herbs well into their 60s for ongoing vitality.',
  },
]

function Stars({ rating, count }: { rating: number; count: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((i) => (
          <svg key={i} className={`w-5 h-5 ${i <= Math.floor(rating) ? 'text-amber-400' : i - 0.5 <= rating ? 'text-amber-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span className="text-sm text-gray-600">{rating} · {count} reviews</span>
    </div>
  )
}

export default function PerimenopauseV2() {
  const [checked, setChecked] = useState<boolean[]>(new Array(symptoms.length).fill(false))
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const checkedCount = checked.filter(Boolean).length

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 pb-24">
      {/* Hero */}
      <section className="bg-gradient-to-b from-amber-50 via-purple-50 to-stone-50 px-5 pt-12 pb-10">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-sm uppercase tracking-widest text-purple-600 mb-3">Perimenopause & Menopause Support</p>
          <h1 className="text-3xl md:text-4xl font-serif font-bold leading-tight text-stone-900 mb-4">
            Hot Flashes. Night Sweats.<br />Brain Fog. <span className="text-purple-700">Sound Familiar?</span>
          </h1>
          <p className="text-lg text-stone-600 leading-relaxed">
            Check the symptoms you&rsquo;re experiencing. Then see exactly which herbs address each one.
          </p>
        </div>
      </section>

      {/* Symptom Checklist */}
      <section className="px-5 py-8">
        <div className="max-w-xl mx-auto">
          <h2 className="text-xl font-serif font-bold text-center mb-5">How many of these hit home?</h2>
          <div className="space-y-2.5">
            {symptoms.map((symptom, i) => (
              <label
                key={i}
                className={`flex items-center gap-3 p-3.5 rounded-xl cursor-pointer transition-all border ${
                  checked[i]
                    ? 'bg-purple-50 border-purple-300 shadow-sm'
                    : 'bg-white border-stone-200 hover:border-purple-200'
                }`}
              >
                <input
                  type="checkbox"
                  checked={checked[i]}
                  onChange={() => {
                    const next = [...checked]
                    next[i] = !next[i]
                    setChecked(next)
                  }}
                  className="w-5 h-5 rounded border-stone-300 text-purple-600 focus:ring-purple-500"
                />
                <span className="text-stone-700 text-sm">{symptom}</span>
              </label>
            ))}
          </div>
          {checkedCount >= 3 && (
            <div className="mt-6 text-center p-4 bg-purple-50 rounded-xl border border-purple-200">
              <p className="text-purple-800 font-medium">
                You checked {checkedCount} out of {symptoms.length}. {checkedCount >= 6 ? 'You\'re not alone — and you\'re not imagining it.' : 'These are real perimenopause symptoms.'}
              </p>
              <p className="text-purple-600 text-sm mt-1">Keep reading — there&rsquo;s a reason this is happening, and there&rsquo;s something you can do.</p>
            </div>
          )}
        </div>
      </section>

      {/* What's Happening */}
      <section className="px-5 py-10 bg-white">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-serif font-bold text-center mb-3">Here&rsquo;s What&rsquo;s Actually Happening</h2>
          <div className="text-stone-600 space-y-3 mb-8">
            <p>During perimenopause, your estrogen and progesterone don&rsquo;t just decline — they <strong>fluctuate wildly</strong>. One week you have too much estrogen, the next not enough. Meanwhile, cortisol (your stress hormone) stays elevated because your body perceives the hormonal chaos as a threat.</p>
            <p>The result? Hot flashes. Insomnia. Brain fog. Mood swings. Weight gain. Low libido. Joint pain. It&rsquo;s not one symptom — it&rsquo;s a cascade.</p>
            <p className="font-medium text-stone-800">You need something that addresses the whole system. Not just one symptom.</p>
          </div>

          {/* Product Image */}
          <div className="flex justify-center mb-6">
            <Image
              src="/images/products/hormone-balance.jpg"
              alt="Pure Prana Hormonal Balance — 60 capsules"
              width={260}
              height={260}
              className="rounded-2xl"
            />
          </div>
          <div className="text-center mb-2">
            <h3 className="text-xl font-bold">Pure Prana Hormonal Balance</h3>
            <p className="text-stone-500 text-sm mb-2">60 Capsules · 30-Day Supply · $29.95</p>
            <div className="flex justify-center">
              <Stars rating={4.6} count={47} />
            </div>
          </div>
        </div>
      </section>

      {/* 6 Herbs Breakdown */}
      <section className="px-5 py-10 bg-gradient-to-b from-purple-50 to-stone-50">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-serif font-bold text-center mb-2">6 Herbs That Address It</h2>
          <p className="text-center text-stone-600 mb-8">Each one targets a different piece of the perimenopause puzzle</p>
          <div className="space-y-4">
            {herbs.map((herb, i) => (
              <div key={i} className="bg-white p-5 rounded-xl shadow-sm border border-purple-100">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-purple-800 text-lg">{herb.name}</h3>
                    <span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full">{herb.target}</span>
                  </div>
                  <span className="text-xs bg-stone-100 text-stone-600 px-2 py-0.5 rounded-full whitespace-nowrap">{herb.amount}</span>
                </div>
                <p className="text-sm text-stone-600 mt-2">{herb.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="px-5 py-8 bg-white">
        <div className="max-w-xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { icon: '🇺🇸', label: 'Made in USA' },
              { icon: '✅', label: 'GMP Certified' },
              { icon: '🔬', label: '3rd Party Tested' },
              { icon: '🌿', label: '100% Vegan' },
            ].map((badge, i) => (
              <div key={i} className="flex flex-col items-center gap-1 p-3 bg-stone-50 rounded-xl">
                <span className="text-2xl">{badge.icon}</span>
                <span className="text-xs font-medium text-stone-600">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-10">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-serif font-bold text-center mb-6">Questions We Hear Most</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-stone-200 overflow-hidden">
                <button
                  className="w-full text-left p-4 font-medium flex justify-between items-center"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{faq.q}</span>
                  <span className="text-purple-500 ml-2">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && (
                  <div className="px-4 pb-4 text-sm text-stone-600">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-5 py-10 bg-gradient-to-b from-purple-50 to-stone-50 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-serif font-bold mb-3">Stop Waiting It Out.</h2>
          <p className="text-stone-600 mb-6">Your body is asking for support. 6 herbs. 1 capsule. A real path forward.</p>
          <Link
            href={AMAZON_URL}
            target="_blank"
            className="inline-block bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
          >
            Get on Amazon — $29.95 →
          </Link>
        </div>
      </section>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-stone-200 shadow-lg z-50">
        <div className="max-w-xl mx-auto flex items-center justify-between px-4 py-3">
          <div>
            <p className="font-bold text-sm text-stone-900">Hormonal Balance</p>
            <p className="text-purple-700 font-bold">$29.95</p>
          </div>
          <Link
            href={AMAZON_URL}
            target="_blank"
            className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2.5 px-5 rounded-full text-sm transition-colors"
          >
            Get on Amazon →
          </Link>
        </div>
      </div>
    </div>
  )
}
