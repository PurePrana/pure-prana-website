import { WarmupPage } from '../../components/warmup-sections';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Power Blend — Shilajit, Ashwagandha & Gokshura | Pure Prana',
  description: 'Men\'s energy & vitality formula. Shilajit, Ashwagandha & Gokshura for strength, stamina, and peak performance.',
};

export default function PowerBlendPage() {
  return (
    <WarmupPage
      name="Power Blend"
      asin="B0CWS4NCCF"
      headline="Reclaim Your Edge — Energy, Strength & Drive"
      subhead="Shilajit, Ashwagandha & Gokshura: the Ayurvedic trifecta trusted by men who refuse to slow down. Natural vitality without synthetic shortcuts."
      rating={3.9}
      reviewCount={93}
      benefits={[
        { icon: '💪', title: 'Peak Physical Performance', desc: 'Shilajit delivers fulvic acid and 80+ trace minerals to fuel muscle recovery, endurance, and natural testosterone support.' },
        { icon: '⚡', title: 'All-Day Natural Energy', desc: 'Ashwagandha fights fatigue at the root by optimizing cortisol and supporting mitochondrial energy production.' },
        { icon: '🔥', title: 'Enhanced Vitality & Drive', desc: 'Gokshura (Tribulus) has been used for centuries in Ayurveda to support male reproductive health and libido.' },
        { icon: '🏋️', title: 'Faster Recovery', desc: 'Adaptogenic herbs help your body bounce back faster from workouts, stress, and demanding days.' },
      ]}
      faqs={[
        { q: 'Is this a testosterone booster?', a: 'Our formula supports your body\'s natural hormone production through adaptogenic herbs — it\'s not a synthetic testosterone booster. Studies show Shilajit and Ashwagandha can support healthy testosterone levels naturally.' },
        { q: 'Can I take this before workouts?', a: 'Yes! Many customers take it 30-60 minutes before training for enhanced endurance and focus. It also supports post-workout recovery.' },
        { q: 'Are there any side effects?', a: 'Our herbs are well-tolerated and have centuries of safe traditional use. Made in a GMP-certified, FDA-registered facility with third-party testing.' },
        { q: 'How is this different from other men\'s supplements?', a: 'Most men\'s supplements use synthetic ingredients. Ours combines three of Ayurveda\'s most researched herbs in clinically-relevant dosages — pure, clean, and effective.' },
      ]}
    />
  );
}
