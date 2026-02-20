import { WarmupPage } from '../../components/warmup-sections';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Brain Support — Brahmi, Ashwagandha & Gotu Kola | Pure Prana',
  description: 'Ayurvedic nootropic for focus, memory, and mental clarity. Brahmi, Ashwagandha & Gotu Kola.',
};

export default function BrainSupportPage() {
  return (
    <WarmupPage
      name="Brain Support"
      asin="B0G3P9BXHK"
      headline="Sharper Focus. Better Memory. No Jitters."
      subhead="Ancient Ayurvedic nootropics — Brahmi, Ashwagandha & Gotu Kola — clinically studied to support focus, memory, and mental clarity without caffeine crashes."
      rating={4.4}
      reviewCount={22}
      benefits={[
        { icon: '🧠', title: 'Enhanced Focus & Clarity', desc: 'Brahmi (Bacopa Monnieri) has been shown in studies to improve attention and cognitive processing speed.' },
        { icon: '📚', title: 'Stronger Memory Recall', desc: 'Gotu Kola supports neural connectivity and has been used in Ayurveda for centuries to sharpen memory.' },
        { icon: '😌', title: 'Calm, Sustained Energy', desc: 'Ashwagandha reduces cortisol so you get focused energy without the anxiety or crashes of stimulants.' },
        { icon: '🔄', title: 'Long-Term Brain Health', desc: 'Neuroprotective antioxidants help guard against age-related cognitive decline and brain fog.' },
      ]}
      faqs={[
        { q: 'Is this a stimulant? Will it keep me up at night?', a: 'No. Our formula is stimulant-free and caffeine-free. It works by supporting your brain\'s natural pathways, not by artificially stimulating them. Many users actually report better sleep.' },
        { q: 'How does this compare to synthetic nootropics?', a: 'Unlike synthetic nootropics, our herbs have thousands of years of safe use and modern clinical studies backing them. They work gently and build cumulative benefits over time.' },
        { q: 'Can I take this with coffee?', a: 'Yes! Many customers pair it with their morning coffee for enhanced focus. The Ashwagandha actually helps smooth out caffeine jitters.' },
        { q: 'How long does it take to work?', a: 'Some people notice improved focus within the first week. Memory and cognitive benefits typically build over 4-8 weeks of consistent use.' },
      ]}
    />
  );
}
