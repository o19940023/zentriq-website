'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-4 bg-[#080B11]/70 backdrop-blur-xl border-b border-white/[0.05] shadow-[0_4px_30px_rgba(0,0,0,0.2)]'
          : 'py-6 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#9D5CFF] to-[#00D9FF] p-[2px] shadow-[0_0_15px_rgba(157,92,255,0.3)]">
              <div className="w-full h-full bg-[#080B11] rounded-[10px] flex items-center justify-center font-bold text-white font-mono text-lg">
                Z
              </div>
            </div>
            <span className="text-2xl font-bold tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#9D5CFF] group-hover:to-[#00D9FF] transition-all duration-300">
              Zentriq
            </span>
          </Link>

          {/* Center Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#features"
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
            >
              How It Works
            </Link>
            <Link
              href="#calculator"
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
            >
              ROI Calculator
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
            >
              Pricing
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
            >
              FAQ
            </Link>
          </nav>

          {/* Right Navigation & Status Badge */}
          <div className="hidden md:flex items-center gap-6">
            {/* Live Operational Status */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse relative">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75"></span>
              </span>
              MT5 Status: Active
            </div>

            <Link
              href="#pricing"
              className="relative inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 group overflow-hidden border border-white/[0.08]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#9D5CFF] to-[#00D9FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 text-white transition-colors duration-300 group-hover:text-white">
                Launch Bot
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Active
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-white/[0.05] bg-[#080B11]/95 backdrop-blur-2xl overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4 flex flex-col">
              <Link
                href="#features"
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-gray-400 hover:text-white transition-colors py-2"
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-gray-400 hover:text-white transition-colors py-2"
              >
                How It Works
              </Link>
              <Link
                href="#calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-gray-400 hover:text-white transition-colors py-2"
              >
                ROI Calculator
              </Link>
              <Link
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-gray-400 hover:text-white transition-colors py-2"
              >
                Pricing
              </Link>
              <Link
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-gray-400 hover:text-white transition-colors py-2"
              >
                FAQ
              </Link>
              <Link
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-xl bg-gradient-to-r from-[#9D5CFF] to-[#00D9FF] text-white font-semibold transition-all"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
