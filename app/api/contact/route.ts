import { NextRequest, NextResponse } from 'next/server'
import { storage } from '@/lib/storage'

// Simple rate limiting in memory (for MVP)
const rateLimitMap = new Map<string, { count: number; timestamp: number }>()
const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 hour
const RATE_LIMIT_MAX = 3 // 3 submissions per hour

interface ContactSubmission {
  id: string
  name: string
  email: string
  phone?: string
  service: string
  message: string
  timestamp: string
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const record = rateLimitMap.get(ip)

  if (!record || now - record.timestamp > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { count: 1, timestamp: now })
    return true
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return false
  }

  record.count++
  return true
}

function generateId(): string {
  return `contact_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
}

export async function POST(request: NextRequest) {
  try {
    // Get IP for rate limiting
    const ip =
      request.headers.get('x-forwarded-for') ||
      request.headers.get('x-real-ip') ||
      'unknown'

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    // Parse request body
    const body = await request.json()
    const { name, email, phone, service, message } = body

    // Validate required fields
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { error: 'Name is required (minimum 2 characters)' },
        { status: 400 }
      )
    }

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    if (!service || typeof service !== 'string' || service.trim().length < 3) {
      return NextResponse.json(
        { error: 'Service is required (minimum 3 characters)' },
        { status: 400 }
      )
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return NextResponse.json(
        { error: 'Message is required (minimum 10 characters)' },
        { status: 400 }
      )
    }

    // Sanitize and limit input lengths
    const submission: ContactSubmission = {
      id: generateId(),
      name: name.trim().substring(0, 100),
      email: email.toLowerCase().trim().substring(0, 255),
      phone: phone ? phone.trim().substring(0, 20) : undefined,
      service: service.trim().substring(0, 200),
      message: message.trim().substring(0, 5000),
      timestamp: new Date().toISOString(),
    }

    await storage.addContactSubmission(submission)

    // TODO: Send notification email when email service is configured
    // TODO: Send auto-reply to user

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for your message. We'll get back to you within 24 hours.",
        submissionId: submission.id,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form submission error:', error)

    return NextResponse.json(
      { error: 'Failed to submit message. Please try again.' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    // Protected endpoint - in production, add authentication
    const authHeader = request.headers.get('authorization')

    // Simple auth check for MVP - replace with proper auth
    if (
      authHeader !==
      `Bearer ${process.env.ADMIN_API_KEY || 'pure-prana-admin-key'}`
    ) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const submissions = await storage.getContactSubmissions()

    // Sort by date, newest first
    submissions.sort(
      (a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    )

    return NextResponse.json({
      total: submissions.length,
      submissions: submissions,
    })
  } catch (error) {
    console.error('Error fetching contact submissions:', error)
    return NextResponse.json(
      { error: 'Failed to fetch submissions' },
      { status: 500 }
    )
  }
}
