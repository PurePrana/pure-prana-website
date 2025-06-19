export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-light text-primary-900 mb-8">
          Privacy Policy
        </h1>

        <div className="prose prose-lg prose-primary max-w-none">
          <p className="text-primary-600 mb-8">
            <strong>Effective Date:</strong>{' '}
            {new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-light text-primary-800 mb-4">
              Our Commitment
            </h2>
            <p>
              Pure Prana respects your privacy. This policy describes how we
              collect, use, and protect your information when you visit our
              website or purchase our products.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-light text-primary-800 mb-4">
              Information We Collect
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-primary-700">
              <li>
                Contact information (name, email) when you subscribe to our
                newsletter
              </li>
              <li>
                Purchase information when you buy through our Amazon affiliate
                links
              </li>
              <li>Website usage data through analytics (anonymized)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-light text-primary-800 mb-4">
              How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-primary-700">
              <li>
                Send wellness tips and product updates (only with your consent)
              </li>
              <li>Improve our website and content</li>
              <li>Respond to your inquiries</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-light text-primary-800 mb-4">
              Information Protection
            </h2>
            <p>
              We implement appropriate security measures to protect your
              personal information. We never sell, trade, or rent your personal
              information to third parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-light text-primary-800 mb-4">
              Third-Party Services
            </h2>
            <p>
              We use Amazon affiliate links. When you click these links, Amazon
              may collect information according to their privacy policy. We
              recommend reviewing Amazon&apos;s privacy practices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-light text-primary-800 mb-4">
              Your Rights
            </h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-primary-700">
              <li>Access your personal information</li>
              <li>Request correction or deletion of your data</li>
              <li>Unsubscribe from our communications at any time</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-light text-primary-800 mb-4">
              Contact Us
            </h2>
            <p>
              For privacy-related questions, please contact us through our
              contact form.
            </p>
          </section>

          <section className="mt-12 p-6 bg-primary-50 rounded-lg">
            <p className="text-sm text-primary-600">
              This privacy policy may be updated periodically. We encourage you
              to review this page regularly for any changes.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
