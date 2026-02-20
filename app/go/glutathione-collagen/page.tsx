import { WarmupPage } from '../../components/warmup-sections';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Glutathione & Collagen Builder — Skin, Hair, Nails | Pure Prana',
  description: 'Brightening & anti-aging supplement with 300mg Glutathione, Hyaluronic Acid, Vitamin C & E. Radiant skin from within.',
};

export default function GlutathioneCollagenPage() {
  return (
    <WarmupPage
      name="Glutathione & Collagen Builder"
      asin="B0G3KDYKY4"
      imageSlug="glutathione-collagen"
      tagline="Beauty from within — the clean way"
      headline="Glow Like You Mean It"
      subhead="300mg Reduced Glutathione + Plant-Based Collagen Support + Hyaluronic Acid + Vitamin C & E. The master antioxidant meets your skin's best friends."
      rating={4.5}
      reviewCount={23}
      price="$29.95"
      benefits={[
        { icon: '✨', title: 'Radiant, Even Skin Tone', desc: 'Glutathione — the body\'s master antioxidant — promotes a bright, glowing complexion and helps fade dark spots and sun damage.' },
        { icon: '💧', title: 'Deep Hydration from Within', desc: 'Hyaluronic Acid holds 1,000x its weight in water. Plump, dewy skin that starts from the inside out.' },
        { icon: '💅', title: 'Stronger Hair & Nails', desc: 'Essential amino acids strengthen brittle nails and support thicker, more lustrous hair. Complete beauty from within.' },
        { icon: '🛡️', title: 'Anti-Aging & Liver Detox', desc: 'Glutathione supports natural detoxification and cellular repair. Turmeric + Vitamin E provide powerful antioxidant protection.' },
      ]}
      ingredients={[
        { name: 'Reduced Glutathione (300mg)', desc: 'The "master antioxidant" — your body\'s most important molecule for skin brightening and cellular detox.' },
        { name: 'Plant-Based Collagen Builder (300mg)', desc: 'Vegan collagen support that promotes your body\'s natural collagen production for firm, youthful skin.' },
        { name: 'Hyaluronic Acid', desc: 'Nature\'s moisture magnet. Hydrates skin cells from within for a plump, dewy complexion.' },
        { name: 'Vitamin C + E + Turmeric', desc: 'Triple antioxidant protection that shields skin from environmental damage and supports collagen synthesis.' },
      ]}
      faqs={[
        { q: 'How is this different from collagen powder?', a: 'Most collagen supplements are animal-derived. Ours is 100% vegan with a collagen BUILDER approach — giving your body the tools to produce its own collagen naturally, plus Glutathione for skin brightening that collagen alone can\'t do.' },
        { q: 'When will I see results on my skin?', a: 'Many notice a subtle glow within 2-3 weeks. Significant improvements in skin tone, hydration, and nail strength typically develop over 4-8 weeks.' },
        { q: 'Can men take this?', a: 'Absolutely. Glutathione and antioxidant support benefit everyone — skin health, liver detox, and anti-aging aren\'t gender-specific.' },
        { q: 'Is this safe with other skincare products?', a: 'Yes — this works from the inside. It complements any topical skincare routine and actually enhances the results of your serums and creams.' },
      ]}
    />
  );
}
