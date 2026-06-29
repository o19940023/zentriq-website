export default function LicenseAgreement() {
  return (
    <div className="min-h-screen bg-[#080B11] py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">License Agreement</h1>
        <div className="text-gray-400 space-y-6">
          <p className="text-sm text-gray-500">Last updated: June 26, 2026</p>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. License Type</h2>
            <p>This is a <strong className="text-white">Lifetime, Single-User, Hardware-Locked License</strong>.</p>
            <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
              <li>One license = One computer</li>
              <li>License is tied to your PC's MAC address</li>
              <li>Valid for lifetime (no expiration)</li>
              <li>Includes all future updates</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Installation & Activation</h2>
            <p>Upon purchase, you'll receive:</p>
            <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
              <li>Download link for Zentriq software</li>
              <li>Unique license key (format: ZENT-XXXX-XXXX-XXXX)</li>
            </ul>
            <p className="mt-4">Activation process:</p>
            <ol className="list-decimal list-inside ml-4 space-y-2 mt-2">
              <li>Download and install Zentriq</li>
              <li>Enter your license key on first run</li>
              <li>Software validates key with our server</li>
              <li>License is locked to your PC</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Transfer Policy</h2>
            <p><strong className="text-white">Licenses are non-transferable.</strong> You cannot sell, rent, or transfer your license to another person.</p>
            <p className="mt-2">If you need to move your license to a new computer (e.g., hardware upgrade), contact support at <a href="mailto:support@zentriq.com" className="text-primary hover:underline">support@zentriq.com</a>. We allow ONE transfer per year.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Permitted Uses</h2>
            <p>You may:</p>
            <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
              <li>Use Zentriq for personal or commercial trading</li>
              <li>Use it with any broker that supports MetaTrader 5</li>
              <li>Receive free updates and bug fixes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Prohibited Uses</h2>
            <p>You may NOT:</p>
            <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
              <li>Share your license key publicly</li>
              <li>Use one license on multiple computers simultaneously</li>
              <li>Reverse engineer or decompile the software</li>
              <li>Remove license checks or DRM</li>
              <li>Resell or redistribute Zentriq</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. License Revocation</h2>
            <p>We reserve the right to revoke your license if:</p>
            <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
              <li>License key is shared or used on multiple PCs</li>
              <li>Software is modified or tampered with</li>
              <li>You violate these terms</li>
            </ul>
            <p className="mt-2">Revoked licenses are not eligible for refunds.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Updates & Support</h2>
            <p>Your lifetime license includes:</p>
            <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
              <li>All future software updates (free)</li>
              <li>Email support for technical issues</li>
              <li>Access to documentation and guides</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Termination</h2>
            <p>This license remains active until:</p>
            <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
              <li>You request a refund (within 30 days)</li>
              <li>License is revoked for violation</li>
              <li>You stop using the software</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Governing Law</h2>
            <p>This agreement is governed by the laws of [Your Country/State]. Disputes will be resolved through binding arbitration.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Contact</h2>
            <p>License questions? Email: <a href="mailto:support@zentriq.com" className="text-primary hover:underline">support@zentriq.com</a></p>
          </section>

          <div className="bg-primary/10 border border-primary/20 rounded p-4 mt-8">
            <p className="font-bold text-primary mb-2">By purchasing Zentriq, you agree to these license terms.</p>
          </div>
        </div>

        <div className="mt-12">
          <a href="/" className="text-primary hover:underline">← Back to Home</a>
        </div>
      </div>
    </div>
  )
}
