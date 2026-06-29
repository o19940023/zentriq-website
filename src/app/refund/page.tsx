export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-[#080B11] py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Refund Policy</h1>
        <div className="text-gray-400 space-y-6">
          <p className="text-sm text-gray-500">Last updated: June 26, 2026</p>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">30-Day Money-Back Guarantee</h2>
            <p className="leading-relaxed">
              We stand behind the quality of Zentriq. If you're not completely satisfied with your purchase, 
              we offer a full refund within 30 days of your purchase date — no questions asked.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Eligibility</h2>
            <p className="mb-4">You are eligible for a refund if:</p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>You request a refund within 30 days of purchase</li>
              <li>You purchased directly from our official Gumroad store</li>
              <li>You provide your original order confirmation email</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">How to Request a Refund</h2>
            <div className="bg-[#13171D] border border-gray-800 rounded-lg p-6 space-y-4">
              <div>
                <p className="font-semibold text-white mb-2">Step 1: Contact Support</p>
                <p>Email us at <a href="mailto:support@zentriq.com" className="text-primary hover:underline">support@zentriq.com</a> with:</p>
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                  <li>Your order number</li>
                  <li>Email used for purchase</li>
                  <li>Brief reason for refund (optional)</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-white mb-2">Step 2: Confirmation</p>
                <p>We'll review your request within 24 hours and send a confirmation email.</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-2">Step 3: Refund Processing</p>
                <p>Once approved, your refund will be processed within 3-5 business days to your original payment method.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Refund Exceptions</h2>
            <p className="mb-4">Refunds are NOT available if:</p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>More than 30 days have passed since purchase</li>
              <li>You violated our Terms of Service (license sharing, reverse engineering, etc.)</li>
              <li>You purchased from an unauthorized reseller</li>
              <li>Your account was banned for fraudulent activity</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Post-Refund</h2>
            <p>After a refund is processed:</p>
            <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
              <li>Your license key will be immediately deactivated</li>
              <li>You will lose access to the software and all updates</li>
              <li>You cannot re-purchase using the same hardware (to prevent abuse)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Trading Losses</h2>
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
              <p className="font-bold text-yellow-400 mb-2">⚠️ Important Notice</p>
              <p>
                Refunds are for the software only. We cannot refund trading losses, as all trading 
                decisions remain your responsibility. Market conditions and individual trading styles vary.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Need Help?</h2>
            <p>
              Before requesting a refund, we encourage you to contact our support team. 
              Many issues can be resolved quickly through troubleshooting. 
              Email: <a href="mailto:support@zentriq.com" className="text-primary hover:underline">support@zentriq.com</a>
            </p>
          </section>

          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6 mt-8">
            <p className="font-semibold text-green-400 mb-2">💡 Tip</p>
            <p>
              Most traders see positive results within the first week. Give Zentriq at least 7 days 
              of trading to evaluate its performance. Market conditions vary daily.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <a href="/" className="text-primary hover:underline">← Back to Home</a>
        </div>
      </div>
    </div>
  )
}
