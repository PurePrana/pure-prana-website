'use client'

import { useState, useEffect, Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { getAllProducts, getProductsByConcern } from '@/lib/products'
import { getAllConcerns } from '@/lib/concerns'
import { Product } from '@/lib/types'

// Quiz question types
interface QuizOption {
  value: string
  label: string
  icon?: string
}

interface QuizQuestion {
  id: number
  question: string
  type: 'single' | 'multiple'
  options: QuizOption[]
}

// Quiz answers type
interface QuizAnswers {
  healthConcern: string
  energyLevel: string
  sleepQuality: string
  stressHandling: string
  wellnessGoals: string[]
}

// UTM parameters type
interface UTMParams {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_term?: string
  utm_content?: string
}

// Form errors type
interface FormErrors {
  email?: string
  phone?: string
}

// Quiz questions data
const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What's your main health concern?",
    type: 'single',
    options: [
      { value: 'memory-focus', label: 'Memory & Focus', icon: '🧠' },
      { value: 'heart-health', label: 'Heart Health', icon: '❤️' },
      { value: 'joint-support', label: 'Joint Support', icon: '🦴' },
      { value: 'immunity', label: 'Immunity', icon: '🛡️' },
      { value: 'skin-hair-nails', label: 'Skin/Hair/Nails', icon: '✨' },
      { value: 'weight-support', label: 'Weight Support', icon: '⚖️' },
      { value: 'energy-vitality', label: 'Energy & Vitality', icon: '⚡' },
      { value: 'hormonal-balance', label: 'Hormonal Balance', icon: '🌸' },
    ],
  },
  {
    id: 2,
    question: 'How would you describe your energy levels?',
    type: 'single',
    options: [
      { value: 'low', label: 'Low', icon: '😴' },
      { value: 'moderate', label: 'Moderate', icon: '😐' },
      { value: 'good', label: 'Good', icon: '😊' },
      { value: 'variable', label: 'Variable', icon: '🔄' },
    ],
  },
  {
    id: 3,
    question: 'How is your sleep quality?',
    type: 'single',
    options: [
      { value: 'poor', label: 'Poor', icon: '😫' },
      { value: 'fair', label: 'Fair', icon: '😕' },
      { value: 'good', label: 'Good', icon: '😌' },
      { value: 'excellent', label: 'Excellent', icon: '😴' },
    ],
  },
  {
    id: 4,
    question: 'How do you handle stress?',
    type: 'single',
    options: [
      { value: 'easily-overwhelmed', label: 'Easily overwhelmed', icon: '😰' },
      { value: 'sometimes-struggle', label: 'Sometimes struggle', icon: '😓' },
      {
        value: 'generally-cope-well',
        label: 'Generally cope well',
        icon: '🙂',
      },
      { value: 'very-resilient', label: 'Very resilient', icon: '💪' },
    ],
  },
  {
    id: 5,
    question: 'What are your wellness goals?',
    type: 'multiple',
    options: [
      { value: 'better-energy', label: 'Better energy', icon: '⚡' },
      { value: 'improved-focus', label: 'Improved focus', icon: '🎯' },
      { value: 'better-sleep', label: 'Better sleep', icon: '🌙' },
      { value: 'stress-management', label: 'Stress management', icon: '🧘' },
      { value: 'weight-management', label: 'Weight management', icon: '⚖️' },
      { value: 'skin-health', label: 'Skin health', icon: '✨' },
      { value: 'joint-comfort', label: 'Joint comfort', icon: '🦴' },
      { value: 'immune-support', label: 'Immune support', icon: '🛡️' },
    ],
  },
]

// Map wellness goals to product concerns
const goalToConcernMap: Record<string, string[]> = {
  'better-energy': ['energy-vitality'],
  'improved-focus': ['memory-focus', 'brain-health'],
  'better-sleep': ['hormonal-balance'],
  'stress-management': ['hormonal-balance', 'energy-vitality'],
  'weight-management': ['weight-support', 'metabolism'],
  'skin-health': ['skin-hair-nails', 'beauty', 'anti-aging'],
  'joint-comfort': ['joint-support', 'mobility'],
  'immune-support': ['immunity', 'respiratory'],
}

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Phone validation regex (supports various formats)
const PHONE_REGEX = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/

