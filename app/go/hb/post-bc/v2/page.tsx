'use client'

import Image from 'next/image'
import { useState } from 'react'

const AMAZON_URL = 'https://www.amazon.com/dp/B0DZ23LJGJ'

function StarRating() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((i) => (
          <span key={i} className="text-yellow-400 text-lg">
            ★
          </span>
        ))}
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
      q: 'How soon will I see results after quitting BC?',
      a: 'Most women report noticing subtle shifts in 3-4 weeks — better sleep, less irritability. Cycle regularity typically improves over 2-3 months as your HPO axis recalibrates with herbal support.',
    },
    {
      q: 'Why Ayurvedic herbs instead of other supplements?',
      a: "Ayurvedic herbs like Shatavari and Ashwagandha are adaptogens — they don't force your hormones in one direction. They help your body find its own balance, which is exactly what you need after years of synthetic override.",
    },
    {
      q: "Is this safe if I'm planning to get pregnant eventually?",
      a: 'These herbs have been traditionally used to support fertility and reproductive health. That said, always loop in your healthcare provider when planning conception.',
    },
    {
      q: "What if I've been off the pill for months and still feel off?",
      a: "That's common — some women's hormones take 6-12 months to fully recalibrate. Starting herbal support at any point can help. It's never too late to give your body the right tools.",
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

export default function PostBCv2() {
  return (
    <div className="min-h-screen bg-white text-gray-900 pb-24">
      {/* Hero */}
      <section className="bg-gradient-to-b from-pink-50 to-white px-5 pt-14 pb-10">
        <div className="max-w-lg mx-auto text-center">
          <p className="text-pink-500 font-medium text-sm uppercase tracking-wide mb-3">
            Ayurvedic Post-BC Recovery
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-gray-900 mb-4">
            Post-Pill Hormone Chaos?
            <br />
            There&apos;s an Ayurvedic Fix.
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            6 clinically-studied herbs that help your body recalibrate after
            hormonal birth control — naturally.
          </p>
          <div className="flex justify-center mb-4">
            <Image
              src="/images/products/hormone-balance.jpg"
              alt="Pure Prana Hormonal Balance supplement"
              width={260}
              height={260}
              className="rounded-2xl"
              priority
            />
          </div>
          <StarRating />
          <TrustBadges />
        </div>
      </section>

      {/* The Problem */}
      <section className="px-5 py-10 bg-gray-50">
        <div className="max-w-lg mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">
            What Birth Control Did to Your Body
          </h2>
          <div className="space-y-4">
            {[
              {
                icon: '🚫',
                title: 'Shut down your HPO axis',
                desc: "The pill suppressed communication between your brain and ovaries. When you stop, that system doesn't just snap back.",
              },
              {
                icon: '📉',
                title: 'Depleted key nutrients',
                desc: 'BC is linked to lower levels of B vitamins, zinc, magnesium, and selenium — all critical for hormone production.',
              },
              {
                icon: '🔄',
                title: 'Disrupted your gut microbiome',
                desc: 'Synthetic estrogen alters gut bacteria, affecting estrogen metabolism and creating a rebound effect when you quit.',
              },
              {
                icon: '⚡',
                title: 'Suppressed natural hormone production',
                desc: 'Your body stopped making its own hormonal rhythm. Now it has to rebuild from scratch.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-5 shadow-sm flex gap-4 items-start"
              >
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Fix — Ingredients */}
      <section className="px-5 py-10">
        <div className="max-w-lg mx-auto">
          <h2 className="text-2xl font-bold text-center mb-2">
            What These Herbs Do Instead
          </h2>
          <p className="text-gray-500 text-center mb-8">
            Each ingredient targets a specific part of post-BC recovery.
          </p>
          <div className="space-y-5">
            {[
              {
                name: 'Shatavari',
                dose: '3000mg equiv.',
                role: 'The Hormone Harmonizer',
                desc: "The #1 herb in Ayurveda for women's health. Supports estrogen balance, ovarian function, and cervical mucus production. Helps restore what the pill suppressed.",
                color: 'bg-pink-50 border-pink-200',
              },
              {
                name: 'Ashwagandha',
                dose: '3000mg equiv.',
                role: 'The Stress Shield',
                desc: 'Regulates cortisol — the stress hormone that goes haywire post-BC. When cortisol is high, progesterone drops. Ashwagandha breaks that cycle.',
                color: 'bg-purple-50 border-purple-200',
              },
              {
                name: 'Tribulus Terrestris',
                dose: '500mg',
                role: 'The Cycle Restarter',
                desc: 'Supports FSH and LH signaling — the hormones that trigger ovulation. Key for getting your natural cycle back on track.',
                color: 'bg-orange-50 border-orange-200',
              },
              {
                name: 'Ashoka',
                dose: '500mg',
                role: 'The Uterine Tonic',
                desc: 'Named after "freedom from sorrow." Traditionally used for heavy/irregular bleeding and uterine health. Supports endometrial lining normalization.',
                color: 'bg-rose-50 border-rose-200',
              },
              {
                name: 'Lodhra',
                dose: '100mg',
                role: 'The Cycle Regulator',
                desc: 'Used in Ayurveda specifically for menstrual irregularities. Helps regulate flow and timing when your period is all over the place.',
                color: 'bg-teal-50 border-teal-200',
              },
              {
                name: 'Guduchi',
                dose: 'Supporting dose',
                role: 'The Detox Ally',
                desc: 'Supports liver detoxification — crucial because your liver has to clear out years of synthetic hormones. Also boosts immunity depleted by BC.',
                color: 'bg-green-50 border-green-200',
              },
            ].map((herb) => (
              <div
                key={herb.name}
                className={`rounded-xl p-5 border ${herb.color}`}
              >
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-gray-900">{herb.name}</h3>
                  <span className="text-xs bg-white px-2 py-1 rounded-full text-gray-500 font-medium">
                    {herb.dose}
                  </span>
                </div>
                <p className="text-pink-600 text-sm font-semibold mb-1">
                  {herb.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {herb.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-pink-50 px-5 py-10">
        <div className="max-w-lg mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">
            BC vs. Ayurvedic Herbs
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-100 rounded-xl p-4">
              <h3 className="font-bold text-gray-400 text-sm mb-3 text-center">
                ❌ What BC Did
              </h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>Suppressed ovulation</li>
                <li>Synthetic estrogen override</li>
                <li>Depleted B vitamins & zinc</li>
                <li>Disrupted gut bacteria</li>
                <li>Masked symptoms</li>
                <li>Created dependency</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-pink-100">
              <h3 className="font-bold text-pink-600 text-sm mb-3 text-center">
                ✅ What These Herbs Do
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Support natural ovulation</li>
                <li>Balance your own estrogen</li>
                <li>Adaptogenic nourishment</li>
                <li>Support liver detox</li>
                <li>Address root causes</li>
                <li>Build body resilience</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Symptoms checklist */}
      <section className="px-5 py-10">
        <div className="max-w-lg mx-auto">
          <h2 className="text-2xl font-bold text-center mb-2">
            Post-BC Symptoms This Targets
          </h2>
          <p className="text-gray-500 text-center text-sm mb-6">
            Check off what you&apos;re experiencing:
          </p>
          <div className="grid grid-cols-2 gap-2">
            {[
              'Irregular periods',
              'Heavy bleeding',
              'Hormonal acne',
              'Mood swings',
              'Hair loss / thinning',
              'Low energy / fatigue',
              'Anxiety / irritability',
              'Missing periods',
              'Bloating',
              'Low libido',
            ].map((symptom) => (
              <div
                key={symptom}
                className="flex items-center gap-2 bg-pink-50 rounded-lg px-3 py-2.5"
              >
                <span className="text-pink-400">☐</span>
                <span className="text-sm text-gray-700">{symptom}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">
            If you checked 3+, your body is asking for hormonal support.
          </p>
        </div>
      </section>

      {/* Product CTA */}
      <section className="bg-gradient-to-b from-white to-pink-50 px-5 py-10">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-2xl font-bold mb-2">
            Pure Prana Hormonal Balance
          </h2>
          <p className="text-gray-500 mb-4">
            6 targeted Ayurvedic herbs · 60 capsules · 30-day supply
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
          <TrustBadges />
          <a
            href={AMAZON_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-bold px-8 py-3 rounded-full transition-colors text-lg"
          >
            Get on Amazon — $29.95 →
          </a>
          <p className="text-xs text-gray-400 mt-3">
            Free shipping with Prime · 30-day Amazon guarantee
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-10">
        <div className="max-w-lg mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">
            Frequently Asked Questions
          </h2>
          <FAQ />
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-pink-50 px-5 py-12">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">
            Your Body Knows How to Heal.
          </h2>
          <p className="text-gray-600 mb-6">
            It just needs the right inputs. 6 herbs. Thousands of years of
            evidence. One capsule a day.
          </p>
          <a
            href={AMAZON_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-bold px-8 py-4 rounded-full transition-colors text-lg shadow-lg"
          >
            Get Hormonal Balance on Amazon →
          </a>
        </div>
      </section>

      <StickyCTA />
    </div>
  )
}
