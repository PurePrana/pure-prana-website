'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import ProductCard from '@/components/ProductCard'
import { getFeaturedProducts } from '@/lib/products'
import { getAllConcerns } from '@/lib/concerns'

// Spin wheel prizes configuration
const WHEEL_PRIZES = [
  { text: '10% OFF', code: 'SPIN10', color: '#336633', rotation: 0 },
  { text: '15% OFF', code: 'SPIN15', color: '#448044', rotation: 45 },
  { text: 'FREE SHIP', code: 'FREESHIP', color: '#559955', rotation: 90 },
  { text: '20% OFF', code: 'SPIN20', color: '#336633', rotation: 135 },
  { text: '10% OFF', code: 'SPIN10', color: '#448044', rotation: 180 },
  { text: '15% OFF', code: 'SPIN15', color: '#559955', rotation: 225 },
  { text: 'FREE SHIP', code: 'FREESHIP', color: '#336633', rotation: 270 },
  { text: '25% OFF', code: 'SPIN25', color: '#FF9900', rotation: 315 },
]

// Social proof names for recent signups
const RECENT_SIGNUPS = [
  { name: 'Sarah', location: 'CA' },
  { name: 'Michael', location: 'TX' },
  { name: 'Jennifer', location: 'NY' },
  { name: 'David', location: 'FL' },
  { name: 'Lisa', location: 'WA' },
  { name: 'Robert', location: 'IL' },
  { name: 'Amanda', location: 'GA' },
  { name: 'Chris', location: 'CO' },
]

