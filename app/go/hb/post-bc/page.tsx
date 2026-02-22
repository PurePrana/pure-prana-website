'use client'

import Image from 'next/image'
import { useState } from 'react'

const AMAZON_URL = 'https://www.amazon.com/dp/B0DZ23LJGJ?maas=maas_adg_api_582148481881009074_macro_2_358&ref_=aa_maas&tag=maas&aa_campaignid={{campaign.id}}&aa_adgroupid={{adset.id}}&aa_creativeid={{ad.id}}'

function StarRating() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex">
        {[1, 2, 3, 4].map((i) => (
          <span key={i} className="text-yellow-400 text-lg">
            ★
          </span>
        ))}
        <span className="text-yellow-400 text-lg">★</span>
      </div>
      <span className="text-sm text-gray-600">4.6 / 5 (47 reviews)</span>
    </div>
  )
}

function TrustBadges() {
  const badges = [
    { icon: '🇺🇸', label: 'Made in USA' },
    { icon: '✅', label: 'GMP Certified' },
    { icon: '🔬', label: '3rd Party Tested' },
    { icon: '🌱', label: 'Vegan' },
  ]
  return (
    <div className="grid grid-cols-4 gap-2 py-6">
      {badges.map((b) => (
        <div
          key={b.label}
          className="flex flex-col items-center text-center gap-1"
        >
          <span className="text-2xl">{b.icon}</span>
          <span className="text-xs text-gray-600 font-medium">{b.label}</span>
        </div>
      ))}
    </div>
  )
}

