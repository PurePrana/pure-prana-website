import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Check Your Email | Pure Prana',
  description: 'Your free guide is on the way. Check your email inbox.',
  robots: {
    index: false,
    follow: false,
  },
}

// Amazon Attribution link - replace ATTRIBUTION_TAG with actual tag from Amazon Attribution
const AMAZON_PRODUCT_URL =
  'https://www.amazon.com/dp/B0CWS4NCCF?maas=maas_adg_ATTRIBUTION_TAG'

function CheckCircleIcon() {
  return (
    <svg
      className="w-16 h-16 text-primary-600"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg
      className="w-8 h-8 text-primary-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      {/* Confirmation Section */}
      <section className="pt-16 pb-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <CheckCircleIcon />
          </div>

          <h1 className="text-3xl md:text-4xl font-display font-bold text-primary-900 mb-4">
            Your Guide Is On The Way!
          </h1>

          <p className="text-lg text-primary-700 mb-8">
            Check your email inbox in the next few minutes. If you don&apos;t see it,
            check your spam or promotions folder.
          </p>

          <div className="inline-flex items-center gap-3 px-6 py-4 bg-primary-100 rounded-xl text-primary-800">
            <EmailIcon />
            <span className="text-left">
              <strong>Subject line:</strong>
              <br />
              Your 4 Ayurvedic Herbs Guide is here
            </span>
          </div>
        </div>
      </section>

      {/* Soft Amazon CTA */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 border border-primary-200">
            <h2 className="text-2xl font-display font-bold text-primary-900 text-center mb-4">
              While You Wait...
            </h2>

            <p className="text-primary-700 text-center mb-6">
              Thousands of men are already using these 4 herbs together. See what
              they&apos;re saying:
            </p>

            {/* Product Preview */}
            <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
              <div className="flex items-start gap-4">
                <div className="w-24 h-24 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-4xl">🌿</span>
                </div>
                <div>
                  <h3 className="font-semibold text-primary-900 mb-1">
                    Shilajit & Ashwagandha Power Blend
                  </h3>
                  <p className="text-sm text-primary-600 mb-2">
                    With Gokshura & Safed Musli | 60 Capsules
                  </p>
                  <div className="flex items-center gap-1 mb-2">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <span className="text-sm text-primary-600 ml-1">
                      2,000+ reviews
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="space-y-4 mb-8">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center gap-1 mb-2">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
                <p className="text-primary-800 text-sm italic">
                  &quot;I&apos;ve tried many supplements but this blend actually works.
                  More energy throughout the day and better focus at work.&quot;
                </p>
                <p className="text-primary-500 text-xs mt-2">— Verified Buyer</p>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center gap-1 mb-2">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
                <p className="text-primary-800 text-sm italic">
                  &quot;Quality ingredients you can trust. As someone who grew up with
                  Ayurveda, I can tell this is the real deal.&quot;
                </p>
                <p className="text-primary-500 text-xs mt-2">— Verified Buyer</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <a
                href={AMAZON_PRODUCT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg"
              >
                See It On Amazon
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
              <p className="text-sm text-primary-500 mt-3">
                Available on Amazon with free Prime shipping
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-primary-900 text-center mb-8">
            What&apos;s Coming in Your Inbox
          </h2>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-primary-200">
              <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-semibold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-semibold text-primary-900">Today: Your Complete Guide</h3>
                <p className="text-primary-600 text-sm">
                  The 4 Ayurvedic herbs breakdown with science and studies
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-primary-200">
              <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-semibold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-semibold text-primary-900">Day 2: Deep Dive on Shilajit</h3>
                <p className="text-primary-600 text-sm">
                  The &quot;destroyer of weakness&quot; and why it&apos;s called that
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-primary-200">
              <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-semibold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-semibold text-primary-900">Day 4: Gokshura & Safed Musli</h3>
                <p className="text-primary-600 text-sm">
                  The vitality duo and traditional uses
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-primary-200">
              <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-semibold flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="font-semibold text-primary-900">Day 6: Ashwagandha Science</h3>
                <p className="text-primary-600 text-sm">
                  Modern research on the ancient adaptogen
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-8 px-4 bg-primary-50">
        <div className="max-w-2xl mx-auto text-center">
          <Link
            href="/"
            className="text-primary-600 hover:text-primary-800 font-medium"
          >
            ← Back to Pure Prana
          </Link>
        </div>
      </section>
    </main>
  )
}
