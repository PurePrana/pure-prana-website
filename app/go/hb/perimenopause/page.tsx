'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const AMAZON_URL = 'https://www.amazon.com/dp/B0DZ23LJGJ?maas=maas_adg_api_582148481881009074_macro_2_358&ref_=aa_maas&tag=maas&aa_campaignid={{campaign.id}}&aa_adgroupid={{adset.id}}&aa_creativeid={{ad.id}}'

const faqs = [
  {
    q: 'Can I take this alongside HRT?',
    a: "Our formula uses traditional Ayurvedic herbs. However, if you're on HRT or any medication, we recommend consulting your healthcare provider before adding any supplement to your routine.",
  },
  {
    q: 'How long before I notice a difference?',
    a: 'Many women report subtle improvements in sleep and mood within 2–3 weeks. Herbal adaptogens like Ashwagandha and Shatavari build effectiveness over time — most women feel meaningful changes by week 4–6.',
  },
  {
    q: 'Is this safe for women in full menopause, not just perimenopause?',
    a: 'Yes. The herbs in this formula support hormonal balance across the entire menopausal transition — from early perimenopause through post-menopause.',
  },
  {
    q: 'What makes this different from just taking ashwagandha alone?',
    a: "Ashwagandha is powerful, but it's one piece of the puzzle. Our formula combines 6 synergistic herbs — Shatavari for estrogen support, Ashoka for cycle regulation, Lodhra for hormonal balance, Tribulus for libido, and Guduchi for immune resilience — working together the way traditional Ayurvedic medicine intended.",
  },
]

function Stars({ rating, count }: { rating: number; count: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i <= Math.floor(rating) ? 'text-amber-400' : i - 0.5 <= rating ? 'text-amber-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span className="text-sm text-gray-600">
        {rating} · {count} reviews
      </span>
    </div>
  )
}

