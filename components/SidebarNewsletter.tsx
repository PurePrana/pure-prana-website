'use client'

import { useState } from 'react'

export default function SidebarNewsletter() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage(null)

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          source: 'blog-sidebar'
        })
      })

      const data = await response.json()

      if (response.ok) {
        setMessage({ type: 'success', text: 'Successfully subscribed!' })
        setEmail('')
      } else {
        setMessage({ type: 'error', text: data.error || 'Failed to subscribe. Please try again.' })
      }
    } catch (error) {
      console.error('Subscription error:', error)
      setMessage({ type: 'error', text: 'Network error. Please try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-gradient-to-br from-primary-100 to-primary-50 rounded-xl p-6">
      <h3 className="text-lg font-medium text-primary-900 mb-3">
        Get Research Updates
      </h3>
      <p className="text-sm text-primary-700 mb-4">
        Monthly digest of evidence-based Ayurvedic insights.
      </p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          className="w-full px-4 py-2.5 bg-white border border-primary-300 rounded-lg text-sm focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
          required
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="w-full px-4 py-2.5 bg-primary-800 text-white font-medium rounded-lg hover:bg-primary-900 transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
      
      {message && (
        <div className={`mt-3 p-2 rounded text-xs text-center ${
          message.type === 'success' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'
        }`}>
          {message.text}
        </div>
      )}
      
      <p className="text-xs text-primary-600 mt-3">Join 10,000+ readers. No spam.</p>
    </div>
  )
}