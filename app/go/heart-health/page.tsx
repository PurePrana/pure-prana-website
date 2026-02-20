import { WarmupPage } from '../../components/warmup-sections';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Heart Health — Arjuna, Hawthorn & CoQ10 | Pure Prana',
  description: 'Ayurvedic heart support with Arjuna, Hawthorn Berry & CoQ10 for healthy blood pressure, cholesterol, and cardiovascular function.',
};

export default function HeartHealthPage() {
  return (
    <WarmupPage
      name="Heart Health"
      asin="B0G3KFMQ42"
      headline="Love Your Heart — The Ayurvedic Way"
      subhead="Arjuna, Hawthorn Berry & CoQ10: a powerful trio that supports healthy blood pressure, cholesterol levels, and overall cardiovascular strength."
      rating={4.0}
      reviewCount={24}
      benefits={[
        { icon: '❤️', title: 'Supports Healthy Blood Pressure', desc: 'Arjuna bark has been used in Ayurveda for 3,000+ years and is clinically studied for its cardioprotective and blood pressure-regulating properties.' },
        { icon: '📊', title: 'Healthy Cholesterol Levels', desc: 'Hawthorn Berry supports healthy LDL/HDL ratios and promotes efficient lipid metabolism.' },
        { icon: '⚡', title: 'Cellular Energy for Your Heart', desc: 'CoQ10 is essential for mitochondrial energy production in heart muscle cells — your hardest-working organ needs the most fuel.' },
        { icon: '🩸', title: 'Improved Circulation', desc: 'Our blend supports arterial flexibility and healthy blood flow, helping you feel more energized throughout the day.' },
      ]}
      faqs={[
        { q: 'Can I take this with blood pressure medication?', a: 'While our herbs are gentle and natural, please consult your cardiologist or healthcare provider before combining with any cardiovascular medications.' },
        { q: 'How long until I see results?', a: 'Many customers report feeling more energized within 2-3 weeks. Measurable improvements in blood pressure and cholesterol typically show at your next checkup after 2-3 months of consistent use.' },
        { q: 'Is this a replacement for heart medication?', a: 'No. This is a dietary supplement designed to support cardiovascular health. It is not intended to diagnose, treat, cure, or prevent any disease. Always follow your doctor\'s guidance.' },
        { q: 'What age should I start taking heart support?', a: 'Heart health is important at every age. Many customers in their 30s-40s take it preventively, while those 50+ use it for active cardiovascular support.' },
      ]}
    />
  );
}
