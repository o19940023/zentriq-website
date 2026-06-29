'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import TradingTerminal from './TradingTerminal'

// SSR-safe dynamic import for ThreeCanvas WebGL component
const ThreeCanvas = dynamic(() => import('./ThreeCanvas'), { ssr: false })

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#080B11] pt-24 pb-16">
      {/* 3D WebGL Background Layer */}
      <ThreeCanvas />

      {/* Cyber Grid Background overlay */}
      <div className="absolute inset-0 cyber-grid opacity-60 pointer-events-none z-0" />
      
      {/* Premium Gradient Orbs */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-[#9D5CFF]/10 rounded-full blur-[120px] pointer-events-none z-0 animate-pulse duration-[8000ms]" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-[#00D9FF]/10 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 text-left flex flex-col items-start"
          >
            {/* Status / Compatibility pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/[0.03] border border-white/[0.08] rounded-full mb-6 backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 block relative">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75"></span>
              </span>
              <span className="text-xs font-mono font-medium tracking-wide text-gray-400">
                ACTIVE PIPELINE • MT5 COMPATIBLE
              </span>
            </div>

            {/* Title / Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white leading-[1.1] mb-6 tracking-tight">
              Algorithmic Trading
              <br />
              <span className="text-gradient">
                On Pure Autopilot
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-lg">
              Deploy institutional-grade trading bots for Forex & Crypto markets. Engineered with advanced neural signal filters and automated risk parameters.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12">
              <Link
                href="#pricing"
                className="relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#9D5CFF] to-[#00D9FF] hover:opacity-95 text-white font-bold rounded-xl transition-all duration-300 shadow-[0_0_25px_rgba(157,92,255,0.35)] group overflow-hidden text-center"
              >
                <span className="relative z-10">Get Started</span>
                <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="#features"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.08] hover:border-white/[0.15] text-gray-300 hover:text-white font-semibold rounded-xl transition-all duration-300 text-center"
              >
                Explore Platform
              </Link>
            </div>

            {/* Live stats footer */}
            <div className="grid grid-cols-3 gap-8 sm:gap-12 w-full pt-8 border-t border-white/[0.05]">
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-mono text-white mb-1">15K+</div>
                <div className="text-[10px] font-mono tracking-wider text-gray-500 uppercase">Trades Placed</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-400 mb-1">~71.4%</div>
                <div className="text-[10px] font-mono tracking-wider text-gray-500 uppercase">Win Rate</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-mono text-[#00D9FF] mb-1">&lt; 5ms</div>
                <div className="text-[10px] font-mono tracking-wider text-gray-500 uppercase">Execution</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Interactive Cockpit Terminal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 w-full"
          >
            <TradingTerminal />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
