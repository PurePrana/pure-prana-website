import { WarmupPage } from '../../components/warmup-sections';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Weight Support — Garcinia, Green Tea & Berberine | Pure Prana',
  description: 'Natural weight management with Garcinia Cambogia, Green Tea Extract & Berberine. Metabolism boost and appetite control.',
};

export default function WeightSupportPage() {
  return (
    <WarmupPage
      name="Weight Support"
      asin="B0G3KKQ53V"
      headline="Support Your Weight Goals — Naturally, Not Drastically"
      subhead="Garcinia Cambogia, Green Tea Extract & Berberine work together to boost metabolism, curb cravings, and support healthy blood sugar — so you can reach your goals sustainably."
      rating={4.6}
      reviewCount={16}
      benefits={[
        { icon: '🔥', title: 'Rev Up Your Metabolism', desc: 'Green Tea Extract (EGCG) is clinically shown to increase thermogenesis and fat oxidation — helping your body burn more efficiently.' },
        { icon: '🍽️', title: 'Natural Appetite Control', desc: 'Garcinia Cambogia contains HCA which helps reduce cravings and emotional eating by supporting serotonin levels.' },
        { icon: '📉', title: 'Healthy Blood Sugar Balance', desc: 'Berberine is one of the most studied natural compounds for blood sugar regulation — comparable to some pharmaceuticals in clinical trials.' },
        { icon: '⚡', title: 'Clean Energy, No Crashes', desc: 'Gentle, sustained energy from green tea\'s natural caffeine and L-theanine — no jitters, no afternoon slumps.' },
      ]}
      faqs={[
        { q: 'How much weight can I expect to lose?', a: 'Results vary based on diet and lifestyle. Our supplement is designed to support your efforts — most customers report noticeable results within 4-8 weeks when combined with a balanced diet and regular activity.' },
        { q: 'Does this contain a lot of caffeine?', a: 'Our green tea extract contains a moderate amount of natural caffeine (~50mg per serving). It\'s paired with L-theanine for smooth, jitter-free energy.' },
        { q: 'Is berberine safe for long-term use?', a: 'Berberine has been used in traditional medicine for centuries and has extensive modern clinical research supporting its safety. As always, consult your healthcare provider if you have specific concerns.' },
        { q: 'Can I take this with other supplements?', a: 'Yes, our formula is designed to complement a healthy supplement routine. If you\'re taking diabetes medication, consult your doctor first as berberine may enhance their effects.' },
      ]}
    />
  );
}
