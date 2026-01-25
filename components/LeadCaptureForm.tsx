'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { trackLead } from './MetaPixel'

interface LeadCaptureFormProps {
  source: string
  redirectTo?: string
  buttonText?: string
  contentName?: string
}

export default function LeadCaptureForm({
  source,
  redirectTo,
  buttonText = 'Get Free Guide',
  contentName,
}: LeadCaptureFormProps) {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          source,
          interests: ['mens-vitality', 'ayurveda'],
        }),
      })

      const data = await response.json()

      if (response.ok) {
        // Fire Meta Pixel Lead event
        trackLead({
          content_name: contentName || source,
        })

        // Store in localStorage for thank you page
        localStorage.setItem('lead_email', email)
        localStorage.setItem('lead_source', source)

        // Redirect to thank you page
        if (redirectTo) {
          router.push(redirectTo)
        }
      } else {
        setError(data.error || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      console.error('Lead capture error:', err)
      setError('Network error. Please check your connection and try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-5 py-4 text-base border-2 border-primary-300 rounded-lg focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-200 bg-white"
          required
          disabled={isLoading}
          aria-label="Email address"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none whitespace-nowrap"
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <svg
                className="animate-spin h-5 w-5"
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
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Sending...
            </span>
          ) : (
            buttonText
          )}
        </button>
      </div>

      {error && (
        <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {error}
        </div>
      )}

      <p className="mt-4 text-sm text-primary-600 text-center">
        Free guide. No spam. Unsubscribe anytime.
      </p>
    </form>
  )
}
