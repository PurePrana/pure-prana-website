import { WarmupPage } from '../../components/warmup-sections';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Elderberry & Giloy — 10-Herb Immune Support | Pure Prana',
  description: 'Ayurvedic immune defense with Black Elderberry, Giloy, Tulsi, Neem, Turmeric & Ginger. 10 herbs in one capsule.',
};

export default function ElderberryImmunityPage() {
  return (
    <WarmupPage
      name="Elderberry & Giloy Immunity"
      asin="B0G3KPT191"
      imageSlug="elderberry-immunity"
      tagline="10 immune-boosting herbs in one powerful capsule"
      headline="Stop Getting Knocked Down Every Season"
      subhead="Black Elderberry meets Giloy, Tulsi, Neem, Turmeric & Ginger — the most comprehensive Ayurvedic immune formula you can buy. 10 herbs. One capsule. Year-round defense."
      rating={4.4}
      reviewCount={24}
      price="$29.95"
      benefits={[
        { icon: '🛡️', title: '10-Herb Immune Powerhouse', desc: 'Not just elderberry — we combined Western immune science with Ayurvedic tradition. Giloy, Tulsi, Neem, Turmeric, Ginger, and more.' },
        { icon: '🌡️', title: 'Seasonal Defense That Works', desc: 'Designed for those seasonal transitions when everyone around you is getting sick. Support your natural defenses before you need them.' },
        { icon: '🫁', title: 'Respiratory & Breathing Support', desc: 'Elderberry + Tulsi + Ginger promote healthy respiratory function and comfortable breathing year-round.' },
        { icon: '🧘', title: 'Stress-Resilient Immunity', desc: 'Tulsi (Holy Basil) is a powerful adaptogen — it strengthens immune function when you\'re stressed, traveling, or sleep-deprived.' },
      ]}
      ingredients={[
        { name: 'Black Elderberry', desc: 'Rich in antioxidants and anthocyanins. The Western world\'s #1 immune berry.' },
        { name: 'Giloy (Guduchi)', desc: 'Called "Amrita" (nectar of immortality) in Ayurveda. One of the most revered immune herbs in Indian medicine.' },
        { name: 'Tulsi (Holy Basil)', desc: 'Sacred adaptogenic herb that supports immune resilience during stress and seasonal changes.' },
        { name: 'Neem + Turmeric + Ginger', desc: 'Three Ayurvedic staples for natural anti-inflammatory and antioxidant support.' },
      ]}
      faqs={[
        { q: 'When should I start taking this?', a: 'Don\'t wait until you\'re already sick. Take daily for ongoing immune support, especially before cold and flu season, travel, or stressful periods.' },
        { q: 'Can kids take this?', a: 'This formula is designed for adults. For children, please consult your pediatrician.' },
        { q: 'Is this just another elderberry supplement?', a: 'Not even close. Most elderberry supplements are 1-2 ingredients. Ours combines 10 powerful herbs from both Western and Ayurvedic traditions for complete immune coverage.' },
        { q: 'Can I take this year-round?', a: 'Absolutely. All ingredients are gentle enough for daily long-term use. Your immune system works 365 days a year — support it accordingly.' },
      ]}
    />
  );
}
