'use client'

import { motion } from 'framer-motion'

const badges = [
  {
    icon: '🔒',
    title: 'SSL Secured',
    description: 'Bank-level encryption',
  },
  {
    icon: '💳',
    title: 'Secure Payments',
    description: 'Powered by Gumroad',
  },
  {
    icon: '↩️',
    title: '30-Day Guarantee',
    description: 'Money-back promise',
  },
  {
    icon: '⚡',
    title: 'Instant Delivery',
    description: 'Access in 60 seconds',
  },
]

export default function TrustBadges() {
  return (
    <section className="relative py-16 bg-[#0B0E11] border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl mb-3">{badge.icon}</div>
              <div className="text-sm font-bold text-white mb-1">{badge.title}</div>
              <div className="text-xs text-gray-500">{badge.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
