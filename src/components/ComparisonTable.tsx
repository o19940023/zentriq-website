'use client'

import { motion } from 'framer-motion'

const features = [
  { name: 'AI Signal Validation', zentriq: true, manual: false, other: 'basic' },
  { name: '24/7 Automated Trading', zentriq: true, manual: false, other: true },
  { name: 'Multi-Market Support', zentriq: true, manual: true, other: 'limited' },
  { name: 'Advanced Risk Management', zentriq: true, manual: false, other: 'basic' },
  { name: 'Real-Time Analytics', zentriq: true, manual: false, other: true },
  { name: 'Lifetime License', zentriq: true, manual: '-', other: false },
  { name: 'Monthly Subscription', zentriq: false, manual: '-', other: true },
  { name: 'One-Time Payment', zentriq: '$299', manual: 'Free', other: '$50-200/mo' },
]

const CheckIcon = () => (
  <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
)

const CrossIcon = () => (
  <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
  </svg>
)

export default function ComparisonTable() {
  return (
    <section className="relative py-32 bg-[#13171D]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Why Choose <span className="text-gradient">Zentriq?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            See how we stack up against manual trading and other bots
          </p>
        </motion.div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left py-4 px-4 text-gray-400 font-semibold">Feature</th>
                <th className="py-4 px-4 text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                    <span className="text-primary font-bold">Zentriq</span>
                  </div>
                </th>
                <th className="py-4 px-4 text-center text-gray-400 font-semibold">Manual Trading</th>
                <th className="py-4 px-4 text-center text-gray-400 font-semibold">Other Bots</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <motion.tr
                  key={feature.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="border-b border-gray-800/50 hover:bg-gray-800/20 transition-colors"
                >
                  <td className="py-4 px-4 text-white font-medium">{feature.name}</td>
                  <td className="py-4 px-4 text-center">
                    {typeof feature.zentriq === 'boolean' ? (
                      feature.zentriq ? <CheckIcon /> : <CrossIcon />
                    ) : (
                      <span className="text-primary font-bold">{feature.zentriq}</span>
                    )}
                  </td>
                  <td className="py-4 px-4 text-center text-gray-400">
                    {typeof feature.manual === 'boolean' ? (
                      feature.manual ? <CheckIcon /> : <CrossIcon />
                    ) : (
                      <span>{feature.manual}</span>
                    )}
                  </td>
                  <td className="py-4 px-4 text-center text-gray-400">
                    {typeof feature.other === 'boolean' ? (
                      feature.other ? <CheckIcon /> : <CrossIcon />
                    ) : feature.other === 'basic' ? (
                      <span className="text-yellow-500">Basic</span>
                    ) : feature.other === 'limited' ? (
                      <span className="text-yellow-500">Limited</span>
                    ) : (
                      <span>{feature.other}</span>
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg transition-all duration-300 hover:scale-105"
          >
            Get Started with Zentriq
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
