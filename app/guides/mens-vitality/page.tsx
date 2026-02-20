import type { Metadata } from 'next'
import LeadCaptureForm from '@/components/LeadCaptureForm'
import { trackViewContent } from '@/components/MetaPixel'

export const metadata: Metadata = {
  title: "The 4 Ayurvedic Herbs for Men's Vitality | Free Guide",
  description:
    'Discover what modern science says about Shilajit, Ashwagandha, Gokshura & Safed Musli. Free guide on the 4 Ayurvedic herbs Indian men have used for centuries.',
  robots: {
    index: false,
    follow: false,
  },
}

function CheckIcon() {
  return (
    <svg
      className="w-6 h-6 text-primary-600 flex-shrink-0"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export default function MensVitalityGuidePage() {
  const benefits = [
    'Why these 4 herbs work better together than alone',
    'The science behind each ingredient (with studies)',
    'How to identify quality supplements vs. cheap knockoffs',
    'Dosage and timing recommendations from Ayurvedic texts',
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      {/* Hero Section */}
      <section className="pt-16 pb-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full text-primary-700 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
            Free Ayurvedic Guide
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-900 leading-tight mb-6">
            The 4 Ayurvedic Herbs Indian Men Have Used for Centuries
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-700 leading-relaxed mb-8 max-w-2xl mx-auto">
            <span className="font-semibold">
              Shilajit. Ashwagandha. Gokshura. Safed Musli.
            </span>
            <br />
            Discover what modern science says about these time-tested herbs for
            men&apos;s vitality, energy, and strength.
          </p>

          {/* Email Capture Form */}
          <div className="mb-12">
            <LeadCaptureForm
              source="meta-ads-mens-vitality"
              redirectTo="/guides/mens-vitality/thank-you"
              buttonText="Send Me the Free Guide"
              contentName="Mens Vitality Guide"
            />
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-900 text-center mb-8">
            What You&apos;ll Learn in This Guide
          </h2>

          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li
                key={index}
                className="flex items-start gap-4 p-4 bg-primary-50 rounded-xl"
              >
                <CheckIcon />
                <span className="text-primary-800 text-lg">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Ingredients Preview */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-900 text-center mb-8">
            The 4 Herbs Inside
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-primary-200 shadow-sm">
              <h3 className="text-xl font-semibold text-primary-900 mb-2">
                Shilajit
              </h3>
              <p className="text-primary-700">
                The &quot;destroyer of weakness&quot; - a mineral-rich resin
                from the Himalayas prized for 3,000+ years for energy and
                vitality.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-primary-200 shadow-sm">
              <h3 className="text-xl font-semibold text-primary-900 mb-2">
                Ashwagandha
              </h3>
              <p className="text-primary-700">
                The &quot;strength of a stallion&quot; - an adaptogen that helps
                the body manage stress while supporting strength and stamina.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-primary-200 shadow-sm">
              <h3 className="text-xl font-semibold text-primary-900 mb-2">
                Gokshura
              </h3>
              <p className="text-primary-700">
                Known as Tribulus terrestris - traditionally used for male
                vitality, athletic performance, and urinary health.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-primary-200 shadow-sm">
              <h3 className="text-xl font-semibold text-primary-900 mb-2">
                Safed Musli
              </h3>
              <p className="text-primary-700">
                The &quot;white gold&quot; of Ayurveda - a rare herb used for
                centuries to support stamina, strength, and overall vitality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Second CTA */}
      <section className="py-12 px-4 bg-primary-900 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Get Your Free Guide Now
          </h2>
          <p className="text-primary-200 mb-8 text-lg">
            Join thousands of men who are discovering the power of Ayurvedic
            herbs.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <LeadCaptureForm
              source="meta-ads-mens-vitality"
              redirectTo="/guides/mens-vitality/thank-you"
              buttonText="Send Me the Free Guide"
              contentName="Mens Vitality Guide"
            />
          </div>
        </div>
      </section>

      {/* Trust Elements */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8 text-center text-primary-600">
            <div>
              <div className="text-3xl font-bold text-primary-900">3,000+</div>
              <div className="text-sm">Years of Ayurvedic Use</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-900">100%</div>
              <div className="text-sm">Plant-Based Ingredients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-900">Made in</div>
              <div className="text-sm">USA (FDA Registered)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-8 px-4 bg-primary-50">
        <div className="max-w-2xl mx-auto text-center text-sm text-primary-600">
          <p>
            Pure Prana is committed to bringing you the highest quality
            Ayurvedic supplements. Our products are made in FDA-registered
            facilities in the USA using authentic ingredients sourced from
            trusted suppliers.
          </p>
        </div>
      </section>
    </main>
  )
}
