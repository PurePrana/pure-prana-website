import { WarmupPage } from '../../components/warmup-sections';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hormone Balance — Shatavari & Ashwagandha | Pure Prana',
  description: 'Natural hormonal support for women. Shatavari, Ashwagandha & more for PMS, menopause, and daily balance.',
};

export default function HormoneBalancePage() {
  return (
    <WarmupPage
      name="Hormone Balance"
      asin="B0DZ23LJGJ"
      imageSlug="hormone-balance"
      tagline="For women who are done feeling at war with their own body"
      headline="Your Hormones Shouldn't Control Your Life"
      subhead="Shatavari + Ashwagandha — the Ayurvedic duo women have trusted for 3,000 years to ease PMS, smooth menopause, and restore calm energy."
      rating={4.6}
      reviewCount={47}
      price="$29.95"
      benefits={[
        { icon: '🌸', title: 'Eases PMS & Monthly Discomfort', desc: 'Shatavari supports the female reproductive system — reducing cramps, bloating, and mood swings so your cycle doesn\'t derail your week.' },
        { icon: '🔥', title: 'Calms Hot Flashes & Night Sweats', desc: 'Ashwagandha helps manage cortisol during perimenopause and menopause, so you can sleep through the night again.' },
        { icon: '⚡', title: 'Steady Energy (No Crashes)', desc: 'Adaptogenic herbs stabilize your energy and mood throughout the day — no caffeine spikes, no 3pm slump.' },
        { icon: '😌', title: 'Less Anxiety, Better Sleep', desc: 'Calming botanicals reduce the stress and racing thoughts that come with hormonal shifts. Wake up feeling rested.' },
      ]}
      ingredients={[
        { name: 'Shatavari', desc: 'The #1 Ayurvedic herb for women\'s health. Supports reproductive balance across all life stages.' },
        { name: 'Ashwagandha', desc: 'Clinically studied adaptogen that lowers cortisol by up to 30%. Reduces stress and supports hormonal balance.' },
      ]}
      faqs={[
        { q: 'How long until I feel a difference?', a: 'Most women notice improvements in mood and energy within 2-3 weeks. Full hormonal benefits typically develop over 6-8 weeks of consistent daily use.' },
        { q: 'Can I take this with birth control?', a: 'Our formula uses gentle, food-grade herbs. We always recommend consulting your healthcare provider when combining with any medication.' },
        { q: 'Is this safe during perimenopause?', a: 'Absolutely. This blend was formulated specifically to support women through all hormonal life stages — from cycle regulation to menopause relief.' },
        { q: 'Any side effects?', a: 'Side effects are rare with our clean, natural ingredients made in a GMP-certified facility. Start with one capsule daily if you have a sensitive stomach.' },
      ]}
    />
  );
}
