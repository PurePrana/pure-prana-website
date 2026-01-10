'use client'

import { useState } from 'react'
import Link from 'next/link'
import { getAllProducts } from '@/lib/products'

// Ayurvedic consultation questions - like a Vaidya would ask
const AYURVEDIC_QUESTIONS = [
  {
    id: 'body_frame',
    question: 'How would you describe your body frame?',
    ayurvedicContext: 'This helps determine your Prakriti (natural constitution)',
    options: [
      { value: 'vata', label: 'Thin, light, tend to lose weight easily', dosha: 'vata' },
      { value: 'pitta', label: 'Medium build, muscular, moderate weight', dosha: 'pitta' },
      { value: 'kapha', label: 'Larger frame, gain weight easily, sturdy', dosha: 'kapha' },
    ],
  },
  {
    id: 'skin_type',
    question: 'What best describes your skin?',
    ayurvedicContext: 'Skin reflects internal balance and dosha',
    options: [
      { value: 'vata', label: 'Dry, rough, cool to touch, prone to cracking', dosha: 'vata' },
      { value: 'pitta', label: 'Warm, oily T-zone, prone to redness/acne', dosha: 'pitta' },
      { value: 'kapha', label: 'Thick, oily, smooth, cool and moist', dosha: 'kapha' },
    ],
  },
  {
    id: 'digestion',
    question: 'How is your digestion (Agni)?',
    ayurvedicContext: 'Agni (digestive fire) is central to Ayurvedic health',
    options: [
      { value: 'vata', label: 'Irregular - sometimes good, sometimes poor, gas/bloating', dosha: 'vata' },
      { value: 'pitta', label: 'Strong - can eat anything, get hungry often, acid reflux', dosha: 'pitta' },
      { value: 'kapha', label: 'Slow - heavy feeling after eating, rarely very hungry', dosha: 'kapha' },
    ],
  },
  {
    id: 'sleep',
    question: 'How do you typically sleep?',
    ayurvedicContext: 'Sleep patterns reveal dosha imbalance',
    options: [
      { value: 'vata', label: 'Light sleeper, wake often, hard to fall asleep', dosha: 'vata' },
      { value: 'pitta', label: 'Moderate sleep, wake feeling hot, vivid dreams', dosha: 'pitta' },
      { value: 'kapha', label: 'Deep, heavy sleep, hard to wake up, sleep long', dosha: 'kapha' },
    ],
  },
  {
    id: 'stress_response',
    question: 'When stressed, how do you typically react?',
    ayurvedicContext: 'Emotional patterns indicate dosha tendencies',
    options: [
      { value: 'vata', label: 'Anxious, worried, fearful, restless mind', dosha: 'vata' },
      { value: 'pitta', label: 'Irritable, angry, critical, impatient', dosha: 'pitta' },
      { value: 'kapha', label: 'Withdrawn, sad, unmotivated, attached', dosha: 'kapha' },
    ],
  },
  {
    id: 'energy_pattern',
    question: 'How is your energy throughout the day?',
    ayurvedicContext: 'Energy flow reflects Prana and dosha balance',
    options: [
      { value: 'vata', label: 'Bursts of energy, tire quickly, variable', dosha: 'vata' },
      { value: 'pitta', label: 'Strong, focused energy that can lead to burnout', dosha: 'pitta' },
      { value: 'kapha', label: 'Steady but slow, takes time to get going', dosha: 'kapha' },
    ],
  },
  {
    id: 'climate_preference',
    question: 'What climate do you prefer?',
    ayurvedicContext: 'Climate preference indicates dosha balance needs',
    options: [
      { value: 'vata', label: 'Warm, humid - I dislike cold and wind', dosha: 'vata' },
      { value: 'pitta', label: 'Cool, well-ventilated - I overheat easily', dosha: 'pitta' },
      { value: 'kapha', label: 'Warm, dry - I dislike cold, damp weather', dosha: 'kapha' },
    ],
  },
  {
    id: 'primary_concern',
    question: 'What is your primary health concern right now?',
    ayurvedicContext: 'This helps identify your Vikriti (current imbalance)',
    options: [
      { value: 'energy', label: 'Low energy, fatigue, lack of vitality', concern: 'energy' },
      { value: 'stress', label: 'Stress, anxiety, difficulty relaxing', concern: 'stress' },
      { value: 'digestion', label: 'Digestive issues, bloating, irregular', concern: 'digestion' },
      { value: 'sleep', label: 'Sleep problems, insomnia, poor rest', concern: 'sleep' },
      { value: 'immunity', label: 'Weak immunity, frequent illness', concern: 'immunity' },
      { value: 'focus', label: 'Poor focus, memory, mental fog', concern: 'focus' },
      { value: 'joints', label: 'Joint pain, stiffness, mobility', concern: 'joints' },
      { value: 'weight', label: 'Weight management, metabolism', concern: 'weight' },
    ],
  },
]

