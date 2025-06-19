'use client'

import { useState, useEffect } from 'react'

export default function EmailCaptureBar() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Show bar after user scrolls 30% of the page
    const handleScroll = () => {
      const scrollPercentage =
        (window.scrollY / document.documentElement.scrollHeight) * 100
      if (scrollPercentage > 30 && !isSubmitted) {
        setIsVisible(true)
      }
    }

    // Check if user already subscribed (stored in localStorage)
    const hasSubscribed = localStorage.getItem('newsletter_subscribed')
    if (hasSubscribed) {
      setIsSubmitted(true)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isSubmitted])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          source: 'email-capture-bar',
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
        localStorage.setItem('newsletter_subscribed', 'true')
        setTimeout(() => setIsVisible(false), 3000)
      } else {
        // Handle error
        alert(data.error || 'Failed to subscribe. Please try again.')
      }
    } catch (error) {
      console.error('Subscription error:', error)
      alert('Network error. Please check your connection and try again.')
    } finally {
      setIsLoading(false)
    }
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-primary-900 text-white p-4 shadow-2xl transform transition-transform duration-500 z-50">
      <div className="max-w-6xl mx-auto">
        {!isSubmitted ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row items-center gap-4"
          >
            <div className="flex-1 text-center md:text-left">
              <p className="text-lg font-medium">
                Get premium Ayurvedic insights worth $100/month - Free
              </p>
              <p className="text-sm text-primary-200">
                Join 5,000+ readers. No spam. Unsubscribe anytime.
              </p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg text-primary-900 flex-1 md:w-64"
                required
              />
              <button
                type="submit"
                disabled={isLoading}
                className="px-6 py-2 bg-white text-primary-900 font-medium rounded-lg hover:bg-primary-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Subscribing...' : 'Get Access'}
              </button>
            </div>
            <button
              type="button"
              onClick={() => setIsVisible(false)}
              className="absolute top-2 right-2 text-primary-300 hover:text-white"
            >
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </form>
        ) : (
          <div className="text-center py-2">
            <p className="text-lg font-medium">
              ✓ Welcome to the Pure Prana community!
            </p>
            <p className="text-sm text-primary-200">
              Check your email for exclusive content.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
