import { WarmupPage } from '../../components/warmup-sections';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hormone Balance — Shatavari & Ashwagandha | Pure Prana',
  description: 'Natural hormonal support for women. Shatavari, Ashwagandha & more for PMS, menopause, and daily balance.',
};

export default function HormoneBalancePage() {
  return (
    <WarmupPage
      name="Hormone Balance"
      asin="B0DZ23LJGJ"
      headline="Finally, Hormonal Balance — Without the Side Effects"
      subhead="Our Ayurvedic blend of Shatavari & Ashwagandha helps women reclaim their cycle, ease PMS, and navigate menopause naturally."
      rating={4.6}
      reviewCount={47}
      benefits={[
        { icon: '🌸', title: 'Eases PMS & Cramps', desc: 'Shatavari has been used for centuries to support the female reproductive system and reduce monthly discomfort.' },
        { icon: '🧘‍♀️', title: 'Smooth Menopause Transition', desc: 'Ashwagandha helps manage cortisol and hot flashes so you can feel like yourself again.' },
        { icon: '⚡', title: 'Balanced Energy All Day', desc: 'No more afternoon crashes. Adaptogenic herbs help stabilize your energy and mood naturally.' },
        { icon: '💤', title: 'Better Sleep & Less Stress', desc: 'Calming botanicals promote restful sleep and reduce the anxiety that comes with hormonal shifts.' },
      ]}
      faqs={[
        { q: 'How long until I notice results?', a: 'Most women report improvements within 2-4 weeks of consistent daily use. Full benefits typically develop over 6-8 weeks as your body rebalances.' },
        { q: 'Can I take this with birth control?', a: 'Our formula uses gentle, food-grade herbs. However, we always recommend consulting your healthcare provider when combining with any medication.' },
        { q: 'Is this safe for perimenopause and menopause?', a: 'Absolutely. Our blend was specifically formulated to support women through all hormonal life stages, from cycle regulation to menopause relief.' },
        { q: 'Are there any side effects?', a: 'Our formula is made with clean, natural ingredients in a GMP-certified facility. Side effects are rare. Start with one capsule daily if you have a sensitive stomach.' },
      ]}
    />
  );
}
