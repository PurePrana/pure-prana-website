// Email utility functions
// For MVP, these are placeholders. In production, integrate with SendGrid, Resend, or similar

interface EmailOptions {
  to: string
  subject: string
  html: string
  text?: string
  from?: string
  replyTo?: string
}

interface ContactEmailData {
  name: string
  email: string
  subject: string
  message: string
}

// Email templates
export const emailTemplates = {
  newsletterWelcome: (email: string) => ({
    subject: 'Welcome to Pure Prana Newsletter',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #336633;">Welcome to Pure Prana!</h1>
        <p>Thank you for subscribing to our newsletter. You'll receive:</p>
        <ul>
          <li>Evidence-based Ayurvedic insights</li>
          <li>Clinical research summaries</li>
          <li>Practical wellness tips</li>
          <li>Exclusive discounts on our products</li>
        </ul>
        <p>We typically send 1-2 emails per month, packed with valuable content.</p>
        <p>Best regards,<br>The Pure Prana Team</p>
        <hr style="border: 1px solid #eee; margin: 20px 0;">
        <p style="font-size: 12px; color: #666;">
          You're receiving this because you signed up at gopureprana.com. 
          <a href="#">Unsubscribe</a>
        </p>
      </div>
    `,
    text: `Welcome to Pure Prana!

Thank you for subscribing to our newsletter. You'll receive:
- Evidence-based Ayurvedic insights
- Clinical research summaries
- Practical wellness tips
- Exclusive discounts on our products

We typically send 1-2 emails per month, packed with valuable content.

Best regards,
The Pure Prana Team

---
You're receiving this because you signed up at gopureprana.com.`,
  }),

  contactFormNotification: (data: ContactEmailData) => ({
    subject: `New Contact Form Submission: ${data.subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #336633;">New Contact Form Submission</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Name:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">
              <a href="mailto:${data.email}">${data.email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Subject:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.subject}</td>
          </tr>
          <tr>
            <td style="padding: 10px; vertical-align: top;"><strong>Message:</strong></td>
            <td style="padding: 10px; white-space: pre-wrap;">${data.message}</td>
          </tr>
        </table>
        <p style="margin-top: 20px;">
          <a href="mailto:${data.email}?subject=Re: ${data.subject}" 
             style="background: #336633; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
            Reply to ${data.name}
          </a>
        </p>
      </div>
    `,
    text: `New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject}

Message:
${data.message}

Reply to: ${data.email}`,
  }),

  contactFormAutoReply: (data: ContactEmailData) => ({
    subject: `Re: ${data.subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #336633;">Thank You for Contacting Pure Prana</h2>
        <p>Dear ${data.name},</p>
        <p>We've received your message and appreciate you reaching out to us. Our team will review your inquiry and get back to you within 24 hours.</p>
        <p><strong>Your Message:</strong></p>
        <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <p><strong>Subject:</strong> ${data.subject}</p>
          <p style="white-space: pre-wrap;">${data.message}</p>
        </div>
        <p>In the meantime, you might find these resources helpful:</p>
        <ul>
          <li><a href="https://gopureprana.com/blog">Our Research Blog</a></li>
          <li><a href="https://gopureprana.com/shop">Product Catalog</a></li>
          <li><a href="https://gopureprana.com/about">About Pure Prana</a></li>
        </ul>
        <p>Best regards,<br>The Pure Prana Team</p>
        <hr style="border: 1px solid #eee; margin: 20px 0;">
        <p style="font-size: 12px; color: #666;">
          This is an automated response to confirm we received your message.
        </p>
      </div>
    `,
    text: `Thank You for Contacting Pure Prana

Dear ${data.name},

We've received your message and appreciate you reaching out to us. Our team will review your inquiry and get back to you within 24 hours.

Your Message:
Subject: ${data.subject}
${data.message}

In the meantime, you might find our Research Blog and Product Catalog helpful.

Best regards,
The Pure Prana Team

---
This is an automated response to confirm we received your message.`,
  }),
}

// Placeholder email sending function
// In production, replace with actual email service integration
export async function sendEmail(options: EmailOptions): Promise<boolean> {
  const {
    to,
    subject,
    html,
    text,
    from = 'noreply@pureprana.com',
    replyTo,
  } = options

  // Log email for development
  if (process.env.NODE_ENV === 'development') {
    console.log('📧 Email would be sent:', {
      from,
      to,
      replyTo,
      subject,
      preview: text?.substring(0, 100) || html.substring(0, 100),
    })
  }

  // TODO: Implement actual email sending
  // Example with SendGrid:
  /*
  try {
    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    
    const msg = {
      to,
      from,
      replyTo,
      subject,
      text,
      html,
    }
    
    await sgMail.send(msg)
    return true
  } catch (error) {
    console.error('Email send error:', error)
    return false
  }
  */

  // For MVP, return true to simulate successful send
  return true
}

// Convenience functions
export async function sendNewsletterWelcome(email: string): Promise<boolean> {
  const template = emailTemplates.newsletterWelcome(email)
  return sendEmail({
    to: email,
    subject: template.subject,
    html: template.html,
    text: template.text,
  })
}

export async function sendContactNotification(
  data: ContactEmailData
): Promise<boolean> {
  const template = emailTemplates.contactFormNotification(data)
  const adminEmail = process.env.ADMIN_EMAIL || 'purchase.himalayas@gmail.com'

  return sendEmail({
    to: adminEmail,
    subject: template.subject,
    html: template.html,
    text: template.text,
    replyTo: data.email,
  })
}

export async function sendContactAutoReply(
  data: ContactEmailData
): Promise<boolean> {
  const template = emailTemplates.contactFormAutoReply(data)
  return sendEmail({
    to: data.email,
    subject: template.subject,
    html: template.html,
    text: template.text,
  })
}

// Email validation
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Sanitize email
export function sanitizeEmail(email: string): string {
  return email.toLowerCase().trim()
}
