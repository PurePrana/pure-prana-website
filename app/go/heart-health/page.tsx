import { WarmupPage } from '../../components/warmup-sections';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Heart Health — Arjuna Bark, Hawthorn & CoQ10 | Pure Prana',
  description: 'Ayurvedic cardiovascular support with Arjuna Bark, Hawthorn Berry, CoQ10, Beet Root & Grape Seed Extract.',
};

export default function HeartHealthPage() {
  return (
    <WarmupPage
      name="Heart Health"
      asin="B0G3KFMQ42"
      imageSlug="heart-health"
      tagline="5-in-1 Ayurvedic Cardiovascular Formula"
      headline="Your Heart Does a Lot for You. Return the Favor."
      subhead="Arjuna Bark + Hawthorn Berry + CoQ10 + Beet Root + Grape Seed — five powerhouse ingredients working together for comprehensive cardiovascular support."
      rating={4.0}
      reviewCount={24}
      price="$29.95"
      benefits={[
        { icon: '❤️', title: 'Complete Heart Support', desc: 'Arjuna Bark has been the #1 Ayurvedic heart tonic for 3,000 years. Combined with Hawthorn Berry for healthy heart muscle function.' },
        { icon: '🩸', title: 'Healthy Blood Pressure Support', desc: 'Hawthorn Berry and Beet Root work together to support blood pressure already within normal range and promote cardiovascular balance.' },
        { icon: '🫀', title: 'Better Circulation & Blood Flow', desc: 'Beet Root naturally boosts nitric oxide production for healthier blood vessels and efficient oxygen delivery to your heart and body.' },
        { icon: '🛡️', title: 'Antioxidant Protection with CoQ10', desc: 'CoQ10 and Grape Seed Extract combat free radicals and support cellular energy production — critical for healthy aging.' },
      ]}
      ingredients={[
        { name: 'Arjuna Bark (400mg)', desc: 'The crown jewel of Ayurvedic cardiology. Used for 3,000+ years as a natural heart tonic.' },
        { name: 'Hawthorn Berry', desc: 'European botanical tradition\'s go-to for heart muscle support and healthy blood pressure.' },
        { name: 'CoQ10 (Coenzyme Q10)', desc: 'Concentrated in your heart muscle. Supports energy metabolism and cellular protection.' },
        { name: 'Beet Root + Grape Seed', desc: 'Nitric oxide booster + powerful antioxidant for vascular health and circulation.' },
      ]}
      faqs={[
        { q: 'Can I take this with blood pressure medication?', a: 'Our formula supports healthy levels already within normal range. Always consult your healthcare provider before combining with cardiovascular medications.' },
        { q: 'Why 5 ingredients instead of just CoQ10?', a: 'Heart health is complex. A single ingredient can\'t do it all. Our 5-in-1 formula addresses circulation, antioxidant protection, blood pressure, and heart muscle function simultaneously.' },
        { q: 'How long until I notice benefits?', a: 'Some people report feeling more energetic within 2-3 weeks. Cardiovascular benefits build over 4-8 weeks of consistent daily use.' },
        { q: 'Is this vegan?', a: 'Yes — 100% plant-based, vegan, non-GMO, gluten-free, soy-free, and dairy-free. Made in a GMP-certified USA facility.' },
      ]}
    />
  );
}
