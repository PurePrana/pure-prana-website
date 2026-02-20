import { kv } from '@vercel/kv'
import fs from 'fs/promises'
import path from 'path'

interface ContactSubmission {
  id: string
  name: string
  email: string
  phone?: string
  service: string
  message: string
  timestamp: string
}

interface NewsletterSubscriber {
  email: string
  subscribedAt: string
}

export interface QuizResponse {
  id: string
  email: string
  name?: string
  phone?: string
  createdAt: string
  // Quiz answers
  primaryConcern: string
  energyLevel: string
  sleepQuality: string
  stressHandling: string
  wellnessGoals: string[]
  // Recommendations shown
  recommendedProducts: string[]
  // Source tracking
  source: 'quiz' | 'qr-landing' | 'popup' | 'footer'
  utmSource?: string
  utmMedium?: string
  utmCampaign?: string
}

export interface UserLead {
  id: string
  email: string
  name?: string
  phone?: string
  createdAt: string
  source: string
  interests?: string[]
  discountCodeUsed?: string
}

class StorageService {
  private isDevelopment = process.env.NODE_ENV === 'development'

  // Contact Submissions
  async getContactSubmissions(): Promise<ContactSubmission[]> {
    if (this.isDevelopment) {
      return this.getLocalData('contact-submissions.json', [])
    }
    const submissions = await kv.get<ContactSubmission[]>('contact-submissions')
    return submissions || []
  }

  async addContactSubmission(submission: ContactSubmission): Promise<void> {
    if (this.isDevelopment) {
      const submissions = await this.getContactSubmissions()
      submissions.push(submission)
      await this.saveLocalData('contact-submissions.json', submissions)
    } else {
      const submissions = await this.getContactSubmissions()
      submissions.push(submission)
      await kv.set('contact-submissions', submissions)
    }
  }

  // Newsletter Subscribers
  async getNewsletterSubscribers(): Promise<NewsletterSubscriber[]> {
    if (this.isDevelopment) {
      return this.getLocalData('newsletter-subscribers.json', [])
    }
    const subscribers = await kv.get<NewsletterSubscriber[]>(
      'newsletter-subscribers'
    )
    return subscribers || []
  }

  async addNewsletterSubscriber(email: string): Promise<void> {
    const subscriber: NewsletterSubscriber = {
      email,
      subscribedAt: new Date().toISOString(),
    }

    if (this.isDevelopment) {
      const subscribers = await this.getNewsletterSubscribers()
      if (!subscribers.find((s) => s.email === email)) {
        subscribers.push(subscriber)
        await this.saveLocalData('newsletter-subscribers.json', subscribers)
      }
    } else {
      const subscribers = await this.getNewsletterSubscribers()
      if (!subscribers.find((s) => s.email === email)) {
        subscribers.push(subscriber)
        await kv.set('newsletter-subscribers', subscribers)
      }
    }
  }

  async isSubscribed(email: string): Promise<boolean> {
    const subscribers = await this.getNewsletterSubscribers()
    return subscribers.some((s) => s.email === email)
  }

  // Quiz Responses
  async getQuizResponses(): Promise<QuizResponse[]> {
    if (this.isDevelopment) {
      return this.getLocalData('quiz-responses.json', [])
    }
    const responses = await kv.get<QuizResponse[]>('quiz-responses')
    return responses || []
  }

  async saveQuizResponse(response: QuizResponse): Promise<void> {
    if (this.isDevelopment) {
      const responses = await this.getQuizResponses()
      responses.push(response)
      await this.saveLocalData('quiz-responses.json', responses)
    } else {
      const responses = await this.getQuizResponses()
      responses.push(response)
      await kv.set('quiz-responses', responses)
    }
  }

  async getQuizResponseByEmail(email: string): Promise<QuizResponse | null> {
    const responses = await this.getQuizResponses()
    const normalizedEmail = email.toLowerCase().trim()
    return (
      responses.find((r) => r.email.toLowerCase() === normalizedEmail) || null
    )
  }

  // User Leads
  async getUserLeads(): Promise<UserLead[]> {
    if (this.isDevelopment) {
      return this.getLocalData('user-leads.json', [])
    }
    const leads = await kv.get<UserLead[]>('user-leads')
    return leads || []
  }

  async saveUserLead(lead: UserLead): Promise<void> {
    if (this.isDevelopment) {
      const leads = await this.getUserLeads()
      // Update existing lead or add new one
      const existingIndex = leads.findIndex(
        (l) => l.email.toLowerCase() === lead.email.toLowerCase()
      )
      if (existingIndex >= 0) {
        // Merge interests and update other fields
        const existing = leads[existingIndex]
        leads[existingIndex] = {
          ...existing,
          ...lead,
          interests: Array.from(
            new Set([...(existing.interests || []), ...(lead.interests || [])])
          ),
        }
      } else {
        leads.push(lead)
      }
      await this.saveLocalData('user-leads.json', leads)
    } else {
      const leads = await this.getUserLeads()
      const existingIndex = leads.findIndex(
        (l) => l.email.toLowerCase() === lead.email.toLowerCase()
      )
      if (existingIndex >= 0) {
        const existing = leads[existingIndex]
        leads[existingIndex] = {
          ...existing,
          ...lead,
          interests: Array.from(
            new Set([...(existing.interests || []), ...(lead.interests || [])])
          ),
        }
      } else {
        leads.push(lead)
      }
      await kv.set('user-leads', leads)
    }
  }

  async getLeadByEmail(email: string): Promise<UserLead | null> {
    const leads = await this.getUserLeads()
    const normalizedEmail = email.toLowerCase().trim()
    return leads.find((l) => l.email.toLowerCase() === normalizedEmail) || null
  }

  // Local file helpers for development
  private async getLocalData<T>(filename: string, defaultValue: T): Promise<T> {
    try {
      const dataDir = path.join(process.cwd(), 'data')
      const filePath = path.join(dataDir, filename)
      const data = await fs.readFile(filePath, 'utf-8')
      return JSON.parse(data)
    } catch (error) {
      // File doesn't exist, return default
      return defaultValue
    }
  }

  private async saveLocalData<T>(filename: string, data: T): Promise<void> {
    const dataDir = path.join(process.cwd(), 'data')
    const filePath = path.join(dataDir, filename)

    // Ensure directory exists
    await fs.mkdir(dataDir, { recursive: true })

    // Write data
    await fs.writeFile(filePath, JSON.stringify(data, null, 2))
  }
}

export const storage = new StorageService()
