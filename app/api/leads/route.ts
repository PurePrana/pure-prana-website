import { NextRequest, NextResponse } from 'next/server'
import { storage, UserLead } from '@/lib/storage'
import { sendWelcomeEmail } from '@/lib/resend'

// Simple rate limiting in memory
const rateLimitMap = new Map<string, { count: number; timestamp: number }>()
const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 hour
const RATE_LIMIT_MAX = 10 // 10 submissions per hour

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
  return `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
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
    const {
      email,
      name,
      phone,
      source = 'website',
      interests,
      discountCodeUsed,
    } = body

    // Validate email
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

    const normalizedEmail = email.toLowerCase().trim()

    // Check if lead already exists
    const existingLead = await storage.getLeadByEmail(normalizedEmail)

    // Create or update lead
    const lead: UserLead = {
      id: existingLead?.id || generateId(),
      email: normalizedEmail.substring(0, 255),
      name: name ? name.trim().substring(0, 100) : existingLead?.name,
      phone: phone ? phone.trim().substring(0, 20) : existingLead?.phone,
      createdAt: existingLead?.createdAt || new Date().toISOString(),
      source: source.trim().substring(0, 50),
      interests: interests
        ? interests.slice(0, 20).map((i: string) => i.trim().substring(0, 100))
        : existingLead?.interests,
      discountCodeUsed: discountCodeUsed
        ? discountCodeUsed.trim().substring(0, 50)
        : existingLead?.discountCodeUsed,
    }

    await storage.saveUserLead(lead)

    // Also add to newsletter subscribers if not already subscribed
    const isSubscribed = await storage.isSubscribed(normalizedEmail)
    if (!isSubscribed) {
      await storage.addNewsletterSubscriber(normalizedEmail)
    }

    // Send welcome email for new leads from Meta Ads
    if (!existingLead && source.startsWith('meta-ads')) {
      // Fire and forget - don't block the response
      sendWelcomeEmail(normalizedEmail).catch((err) => {
        console.error('Failed to send welcome email:', err)
      })
    }

    // Generate discount code based on source
    let discountCode = 'PRANA15'
    if (source === 'spin-wheel') {
      discountCode = discountCodeUsed || 'SPIN10'
    } else if (source === 'quiz') {
      discountCode = 'QUIZ20'
    } else if (source === 'qr-landing') {
      discountCode = 'QR15'
    }

    return NextResponse.json(
      {
        success: true,
        message: existingLead
          ? 'Welcome back! Your discount code is ready.'
          : 'Welcome to Pure Prana! Your discount is ready.',
        leadId: lead.id,
        discountCode,
        isNewLead: !existingLead,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Lead capture error:', error)

    return NextResponse.json(
      { error: 'Failed to process. Please try again.' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    // Protected endpoint - requires authentication
    const authHeader = request.headers.get('authorization')

    // Simple auth check for MVP - replace with proper auth
    if (
      authHeader !==
      `Bearer ${process.env.ADMIN_API_KEY || 'pure-prana-admin-key'}`
    ) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const leads = await storage.getUserLeads()

    // Sort by date, newest first
    leads.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )

    // Get query params for filtering
    const { searchParams } = new URL(request.url)
    const source = searchParams.get('source')
    const email = searchParams.get('email')
    const hasDiscount = searchParams.get('hasDiscount')

    let filteredLeads = leads

    if (source) {
      filteredLeads = filteredLeads.filter((l) =>
        l.source.toLowerCase().includes(source.toLowerCase())
      )
    }

    if (email) {
      filteredLeads = filteredLeads.filter((l) =>
        l.email.toLowerCase().includes(email.toLowerCase())
      )
    }

    if (hasDiscount === 'true') {
      filteredLeads = filteredLeads.filter((l) => l.discountCodeUsed)
    } else if (hasDiscount === 'false') {
      filteredLeads = filteredLeads.filter((l) => !l.discountCodeUsed)
    }

    // Analytics summary
    const sourceBreakdown = leads.reduce(
      (acc, l) => {
        const sourceKey = l.source.split('-')[0] || l.source
        acc[sourceKey] = (acc[sourceKey] || 0) + 1
        return acc
      },
      {} as Record<string, number>
    )

    const interestBreakdown = leads.reduce(
      (acc, l) => {
        if (l.interests) {
          l.interests.forEach((interest) => {
            acc[interest] = (acc[interest] || 0) + 1
          })
        }
        return acc
      },
      {} as Record<string, number>
    )

    const discountUsageCount = leads.filter((l) => l.discountCodeUsed).length

    return NextResponse.json({
      total: filteredLeads.length,
      leads: filteredLeads,
      analytics: {
        totalLeads: leads.length,
        sourceBreakdown,
        interestBreakdown,
        discountUsageCount,
        conversionRate:
          leads.length > 0
            ? ((discountUsageCount / leads.length) * 100).toFixed(1) + '%'
            : '0%',
      },
    })
  } catch (error) {
    console.error('Error fetching leads:', error)
    return NextResponse.json(
      { error: 'Failed to fetch leads' },
      { status: 500 }
    )
  }
}
