'use client'

import { motion } from 'framer-motion'
import { useEffect } from 'react'

export default function CTA() {
  useEffect(() => {
    // Load Gumroad overlay script
    const script = document.createElement('script')
    script.src = 'https://gumroad.com/js/gumroad.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  const handlePurchaseClick = () => {
    // Track CTA click
    if (typeof window !== 'undefined' && (window as any).fbq) {
      ;(window as any).fbq('track', 'InitiateCheckout', {
        value: 299,
        currency: 'USD',
        content_ids: ['zentriq'],
        content_type: 'product',
      })
      ;(window as any).fbq('trackCustom', 'CTAClick', {
        button_location: 'bottom_cta',
      })
    }
  }

  return (
    <section className="relative py-32 bg-[#080B11] overflow-hidden">
      {/* Glow backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(157,92,255,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel p-12 sm:p-16 rounded-3xl border border-white/[0.08] glow-purple relative"
        >
          {/* Decorative Corner Lines */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#9D5CFF]/45 rounded-tl-3xl" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#9D5CFF]/45 rounded-tr-3xl" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#9D5CFF]/45 rounded-bl-3xl" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#9D5CFF]/45 rounded-br-3xl" />

          <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-heading text-white">
            Ready to Automate Your <span className="text-gradient">Trading?</span>
          </h2>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Deploy Zentriq on your MT5 terminal today. Join advanced traders using algorithmic models to execute with zero emotional bias.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href="https://qafstudio.gumroad.com/l/zentriq?wanted=true"
              onClick={handlePurchaseClick}
              className="gumroad-button inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-[#9D5CFF] to-[#00D9FF] hover:opacity-95 text-white font-bold rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(157,92,255,0.35)] hover:scale-[1.02]"
              data-gumroad-overlay-checkout="true"
            >
              Get Started for $299
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-xs font-mono text-gray-500">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4" />
              </svg>
              <span>30-Day Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4" />
              </svg>
              <span>Verified Secure Payments</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4" />
              </svg>
              <span>Instant Setup Instructions</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
