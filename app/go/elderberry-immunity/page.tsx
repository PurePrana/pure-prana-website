import { WarmupPage } from '../../components/warmup-sections';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Elderberry Immunity — 10-Herb Immune Support | Pure Prana',
  description: '10-herb Ayurvedic immune support with Elderberry, Turmeric, Echinacea and more. Year-round defense.',
};

export default function ElderberryImmunityPage() {
  return (
    <WarmupPage
      name="Elderberry Immunity"
      asin="B0G3KPT191"
      headline="10 Powerful Herbs. One Unbreakable Immune Shield."
      subhead="Elderberry, Turmeric, Echinacea and 7 more immune-boosting herbs working together to keep you protected year-round — not just during cold season."
      rating={4.4}
      reviewCount={24}
      benefits={[
        { icon: '🛡️', title: 'Year-Round Immune Defense', desc: 'Elderberry is rich in anthocyanins and vitamin C — clinically shown to reduce the duration and severity of colds and flu.' },
        { icon: '🔥', title: 'Fights Inflammation', desc: 'Turmeric and ginger work synergistically to reduce chronic inflammation that weakens your immune response.' },
        { icon: '🌿', title: '10 Herbs, One Formula', desc: 'Instead of juggling multiple supplements, get a comprehensive immune stack in two daily capsules.' },
        { icon: '⚡', title: 'Fast-Acting When You Need It', desc: 'Echinacea provides rapid immune activation when you feel something coming on. Take daily for prevention or double up when exposed.' },
      ]}
      faqs={[
        { q: 'Should I only take this when I\'m sick?', a: 'No — this formula is designed for daily use as preventive support. Consistent daily use builds a stronger baseline immune response. You can increase your dose when you feel something coming on.' },
        { q: 'What are all 10 herbs?', a: 'Our comprehensive blend includes Elderberry, Turmeric, Echinacea, Ginger, Astragalus, Garlic, Oregano, Olive Leaf, Reishi Mushroom, and Vitamin C. Each chosen for complementary immune pathways.' },
        { q: 'Is this safe for daily long-term use?', a: 'Yes. All ingredients are food-grade herbs with long histories of safe daily use. Manufactured in our GMP-certified, FDA-registered facility with third-party testing.' },
        { q: 'Can kids take this?', a: 'This formula is designed for adults. Please consult your pediatrician for children\'s dosing recommendations.' },
      ]}
    />
  );
}
