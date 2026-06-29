export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#080B11] py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="text-gray-400 space-y-6">
          <p className="text-sm text-gray-500">Last updated: June 26, 2026</p>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
            <p>When you purchase Zentriq, we collect:</p>
            <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
              <li>Payment information (processed securely through Gumroad)</li>
              <li>Email address (for license delivery)</li>
              <li>Hardware fingerprint (MAC address for license activation)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
            <p>Your information is used to:</p>
            <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
              <li>Process your purchase and deliver your license key</li>
              <li>Verify license activation and prevent unauthorized use</li>
              <li>Provide customer support</li>
              <li>Send important product updates (you can opt out anytime)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Data Storage & Security</h2>
            <p>We use Firebase (Google Cloud) to store license information securely. Your hardware fingerprint is hashed and encrypted. We do not store payment card details.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Third-Party Services</h2>
            <p>We use:</p>
            <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
              <li><strong>Gumroad</strong> - Payment processing</li>
              <li><strong>Firebase</strong> - License management</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
              <li>Request a copy of your data</li>
              <li>Request deletion of your data</li>
              <li>Opt out of marketing emails</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Contact Us</h2>
            <p>For privacy questions, email: <a href="mailto:privacy@zentriq.com" className="text-primary hover:underline">privacy@zentriq.com</a></p>
          </section>
        </div>

        <div className="mt-12">
          <a href="/" className="text-primary hover:underline">← Back to Home</a>
        </div>
      </div>
    </div>
  )
}