// Dosha-specific wellness recommendations
const DOSHA_PLANS = {
  vata: {
    dosha: 'Vata',
    element: 'Air + Space',
    characteristics: 'Creative, quick-thinking, energetic when balanced. Prone to anxiety, dryness, and irregularity when imbalanced.',
    balancingPrinciples: [
      'Favor warm, cooked, moist foods',
      'Establish regular daily routines',
      'Practice grounding activities',
      'Stay warm and avoid cold, dry environments',
      'Use warming oils like sesame for massage',
    ],
    morningRoutine: [
      'Wake gently at the same time daily (6-7 AM)',
      'Warm water with ginger to kindle Agni',
      'Self-massage (Abhyanga) with warm sesame oil',
      'Gentle yoga focusing on grounding poses',
      'Warm, nourishing breakfast - avoid cold cereals',
    ],
    eveningRoutine: [
      'Light, early dinner before 7 PM',
      'Warm milk with nutmeg and cardamom',
      'Gentle stretching or restorative yoga',
      'Avoid screens - practice calm activities',
      'Bed by 10 PM in a warm, comfortable space',
    ],
    dietaryGuidelines: [
      'Favor: Sweet, sour, salty tastes',
      'Warm, cooked foods with healthy oils/ghee',
      'Root vegetables, rice, wheat, warm soups',
      'Avoid: Raw foods, cold drinks, dried fruits',
      'Eat at regular times - don\'t skip meals',
    ],
    herbsAndSupplements: [
      'Ashwagandha - Calms Vata, builds strength',
      'Brahmi - Supports nervous system',
      'Triphala - Gentle digestive support',
      'Ginger - Kindles digestive fire',
    ],
    lifestyle: [
      'Maintain consistent sleep and wake times',
      'Avoid excessive travel and stimulation',
      'Practice meditation for mental calm',
      'Stay warm - especially feet and head',
      'Gentle exercise - avoid exhaustion',
    ],
    productSlugs: ['bacopa-ashwagandha', 'boswellia-turmeric'],
  },
  pitta: {
    dosha: 'Pitta',
    element: 'Fire + Water',
    characteristics: 'Intelligent, focused, driven when balanced. Prone to irritability, inflammation, and overheating when imbalanced.',
    balancingPrinciples: [
      'Favor cooling, calming foods',
      'Avoid excessive heat and competition',
      'Practice moderation in all things',
      'Stay cool and avoid midday sun',
      'Use cooling oils like coconut for massage',
    ],
    morningRoutine: [
      'Wake before sunrise (5:30-6 AM)',
      'Room temperature water with lime',
      'Self-massage with coconut oil',
      'Moderate exercise before it gets hot',
      'Cooling breakfast - avoid spicy foods',
    ],
    eveningRoutine: [
      'Moderate dinner, not too late',
      'Cooling herbal tea (mint, chamomile)',
      'Moonlight walk if possible',
      'Avoid intense discussions or work',
      'Bed by 10:30 PM in a cool room',
    ],
    dietaryGuidelines: [
      'Favor: Sweet, bitter, astringent tastes',
      'Cooling foods - cucumber, melons, leafy greens',
      'Avoid: Spicy, sour, fermented foods',
      'Reduce: Caffeine, alcohol, red meat',
      'Eat in a calm environment',
    ],
    herbsAndSupplements: [
      'Brahmi - Cools and calms the mind',
      'Amalaki - Cooling, high in Vitamin C',
      'Shatavari - Nourishing and cooling',
      'Turmeric - Anti-inflammatory (with cooling herbs)',
    ],
    lifestyle: [
      'Avoid excessive competition',
      'Take breaks from intense work',
      'Spend time near water',
      'Practice cooling pranayama (Sheetali)',
      'Cultivate patience and compassion',
    ],
    productSlugs: ['bacopa-ashwagandha', 'elderberry-giloy'],
  },
  kapha: {
    dosha: 'Kapha',
    element: 'Earth + Water',
    characteristics: 'Calm, nurturing, stable when balanced. Prone to lethargy, weight gain, and congestion when imbalanced.',
    balancingPrinciples: [
      'Favor light, warm, stimulating foods',
      'Stay active and embrace change',
      'Avoid excessive sleep and rest',
      'Stay warm and dry',
      'Use stimulating dry massage (Garshana)',
    ],
    morningRoutine: [
      'Wake early (before 6 AM) - don\'t oversleep',
      'Warm water with lemon and honey',
      'Dry brushing (Garshana) to stimulate',
      'Vigorous exercise - this is important for Kapha',
      'Light breakfast or skip if not hungry',
    ],
    eveningRoutine: [
      'Light, early dinner - largest meal at lunch',
      'Stimulating herbal tea (ginger, cinnamon)',
      'Evening walk or activity',
      'Avoid heavy snacking',
      'Bed by 10 PM - avoid sleeping late',
    ],
    dietaryGuidelines: [
      'Favor: Pungent, bitter, astringent tastes',
      'Light, dry, warm foods with spices',
      'Leafy greens, legumes, light grains',
      'Avoid: Heavy, oily, sweet, cold foods',
      'Eat only when hungry - avoid emotional eating',
    ],
    herbsAndSupplements: [
      'Trikatu - Stimulates digestion and metabolism',
      'Guggulu - Supports metabolism and joints',
      'Ginger - Kindles Agni',
      'Green Tea - Stimulating and cleansing',
    ],
    lifestyle: [
      'Exercise vigorously daily',
      'Embrace new experiences and change',
      'Avoid daytime sleeping',
      'Stay warm and dry',
      'Seek stimulation and variety',
    ],
    productSlugs: ['green-tea-garcinia', 'boswellia-turmeric'],
  },
}

