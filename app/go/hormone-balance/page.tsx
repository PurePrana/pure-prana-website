'use client';

import Image from 'next/image';
import { useState } from 'react';

const AMAZON_LINK = 'https://www.amazon.com/dp/B0DZ23LJGJ';

const faqs = [
  {
    q: 'How is this different from regular hormone supplements?',
    a: 'Most hormone supplements use synthetic ingredients or single herbs. Ours combines 6 time-tested Ayurvedic herbs — led by Shatavari (3000mg equiv.) and Ashwagandha (3000mg equiv.) — that work together to support your body\'s own hormone production naturally.',
  },
  {
    q: 'How long until I notice a difference?',
    a: 'Most women report less bloating and better mood within 2-3 weeks. For full cycle regulation and menopause support, allow 6-8 weeks of consistent daily use. One capsule a day — that\'s it.',
  },
  {
    q: 'Can I take this during perimenopause or menopause?',
    a: 'Yes — the formula was designed for all stages. Shatavari has been used for centuries in Ayurveda specifically for women going through hormonal transitions. Ashwagandha helps manage the cortisol spikes that make hot flashes worse.',
  },
  {
    q: 'Is it safe with birth control or other medications?',
    a: 'Our herbs are food-grade and gentle. That said, we always recommend checking with your doctor when combining supplements with any medication.',
  },
  {
    q: 'What are the ingredients exactly?',
    a: 'Shatavari (300mg, 10:1 extract = 3000mg), Ashwagandha (150mg, 20:1 = 3000mg), Tribulus Terrestris (100mg, 10:1 = 500mg), Ashoka (50mg, 10:1 = 500mg), Lodhra (10mg, 10:1 = 100mg), and Guduchi (10mg). All in a veggie capsule, no fillers.',
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-pink-900/30">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-4 text-left"
      >
        <span className="font-medium text-gray-800">{q}</span>
        <span className="text-pink-500 text-xl ml-4 shrink-0">{open ? '−' : '+'}</span>
      </button>
      {open && <p className="pb-4 text-gray-600 text-sm leading-relaxed">{a}</p>}
    </div>
  );
}

