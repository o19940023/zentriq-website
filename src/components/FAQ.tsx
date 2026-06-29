'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const faqs = [
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, debit cards, and PayPal through our secure Gumroad checkout. Your payment information is encrypted and never stored on our servers.',
  },
  {
    question: 'Can I use Zentriq on multiple computers?',
    answer: 'No, each license is hardware-locked to one PC for security reasons. This prevents unauthorized sharing. If you need to transfer your license to a new computer, contact support.',
  },
  {
    question: 'Is there a trial version available?',
    answer: 'No, we don\'t offer trial versions. However, we offer a 30-day money-back guarantee. If you\'re not satisfied with Zentriq, we\'ll refund your purchase, no questions asked.',
  },
  {
    question: 'What markets does Zentriq support?',
    answer: 'Zentriq supports both Forex and Cryptocurrency markets through MetaTrader 5 (MT5). You can trade major currency pairs, crypto pairs, and more.',
  },
  {
    question: 'Do I need coding knowledge to use Zentriq?',
    answer: 'No coding knowledge required! Zentriq has an intuitive GUI interface. Simply download, activate your license, connect to MT5, and start trading. Setup takes less than 10 minutes.',
  },
  {
    question: 'What\'s your refund policy?',
    answer: 'We offer a 30-day money-back guarantee. If you\'re not satisfied with Zentriq for any reason, contact us within 30 days of purchase for a full refund.',
  },
  {
    question: 'Will I get free updates?',
    answer: 'Yes! Your lifetime license includes all future updates at no additional cost. We regularly release new features, improvements, and bug fixes.',
  },
  {
    question: 'What are the system requirements?',
    answer: 'Zentriq runs on Windows 10/11. You need MetaTrader 5 (MT5) installed and an active internet connection. Minimum 4GB RAM and 500MB disk space recommended.',
  },
  {
    question: 'How much capital do I need to start trading?',
    answer: 'We recommend starting with at least $500-$1000 for optimal risk management. However, you can start with any amount your broker allows. The bot works with all account sizes.',
  },
  {
    question: 'Is trading with bots legal?',
    answer: 'Yes, automated trading is 100% legal. Many professional traders and institutions use trading bots. Make sure your broker allows automated trading (most do).',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="relative py-32 bg-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to know about Zentriq
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full glass rounded-2xl p-6 text-left hover:bg-white/10 transition-colors duration-300"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold pr-8">{faq.question}</h3>
                  <div className={`flex-shrink-0 w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-400 mt-4 leading-relaxed">{faq.answer}</p>
                </motion.div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <a
            href="mailto:support@zentriq.com"
            className="inline-block px-8 py-4 glass rounded-full font-semibold hover:bg-white/10 transition-colors duration-300"
          >
            Contact Support
          </a>
        </motion.div>
      </div>
    </section>
  )
}