// Concern-specific additions
const CONCERN_ADDITIONS: Record<string, { title: string; recommendations: string[]; productSlugs: string[] }> = {
  energy: {
    title: 'Energy & Vitality',
    recommendations: [
      'Practice Surya Namaskar (Sun Salutations) daily',
      'Take adaptogenic herbs like Ashwagandha',
      'Ensure adequate protein and iron intake',
      'Avoid energy crashes by eating regularly',
      'Practice Pranayama for Prana (vital energy)',
    ],
    productSlugs: ['bacopa-ashwagandha'],
  },
  stress: {
    title: 'Stress & Anxiety Relief',
    recommendations: [
      'Practice daily meditation (even 10 minutes)',
      'Take Ashwagandha and Brahmi for calm',
      'Reduce caffeine and stimulants',
      'Practice Nadi Shodhana (alternate nostril breathing)',
      'Prioritize rest and self-care',
    ],
    productSlugs: ['bacopa-ashwagandha'],
  },
  digestion: {
    title: 'Digestive Health',
    recommendations: [
      'Eat your largest meal at lunch when Agni is strongest',
      'Sip warm ginger tea before meals',
      'Avoid cold drinks with food',
      'Take Triphala at night for regularity',
      'Eat in a calm, seated position',
    ],
    productSlugs: ['boswellia-turmeric'],
  },
  sleep: {
    title: 'Sleep Quality',
    recommendations: [
      'Establish consistent sleep/wake times',
      'Take Ashwagandha before bed',
      'Warm milk with nutmeg at night',
      'Massage feet with warm oil',
      'Avoid screens 2 hours before sleep',
    ],
    productSlugs: ['bacopa-ashwagandha'],
  },
  immunity: {
    title: 'Immune Support',
    recommendations: [
      'Take Chyawanprash daily',
      'Include turmeric and ginger in diet',
      'Practice Pranayama for respiratory health',
      'Get adequate sleep for immune repair',
      'Elderberry and Giloy for immune strength',
    ],
    productSlugs: ['elderberry-giloy'],
  },
  focus: {
    title: 'Mental Clarity & Focus',
    recommendations: [
      'Take Brahmi (Bacopa) for cognitive support',
      'Practice Trataka (candle gazing) meditation',
      'Reduce digital overstimulation',
      'Include healthy fats (ghee) for brain',
      'Practice single-tasking throughout the day',
    ],
    productSlugs: ['bacopa-ashwagandha'],
  },
  joints: {
    title: 'Joint Health & Mobility',
    recommendations: [
      'Daily self-massage with warm sesame oil',
      'Take Boswellia and Turmeric',
      'Practice gentle yoga for flexibility',
      'Include anti-inflammatory spices',
      'Stay hydrated and mobile',
    ],
    productSlugs: ['boswellia-turmeric'],
  },
  weight: {
    title: 'Weight Management',
    recommendations: [
      'Eat largest meal at lunch',
      'Practice intermittent fasting (if appropriate)',
      'Take Green Tea and metabolism supporters',
      'Exercise vigorously in the morning',
      'Avoid snacking between meals',
    ],
    productSlugs: ['green-tea-garcinia'],
  },
}