export default function StartPage() {
  // Form states
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<{
    type: 'success' | 'error'
    text: string
  } | null>(null)

  // Modal states
  const [showWelcomeModal, setShowWelcomeModal] = useState(false)
  const [showSpinWheel, setShowSpinWheel] = useState(false)
  const [showExitIntent, setShowExitIntent] = useState(false)
  const [showFloatingButton, setShowFloatingButton] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [modalDismissed, setModalDismissed] = useState(false)

  // Spin wheel states
  const [isSpinning, setIsSpinning] = useState(false)
  const [spinResult, setSpinResult] = useState<typeof WHEEL_PRIZES[0] | null>(null)
  const [wheelRotation, setWheelRotation] = useState(0)
  const [spinEmail, setSpinEmail] = useState('')

  // Social proof
  const [currentSignup, setCurrentSignup] = useState(0)
  const [showSocialProof, setShowSocialProof] = useState(false)

  // Progress bar
  const [progressVisible, setProgressVisible] = useState(false)
  const progressRef = useRef<HTMLDivElement>(null)

  // Discount code display
  const [discountCode, setDiscountCode] = useState<string | null>(null)

  const featuredProducts = getFeaturedProducts().slice(0, 4)
  const concerns = getAllConcerns()

  // Show welcome modal after 3 seconds
  useEffect(() => {
    const hasSeenModal = localStorage.getItem('pp_welcome_seen')
    if (!hasSeenModal && !hasSubmitted) {
      const timer = setTimeout(() => {
        setShowWelcomeModal(true)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [hasSubmitted])

  // Exit intent detection
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasSubmitted && !showExitIntent && modalDismissed) {
        setShowExitIntent(true)
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    return () => document.removeEventListener('mouseleave', handleMouseLeave)
  }, [hasSubmitted, showExitIntent, modalDismissed])

  // Social proof rotation
  useEffect(() => {
    const showTimer = setTimeout(() => {
      if (!hasSubmitted) {
        setShowSocialProof(true)
      }
    }, 8000)

    const rotateInterval = setInterval(() => {
      setCurrentSignup((prev) => (prev + 1) % RECENT_SIGNUPS.length)
      if (!hasSubmitted) {
        setShowSocialProof(true)
        setTimeout(() => setShowSocialProof(false), 4000)
      }
    }, 12000)

    return () => {
      clearTimeout(showTimer)
      clearInterval(rotateInterval)
    }
  }, [hasSubmitted])

  // Progress bar visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasSubmitted) {
          setProgressVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (progressRef.current) {
      observer.observe(progressRef.current)
    }

    return () => observer.disconnect()
  }, [hasSubmitted])

  const handleSubmit = useCallback(async (
    e: React.FormEvent | null,
    overrideEmail?: string,
    overrideName?: string,
    source: string = 'qr-landing',
    spinCode?: string
  ) => {
    if (e) e.preventDefault()
    setIsLoading(true)
    setMessage(null)

    const submitEmail = overrideEmail || email
    const submitName = overrideName || name

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: submitEmail,
          name: submitName,
          source,
          discountCode: spinCode || 'PRANA15',
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setMessage({
          type: 'success',
          text: `Welcome${submitName ? `, ${submitName}` : ''}! Your discount code: ${data.discountCode}`,
        })
        setDiscountCode(data.discountCode)
        setHasSubmitted(true)
        setEmail('')
        setName('')
        localStorage.setItem('pp_welcome_seen', 'true')
        localStorage.setItem('pp_discount_code', data.discountCode)

        // Close modals on success
        setShowWelcomeModal(false)
        setShowExitIntent(false)
        setShowFloatingButton(false)
      } else {
        setMessage({
          type: 'error',
          text: data.error || 'Something went wrong. Please try again.',
        })
      }
    } catch (error) {
      console.error('Subscription error:', error)
      setMessage({
        type: 'error',
        text: 'Network error. Please try again.',
      })
    } finally {
      setIsLoading(false)
    }
  }, [email, name])

  const handleSpinWheel = useCallback(async () => {
    if (!spinEmail || isSpinning) return

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(spinEmail)) {
      setMessage({ type: 'error', text: 'Please enter a valid email' })
      return
    }

    setIsSpinning(true)

    // Random prize (weighted towards lower discounts)
    const weights = [20, 25, 15, 10, 20, 8, 10, 2] // 25% OFF is rare!
    const totalWeight = weights.reduce((a, b) => a + b, 0)
    let random = Math.random() * totalWeight
    let prizeIndex = 0

    for (let i = 0; i < weights.length; i++) {
      random -= weights[i]
      if (random <= 0) {
        prizeIndex = i
        break
      }
    }

    const prize = WHEEL_PRIZES[prizeIndex]

    // Calculate rotation (3-5 full spins + landing position)
    const spins = 3 + Math.floor(Math.random() * 3)
    const targetRotation = (spins * 360) + (360 - prize.rotation) + (Math.random() * 40 - 20)

    setWheelRotation(targetRotation)

    // Wait for spin animation
    setTimeout(async () => {
      setSpinResult(prize)
      setIsSpinning(false)

      // Submit lead with spin result
      await handleSubmit(null, spinEmail, '', 'qr-landing-spin', prize.code)
    }, 4000)
  }, [spinEmail, isSpinning, handleSubmit])

  const dismissWelcomeModal = () => {
    setShowWelcomeModal(false)
    setModalDismissed(true)
    setShowFloatingButton(true)
    localStorage.setItem('pp_welcome_seen', 'true')
  }

  const copyDiscountCode = () => {
    if (discountCode) {
      navigator.clipboard.writeText(discountCode)
      setMessage({ type: 'success', text: 'Discount code copied!' })
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      {/* Welcome Modal */}
      {showWelcomeModal && !hasSubmitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden animate-slide-up">
            {/* Close button */}
            <button
              onClick={dismissWelcomeModal}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors z-10"
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header */}
            <div className="bg-gradient-to-br from-primary-700 to-primary-900 px-6 py-8 text-white text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-light mb-2">
                Welcome! Get 15% Off
              </h3>
              <p className="text-primary-100 text-sm">
                Your first order awaits with a special discount
              </p>
            </div>

            {/* Form */}
            <div className="p-6">
              <form onSubmit={(e) => handleSubmit(e, undefined, undefined, 'qr-landing-modal')} className="space-y-4">
                <div>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name (optional)"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold rounded-xl transition-all transform hover:scale-[1.02] shadow-lg disabled:opacity-50"
                >
                  {isLoading ? 'Processing...' : 'Claim My 15% Discount'}
                </button>
              </form>

              <div className="mt-4 text-center">
                <button
                  onClick={() => { dismissWelcomeModal(); setShowSpinWheel(true); }}
                  className="text-primary-600 hover:text-primary-700 text-sm font-medium underline underline-offset-2"
                >
                  Or try your luck with our Spin-to-Win wheel!
                </button>
              </div>

              <p className="mt-4 text-xs text-gray-400 text-center">
                No spam, ever. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Spin-to-Win Wheel Modal */}
      {showSpinWheel && !hasSubmitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden animate-slide-up">
            {/* Close button */}
            <button
              onClick={() => setShowSpinWheel(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors z-10"
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-6 text-center">
              <h3 className="text-2xl font-display text-primary-900 mb-2">
                Spin to Win!
              </h3>
              <p className="text-gray-600 mb-6">
                Enter your email and spin for a chance to win up to 25% off!
              </p>

              {/* Wheel */}
              <div className="relative mx-auto w-64 h-64 mb-6">
                {/* Pointer */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 z-10">
                  <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[20px] border-t-primary-900" />
                </div>

                {/* Wheel */}
                <div
                  className="w-full h-full rounded-full border-4 border-primary-900 overflow-hidden shadow-xl transition-transform duration-[4000ms] ease-out"
                  style={{ transform: `rotate(${wheelRotation}deg)` }}
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    {WHEEL_PRIZES.map((prize, i) => {
                      const angle = (360 / 8) * i
                      const rad = (angle * Math.PI) / 180
                      const x = 50 + 30 * Math.sin(rad)
                      const y = 50 - 30 * Math.cos(rad)
                      return (
                        <g key={i}>
                          <path
                            d={`M50,50 L${50 + 50 * Math.sin(rad)},${50 - 50 * Math.cos(rad)} A50,50 0 0,1 ${50 + 50 * Math.sin(((angle + 45) * Math.PI) / 180)},${50 - 50 * Math.cos(((angle + 45) * Math.PI) / 180)} Z`}
                            fill={prize.color}
                          />
                          <text
                            x={x}
                            y={y}
                            fill="white"
                            fontSize="5"
                            fontWeight="bold"
                            textAnchor="middle"
                            transform={`rotate(${angle + 22.5}, ${x}, ${y})`}
                          >
                            {prize.text}
                          </text>
                        </g>
                      )
                    })}
                  </svg>
                </div>
              </div>

              {/* Result */}
              {spinResult && (
                <div className="mb-6 p-4 bg-gradient-to-r from-primary-100 to-primary-50 rounded-xl border border-primary-200">
                  <p className="text-lg font-semibold text-primary-900">
                    Congratulations! You won {spinResult.text}!
                  </p>
                  <p className="text-primary-700 mt-1">
                    Use code: <span className="font-mono font-bold">{spinResult.code}</span>
                  </p>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(spinResult.code)
                      setMessage({ type: 'success', text: 'Code copied!' })
                    }}
                    className="mt-2 text-sm text-primary-600 underline"
                  >
                    Copy code
                  </button>
                </div>
              )}

              {/* Email input and spin button */}
              {!spinResult && (
                <div className="space-y-4">
                  <input
                    type="email"
                    value={spinEmail}
                    onChange={(e) => setSpinEmail(e.target.value)}
                    placeholder="Enter your email to spin"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    disabled={isSpinning}
                  />
                  <button
                    onClick={handleSpinWheel}
                    disabled={isSpinning || !spinEmail}
                    className="w-full py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold rounded-xl transition-all transform hover:scale-[1.02] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSpinning ? 'Spinning...' : 'SPIN THE WHEEL!'}
                  </button>
                </div>
              )}

              {spinResult && (
                <Link
                  href="/shop"
                  className="inline-block w-full py-4 bg-primary-700 hover:bg-primary-800 text-white font-semibold rounded-xl transition-colors"
                >
                  Shop Now with My Discount
                </Link>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Exit Intent Modal */}
      {showExitIntent && !hasSubmitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden animate-slide-up">
            <button
              onClick={() => setShowExitIntent(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors z-10"
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-display text-primary-900 mb-2">
                Wait! Don&apos;t Miss Your Gift
              </h3>
              <p className="text-gray-600 mb-6">
                Get 15% off your first order - we&apos;d hate for you to miss out!
              </p>

              <form onSubmit={(e) => handleSubmit(e, undefined, undefined, 'qr-landing-exit')} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 bg-yellow-500 hover:bg-yellow-600 text-primary-900 font-bold rounded-xl transition-colors"
                >
                  {isLoading ? 'Processing...' : 'Claim My 15% Off'}
                </button>
              </form>

              <button
                onClick={() => setShowExitIntent(false)}
                className="mt-4 text-sm text-gray-400 hover:text-gray-600"
              >
                No thanks, I&apos;ll pay full price
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button (shows after modal dismissed) */}
      {showFloatingButton && !hasSubmitted && (
        <button
          onClick={() => setShowWelcomeModal(true)}
          className="fixed bottom-24 right-4 z-40 flex items-center gap-2 px-4 py-3 bg-primary-700 text-white rounded-full shadow-lg hover:bg-primary-800 transition-all animate-pulse hover:animate-none"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="font-semibold">Get 15% Off</span>
        </button>
      )}

      {/* Social Proof Toast */}
      {showSocialProof && !hasSubmitted && (
        <div className="fixed bottom-24 left-4 z-40 flex items-center gap-3 px-4 py-3 bg-white rounded-xl shadow-lg border border-primary-100 animate-slide-up max-w-xs">
          <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-primary-700" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-primary-900">
              {RECENT_SIGNUPS[currentSignup].name} from {RECENT_SIGNUPS[currentSignup].location}
            </p>
            <p className="text-xs text-gray-500">Just claimed their discount!</p>
          </div>
        </div>
      )}

      {/* Success Toast with Discount Code */}
      {discountCode && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-6 py-4 bg-green-50 border border-green-200 rounded-xl shadow-lg animate-slide-down max-w-sm">
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-green-900">Your discount code:</p>
            <p className="text-lg font-mono font-bold text-green-700">{discountCode}</p>
          </div>
          <button
            onClick={copyDiscountCode}
            className="px-3 py-1 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Copy
          </button>
        </div>
      )}

      {/* Welcome Hero - Mobile Optimized */}
      <section className="relative py-10 px-4 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-700/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-700/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-lg mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm mb-4">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Thank you for choosing Pure Prana</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-display font-light mb-3">
            Welcome to Your Wellness Journey
          </h1>
          <p className="text-primary-100 text-lg leading-relaxed mb-6">
            Discover the power of authentic Ayurveda, backed by modern science.
          </p>

          {/* Hero Email Capture */}
          {!hasSubmitted && (
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
              <p className="text-yellow-400 font-semibold mb-3">Join 10,000+ wellness enthusiasts</p>
              <form onSubmit={(e) => handleSubmit(e, undefined, undefined, 'qr-landing-hero')} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email for 15% off"
                  className="flex-1 px-4 py-3 text-primary-900 bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-primary-900 font-semibold rounded-xl transition-colors whitespace-nowrap"
                >
                  Get 15% Off
                </button>
              </form>
            </div>
          )}

          {hasSubmitted && (
            <div className="bg-green-500/20 backdrop-blur-md rounded-2xl p-4 border border-green-400/30">
              <p className="text-green-400 font-semibold">Your discount is ready!</p>
              <p className="text-white text-sm mt-1">Use code <span className="font-mono font-bold">{discountCode}</span> at checkout</p>
            </div>
          )}
        </div>
      </section>

      {/* Quick Quiz CTA */}
      <section className="py-6 px-4 bg-gradient-to-r from-purple-50 to-primary-50">
        <div className="max-w-lg mx-auto">
          <Link
            href="/quiz"
            className="flex items-center justify-between p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all border border-purple-100 group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-primary-900">Find Your Perfect Supplement</p>
                <p className="text-sm text-gray-600">Take our 60-second quiz</p>
              </div>
            </div>
            <svg className="w-5 h-5 text-primary-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Quick Access Buttons - Large Touch Targets */}
      <section className="py-6 px-4">
        <div className="max-w-lg mx-auto">
          <div className="grid grid-cols-3 gap-3">
            <Link
              href="/shop"
              className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-primary-100 min-h-[100px]"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-2">
                <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-primary-900 text-center">Shop All</span>
            </Link>

            <Link
              href="/blog/find-your-dosha"
              className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-primary-100 min-h-[100px]"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                <svg className="w-6 h-6 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-primary-900 text-center">Take Quiz</span>
            </Link>

            <Link
              href="/blog/our-ingredients"
              className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-primary-100 min-h-[100px]"
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-primary-900 text-center">Ingredients</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Shop by Concern - 8 Categories Grid */}
      <section className="py-8 px-4">
        <div className="max-w-lg mx-auto">
          <h2 className="text-xl font-display text-primary-900 mb-4 text-center">
            Shop by Concern
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {concerns.map((concern) => (
              <Link
                key={concern.id}
                href={`/shop/${concern.slug}`}
                className={`flex items-center gap-3 p-4 rounded-xl ${concern.color} hover:opacity-90 transition-opacity min-h-[72px]`}
              >
                <span className="text-2xl">{concern.icon}</span>
                <div>
                  <span className="font-medium block text-sm">{concern.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Progress Bar Email Capture */}
      {!hasSubmitted && (
        <section ref={progressRef} className="py-6 px-4 bg-gradient-to-r from-yellow-50 to-primary-50">
          <div className="max-w-lg mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-yellow-200">
              {/* Progress indicator */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full transition-all duration-1000 ${progressVisible ? 'w-[90%]' : 'w-0'}`}
                  />
                </div>
                <span className="text-sm font-semibold text-primary-900">90%</span>
              </div>

              <p className="text-primary-900 font-semibold mb-2">
                You&apos;re 1 step away from 15% off!
              </p>
              <p className="text-gray-600 text-sm mb-4">
                Enter your email to unlock your exclusive discount
              </p>

              <form onSubmit={(e) => handleSubmit(e, undefined, undefined, 'qr-landing-progress')} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-primary-900 font-semibold rounded-xl transition-colors"
                >
                  Complete
                </button>
              </form>
            </div>
          </div>
        </section>
      )}

      {/* Featured Products */}
      <section className="py-8 px-4 bg-gradient-to-b from-white to-primary-50/50">
        <div className="max-w-lg mx-auto">
          <h2 className="text-xl font-display text-primary-900 mb-4 text-center">
            Customer Favorites
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-800 text-white font-medium rounded-xl hover:bg-primary-900 transition-colors shadow-lg min-h-[56px] w-full"
            >
              View All Products
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* SMS/Text Option */}
      <section className="py-8 px-4 bg-gradient-to-r from-blue-50 to-primary-50">
        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-2xl p-6 shadow-md border border-blue-100 text-center">
            <div className="w-14 h-14 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-primary-900 mb-2">
              Prefer Text Updates?
            </h3>
            <p className="text-gray-600 mb-4">
              Text <span className="font-mono font-bold text-primary-700">PRANA</span> to <span className="font-mono font-bold text-primary-700">12345</span> for 15% off + exclusive offers
            </p>
            <p className="text-xs text-gray-400">
              Standard message rates apply. Reply STOP to unsubscribe.
            </p>
          </div>
        </div>
      </section>

      {/* Subscribe & Save 15% Promo */}
      <section className="py-10 px-4 bg-gradient-to-br from-primary-800 to-primary-900 text-white">
        <div className="max-w-lg mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm mb-4">
            <span className="text-yellow-400 font-semibold">SAVE 15%</span>
            <span>on your first order</span>
          </div>

          <h2 className="text-2xl font-display font-light mb-3">
            Join the Pure Prana Family
          </h2>
          <p className="text-primary-100 mb-6 leading-relaxed">
            Subscribe for exclusive offers, wellness tips, and a 15% discount code.
          </p>

          {!hasSubmitted ? (
            <form onSubmit={(e) => handleSubmit(e, undefined, undefined, 'qr-landing-footer')} className="space-y-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name (optional)"
                className="w-full px-5 py-4 text-base text-primary-900 bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-300 min-h-[56px]"
                disabled={isLoading}
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-5 py-4 text-base text-primary-900 bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-300 min-h-[56px]"
                required
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-primary-900 font-semibold rounded-xl transition-all transform hover:scale-[1.02] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed min-h-[56px]"
              >
                {isLoading ? 'Subscribing...' : 'Get My 15% Discount'}
              </button>
            </form>
          ) : (
            <div className="p-6 bg-green-500/20 rounded-xl border border-green-400/30">
              <svg className="w-12 h-12 mx-auto mb-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className="text-lg font-semibold">You&apos;re all set!</p>
              <p className="text-primary-100 mt-2">Use code <span className="font-mono font-bold text-yellow-400">{discountCode}</span> at checkout</p>
            </div>
          )}

          {message && !hasSubmitted && (
            <div
              className={`mt-4 p-4 rounded-xl text-sm ${
                message.type === 'success'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}
            >
              {message.text}
            </div>
          )}

          <p className="text-xs text-primary-300 mt-4">
            No spam. Unsubscribe anytime.
          </p>

          {/* Gamification CTA */}
          {!hasSubmitted && (
            <button
              onClick={() => setShowSpinWheel(true)}
              className="mt-4 text-yellow-400 hover:text-yellow-300 text-sm font-medium underline underline-offset-2 transition-colors"
            >
              Want to try your luck? Spin our wheel for up to 25% off!
            </button>
          )}
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-lg mx-auto">
          <h2 className="text-lg font-display text-primary-900 mb-4 text-center">
            Helpful Resources
          </h2>
          <div className="grid grid-cols-3 gap-3">
            <Link
              href="/blog"
              className="flex flex-col items-center justify-center p-4 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors min-h-[80px]"
            >
              <svg className="w-6 h-6 text-primary-700 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span className="text-sm font-medium text-primary-900">Blog</span>
            </Link>

            <Link
              href="/contact"
              className="flex flex-col items-center justify-center p-4 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors min-h-[80px]"
            >
              <svg className="w-6 h-6 text-primary-700 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-sm font-medium text-primary-900">Contact</span>
            </Link>

            <Link
              href="/blog/faq"
              className="flex flex-col items-center justify-center p-4 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors min-h-[80px]"
            >
              <svg className="w-6 h-6 text-primary-700 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium text-primary-900">FAQ</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 px-4 bg-gradient-to-b from-primary-50 to-white border-t border-primary-100">
        <div className="max-w-lg mx-auto">
          <h2 className="text-lg font-display text-primary-900 mb-6 text-center">
            Why Choose Pure Prana
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-primary-100">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-primary-900 text-sm">GMP Certified</p>
                <p className="text-xs text-muted">Premium Quality</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-primary-100">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-green-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-primary-900 text-sm">GMP Certified</p>
                <p className="text-xs text-muted">Quality assured</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-primary-100">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-purple-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-primary-900 text-sm">FDA Registered</p>
                <p className="text-xs text-muted">Compliant facility</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-primary-100">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-yellow-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-primary-900 text-sm">3rd Party Tested</p>
                <p className="text-xs text-muted">Purity verified</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-primary-100">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-red-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-primary-900 text-sm">100% Natural</p>
                <p className="text-xs text-muted">No synthetics</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-primary-100">
              <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-teal-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-primary-900 text-sm">60-Day Guarantee</p>
                <p className="text-xs text-muted">Money back</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-6 px-4 bg-white border-t border-primary-100 sticky bottom-0 z-30 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        <div className="max-w-lg mx-auto">
          <Link
            href="/shop"
            className="flex items-center justify-center gap-2 w-full px-8 py-4 bg-[#FF9900] hover:bg-[#e88b00] text-white font-semibold rounded-xl transition-colors shadow-lg min-h-[56px]"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {hasSubmitted && discountCode ? `Shop Now - Use Code ${discountCode}` : 'Shop Now on Amazon'}
          </Link>
        </div>
      </section>
    </main>
  )
}
