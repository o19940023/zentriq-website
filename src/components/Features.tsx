'use client'

import { motion } from 'framer-motion'

interface Feature {
  title: string
  description: string
  metric: string
  icon: React.ReactNode
}

const features: Feature[] = [
  {
    title: 'AI Signal Validation',
    description: 'Machine learning algorithms filter false signals in real-time, ensuring only high-probability trades are executed.',
    metric: 'High Precision',
    icon: (
      <svg className="w-6 h-6 text-[#9D5CFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    title: 'Risk Management',
    description: 'Dynamic stop-loss, take-profit targets, and position sizing based on account balance and volatility.',
    metric: 'Max 2% risk',
    icon: (
      <svg className="w-6 h-6 text-[#00D9FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Multi-Market Support',
    description: 'Trade Forex pairs, cryptocurrency, and indices through MetaTrader 5 platform integration.',
    metric: '50+ instruments',
    icon: (
      <svg className="w-6 h-6 text-[#9D5CFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    title: '24/7 Execution',
    description: 'Automated order placement and monitoring. Never miss a trade opportunity, even while sleeping.',
    metric: 'Zero downtime',
    icon: (
      <svg className="w-6 h-6 text-[#00D9FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Performance Analytics',
    description: 'Real-time tracking of win rate, profit factor, drawdown, and expectancy across all strategies.',
    metric: 'Live dashboard',
    icon: (
      <svg className="w-6 h-6 text-[#9D5CFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Lifetime License',
    description: 'One-time payment. No subscriptions, no recurring fees. Hardware-locked to your PC for security.',
    metric: '$299 forever',
    icon: (
      <svg className="w-6 h-6 text-[#00D9FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m-3.418 3.84a6 6 0 111.414-1.414L19 16.586A2 2 0 0118 20h-1.586l-3.414-3.414z" />
      </svg>
    ),
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-32 bg-[#080B11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#9D5CFF]/10 border border-[#9D5CFF]/20 rounded-full mb-4 text-xs font-mono text-[#9D5CFF]">
            ENTERPRISE GRADE ALGORITHMS
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-heading">
            Advanced Core Features
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Built for traders who demand institutional-grade reliability, execution speed, and rigorous risk control.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative glass-panel glass-panel-hover rounded-2xl p-8 flex flex-col justify-between min-h-[220px]"
            >
              <div>
                {/* Header Icon + Metric */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center group-hover:border-primary/30 transition-colors">
                    {feature.icon}
                  </div>
                  <div className="px-2.5 py-1 bg-white/[0.04] border border-white/[0.08] rounded-md text-[10px] font-mono font-medium tracking-wide text-gray-400 group-hover:text-[#00D9FF] group-hover:border-[#00D9FF]/20 transition-all">
                    {feature.metric}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00D9FF] transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>

              {/* Glowing decorative border line at bottom */}
              <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#9D5CFF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