export default function FreeWellnessPlanPage() {
  const [step, setStep] = useState<'capture' | 'quiz' | 'plan'>('capture')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [doshaScores, setDoshaScores] = useState({ vata: 0, pitta: 0, kapha: 0 })
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [primaryDosha, setPrimaryDosha] = useState<'vata' | 'pitta' | 'kapha'>('vata')
  const [primaryConcern, setPrimaryConcern] = useState('')

  const allProducts = getAllProducts()

  const handleStartQuiz = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !name) return
    setStep('quiz')
  }

  const handleAnswer = (questionId: string, value: string, dosha?: string) => {
    const newAnswers = { ...answers, [questionId]: value }
    setAnswers(newAnswers)

    // Update dosha scores
    if (dosha) {
      setDoshaScores((prev) => ({
        ...prev,
        [dosha]: prev[dosha as keyof typeof prev] + 1,
      }))
    }

    // Track primary concern
    if (questionId === 'primary_concern') {
      setPrimaryConcern(value)
    }

    if (currentQuestion < AYURVEDIC_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Calculate primary dosha and save
      finishQuiz(newAnswers)
    }
  }

  const finishQuiz = async (finalAnswers: Record<string, string>) => {
    setIsLoading(true)

    // Determine primary dosha
    const finalScores = { ...doshaScores }
    // Add last answer's dosha if applicable
    const lastQ = AYURVEDIC_QUESTIONS[AYURVEDIC_QUESTIONS.length - 1]
    if (lastQ.options[0] && 'dosha' in lastQ.options[0]) {
      const selectedOption = lastQ.options.find((o) => o.value === finalAnswers[lastQ.id])
      if (selectedOption && 'dosha' in selectedOption) {
        finalScores[selectedOption.dosha as keyof typeof finalScores]++
      }
    }

    const dominant = Object.entries(finalScores).reduce((a, b) =>
      a[1] > b[1] ? a : b
    )[0] as 'vata' | 'pitta' | 'kapha'

    setPrimaryDosha(dominant)

    try {
      // Save to API
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          name,
          source: 'qr-wellness-plan',
          discountCode: 'WELLNESS15',
          metadata: {
            answers: finalAnswers,
            doshaScores: finalScores,
            primaryDosha: dominant,
            primaryConcern,
          },
        }),
      })
    } catch (error) {
      console.error('Error saving:', error)
    } finally {
      setIsLoading(false)
      setStep('plan')
    }
  }

  const getDoshaPlan = () => DOSHA_PLANS[primaryDosha]
  const getConcernAddition = () => CONCERN_ADDITIONS[primaryConcern]

  const getRecommendedProducts = () => {
    const plan = getDoshaPlan()
    const concern = getConcernAddition()
    const allSlugs = [...(plan?.productSlugs || []), ...(concern?.productSlugs || [])]
    const uniqueSlugs = [...new Set(allSlugs)]
    return allProducts.filter((p) => uniqueSlugs.includes(p.slug))
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-amber-800 to-amber-900 text-white py-4 px-4">
        <div className="max-w-lg mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-display">Pure Prana</Link>
          <span className="text-sm text-amber-200">Ayurvedic Wellness Plan</span>
        </div>
      </header>

      {/* Email/Name Capture Step */}
      {step === 'capture' && (
        <section className="py-12 px-4">
          <div className="max-w-lg mx-auto">
            {/* Hero */}
            <div className="text-center mb-8">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-4xl">🪷</span>
              </div>

              <h1 className="text-3xl font-display text-amber-900 mb-4">
                Your Free Ayurvedic Wellness Plan
              </h1>
              <p className="text-gray-600 leading-relaxed">
                Namaste! Discover your unique Prakriti (constitution) and receive a
                personalized wellness plan based on 5,000 years of Ayurvedic wisdom.
              </p>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-amber-200 mb-8">
              <h3 className="font-semibold text-amber-900 mb-4 flex items-center gap-2">
                <span className="text-xl">✨</span>
                What You&apos;ll Receive:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-amber-600">🧘</span>
                  <span className="text-gray-700">Your Dosha type (Vata, Pitta, or Kapha)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600">🌅</span>
                  <span className="text-gray-700">Personalized morning & evening Dinacharya (routines)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600">🥗</span>
                  <span className="text-gray-700">Dietary guidelines for your constitution</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600">🌿</span>
                  <span className="text-gray-700">Recommended Ayurvedic herbs and supplements</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600">🎁</span>
                  <span className="text-gray-700"><strong>15% discount code</strong> for your wellness journey</span>
                </li>
              </ul>
            </div>

            {/* Form */}
            <form onSubmit={handleStartQuiz} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full px-4 py-4 border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-4 border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold rounded-xl transition-all shadow-lg"
              >
                Begin My Ayurvedic Consultation
              </button>
            </form>

            <p className="mt-4 text-center text-sm text-gray-500">
              Takes about 2 minutes • Your data is secure
            </p>

            {/* Trust */}
            <div className="mt-8 pt-6 border-t border-amber-100">
              <p className="text-center text-xs text-gray-500 mb-3">
                Based on traditional Ayurvedic principles
              </p>
              <div className="flex justify-center gap-6 text-sm text-amber-700">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  No spam
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Free forever
                </span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Quiz Step */}
      {step === 'quiz' && (
        <section className="py-8 px-4">
          <div className="max-w-lg mx-auto">
            {/* Progress */}
            <div className="mb-6">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Question {currentQuestion + 1} of {AYURVEDIC_QUESTIONS.length}</span>
                <span>{Math.round(((currentQuestion + 1) / AYURVEDIC_QUESTIONS.length) * 100)}%</span>
              </div>
              <div className="h-2 bg-amber-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 to-amber-600 rounded-full transition-all duration-500"
                  style={{ width: `${((currentQuestion + 1) / AYURVEDIC_QUESTIONS.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-amber-200 mb-6">
              <h2 className="text-xl font-display text-amber-900 mb-2">
                {AYURVEDIC_QUESTIONS[currentQuestion].question}
              </h2>
              <p className="text-sm text-amber-700 italic mb-6">
                {AYURVEDIC_QUESTIONS[currentQuestion].ayurvedicContext}
              </p>

              <div className="space-y-3">
                {AYURVEDIC_QUESTIONS[currentQuestion].options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(
                      AYURVEDIC_QUESTIONS[currentQuestion].id,
                      option.value,
                      'dosha' in option ? option.dosha : undefined
                    )}
                    className="w-full p-4 text-left bg-amber-50 hover:bg-amber-100 border-2 border-amber-100 hover:border-amber-400 rounded-xl transition-all"
                  >
                    <span className="text-gray-800">{option.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Back button */}
            {currentQuestion > 0 && (
              <button
                onClick={() => setCurrentQuestion(currentQuestion - 1)}
                className="text-amber-700 hover:text-amber-800 text-sm font-medium flex items-center gap-1"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
                Previous question
              </button>
            )}

            {/* Loading */}
            {isLoading && (
              <div className="fixed inset-0 bg-amber-900/50 flex items-center justify-center z-50">
                <div className="bg-white rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 border-4 border-amber-200 border-t-amber-600 rounded-full animate-spin" />
                  <p className="text-amber-900 font-medium">Creating your personalized plan...</p>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Plan Step */}
      {step === 'plan' && (
        <section className="py-8 px-4">
          <div className="max-w-lg mx-auto">
            {/* Discount Banner */}
            <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🎁</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-green-800">Your exclusive discount:</p>
                  <p className="text-xl font-mono font-bold text-green-700">WELLNESS15</p>
                </div>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText('WELLNESS15')
                    alert('Code copied!')
                  }}
                  className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700"
                >
                  Copy
                </button>
              </div>
            </div>

            {/* Dosha Result */}
            <div className="bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl p-6 shadow-lg border border-amber-300 mb-6">
              <div className="text-center">
                <p className="text-amber-700 text-sm mb-2">Namaste {name}, your primary Dosha is</p>
                <h1 className="text-4xl font-display text-amber-900 mb-2">
                  {getDoshaPlan().dosha}
                </h1>
                <p className="text-amber-800 font-medium mb-4">
                  {getDoshaPlan().element}
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {getDoshaPlan().characteristics}
                </p>
              </div>
            </div>

            {/* Dosha Scores */}
            <div className="bg-white rounded-xl p-4 shadow-md border border-amber-100 mb-6">
              <h3 className="text-sm font-medium text-gray-600 mb-3">Your Dosha Balance:</h3>
              <div className="space-y-2">
                {Object.entries(doshaScores).map(([dosha, score]) => (
                  <div key={dosha} className="flex items-center gap-3">
                    <span className="w-16 text-sm capitalize text-gray-700">{dosha}</span>
                    <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          dosha === 'vata' ? 'bg-blue-400' :
                          dosha === 'pitta' ? 'bg-red-400' : 'bg-green-400'
                        }`}
                        style={{ width: `${(score / 7) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-500">{score}/7</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Balancing Principles */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-amber-100 mb-4">
              <h2 className="text-lg font-semibold text-amber-900 mb-4 flex items-center gap-2">
                <span>⚖️</span> Balancing Your {getDoshaPlan().dosha}
              </h2>
              <ul className="space-y-2">
                {getDoshaPlan().balancingPrinciples.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Morning Routine */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-amber-100 mb-4">
              <h2 className="text-lg font-semibold text-amber-900 mb-4 flex items-center gap-2">
                <span>🌅</span> Morning Dinacharya
              </h2>
              <ol className="space-y-3">
                {getDoshaPlan().morningRoutine.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Evening Routine */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-amber-100 mb-4">
              <h2 className="text-lg font-semibold text-amber-900 mb-4 flex items-center gap-2">
                <span>🌙</span> Evening Dinacharya
              </h2>
              <ol className="space-y-3">
                {getDoshaPlan().eveningRoutine.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Dietary Guidelines */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-amber-100 mb-4">
              <h2 className="text-lg font-semibold text-amber-900 mb-4 flex items-center gap-2">
                <span>🥗</span> Ahara (Dietary Guidelines)
              </h2>
              <ul className="space-y-2">
                {getDoshaPlan().dietaryGuidelines.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <span className="text-amber-500">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Herbs */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-amber-100 mb-4">
              <h2 className="text-lg font-semibold text-amber-900 mb-4 flex items-center gap-2">
                <span>🌿</span> Recommended Herbs
              </h2>
              <ul className="space-y-2">
                {getDoshaPlan().herbsAndSupplements.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Lifestyle */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-amber-100 mb-4">
              <h2 className="text-lg font-semibold text-amber-900 mb-4 flex items-center gap-2">
                <span>🧘</span> Vihara (Lifestyle)
              </h2>
              <ul className="space-y-2">
                {getDoshaPlan().lifestyle.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Concern-Specific Section */}
            {getConcernAddition() && (
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 shadow-md border border-purple-200 mb-6">
                <h2 className="text-lg font-semibold text-purple-900 mb-4 flex items-center gap-2">
                  <span>🎯</span> For Your {getConcernAddition().title}
                </h2>
                <ul className="space-y-2">
                  {getConcernAddition().recommendations.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <svg className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Recommended Products */}
            {getRecommendedProducts().length > 0 && (
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-amber-900 mb-4 text-center">
                  Recommended for Your Constitution
                </h2>
                <div className="space-y-3">
                  {getRecommendedProducts().map((product) => (
                    <Link
                      key={product.id}
                      href={product.amazonUrl || `/product/${product.slug}`}
                      target={product.amazonUrl ? '_blank' : undefined}
                      className="flex items-center gap-4 p-4 bg-white rounded-xl border border-amber-200 hover:border-amber-400 hover:shadow-md transition-all"
                    >
                      <div className="w-16 h-16 bg-amber-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-3xl">🌿</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-amber-900">{product.name}</h3>
                        <p className="text-sm text-gray-600 line-clamp-1">{product.tagline}</p>
                        <p className="text-sm font-semibold text-amber-700">${product.price}</p>
                      </div>
                      <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="space-y-3">
              <Link
                href="/shop"
                className="flex items-center justify-center gap-2 w-full py-4 bg-[#FF9900] hover:bg-[#e88b00] text-white font-semibold rounded-xl transition-colors shadow-lg"
              >
                Shop Now - Use WELLNESS15
              </Link>
              <Link
                href="/blog"
                className="flex items-center justify-center w-full py-4 bg-amber-100 hover:bg-amber-200 text-amber-900 font-semibold rounded-xl transition-colors"
              >
                Learn More on Our Blog
              </Link>
            </div>

            {/* Print */}
            <div className="mt-6 text-center">
              <button
                onClick={() => window.print()}
                className="text-amber-700 hover:text-amber-800 text-sm font-medium underline"
              >
                Print or Save This Plan
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="py-8 px-4 bg-amber-900 text-white mt-8">
        <div className="max-w-lg mx-auto text-center">
          <p className="text-amber-300 text-sm mb-4">
            &quot;When diet is wrong, medicine is of no use. When diet is correct, medicine is of no need.&quot;
            <br />
            <span className="text-amber-400 italic">— Ayurvedic Proverb</span>
          </p>
          <div className="flex justify-center gap-6 text-sm mb-6">
            <Link href="/shop" className="text-amber-200 hover:text-white">Shop</Link>
            <Link href="/blog" className="text-amber-200 hover:text-white">Blog</Link>
            <Link href="/contact" className="text-amber-200 hover:text-white">Contact</Link>
          </div>
          <p className="text-xs text-amber-400">
            © {new Date().getFullYear()} Pure Prana. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