export default function PerimenopauseV1() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 pb-24">
      {/* Hero */}
      <section className="bg-gradient-to-b from-purple-50 to-stone-50 px-5 pt-12 pb-10">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-sm uppercase tracking-widest text-purple-600 mb-3">
            For women in perimenopause & menopause
          </p>
          <h1 className="text-3xl md:text-4xl font-serif font-bold leading-tight text-stone-900 mb-4">
            Your Doctor Said &ldquo;Wait It Out.&rdquo;
            <br />
            <span className="text-purple-700">We Say You Deserve Better.</span>
          </h1>
          <p className="text-lg text-stone-600 leading-relaxed mb-6">
            You&rsquo;re not imagining the hot flashes at 3am. The brain fog
            that makes you feel like a stranger in your own mind. The fatigue
            that no amount of sleep fixes.{' '}
            <strong>
              You&rsquo;re not crazy. You&rsquo;re in perimenopause.
            </strong>{' '}
            And you deserve more than &ldquo;just wait.&rdquo;
          </p>
          <Stars rating={4.6} count={47} />
        </div>
      </section>

      {/* Validation Section */}
      <section className="px-5 py-10">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-serif font-bold text-center mb-6">
            We See You.
          </h2>
          <div className="space-y-4">
            {[
              'You went to your doctor with a list of symptoms — and left feeling dismissed.',
              "You're exhausted in a way that coffee can't fix.",
              'You lie awake at 3am, drenched in sweat, wondering where "you" went.',
              'You\'ve been told to "manage stress" when your body is the one managing you.',
              "You don't recognize your mood, your energy, or your reflection anymore.",
            ].map((text, i) => (
              <div
                key={i}
                className="flex gap-3 items-start bg-white p-4 rounded-xl shadow-sm border border-purple-100"
              >
                <span className="text-purple-500 text-xl mt-0.5">💜</span>
                <p className="text-stone-700">{text}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-stone-600 mt-6 text-lg italic">
            &ldquo;I don&rsquo;t know if I have the emotional strength to see
            this through.&rdquo;
            <br />
            <span className="text-sm not-italic">
              — Real words from a real woman in perimenopause
            </span>
          </p>
        </div>
      </section>

      {/* Product Introduction */}
      <section className="px-5 py-10 bg-white">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-serif font-bold mb-2">
            There Is Another Way.
          </h2>
          <p className="text-stone-600 mb-6">
            Not another doctor telling you to &ldquo;wait it out.&rdquo; Not a
            random supplement someone mentioned in passing. This is a carefully
            formulated blend of 6 Ayurvedic herbs — backed by centuries of
            traditional use and modern research — designed specifically for
            hormonal balance during perimenopause.
          </p>
          <div className="flex justify-center mb-6">
            <Image
              src="/images/products/hormone-balance.jpg"
              alt="Pure Prana Hormonal Balance — 60 capsules"
              width={280}
              height={280}
              className="rounded-2xl"
            />
          </div>
          <h3 className="text-xl font-bold mb-1">
            Pure Prana Hormonal Balance
          </h3>
          <p className="text-stone-500 text-sm mb-3">
            60 Capsules · 30-Day Supply
          </p>
          <Stars rating={4.6} count={47} />
        </div>
      </section>

      {/* Benefits */}
      <section className="px-5 py-10">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-serif font-bold text-center mb-8">
            What Women Are Feeling
          </h2>
          <div className="grid gap-4">
            {[
              {
                icon: '🌙',
                title: 'Better Sleep',
                desc: 'Fewer night sweats, more restful nights. Ashwagandha helps regulate cortisol — the stress hormone that wakes you at 3am.',
              },
              {
                icon: '🧊',
                title: 'Hot Flash Relief',
                desc: 'Shatavari supports estrogen balance naturally, helping reduce the frequency and intensity of hot flashes.',
              },
              {
                icon: '🧠',
                title: 'Mental Clarity',
                desc: 'The "brain fog" isn\'t in your head. Adaptogens like Ashwagandha help restore focus and cognitive sharpness.',
              },
              {
                icon: '⚡',
                title: 'Real Energy',
                desc: "Not a caffeine spike — genuine, sustained vitality. Guduchi and Ashwagandha support your body's natural energy systems.",
              },
              {
                icon: '💛',
                title: 'Mood Stability',
                desc: "Fewer emotional rollercoasters. Ashoka and Shatavari have been used for centuries to support women's emotional wellbeing.",
              },
              {
                icon: '🔥',
                title: 'Libido Support',
                desc: 'Tribulus Terrestris is traditionally used to support healthy desire and intimate wellness.',
              },
            ].map((b, i) => (
              <div
                key={i}
                className="bg-white p-5 rounded-xl shadow-sm border border-stone-100"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{b.icon}</span>
                  <div>
                    <h3 className="font-bold text-stone-900 mb-1">{b.title}</h3>
                    <p className="text-stone-600 text-sm">{b.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients */}
      <section className="px-5 py-10 bg-purple-50">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-serif font-bold text-center mb-2">
            6 Herbs, One Purpose
          </h2>
          <p className="text-center text-stone-600 mb-8">
            Traditional Ayurvedic wisdom meets modern formulation
          </p>
          <div className="space-y-3">
            {[
              {
                name: 'Shatavari',
                amount: '3,000mg equiv.',
                role: 'The "queen of herbs" for women — supports estrogen balance and reproductive health',
              },
              {
                name: 'Ashwagandha',
                amount: '3,000mg equiv.',
                role: 'Adaptogen powerhouse — regulates cortisol, reduces hot flashes, improves sleep',
              },
              {
                name: 'Tribulus Terrestris',
                amount: '500mg',
                role: 'Supports healthy libido and vitality',
              },
              {
                name: 'Ashoka',
                amount: '500mg',
                role: 'Named after "freedom from sorrow" — traditional support for mood and cycle regulation',
              },
              {
                name: 'Lodhra',
                amount: '100mg',
                role: 'Hormonal balance and reproductive wellness',
              },
              {
                name: 'Guduchi',
                amount: 'Included',
                role: 'Immune support and cellular rejuvenation',
              },
            ].map((herb, i) => (
              <div key={i} className="bg-white p-4 rounded-xl">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-purple-800">{herb.name}</span>
                  <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">
                    {herb.amount}
                  </span>
                </div>
                <p className="text-sm text-stone-600">{herb.role}</p>
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
              <div
                key={i}
                className="flex flex-col items-center gap-1 p-3 bg-stone-50 rounded-xl"
              >
                <span className="text-2xl">{badge.icon}</span>
                <span className="text-xs font-medium text-stone-600">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-10">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-serif font-bold text-center mb-6">
            Common Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-stone-200 overflow-hidden"
              >
                <button
                  className="w-full text-left p-4 font-medium flex justify-between items-center"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{faq.q}</span>
                  <span className="text-purple-500 ml-2">
                    {openFaq === i ? '−' : '+'}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-4 pb-4 text-sm text-stone-600">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-5 py-10 bg-gradient-to-b from-purple-50 to-stone-50 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-serif font-bold mb-3">
            You&rsquo;ve Waited Long Enough.
          </h2>
          <p className="text-stone-600 mb-6">
            You deserve to feel like yourself again. Try Pure Prana Hormonal
            Balance risk-free.
          </p>
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
