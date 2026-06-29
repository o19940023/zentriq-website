'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: 1,
    title: 'Purchase License',
    description: 'Secure checkout via Gumroad. Receive your unique hardware-locked license key instantly.',
  },
  {
    number: 2,
    title: 'Install & Activate',
    description: 'Download the bot, connect to MT5, and activate with your license key. Setup takes <10 minutes.',
  },
  {
    number: 3,
    title: 'Configure & Deploy',
    description: 'Set your risk parameters, select trading pairs, and let the algorithm handle execution 24/7.',
  },
]

export default function HowItWorks() {
  return (
    <section className="relative py-32 bg-[#13171D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Deploy in Minutes
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Simple setup process. Start trading automatically within 10 minutes.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-[#0B0E11] border border-gray-800 rounded-lg p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 border border-primary/20 rounded-lg font-bold text-primary text-xl">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold">{step.title}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 text-2xl text-gray-700">
                  →
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
