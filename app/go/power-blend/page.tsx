import { WarmupPage } from '../../components/warmup-sections'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Power Blend — Shilajit, Ashwagandha & Gokshura | Pure Prana',
  description:
    'Extra strength 3000mg Ayurvedic formula for men. Himalayan Shilajit, Ashwagandha KSM-66, Safed Musli & Gokshura.',
}

export default function PowerBlendPage() {
  return (
    <WarmupPage
      name="Power Blend for Men"
      asin="B0CWS4NCCF"
      imageSlug="power-blend"
      tagline="Extra Strength 3000mg Ayurvedic Formula"
      headline="Feel Like You Did 10 Years Ago"
      subhead="Himalayan Shilajit + Ashwagandha + Gokshura + Safed Musli &mdash; the 4 most powerful Ayurvedic herbs for men's energy, strength, and vitality. In one capsule."
      rating={3.9}
      reviewCount={93}
      price="$29.95"
      benefits={[
        {
          icon: '💪',
          title: 'Natural Testosterone Support',
          desc: 'Safed Musli, Gokshura (Tribulus), and Shilajit work together to support healthy testosterone levels — the natural way.',
        },
        {
          icon: '⚡',
          title: 'All-Day Energy & Stamina',
          desc: 'Rich in fulvic acid and trace minerals from Himalayan Shilajit. No crash, no jitters — just sustained power.',
        },
        {
          icon: '🧠',
          title: 'Sharper Focus & Drive',
          desc: 'Ashwagandha KSM-66 equivalent to 3000mg reduces cortisol and mental fog so you can perform at your best.',
        },
        {
          icon: '🔥',
          title: 'Strength & Recovery',
          desc: 'Supports muscle recovery and physical performance. Gokshura has been used by athletes for centuries.',
        },
      ]}
      ingredients={[
        {
          name: 'Himalayan Shilajit',
          desc: "Gold-grade extract rich in fulvic acid & 80+ trace minerals. Nature's performance enhancer from 16,000ft peaks.",
        },
        {
          name: 'Ashwagandha (3000mg equiv.)',
          desc: 'Extra-strength concentrated extract. Clinically studied for testosterone, cortisol reduction, and muscle strength.',
        },
        {
          name: 'Safed Musli + Gokshura',
          desc: 'Two powerhouse Ayurvedic herbs for libido, stamina, and reproductive health in men.',
        },
      ]}
      faqs={[
        {
          q: 'How is this different from just taking Ashwagandha?',
          a: "Most supplements give you 500-600mg of one herb. Our formula combines 4 synergistic herbs at extra strength (3000mg equivalent) for comprehensive men's vitality support.",
        },
        {
          q: 'When will I notice results?',
          a: 'Many men report improved energy within the first week. Peak testosterone and strength benefits develop over 4-8 weeks of consistent use.',
        },
        {
          q: 'Can women take this?',
          a: "Yes — while formulated for men, the Shilajit and Ashwagandha also support women's energy and stress resilience.",
        },
        {
          q: 'Are capsules better than Shilajit resin?',
          a: 'Same benefits, zero mess. No bitter taste, no sticky jars. Just precise dosing in an easy-to-swallow capsule.',
        },
      ]}
    />
  )
}
