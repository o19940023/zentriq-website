'use client'

import { motion } from 'framer-motion'
import { useEffect } from 'react'

const features = [
  'Lifetime Access License',
  'MT5 Integration Compatible',
  'All Future Software Updates',
  '24/7 Automated Order Execution',
  'Forex & Crypto Multi-Market Support',
  'AI Neural Signal Filtering Engine',
  'Dynamic Risk Sizing & Trailing SL',
  'Real-Time GUI Performance Dashboard',
  'Private Discord Community Access',
  'Hardware-Locked Anti-Tamper Security',
]

export default function Pricing() {
  useEffect(() => {
    // Load Gumroad overlay script dynamically
    const script = document.createElement('script')
    script.src = 'https://gumroad.com/js/gumroad.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  const handlePurchaseClick = () => {
    // Track checkout initialization via FB Pixel
    if (typeof window !== 'undefined' && (window as any).fbq) {
      ;(window as any).fbq('track', 'InitiateCheckout', {
        value: 299,
        currency: 'USD',
        content_ids: ['zentriq'],
        content_type: 'product',
      })
    }
  }

  return (
    <section id="pricing" className="relative py-32 bg-[#080B11]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#9D5CFF]/5 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00D9FF]/10 border border-[#00D9FF]/20 rounded-full mb-4 text-xs font-mono text-[#00D9FF]">
            TRANSPARENT LICENSING
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-heading">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            One-time purchase. Lifetime ownership. No subscription fees.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          {/* Animated Border Outer Box */}
          <div className="animated-border rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(157,92,255,0.15)] glow-purple">
            <div className="bg-[#0E1325]/95 backdrop-blur-2xl p-8 sm:p-12 text-left relative">
              
              {/* Discount / Exclusive badge */}
              <div className="absolute top-8 right-8 inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#9D5CFF]/15 border border-[#9D5CFF]/30 rounded-full text-xs font-mono font-bold text-[#C084FC]">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                LIFETIME LICENSE OFFER
              </div>

              <div className="mb-10">
                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block mb-4">
                  PRO LEVEL ALGORITHMS
                </span>
                
                {/* Prices & comp */}
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 mb-2">
                  <span className="text-6xl font-bold font-mono text-white tracking-tight">$299</span>
                  <div className="flex flex-col">
                    <span className="text-gray-500 line-through text-sm font-mono">$499 ORIGINAL</span>
                    <span className="text-emerald-400 text-xs font-mono font-semibold">SAVE 40% INSTANTLY</span>
                  </div>
                </div>
                <p className="text-gray-400 font-mono text-xs mt-2">Single purchase locked to your MT5 account.</p>
              </div>

              {/* Grid of features */}
              <div className="grid sm:grid-cols-2 gap-4 mb-12">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-center gap-3 text-sm text-gray-300"
                  >
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Checkout Button */}
              <a
                href="https://qafstudio.gumroad.com/l/zentriq?wanted=true"
                onClick={handlePurchaseClick}
                className="gumroad-button block w-full py-5 bg-gradient-to-r from-[#9D5CFF] to-[#00D9FF] hover:opacity-95 text-white font-bold text-center rounded-xl transition-all duration-300 shadow-[0_4px_30px_rgba(157,92,255,0.4)] text-lg hover:scale-[1.01]"
                data-gumroad-overlay-checkout="true"
              >
                Secure Purchase & Deploy Now
              </a>

              {/* Details & Guarantees */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-xs font-mono text-gray-500 border-t border-white/[0.05] pt-8">
                <div className="flex items-center gap-2">
                  <svg className="w-4.5 h-4.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>100% Encrypted Gumroad Payment</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4.5 h-4.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Instant Product Download</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center mt-8 text-sm text-gray-500 font-mono">
            🛡️ 30-Day Money-Back Guarantee. Refundable if technical installation parameters fail.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