export default function HormoneBalancePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="bg-gradient-to-b from-pink-50 to-white px-4 pt-8 pb-10 text-center max-w-lg mx-auto">
        <div className="relative w-56 h-56 mx-auto mb-6">
          <Image
            src="/images/products/hormone-balance.jpg"
            alt="Pure Prana Hormonal Balance - Shatavari & Ashwagandha"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="flex items-center justify-center gap-1 mb-3">
          <span className="text-amber-400 text-lg">★★★★★</span>
          <span className="text-gray-900 font-bold ml-1">4.6</span>
          <span className="text-gray-500 text-sm ml-1">(47 reviews on Amazon)</span>
        </div>
        <p className="text-pink-600 text-xs font-semibold uppercase tracking-wider mb-2">Ayurvedic Formula for Women</p>
        <h1 className="text-3xl font-bold mb-3 leading-tight text-gray-900">
          Your Cycle Shouldn&apos;t<br />Run Your Life.
        </h1>
        <p className="text-gray-600 text-base mb-6 leading-relaxed">
          6 Ayurvedic herbs that help with PMS, cramps, mood swings, and the hormonal chaos of perimenopause — without synthetic hormones.
        </p>
        <a
          href={AMAZON_LINK}
          className="inline-block bg-pink-600 hover:bg-pink-500 text-white font-bold py-3.5 px-8 rounded-full text-lg transition-colors shadow-lg shadow-pink-200"
        >
          Get It on Amazon — $29.95
        </a>
        <p className="text-gray-400 text-xs mt-2">✓ Free Prime Shipping · ✓ 60 Capsules (2-month supply)</p>
      </section>

      {/* The Problem */}
      <section className="px-4 py-10 bg-pink-50/50">
        <div className="max-w-lg mx-auto">
          <h2 className="text-xl font-bold text-center mb-6 text-gray-900">Sound Familiar?</h2>
          <div className="space-y-3">
            {[
              'Bloating and cramps that derail your week',
              'Mood swings your family walks on eggshells around',
              'Fatigue that coffee can\'t fix',
              'Hot flashes or night sweats disrupting your sleep',
              'Brain fog that makes you feel like a different person',
            ].map((pain, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-3.5 shadow-sm">
                <span className="text-pink-400 text-lg mt-0.5">•</span>
                <p className="text-gray-700 text-sm">{pain}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-6 italic">
            These aren&apos;t things you just &ldquo;deal with.&rdquo; Your body is asking for support.
          </p>
        </div>
      </section>

      {/* What's Inside */}
      <section className="px-4 py-10">
        <div className="max-w-lg mx-auto">
          <h2 className="text-xl font-bold text-center mb-2 text-gray-900">6 Herbs. Thousands of Years of Use.</h2>
          <p className="text-center text-gray-500 text-sm mb-6">Concentrated extracts, not weak powders.</p>
          <div className="space-y-3">
            {[
              { name: 'Shatavari', dose: '3,000mg equiv.', icon: '🌸', desc: 'The "Queen of Herbs" in Ayurveda. Used for centuries to nourish the female reproductive system, ease PMS, and support hormonal transitions.' },
              { name: 'Ashwagandha', dose: '3,000mg equiv.', icon: '🧘‍♀️', desc: 'Regulates cortisol — the stress hormone that makes everything worse. Calms anxiety, improves sleep, stabilizes mood.' },
              { name: 'Tribulus Terrestris', dose: '500mg equiv.', icon: '⚡', desc: 'Supports natural hormone production. Helps with energy and libido that hormonal imbalance steals from you.' },
              { name: 'Ashoka', dose: '500mg equiv.', icon: '🩸', desc: 'Named after "freedom from sorrow." Traditionally used for heavy periods, cramps, and uterine health.' },
              { name: 'Lodhra', dose: '100mg equiv.', icon: '💮', desc: 'Helps regulate menstrual cycles and supports reproductive tissue health.' },
              { name: 'Guduchi', dose: 'Supportive', icon: '🛡️', desc: 'The "root of immortality." Immune support and detox while your body rebalances.' },
            ].map((herb) => (
              <div key={herb.name} className="bg-pink-50 rounded-xl p-4 flex gap-3">
                <span className="text-2xl">{herb.icon}</span>
                <div>
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="font-bold text-gray-900">{herb.name}</span>
                    <span className="text-pink-600 text-xs font-mono bg-pink-100 px-1.5 py-0.5 rounded">{herb.dose}</span>
                  </div>
                  <p className="text-gray-600 text-sm mt-1">{herb.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="px-4 py-10 bg-pink-50/50">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-xl font-bold mb-6">Women Are Feeling the Difference</h2>
          <div className="space-y-4">
            {[
              { text: '"My PMS used to be unbearable — bloating, cramps, mood swings. After 3 weeks on this, my last cycle was the easiest I\'ve had in years."', stars: 5, name: 'Sarah K.' },
              { text: '"I\'m 48 and in perimenopause. The hot flashes have calmed down significantly. I actually sleep through the night now."', stars: 5, name: 'Maria L.' },
              { text: '"Clean ingredients, no side effects. I feel more balanced and less irritable. My husband noticed before I did."', stars: 4, name: 'Jennifer R.' },
            ].map((review, i) => (
              <div key={i} className="bg-white rounded-xl p-4 text-left shadow-sm">
                <div className="text-amber-400 text-sm mb-2">{'★'.repeat(review.stars)}{'☆'.repeat(5 - review.stars)}</div>
                <p className="text-gray-700 text-sm italic leading-relaxed">{review.text}</p>
                <p className="text-gray-400 text-xs mt-2">— {review.name}, Verified Purchase</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="px-4 py-8">
        <div className="max-w-lg mx-auto grid grid-cols-4 gap-3 text-center">
          {[
            { icon: '🇺🇸', label: 'Made in USA' },
            { icon: '✅', label: 'GMP Certified' },
            { icon: '🔬', label: '3rd Party Tested' },
            { icon: '🌱', label: '100% Vegan' },
          ].map((badge) => (
            <div key={badge.label} className="bg-pink-50 rounded-lg py-3">
              <div className="text-2xl mb-1">{badge.icon}</div>
              <p className="text-xs text-gray-600 font-medium">{badge.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-10 bg-pink-50/50">
        <div className="max-w-lg mx-auto">
          <h2 className="text-xl font-bold text-center mb-6">Questions</h2>
          {faqs.map((faq) => (
            <FAQItem key={faq.q} {...faq} />
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-12 text-center">
        <div className="max-w-lg mx-auto">
          <p className="text-pink-600 font-bold text-lg mb-1">$29.95 · 2-Month Supply</p>
          <h2 className="text-2xl font-bold mb-2 text-gray-900">Stop Surviving Your Cycle.<br />Start Living Through It.</h2>
          <p className="text-gray-500 text-sm mb-6">Join 50,000+ women who trust Pure Prana.</p>
          <a
            href={AMAZON_LINK}
            className="inline-block bg-pink-600 hover:bg-pink-500 text-white font-bold py-3.5 px-8 rounded-full text-lg transition-colors shadow-lg shadow-pink-200"
          >
            Get Hormonal Balance on Amazon →
          </a>
          <p className="text-gray-400 text-xs mt-3">Free Prime shipping · 60-day supply · GMP certified</p>
        </div>
      </section>

      {/* Sticky Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur border-t border-pink-100 px-4 py-3 z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <div className="max-w-lg mx-auto flex items-center justify-between">
          <div>
            <p className="font-bold text-gray-900 text-sm">Hormonal Balance</p>
            <p className="text-pink-600 text-sm font-bold">$29.95 <span className="text-gray-400 font-normal text-xs">Free Prime</span></p>
          </div>
          <a
            href={AMAZON_LINK}
            className="bg-pink-600 hover:bg-pink-500 text-white font-bold py-2.5 px-6 rounded-full text-sm transition-colors"
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