function FAQ() {
  const faqs = [
    {
      q: 'How long does it take for hormones to balance after quitting birth control?',
      a: "It varies — some women see changes in 4-6 weeks, others take 3-6 months. Ayurvedic herbs like Shatavari and Ashwagandha work with your body's natural rhythm, supporting gradual rebalancing rather than forcing a quick fix.",
    },
    {
      q: "Is this safe to take if I'm trying to conceive?",
      a: "These are traditional Ayurvedic herbs used for centuries to support women's reproductive health. However, always consult your healthcare provider before starting any supplement, especially if you're actively trying to conceive.",
    },
    {
      q: 'Will this help with post-pill acne and mood swings?',
      a: 'Shatavari and Ashwagandha are adaptogenic herbs traditionally used to support hormonal balance, which can help with skin issues and emotional fluctuations that come from post-pill hormone disruption.',
    },
    {
      q: 'Can I take this alongside other supplements?',
      a: "Generally yes — these are plant-based ingredients with a long history of safe use. If you're on medication or other supplements, check with your doctor to rule out interactions.",
    },
  ]

  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {faqs.map((f, i) => (
        <div
          key={i}
          className="border border-pink-100 rounded-xl overflow-hidden"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full text-left px-5 py-4 font-semibold text-gray-800 flex justify-between items-center"
          >
            {f.q}
            <span className="text-pink-400 ml-2">{open === i ? '−' : '+'}</span>
          </button>
          {open === i && (
            <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed">
              {f.a}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-pink-100 shadow-lg z-50 px-4 py-3">
      <div className="max-w-lg mx-auto flex items-center justify-between">
        <div>
          <p className="font-bold text-gray-900 text-sm">Hormonal Balance</p>
          <p className="text-pink-600 font-semibold text-sm">
            $29.95 · 60 capsules
          </p>
        </div>
        <a
          href={AMAZON_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-600 hover:bg-pink-700 text-white font-bold px-5 py-2.5 rounded-full text-sm transition-colors"
        >
          Get on Amazon →
        </a>
      </div>
    </div>
  )
}

export default function PostBCv1() {
  return (
    <div className="min-h-screen bg-white text-gray-900 pb-24">
      {/* Hero */}
      <section className="bg-gradient-to-b from-pink-50 to-white px-5 pt-14 pb-10">
        <div className="max-w-lg mx-auto text-center">
          <p className="text-pink-500 font-medium text-sm uppercase tracking-wide mb-3">
            For Women Coming Off Birth Control
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-gray-900 mb-4">
            You Quit the Pill.
            <br />
            Your Body Lost the Plot.
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Irregular periods. Surprise acne. Mood swings that came out of
            nowhere. You stopped hormonal birth control to feel <em>more</em>{' '}
            like yourself — but your body had other plans.
          </p>
          <div className="flex justify-center mb-6">
            <Image
              src="/images/products/hormone-balance.jpg"
              alt="Pure Prana Hormonal Balance supplement"
              width={280}
              height={280}
              className="rounded-2xl"
              priority
            />
          </div>
          <StarRating />
        </div>
      </section>

      {/* The story */}
      <section className="px-5 py-10">
        <div className="max-w-lg mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Sound familiar?
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <div className="bg-pink-50 rounded-xl p-5 border-l-4 border-pink-300">
              <p className="italic">
                &ldquo;I quit the pill 6 months ago and my hormones went
                completely insane. Periods every two weeks, acne I never had as
                a teenager, and I cry at everything.&rdquo;
              </p>
              <p className="text-sm text-pink-600 mt-2 font-medium">
                — Sound like you?
              </p>
            </div>
            <div className="bg-pink-50 rounded-xl p-5 border-l-4 border-pink-300">
              <p className="italic">
                &ldquo;I was on BC for 2 cycles at 16. Stopped. Now at 18, my
                hormones are far more intense than they ever were.&rdquo;
              </p>
            </div>
            <div className="bg-pink-50 rounded-xl p-5 border-l-4 border-pink-300">
              <p className="italic">
                &ldquo;Period every 14-17 days. Heavy bleeding. Fatigue. I just
                want my body back.&rdquo;
              </p>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-6">
            You&apos;re not broken. Your body is just trying to remember how to
            run the show on its own.
            <br />
            <strong>It just needs the right support.</strong>
          </p>
        </div>
      </section>

      {/* The shift */}
      <section className="bg-pink-50 px-5 py-10">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">
            Not More Pharma. Plant Wisdom.
          </h2>
          <p className="text-gray-600 mb-6">
            You didn&apos;t quit synthetic hormones to take more synthetic
            stuff. You want something that works <em>with</em> your body — not
            against it.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Ayurveda has spent <strong>thousands of years</strong> helping women
            through exactly this. Herbs like Shatavari, Ashwagandha, and Ashoka
            have been used by generations of women to restore hormonal rhythm
            naturally.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-5 py-10">
        <div className="max-w-lg mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">
            What Women Notice
          </h2>
          <div className="space-y-5">
            {[
              {
                icon: '🩸',
                title: 'Periods That Make Sense Again',
                desc: 'Support a regular cycle your body can actually predict — no more surprise periods every 2 weeks.',
              },
              {
                icon: '✨',
                title: 'Skin That Clears Up',
                desc: 'Post-pill acne is hormonal. These herbs help address the root cause, not just the surface.',
              },
              {
                icon: '🧠',
                title: 'Mood Stability Returns',
                desc: 'Ashwagandha is a powerful adaptogen — it helps your nervous system stop overreacting to everything.',
              },
              {
                icon: '⚡',
                title: 'Energy Without the Crash',
                desc: 'When your hormones find their rhythm, your energy follows. No caffeine required.',
              },
              {
                icon: '💪',
                title: 'Feeling Like Yourself Again',
                desc: "Remember who you were before the pill? She's still there. Your body just needs help finding her.",
              },
            ].map((b) => (
              <div key={b.title} className="flex gap-4 items-start">
                <span className="text-3xl">{b.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-900">{b.title}</h3>
                  <p className="text-gray-600 text-sm">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product showcase */}
      <section className="bg-gradient-to-b from-white to-pink-50 px-5 py-10">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-2xl font-bold mb-2">
            Pure Prana Hormonal Balance
          </h2>
          <p className="text-gray-500 mb-4">
            6 Ayurvedic herbs. One daily ritual.
          </p>
          <div className="flex justify-center mb-4">
            <Image
              src="/images/products/hormone-balance.jpg"
              alt="Pure Prana Hormonal Balance"
              width={220}
              height={220}
              className="rounded-2xl"
            />
          </div>
          <StarRating />
          <div className="mt-4 space-y-1 text-sm text-gray-600">
            <p>🌿 Shatavari (3000mg) — The queen of women&apos;s herbs</p>
            <p>🌿 Ashwagandha (3000mg) — Stress & hormone adaptogen</p>
            <p>🌿 Tribulus Terrestris (500mg) — Hormonal rhythm support</p>
            <p>🌿 Ashoka (500mg) — Uterine & cycle support</p>
            <p>🌿 Lodhra (100mg) — Traditional cycle regulator</p>
            <p>🌿 Guduchi — Immune & detox support</p>
          </div>
          <TrustBadges />
          <a
            href={AMAZON_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-bold px-8 py-3 rounded-full transition-colors text-lg"
          >
            Get on Amazon — $29.95 →
          </a>
        </div>
      </section>

      {/* Testimonial vibe */}
      <section className="px-5 py-10">
        <div className="max-w-lg mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">
            The Vibe From Women Like You
          </h2>
          <div className="space-y-4">
            {[
              {
                text: 'I was so skeptical but my period came on day 28 for the first time in a year. I actually cried.',
                name: 'K.M.',
                age: '24',
              },
              {
                text: "My chin acne started clearing up by week 3. I'd tried everything else.",
                name: 'R.S.',
                age: '21',
              },
              {
                text: 'I finally feel like my body is mine again. Less anxious, more even. My partner noticed too.',
                name: 'A.T.',
                age: '27',
              },
            ].map((t) => (
              <div
                key={t.name}
                className="bg-white border border-pink-100 rounded-xl p-5 shadow-sm"
              >
                <p className="text-gray-700 italic mb-2">
                  &ldquo;{t.text}&rdquo;
                </p>
                <p className="text-sm text-pink-600 font-medium">
                  — {t.name}, age {t.age}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-pink-50 px-5 py-10">
        <div className="max-w-lg mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">
            Common Questions
          </h2>
          <FAQ />
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-5 py-12">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">
            Ready to Get Your Body Back?
          </h2>
          <p className="text-gray-600 mb-6">
            Your body already knows how to balance itself. It just needs the
            right plant allies.
          </p>
          <a
            href={AMAZON_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-bold px-8 py-4 rounded-full transition-colors text-lg shadow-lg"
          >
            Get Hormonal Balance on Amazon →
          </a>
          <p className="text-sm text-gray-400 mt-3">
            $29.95 · 60 capsules · Free Prime shipping
          </p>
        </div>
      </section>

      <StickyCTA />
    </div>
  )
}
