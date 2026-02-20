import { WarmupPage } from '../../components/warmup-sections';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Glutathione & Collagen Builder — Skin, Hair, Nails | Pure Prana',
  description: 'Vegan collagen builder with glutathione, hyaluronic acid, vitamin C & E for radiant skin, stronger hair, and healthier nails.',
};

export default function GlutathioneCollagenPage() {
  return (
    <WarmupPage
      name="Glutathione & Collagen"
      asin="B0G3KDYKY4"
      headline="Glow From Within — No Animal Collagen Needed"
      subhead="Our vegan collagen builder combines Glutathione, Hyaluronic Acid, Vitamin C & E to boost your body's own collagen production for radiant skin, stronger hair, and healthier nails."
      rating={4.5}
      reviewCount={22}
      benefits={[
        { icon: '✨', title: 'Visibly Radiant Skin', desc: 'Glutathione is the body\'s master antioxidant — it fights dullness and supports an even, glowing complexion from the inside out.' },
        { icon: '💇‍♀️', title: 'Stronger Hair & Nails', desc: 'Vitamin C and E fuel keratin production while hyaluronic acid keeps follicles hydrated for less breakage.' },
        { icon: '🧬', title: 'Boosts Natural Collagen', desc: 'Instead of animal-derived collagen, we give your body the exact nutrients it needs to produce its own — more effective and 100% vegan.' },
        { icon: '🛡️', title: 'Powerful Antioxidant Defense', desc: 'Fights free radicals that cause premature aging, fine lines, and oxidative skin damage.' },
      ]}
      faqs={[
        { q: 'How is this different from regular collagen supplements?', a: 'Most collagen supplements are animal-derived and poorly absorbed. Our vegan formula gives your body the building blocks (vitamin C, amino acids, hyaluronic acid) to produce its own collagen — which is more bioavailable and effective.' },
        { q: 'When will I see results for my skin?', a: 'Many customers notice a "glow" within 2-3 weeks. Significant improvements in skin elasticity, hair strength, and nail growth typically appear around 6-8 weeks.' },
        { q: 'Is this suitable for all skin types?', a: 'Yes! Our formula works from the inside out and is beneficial for all skin types, including sensitive and acne-prone skin.' },
        { q: 'Can men take this too?', a: 'Absolutely. Skin health, antioxidant protection, and collagen production are important for everyone regardless of gender.' },
      ]}
    />
  );
}
