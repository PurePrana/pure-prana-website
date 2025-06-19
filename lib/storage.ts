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
