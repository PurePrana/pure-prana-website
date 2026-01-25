import { Resend } from 'resend'

const resendApiKey = process.env.RESEND_API_KEY

export const resend = resendApiKey ? new Resend(resendApiKey) : null

export async function sendWelcomeEmail(to: string): Promise<boolean> {
  if (!resend) {
    console.log('Resend not configured, skipping email to:', to)
    return false
  }

  try {
    await resend.emails.send({
      from: 'Pure Prana <hello@pureprana.com>',
      to,
      subject: "Your 4 Ayurvedic Herbs Guide is Here",
      html: getWelcomeEmailHtml(),
    })
    return true
  } catch (error) {
    console.error('Failed to send welcome email:', error)
    return false
  }
}

function getWelcomeEmailHtml(): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your 4 Ayurvedic Herbs Guide</title>
</head>
<body style="margin: 0; padding: 0; font-family: Georgia, serif; background-color: #f8fcf8; color: #1a1a1a;">
  <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">

    <!-- Header -->
    <div style="text-align: center; margin-bottom: 40px;">
      <h1 style="color: #336633; font-size: 28px; margin: 0;">Pure Prana</h1>
      <p style="color: #666; font-size: 14px; margin-top: 8px;">Ayurvedic Wellness</p>
    </div>

    <!-- Main Content -->
    <div style="background: white; border-radius: 12px; padding: 40px; border: 1px solid #e0e0e0;">

      <h2 style="color: #336633; font-size: 24px; margin-top: 0;">
        The 4 Ayurvedic Herbs for Men's Vitality
      </h2>

      <p style="font-size: 16px; line-height: 1.7; color: #333;">
        For over 3,000 years, Ayurvedic practitioners have used a specific combination of herbs to support men's vitality, energy, and strength. Here's what modern science says about each one:
      </p>

      <!-- Herb 1: Shilajit -->
      <div style="background: #f8fcf8; border-left: 4px solid #336633; padding: 20px; margin: 24px 0;">
        <h3 style="color: #336633; margin: 0 0 12px 0; font-size: 20px;">
          1. Shilajit — The Destroyer of Weakness
        </h3>
        <p style="font-size: 15px; line-height: 1.7; color: #444; margin: 0;">
          This mineral-rich resin oozes from Himalayan rocks at high altitudes. In Sanskrit, "Shilajit" literally means "conqueror of mountains and destroyer of weakness."
        </p>
        <p style="font-size: 15px; line-height: 1.7; color: #444; margin: 12px 0 0 0;">
          <strong>What science says:</strong> Contains 85+ minerals and fulvic acid. Studies show it may support testosterone levels, energy production at the cellular level (ATP), and physical performance.
        </p>
      </div>

      <!-- Herb 2: Ashwagandha -->
      <div style="background: #f8fcf8; border-left: 4px solid #336633; padding: 20px; margin: 24px 0;">
        <h3 style="color: #336633; margin: 0 0 12px 0; font-size: 20px;">
          2. Ashwagandha — Strength of a Stallion
        </h3>
        <p style="font-size: 15px; line-height: 1.7; color: #444; margin: 0;">
          The name comes from Sanskrit: "ashva" (horse) + "gandha" (smell) — referring to both its distinct smell and the strength it's said to provide.
        </p>
        <p style="font-size: 15px; line-height: 1.7; color: #444; margin: 12px 0 0 0;">
          <strong>What science says:</strong> Classified as an "adaptogen" — helps the body manage stress. Multiple studies show it may reduce cortisol, support muscle strength, and improve sleep quality.
        </p>
      </div>

      <!-- Herb 3: Gokshura -->
      <div style="background: #f8fcf8; border-left: 4px solid #336633; padding: 20px; margin: 24px 0;">
        <h3 style="color: #336633; margin: 0 0 12px 0; font-size: 20px;">
          3. Gokshura — The Vitality Herb
        </h3>
        <p style="font-size: 15px; line-height: 1.7; color: #444; margin: 0;">
          Known in the West as Tribulus terrestris. In Ayurveda, it's one of the primary herbs for "Vajikarana" — the science of vitality and vigor.
        </p>
        <p style="font-size: 15px; line-height: 1.7; color: #444; margin: 12px 0 0 0;">
          <strong>What science says:</strong> Research suggests it may support healthy libido, urinary tract health, and athletic performance. Works synergistically with Ashwagandha.
        </p>
      </div>

      <!-- Herb 4: Safed Musli -->
      <div style="background: #f8fcf8; border-left: 4px solid #336633; padding: 20px; margin: 24px 0;">
        <h3 style="color: #336633; margin: 0 0 12px 0; font-size: 20px;">
          4. Safed Musli — The White Gold
        </h3>
        <p style="font-size: 15px; line-height: 1.7; color: #444; margin: 0;">
          Called "Divya Aushad" (divine medicine) in ancient texts. It's rare and expensive — hence "white gold." Traditionally used for strength, stamina, and overall vitality.
        </p>
        <p style="font-size: 15px; line-height: 1.7; color: #444; margin: 12px 0 0 0;">
          <strong>What science says:</strong> Contains saponins that may support healthy testosterone levels, physical endurance, and immune function.
        </p>
      </div>

      <!-- Why Together -->
      <h3 style="color: #336633; font-size: 20px; margin-top: 32px;">
        Why These 4 Work Better Together
      </h3>
      <p style="font-size: 16px; line-height: 1.7; color: #333;">
        In Ayurveda, herbs are rarely used alone. The concept of "Synergy" (called "Samyoga") means certain herbs amplify each other's effects:
      </p>
      <ul style="font-size: 15px; line-height: 1.9; color: #444;">
        <li><strong>Shilajit</strong> enhances absorption of all other herbs</li>
        <li><strong>Ashwagandha</strong> manages stress that depletes vitality</li>
        <li><strong>Gokshura + Safed Musli</strong> work on vitality from different pathways</li>
      </ul>

      <!-- How to Choose -->
      <h3 style="color: #336633; font-size: 20px; margin-top: 32px;">
        How to Identify Quality Supplements
      </h3>
      <p style="font-size: 16px; line-height: 1.7; color: #333;">
        Not all supplements are equal. Here's what to look for:
      </p>
      <ul style="font-size: 15px; line-height: 1.9; color: #444;">
        <li><strong>Standardized extracts</strong> — Look for specific percentages (e.g., 5% withanolides for Ashwagandha)</li>
        <li><strong>Third-party tested</strong> — Heavy metals are common in low-quality Shilajit</li>
        <li><strong>Made in FDA-registered facilities</strong> — Quality control matters</li>
        <li><strong>No proprietary blends</strong> — You should know exact amounts of each herb</li>
      </ul>

      <!-- CTA -->
      <div style="background: #336633; border-radius: 8px; padding: 24px; margin-top: 32px; text-align: center;">
        <p style="color: white; font-size: 16px; margin: 0 0 16px 0;">
          We combined all 4 herbs in one supplement — made in the USA with authentic ingredients.
        </p>
        <a href="https://www.amazon.com/dp/B0CWS4NCCF"
           style="display: inline-block; background: white; color: #336633; padding: 14px 28px; border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 16px;">
          See It On Amazon →
        </a>
      </div>

    </div>

    <!-- Footer -->
    <div style="text-align: center; margin-top: 40px; color: #888; font-size: 13px;">
      <p style="margin: 0;">Pure Prana | Ayurvedic Wellness</p>
      <p style="margin: 8px 0 0 0;">
        <a href="https://pureprana.com" style="color: #336633;">pureprana.com</a>
      </p>
      <p style="margin: 16px 0 0 0; font-size: 11px; color: #aaa;">
        These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.
      </p>
    </div>

  </div>
</body>
</html>
`
}