function WellnessQuizContent() {
  const searchParams = useSearchParams()

  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<QuizAnswers>({
    healthConcern: '',
    energyLevel: '',
    sleepQuality: '',
    stressHandling: '',
    wellnessGoals: [],
  })
  const [showEmailCapture, setShowEmailCapture] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [marketingOptIn, setMarketingOptIn] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [formErrors, setFormErrors] = useState<FormErrors>({})
  const [utmParams, setUtmParams] = useState<UTMParams>({})

  // Track UTM parameters from URL
  useEffect(() => {
    const params: UTMParams = {}
    const utmKeys = [
      'utm_source',
      'utm_medium',
      'utm_campaign',
      'utm_term',
      'utm_content',
    ]

    utmKeys.forEach((key) => {
      const value = searchParams.get(key)
      if (value) {
        params[key as keyof UTMParams] = value
      }
    })

    setUtmParams(params)
  }, [searchParams])

  const currentQuestion = quizQuestions[currentStep]
  const progress = ((currentStep + 1) / quizQuestions.length) * 100

  const handleSingleSelect = (value: string) => {
    const answerKey = getAnswerKey(currentStep)
    setAnswers((prev) => ({ ...prev, [answerKey]: value }))
  }

  const handleMultipleSelect = (value: string) => {
    setAnswers((prev) => {
      const currentGoals = prev.wellnessGoals
      if (currentGoals.includes(value)) {
        return {
          ...prev,
          wellnessGoals: currentGoals.filter((g) => g !== value),
        }
      } else {
        return { ...prev, wellnessGoals: [...currentGoals, value] }
      }
    })
  }

  const getAnswerKey = (step: number): keyof QuizAnswers => {
    const keys: (keyof QuizAnswers)[] = [
      'healthConcern',
      'energyLevel',
      'sleepQuality',
      'stressHandling',
      'wellnessGoals',
    ]
    return keys[step]
  }

  const getCurrentAnswer = (): string | string[] => {
    const key = getAnswerKey(currentStep)
    return answers[key]
  }

  const canProceed = (): boolean => {
    const answer = getCurrentAnswer()
    if (currentQuestion.type === 'multiple') {
      return (answer as string[]).length > 0
    }
    return answer !== ''
  }

  const handleNext = () => {
    if (currentStep < quizQuestions.length - 1) {
      setCurrentStep((prev) => prev + 1)
    } else {
      // After the last question, show email capture instead of results
      setShowEmailCapture(true)
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  const handleBackFromEmailCapture = () => {
    setShowEmailCapture(false)
    setCurrentStep(quizQuestions.length - 1)
  }

  const validateForm = (): boolean => {
    const errors: FormErrors = {}

    // Email is required and must be valid
    if (!email.trim()) {
      errors.email = 'Email is required'
    } else if (!EMAIL_REGEX.test(email.trim())) {
      errors.email = 'Please enter a valid email address'
    }

    // Phone is optional but must be valid if provided
    if (phone.trim() && !PHONE_REGEX.test(phone.trim())) {
      errors.phone = 'Please enter a valid phone number'
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const getRecommendedProducts = (): Product[] => {
    const allProducts = getAllProducts()
    const recommendedSet = new Set<Product>()

    // Get products based on main health concern (highest priority)
    const concernProducts = getProductsByConcern(answers.healthConcern)
    concernProducts.forEach((p) => recommendedSet.add(p))

    // Get products based on wellness goals
    answers.wellnessGoals.forEach((goal) => {
      const concerns = goalToConcernMap[goal] || []
      concerns.forEach((concern) => {
        const products = getProductsByConcern(concern)
        products.forEach((p) => recommendedSet.add(p))
      })
    })

    // Add energy products if energy is low or variable
    if (answers.energyLevel === 'low' || answers.energyLevel === 'variable') {
      const energyProducts = getProductsByConcern('energy-vitality')
      energyProducts.forEach((p) => recommendedSet.add(p))
    }

    // Add stress-related products if struggling with stress
    if (
      answers.stressHandling === 'easily-overwhelmed' ||
      answers.stressHandling === 'sometimes-struggle'
    ) {
      // Ashwagandha-based products are good for stress
      const stressProducts = allProducts.filter(
        (p) =>
          p.tags.includes('ashwagandha') ||
          p.concerns.includes('hormonal-balance')
      )
      stressProducts.forEach((p) => recommendedSet.add(p))
    }

    // Convert Set to array and filter out coming soon products
    const recommended = Array.from(recommendedSet).filter(
      (p) => !p.comingSoon && p.amazonUrl
    )

    // Sort by relevance (featured first, then by review count)
    return recommended
      .sort((a, b) => {
        if (a.featured && !b.featured) return -1
        if (!a.featured && b.featured) return 1
        return b.reviewCount - a.reviewCount
      })
      .slice(0, 4)
  }

  const saveQuizResponse = async (recommendations: Product[]) => {
    try {
      const response = await fetch('/api/quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim(),
          name: name.trim() || undefined,
          phone: phone.trim() || undefined,
          primaryConcern: answers.healthConcern,
          energyLevel: answers.energyLevel,
          sleepQuality: answers.sleepQuality,
          stressHandling: answers.stressHandling,
          wellnessGoals: answers.wellnessGoals,
          recommendedProducts: recommendations.map((p) => p.slug),
          marketingOptIn,
          source: 'quiz',
          ...utmParams,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.message || 'Failed to save quiz response')
      }

      return true
    } catch (error) {
      console.error('Error saving quiz response:', error)
      throw error
    }
  }

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError(null)

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      const recommendations = getRecommendedProducts()
      await saveQuizResponse(recommendations)
      setShowEmailCapture(false)
      setShowResults(true)
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleSkipEmail = () => {
    // Allow skipping but show results without saving
    setShowEmailCapture(false)
    setShowResults(true)
  }

  const restartQuiz = () => {
    setCurrentStep(0)
    setAnswers({
      healthConcern: '',
      energyLevel: '',
      sleepQuality: '',
      stressHandling: '',
      wellnessGoals: [],
    })
    setShowEmailCapture(false)
    setShowResults(false)
    setEmail('')
    setName('')
    setPhone('')
    setMarketingOptIn(true)
    setFormErrors({})
    setSubmitError(null)
  }

  // Email Capture View
  if (showEmailCapture) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-primary-50 to-white py-12 px-4">
        <div className="max-w-xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <Link href="/" className="inline-block mb-6">
              <span className="font-display text-2xl text-primary-800">
                Pure Prana
              </span>
            </Link>
          </div>

          {/* Email Capture Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-primary-200 overflow-hidden animate-fade-in">
            {/* Discount Banner */}
            <div className="bg-gradient-to-r from-brand-600 to-primary-600 px-6 py-4 text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-1.5 mb-2">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                  />
                </svg>
                <span className="text-white font-medium text-sm">
                  Special Offer
                </span>
              </div>
              <h2 className="text-white text-2xl font-display mb-1">
                Get 10% Off Your First Order
              </h2>
              <p className="text-white/90 text-sm">
                Use code{' '}
                <span className="font-mono font-bold bg-white/20 px-2 py-0.5 rounded">
                  WELCOME10
                </span>{' '}
                at checkout
              </p>
            </div>

            <div className="p-6 md:p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-primary-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-display text-xl text-primary-900 mb-2">
                  Get Your Personalized Results
                </h3>
                <p className="text-muted text-sm">
                  Enter your email to unlock your custom wellness
                  recommendations and exclusive discount.
                </p>
              </div>

              <form onSubmit={handleEmailSubmit} className="space-y-4">
                {/* Email Field (Required) */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-primary-800 mb-1.5"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      if (formErrors.email) {
                        setFormErrors((prev) => ({ ...prev, email: undefined }))
                      }
                    }}
                    placeholder="your@email.com"
                    className={`w-full px-4 py-3 rounded-lg border ${
                      formErrors.email
                        ? 'border-red-400 focus:ring-red-500'
                        : 'border-primary-300 focus:ring-primary-500'
                    } focus:outline-none focus:ring-2 focus:border-transparent transition-colors`}
                  />
                  {formErrors.email && (
                    <p className="mt-1.5 text-sm text-red-600">
                      {formErrors.email}
                    </p>
                  )}
                </div>

                {/* Name Field (Optional) */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-primary-800 mb-1.5"
                  >
                    Name{' '}
                    <span className="text-muted font-normal">(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg border border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  />
                </div>

                {/* Phone Field (Optional) */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-primary-800 mb-1.5"
                  >
                    Phone{' '}
                    <span className="text-muted font-normal">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value)
                      if (formErrors.phone) {
                        setFormErrors((prev) => ({ ...prev, phone: undefined }))
                      }
                    }}
                    placeholder="(123) 456-7890"
                    className={`w-full px-4 py-3 rounded-lg border ${
                      formErrors.phone
                        ? 'border-red-400 focus:ring-red-500'
                        : 'border-primary-300 focus:ring-primary-500'
                    } focus:outline-none focus:ring-2 focus:border-transparent transition-colors`}
                  />
                  {formErrors.phone && (
                    <p className="mt-1.5 text-sm text-red-600">
                      {formErrors.phone}
                    </p>
                  )}
                </div>

                {/* Marketing Opt-in */}
                <div className="flex items-start gap-3 py-2">
                  <input
                    type="checkbox"
                    id="marketing"
                    checked={marketingOptIn}
                    onChange={(e) => setMarketingOptIn(e.target.checked)}
                    className="mt-1 w-4 h-4 text-primary-600 border-primary-300 rounded focus:ring-primary-500"
                  />
                  <label htmlFor="marketing" className="text-sm text-muted">
                    Send me wellness tips, Ayurvedic insights, and exclusive
                    offers. You can unsubscribe anytime.
                  </label>
                </div>

                {/* Error Message */}
                {submitError && (
                  <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm text-red-700">
                    {submitError}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-medium rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      <span>Getting Your Results...</span>
                    </>
                  ) : (
                    <>
                      <span>Unlock My Results</span>
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </>
                  )}
                </button>
              </form>

              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t border-primary-100">
                <div className="flex flex-wrap justify-center gap-6 text-xs text-muted">
                  <div className="flex items-center gap-1.5">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <span>100% Secure</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                    <span>Privacy Protected</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span>No Spam Ever</span>
                  </div>
                </div>
              </div>

              {/* Back/Skip Links */}
              <div className="mt-6 flex justify-between items-center">
                <button
                  onClick={handleBackFromEmailCapture}
                  className="text-sm text-muted hover:text-primary-700 transition-colors flex items-center gap-1"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Back to Quiz
                </button>
                <button
                  onClick={handleSkipEmail}
                  className="text-sm text-muted hover:text-primary-700 transition-colors"
                >
                  Skip for now
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }

  // Results View
  if (showResults) {
    const recommendedProducts = getRecommendedProducts()
    const concerns = getAllConcerns()
    const primaryConcern = concerns.find(
      (c) => c.slug === answers.healthConcern
    )

    return (
      <main className="min-h-screen bg-gradient-to-b from-primary-50 to-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Results Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-primary-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h1 className="font-display text-3xl md:text-4xl text-primary-900 mb-4">
              Your Personalized Wellness Plan
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Based on your responses, we have curated a selection of Ayurvedic
              supplements tailored to your unique wellness journey.
            </p>
          </div>

          {/* Discount Reminder (if email was provided) */}
          {email && (
            <div className="bg-gradient-to-r from-brand-50 to-primary-50 border border-brand-200 rounded-xl px-6 py-4 mb-8 text-center animate-fade-in">
              <p className="text-primary-800">
                Your personalized recommendations have been sent to{' '}
                <strong>{email}</strong>. Use code{' '}
                <span className="font-mono font-bold text-brand-700 bg-white px-2 py-0.5 rounded">
                  WELCOME10
                </span>{' '}
                for 10% off!
              </p>
            </div>
          )}

          {/* Wellness Profile Summary */}
          <div className="bg-white rounded-2xl border border-primary-200 p-6 mb-8 animate-fade-in">
            <h2 className="font-display text-xl text-primary-900 mb-4">
              Your Wellness Profile
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <span className="text-lg">
                    {primaryConcern?.icon || '🎯'}
                  </span>
                </div>
                <div>
                  <p className="text-sm text-muted">Primary Focus</p>
                  <p className="font-medium text-primary-900">
                    {primaryConcern?.name || 'Overall Wellness'}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <span className="text-lg">⚡</span>
                </div>
                <div>
                  <p className="text-sm text-muted">Energy Level</p>
                  <p className="font-medium text-primary-900 capitalize">
                    {answers.energyLevel}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <span className="text-lg">🌙</span>
                </div>
                <div>
                  <p className="text-sm text-muted">Sleep Quality</p>
                  <p className="font-medium text-primary-900 capitalize">
                    {answers.sleepQuality}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <span className="text-lg">🧘</span>
                </div>
                <div>
                  <p className="text-sm text-muted">Stress Management</p>
                  <p className="font-medium text-primary-900 capitalize">
                    {answers.stressHandling.replace(/-/g, ' ')}
                  </p>
                </div>
              </div>
            </div>
            {answers.wellnessGoals.length > 0 && (
              <div className="mt-4 pt-4 border-t border-primary-100">
                <p className="text-sm text-muted mb-2">Your Wellness Goals</p>
                <div className="flex flex-wrap gap-2">
                  {answers.wellnessGoals.map((goal) => (
                    <span
                      key={goal}
                      className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm"
                    >
                      {goal.replace(/-/g, ' ')}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Recommended Products */}
          <div
            className="mb-12 animate-fade-in"
            style={{ animationDelay: '0.1s' }}
          >
            <h2 className="font-display text-2xl text-primary-900 mb-6 text-center">
              Recommended For You
            </h2>
            {recommendedProducts.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {recommendedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-2xl border border-primary-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="relative aspect-[4/3] bg-gradient-to-br from-primary-50 to-primary-100/50">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-contain p-4"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-medium text-lg text-primary-900 mb-2">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted mb-3 line-clamp-2">
                        {product.shortDescription}
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xl font-light text-primary-900">
                          ${product.price.toFixed(2)}
                        </span>
                        {product.reviewCount > 0 && (
                          <div className="flex items-center gap-1">
                            <svg
                              className="w-4 h-4 text-yellow-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="text-sm text-muted">
                              {product.rating} ({product.reviewCount})
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <a
                          href={product.amazonUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center px-4 py-2.5 bg-[#FF9900] text-white font-medium rounded-lg hover:bg-[#e88b00] transition-colors text-sm"
                        >
                          Buy on Amazon
                        </a>
                        <Link
                          href={`/product/${product.slug}`}
                          className="inline-flex items-center justify-center px-4 py-2.5 bg-white text-primary-800 font-medium rounded-lg border border-primary-200 hover:bg-primary-50 transition-colors text-sm"
                        >
                          Details
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 bg-white rounded-2xl border border-primary-200">
                <p className="text-muted">
                  We are working on products tailored to your needs. Check out
                  our full collection!
                </p>
                <Link
                  href="/shop"
                  className="inline-flex items-center justify-center px-6 py-3 mt-4 bg-primary-700 text-white font-medium rounded-lg hover:bg-primary-800 transition-colors"
                >
                  Browse All Products
                </Link>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
            style={{ animationDelay: '0.3s' }}
          >
            <button
              onClick={restartQuiz}
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-800 font-medium rounded-lg border border-primary-200 hover:bg-primary-50 transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Retake Quiz
            </button>
            <Link
              href="/shop"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary-700 text-white font-medium rounded-lg hover:bg-primary-800 transition-colors"
            >
              Browse All Products
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </main>
    )
  }

  // Quiz View
  return (
    <main className="min-h-screen bg-gradient-to-b from-primary-50 to-white py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-6">
            <span className="font-display text-2xl text-primary-800">
              Pure Prana
            </span>
          </Link>
          <h1 className="font-display text-3xl md:text-4xl text-primary-900 mb-3">
            Wellness Quiz
          </h1>
          <p className="text-muted">
            Discover your personalized Ayurvedic wellness recommendations
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted">
              Question {currentStep + 1} of {quizQuestions.length}
            </span>
            <span className="text-sm font-medium text-primary-700">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="h-2 bg-primary-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary-500 to-brand-500 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-primary-200 p-6 md:p-8 mb-6 animate-fade-in">
          <h2 className="font-display text-xl md:text-2xl text-primary-900 mb-6 text-center">
            {currentQuestion.question}
          </h2>

          {currentQuestion.type === 'multiple' && (
            <p className="text-sm text-muted text-center mb-6">
              Select all that apply
            </p>
          )}

          <div
            className={`grid gap-3 ${
              currentQuestion.options.length <= 4
                ? 'grid-cols-1 md:grid-cols-2'
                : 'grid-cols-2 md:grid-cols-4'
            }`}
          >
            {currentQuestion.options.map((option) => {
              const currentAnswer = getCurrentAnswer()
              const isSelected =
                currentQuestion.type === 'multiple'
                  ? (currentAnswer as string[]).includes(option.value)
                  : currentAnswer === option.value

              return (
                <button
                  key={option.value}
                  onClick={() =>
                    currentQuestion.type === 'multiple'
                      ? handleMultipleSelect(option.value)
                      : handleSingleSelect(option.value)
                  }
                  className={`relative flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all duration-200 ${
                    isSelected
                      ? 'border-primary-500 bg-primary-50 shadow-sm'
                      : 'border-primary-200 bg-white hover:border-primary-300 hover:bg-primary-50/50'
                  }`}
                >
                  {option.icon && (
                    <span className="text-2xl mb-2">{option.icon}</span>
                  )}
                  <span
                    className={`text-sm font-medium text-center ${
                      isSelected ? 'text-primary-800' : 'text-primary-700'
                    }`}
                  >
                    {option.label}
                  </span>
                  {isSelected && (
                    <div className="absolute top-2 right-2">
                      <svg
                        className="w-5 h-5 text-primary-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between gap-4">
          <button
            onClick={handleBack}
            disabled={currentStep === 0}
            className={`inline-flex items-center px-6 py-3 font-medium rounded-lg transition-colors ${
              currentStep === 0
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-white text-primary-800 border border-primary-200 hover:bg-primary-50'
            }`}
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back
          </button>

          <button
            onClick={handleNext}
            disabled={!canProceed()}
            className={`inline-flex items-center px-6 py-3 font-medium rounded-lg transition-colors ${
              canProceed()
                ? 'bg-primary-700 text-white hover:bg-primary-800'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            {currentStep === quizQuestions.length - 1 ? 'See Results' : 'Next'}
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Skip option */}
        <div className="text-center mt-6">
          <Link
            href="/shop"
            className="text-sm text-muted hover:text-primary-700 transition-colors"
          >
            Skip quiz and browse all products
          </Link>
        </div>
      </div>
    </main>
  )
}

// Loading fallback for Suspense
function QuizLoading() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-primary-50 to-white flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin" />
        <p className="text-primary-700">Loading quiz...</p>
      </div>
    </main>
  )
}

// Default export with Suspense wrapper
export default function WellnessQuizPage() {
  return (
    <Suspense fallback={<QuizLoading />}>
      <WellnessQuizContent />
    </Suspense>
  )
}
