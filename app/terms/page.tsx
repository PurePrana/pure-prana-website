export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-light text-primary-900 mb-8">
          Terms of Service
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
              Agreement to Terms
            </h2>
            <p>
              By accessing Pure Prana&apos;s website, you agree to these Terms
              of Service. If you disagree with any part, please do not use our
              website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-light text-primary-800 mb-4">
              Website Content
            </h2>
            <p>
              Our content is for informational purposes only. It is not medical
              advice and should not replace consultation with healthcare
              professionals. We provide educational information about Ayurvedic
              wellness traditions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-light text-primary-800 mb-4">
              Product Information
            </h2>
            <p>
              Products are sold through Amazon. We are an affiliate and earn
              commissions from qualifying purchases. Product availability,
              pricing, and specifications are controlled by Amazon and subject
              to change.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-light text-primary-800 mb-4">
              Health Disclaimer
            </h2>
            <p className="font-medium text-primary-700">
              The statements on this website have not been evaluated by the FDA.
              Our products are not intended to diagnose, treat, cure, or prevent
              any disease. Always consult your healthcare provider before
              starting any supplement regimen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-light text-primary-800 mb-4">
              Intellectual Property
            </h2>
            <p>
              All content on this website is the property of Pure Prana or used
              with permission. You may not reproduce, distribute, or create
              derivative works without our written consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-light text-primary-800 mb-4">
              Limitation of Liability
            </h2>
            <p>
              Pure Prana is not liable for any damages arising from your use of
              this website or products purchased through our affiliate links. We
              provide information &quot;as is&quot; without warranties of any
              kind.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-light text-primary-800 mb-4">
              External Links
            </h2>
            <p>
              Our website contains links to Amazon and other third-party sites.
              We are not responsible for their content, privacy practices, or
              terms of service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-light text-primary-800 mb-4">
              Changes to Terms
            </h2>
            <p>
              We may update these terms at any time. Continued use of our
              website after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-light text-primary-800 mb-4">
              Contact Information
            </h2>
            <p>For questions about these terms, please use our contact form.</p>
          </section>

          <section className="mt-12 p-6 bg-primary-50 rounded-lg">
            <p className="text-sm text-primary-600">
              By using Pure Prana&apos;s website, you acknowledge that you have
              read, understood, and agree to be bound by these Terms of Service.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
