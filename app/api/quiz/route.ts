import { NextRequest, NextResponse } from 'next/server'
import { storage, QuizResponse } from '@/lib/storage'

// Simple rate limiting in memory (for MVP)
const rateLimitMap = new Map<string, { count: number; timestamp: number }>()
const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 hour
const RATE_LIMIT_MAX = 10 // 10 quiz submissions per hour

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
  return `quiz_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
}

// Valid values for quiz fields
const VALID_PRIMARY_CONCERNS = [
  'stress',
  'energy',
  'sleep',
  'immunity',
  'digestion',
  'weight',
  'skin',
  'joint',
  'memory',
  'general',
]
const VALID_ENERGY_LEVELS = ['very-low', 'low', 'moderate', 'high', 'very-high']
const VALID_SLEEP_QUALITY = ['poor', 'fair', 'good', 'excellent']
const VALID_STRESS_HANDLING = [
  'very-poorly',
  'poorly',
  'okay',
  'well',
  'very-well',
]
const VALID_SOURCES: QuizResponse['source'][] = [
  'quiz',
  'qr-landing',
  'popup',
  'footer',
]

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
      primaryConcern,
      energyLevel,
      sleepQuality,
      stressHandling,
      wellnessGoals,
      recommendedProducts,
      source,
      utmSource,
      utmMedium,
      utmCampaign,
    } = body

    // Validate required fields
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

    // Validate quiz answers
    if (!primaryConcern || !VALID_PRIMARY_CONCERNS.includes(primaryConcern)) {
      return NextResponse.json(
        { error: 'Invalid primary concern' },
        { status: 400 }
      )
    }

    if (!energyLevel || !VALID_ENERGY_LEVELS.includes(energyLevel)) {
      return NextResponse.json(
        { error: 'Invalid energy level' },
        { status: 400 }
      )
    }

    if (!sleepQuality || !VALID_SLEEP_QUALITY.includes(sleepQuality)) {
      return NextResponse.json(
        { error: 'Invalid sleep quality' },
        { status: 400 }
      )
    }

    if (!stressHandling || !VALID_STRESS_HANDLING.includes(stressHandling)) {
      return NextResponse.json(
        { error: 'Invalid stress handling' },
        { status: 400 }
      )
    }

    if (!Array.isArray(wellnessGoals) || wellnessGoals.length === 0) {
      return NextResponse.json(
        { error: 'At least one wellness goal is required' },
        { status: 400 }
      )
    }

    if (!Array.isArray(recommendedProducts)) {
      return NextResponse.json(
        { error: 'Recommended products must be an array' },
        { status: 400 }
      )
    }

    if (!source || !VALID_SOURCES.includes(source)) {
      return NextResponse.json({ error: 'Invalid source' }, { status: 400 })
    }

    // Sanitize and create quiz response
    const quizResponse: QuizResponse = {
      id: generateId(),
      email: email.toLowerCase().trim().substring(0, 255),
      name: name ? name.trim().substring(0, 100) : undefined,
      phone: phone ? phone.trim().substring(0, 20) : undefined,
      createdAt: new Date().toISOString(),
      primaryConcern: primaryConcern.trim(),
      energyLevel: energyLevel.trim(),
      sleepQuality: sleepQuality.trim(),
      stressHandling: stressHandling.trim(),
      wellnessGoals: wellnessGoals
        .slice(0, 10)
        .map((g: string) => g.trim().substring(0, 100)),
      recommendedProducts: recommendedProducts
        .slice(0, 10)
        .map((p: string) => p.trim().substring(0, 100)),
      source,
      utmSource: utmSource ? utmSource.trim().substring(0, 100) : undefined,
      utmMedium: utmMedium ? utmMedium.trim().substring(0, 100) : undefined,
      utmCampaign: utmCampaign
        ? utmCampaign.trim().substring(0, 100)
        : undefined,
    }

    await storage.saveQuizResponse(quizResponse)

    // Also save as a lead for unified lead tracking
    await storage.saveUserLead({
      id: `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      email: quizResponse.email,
      name: quizResponse.name,
      phone: quizResponse.phone,
      createdAt: quizResponse.createdAt,
      source: `quiz-${source}`,
      interests: [quizResponse.primaryConcern, ...quizResponse.wellnessGoals],
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Quiz response saved successfully',
        responseId: quizResponse.id,
        recommendedProducts: quizResponse.recommendedProducts,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Quiz submission error:', error)

    return NextResponse.json(
      { error: 'Failed to save quiz response. Please try again.' },
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

    const responses = await storage.getQuizResponses()

    // Sort by date, newest first
    responses.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )

    // Get query params for filtering
    const { searchParams } = new URL(request.url)
    const source = searchParams.get('source')
    const concern = searchParams.get('concern')
    const email = searchParams.get('email')

    let filteredResponses = responses

    if (source) {
      filteredResponses = filteredResponses.filter((r) => r.source === source)
    }

    if (concern) {
      filteredResponses = filteredResponses.filter(
        (r) => r.primaryConcern === concern
      )
    }

    if (email) {
      filteredResponses = filteredResponses.filter((r) =>
        r.email.toLowerCase().includes(email.toLowerCase())
      )
    }

    // Analytics summary
    const concernBreakdown = responses.reduce(
      (acc, r) => {
        acc[r.primaryConcern] = (acc[r.primaryConcern] || 0) + 1
        return acc
      },
      {} as Record<string, number>
    )

    const sourceBreakdown = responses.reduce(
      (acc, r) => {
        acc[r.source] = (acc[r.source] || 0) + 1
        return acc
      },
      {} as Record<string, number>
    )

    return NextResponse.json({
      total: filteredResponses.length,
      responses: filteredResponses,
      analytics: {
        totalResponses: responses.length,
        concernBreakdown,
        sourceBreakdown,
      },
    })
  } catch (error) {
    console.error('Error fetching quiz responses:', error)
    return NextResponse.json(
      { error: 'Failed to fetch quiz responses' },
      { status: 500 }
    )
  }
}
