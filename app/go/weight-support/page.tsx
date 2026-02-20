import { WarmupPage } from '../../components/warmup-sections';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Metabolic & Weight Support — Garcinia, Green Tea & Berberine | Pure Prana',
  description: 'Ayurvedic metabolic support with Garcinia, Berberine, Green Tea, Green Coffee Bean & Guggul. Natural energy & healthy metabolism.',
};

export default function WeightSupportPage() {
  return (
    <WarmupPage
      name="Metabolic & Weight Support"
      asin="B0G3KKQ53V"
      imageSlug="weight-support"
      tagline="Support your metabolism the Ayurvedic way"
      headline="Your Metabolism Needs Backup"
      subhead="Garcinia + Berberine + Green Tea + Green Coffee Bean + Guggul — five plant-based ingredients that support healthy metabolism, digestion, and natural energy. No harsh stimulants."
      rating={4.4}
      reviewCount={17}
      price="$29.95"
      benefits={[
        { icon: '🔥', title: 'Healthy Metabolic Function', desc: 'Garcinia and Guggul are traditional Ayurvedic herbs used for centuries to support healthy metabolic balance and lipid metabolism.' },
        { icon: '⚡', title: 'Clean, Natural Energy', desc: 'Green Tea + Green Coffee Bean provide steady, sustained energy and mental clarity — without the crash of stimulant pills.' },
        { icon: '🫃', title: 'Digestive Harmony', desc: 'Berberine supports healthy carbohydrate metabolism and digestive balance as part of your daily wellness routine.' },
        { icon: '🛡️', title: 'Antioxidant Cell Protection', desc: 'Green Tea polyphenols and catechins help protect cells from oxidative stress and support overall cellular wellness.' },
      ]}
      ingredients={[
        { name: 'Garcinia Cambogia', desc: 'Tropical fruit extract used in Ayurvedic tradition to support healthy appetite and metabolic balance.' },
        { name: 'Berberine', desc: 'Powerful botanical used for over 2,500 years. Supports healthy blood sugar and carbohydrate metabolism.' },
        { name: 'Green Tea + Green Coffee Bean', desc: 'Natural polyphenols for steady energy, mental clarity, and antioxidant protection.' },
        { name: 'Guggul Resin', desc: 'Ancient Ayurvedic ingredient revered for supporting healthy lipid levels and metabolic function.' },
      ]}
      faqs={[
        { q: 'Will this make me jittery?', a: 'No. Our formula uses natural green tea and green coffee bean at balanced doses — you get clean energy without the jitters, crash, or racing heart.' },
        { q: 'Do I need to diet and exercise too?', a: 'This supplement supports healthy metabolism as part of a balanced lifestyle. It works best alongside a nutritious diet and regular activity.' },
        { q: 'How long until I notice something?', a: 'Many people notice improved energy and digestion within the first 1-2 weeks. Metabolic support benefits build over 4-8 weeks of consistent use.' },
        { q: 'Is Berberine safe long-term?', a: 'Berberine has been used safely for thousands of years in traditional medicine. Our formula is made in a GMP-certified facility and third-party tested for purity.' },
      ]}
    />
  );
}
