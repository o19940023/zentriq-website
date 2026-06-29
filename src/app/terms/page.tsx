export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#080B11] py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="text-gray-400 space-y-6">
          <p className="text-sm text-gray-500">Last updated: June 26, 2026</p>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. License Grant</h2>
            <p>Upon purchase, you receive a lifetime, non-transferable license to use Zentriq on one (1) computer. The license is hardware-locked to your PC via MAC address fingerprint.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Permitted Use</h2>
            <p>You may:</p>
            <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
              <li>Use the software for personal or commercial trading</li>
              <li>Receive free updates and bug fixes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Prohibited Use</h2>
            <p>You may NOT:</p>
            <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
              <li>Share your license key with others</li>
              <li>Reverse engineer, decompile, or modify the software</li>
              <li>Resell or redistribute the software</li>
              <li>Use the software on multiple computers simultaneously</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Trading Risks</h2>
            <div className="bg-red-500/10 border border-red-500/20 rounded p-4">
              <p className="font-bold text-red-400 mb-2">⚠️ IMPORTANT RISK DISCLAIMER</p>
              <p>Trading in financial markets involves substantial risk of loss. Past performance does not guarantee future results. You are solely responsible for all trading decisions. Zentriq is a tool to assist trading, not financial advice. Only trade with capital you can afford to lose.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. No Warranty</h2>
            <p>The software is provided "AS IS" without warranty of any kind. We do not guarantee profits or specific trading results.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Refund Policy</h2>
            <p>We offer a 30-day money-back guarantee. If you're not satisfied, email support within 30 days of purchase for a full refund.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Limitation of Liability</h2>
            <p>We are not liable for any trading losses, damages, or costs arising from use of the software.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Contact</h2>
            <p>Questions? Email: <a href="mailto:support@zentriq.com" className="text-primary hover:underline">support@zentriq.com</a></p>
          </section>
        </div>

        <div className="mt-12">
          <a href="/" className="text-primary hover:underline">← Back to Home</a>
        </div>
      </div>
    </div>
  )
}
