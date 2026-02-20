import { WarmupPage } from '../../components/warmup-sections';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Brain Support — Brahmi, Ashwagandha & Gotu Kola | Pure Prana',
  description: 'Plant-based nootropic for memory, focus & mental clarity. Ayurvedic brain supplement with Brahmi, Ashwagandha & Gotu Kola.',
};

export default function BrainSupportPage() {
  return (
    <WarmupPage
      name="Brain Support"
      asin="B0G3P9BXHK"
      imageSlug="brain-support"
      tagline="The plant-based nootropic your brain has been waiting for"
      headline="Cut Through the Brain Fog"
      subhead="Brahmi (Bacopa) has been used for 3,000 years to sharpen memory and focus. We combined it with Ashwagandha & Gotu Kola for the ultimate natural nootropic."
      rating={4.4}
      reviewCount={22}
      price="$29.95"
      benefits={[
        { icon: '🎯', title: 'Laser-Sharp Focus', desc: 'Stay locked in during work, study sessions, or creative projects. No jitters, no crash — just clean cognitive clarity.' },
        { icon: '🧠', title: 'Memory & Recall', desc: 'Brahmi (Bacopa Monnieri) is clinically studied to support memory formation and recall speed. Used by students and professionals alike.' },
        { icon: '💨', title: 'Clears Brain Fog', desc: 'Feeling foggy or mentally drained? Our adaptogenic formula supports mental energy and alertness so you can think clearly all day.' },
        { icon: '😌', title: 'Calm Focus Under Pressure', desc: 'Ashwagandha reduces stress-induced mental fatigue. Stay centered and clear-headed even during your most demanding days.' },
      ]}
      ingredients={[
        { name: 'Brahmi (Bacopa Monnieri)', desc: '3,000+ years of Ayurvedic use for memory and cognition. One of the most studied natural nootropics on earth.' },
        { name: 'Gotu Kola', desc: 'Known as the "herb of longevity" — supports neural pathways and mental processing speed.' },
        { name: 'Shankhpushpi', desc: 'Traditional Ayurvedic brain tonic that promotes learning, creativity, and mental calm.' },
        { name: 'Ashwagandha', desc: 'Adaptogen that reduces cortisol and supports sustained mental energy without stimulants.' },
      ]}
      faqs={[
        { q: 'Is this like caffeine or Adderall?', a: 'No — this is completely different. It works with your brain\'s natural chemistry using adaptogenic herbs. No stimulant rush, no crash, no dependency.' },
        { q: 'How long until I notice sharper thinking?', a: 'Many people notice improved focus within 1-2 weeks. Brahmi\'s full memory benefits develop over 4-8 weeks of daily use.' },
        { q: 'Can I take this with coffee?', a: 'Absolutely. Our formula is stimulant-free and pairs well with your morning coffee for enhanced focus without the jitters.' },
        { q: 'Is it safe for daily long-term use?', a: 'Yes. All ingredients are gentle, plant-based, and have centuries of traditional use. Made in a GMP-certified, FDA-registered facility.' },
      ]}
    />
  );
}
