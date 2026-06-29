'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function RoiCalculator() {
  const [balance, setBalance] = useState(1000)
  const [monthlyReturn, setMonthlyReturn] = useState(4)
  const [months, setMonths] = useState(6)

  // Compound Interest Calculation: A = P(1 + r)^n
  const rateDecimal = monthlyReturn / 100
  const finalBalanceCompounded = balance * Math.pow(1 + rateDecimal, months)
  const totalProfit = finalBalanceCompounded - balance

  // Standard Bank Savings Account Simulation (e.g. 1.5% annual = 0.125% monthly)
  const bankRateDecimal = 0.015 / 12
  const finalBankBalance = balance * Math.pow(1 + bankRateDecimal, months)
  const bankProfit = finalBankBalance - balance

  // Determine Risk Strategy Label
  let strategyLabel = 'Conservative'
  let strategyColor = 'text-emerald-400 border-emerald-500/20 bg-emerald-500/10'
  if (monthlyReturn > 3 && monthlyReturn <= 8) {
    strategyLabel = 'Moderate AI Strategy'
    strategyColor = 'text-[#00D9FF] border-[#00D9FF]/20 bg-[#00D9FF]/10'
  } else if (monthlyReturn > 8) {
    strategyLabel = 'Aggressive AI Strategy'
    strategyColor = 'text-[#9D5CFF] border-[#9D5CFF]/20 bg-[#9D5CFF]/10'
  }

  return (
    <section id="calculator" className="relative py-32 bg-[#080B11] overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-4 text-xs font-mono text-gray-400">
            PROJECTION SIMULATOR
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Compound Profit <span className="text-gradient">Simulator</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Simulate your growth trajectory with Zentriq using custom balance, return, and duration parameters.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Sliders Area */}
          <div className="lg:col-span-7 bg-[#0E131F]/40 border border-white/[0.08] p-8 rounded-2xl flex flex-col justify-between">
            <div className="space-y-8">
              {/* Slider 1: Capital */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-semibold font-mono text-gray-400 uppercase tracking-wide">Starting Capital</span>
                  <span className="text-2xl font-bold text-white font-mono">${balance.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="50000"
                  step="100"
                  value={balance}
                  onChange={(e) => setBalance(Number(e.target.value))}
                  className="w-full h-2 bg-[#1A2333] rounded-lg appearance-none cursor-pointer accent-[#9D5CFF]"
                />
                <div className="flex justify-between text-xs font-mono text-gray-500 mt-2">
                  <span>$200 (Min Setup)</span>
                  <span>$50,000</span>
                </div>
              </div>

              {/* Slider 2: Return Rate */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold font-mono text-gray-400 uppercase tracking-wide">Target Monthly ROI</span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${strategyColor} transition-colors`}>
                      {strategyLabel}
                    </span>
                  </div>
                  <span className="text-2xl font-bold text-white font-mono">{monthlyReturn}%</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  step="0.5"
                  value={monthlyReturn}
                  onChange={(e) => setMonthlyReturn(Number(e.target.value))}
                  className="w-full h-2 bg-[#1A2333] rounded-lg appearance-none cursor-pointer accent-[#00D9FF]"
                />
                <div className="flex justify-between text-xs font-mono text-gray-500 mt-2">
                  <span>1% (Conservative)</span>
                  <span>12% (Aggressive)</span>
                </div>
              </div>

              {/* Slider 3: Duration */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-semibold font-mono text-gray-400 uppercase tracking-wide">Trading Duration</span>
                  <span className="text-2xl font-bold text-white font-mono">{months} {months === 1 ? 'Month' : 'Months'}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  step="1"
                  value={months}
                  onChange={(e) => setMonths(Number(e.target.value))}
                  className="w-full h-2 bg-[#1A2333] rounded-lg appearance-none cursor-pointer accent-[#9D5CFF]"
                />
                <div className="flex justify-between text-xs font-mono text-gray-500 mt-2">
                  <span>1 Month</span>
                  <span>12 Months (1 Year)</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.05] text-xs font-mono text-gray-500 leading-relaxed">
              <strong>NO LIABILITY DISCLAIMER:</strong> Simulations are hypothetical projections based on user-defined inputs. Zentriq does not guarantee any actual returns. Trading financial instruments involves high volatility and risk of capital loss. The developers of Zentriq accept absolutely no liability for any trading actions, losses, or accounts.
            </div>
          </div>

          {/* Results Area */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0E131F]/90 to-[#0A0D18]/90 border-2 border-primary/30 p-8 rounded-2xl flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.3)] relative overflow-hidden">
            {/* Ambient glows inside card */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00D9FF]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-6">
              <div>
                <span className="block text-xs font-mono text-gray-400 uppercase tracking-wider mb-1">Projected Total Balance</span>
                <span className="text-4xl sm:text-5xl font-mono font-bold text-white tracking-tight">
                  ${finalBalanceCompounded.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/[0.05]">
                <div>
                  <span className="block text-[10px] font-mono text-gray-400 uppercase">Estimated Profit</span>
                  <span className="text-xl font-bold font-mono text-emerald-400">
                    +${totalProfit.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-gray-400 uppercase">Total ROI %</span>
                  <span className="text-xl font-bold font-mono text-[#00D9FF]">
                    +{(((finalBalanceCompounded - balance) / balance) * 100).toFixed(0)}%
                  </span>
                </div>
              </div>

              {/* Bank vs Bot comparison block */}
              <div className="bg-[#080B11]/60 border border-white/[0.05] p-4 rounded-xl mt-6">
                <span className="block text-[10px] font-mono text-gray-400 uppercase mb-3">Comparison (After {months} months)</span>
                
                {/* Zentriq bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs font-mono mb-1 text-gray-300">
                    <span>Zentriq Compounding</span>
                    <span className="text-emerald-400 font-bold">${finalBalanceCompounded.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
                  </div>
                  <div className="w-full h-2.5 bg-[#121A28] rounded-full overflow-hidden">
                    <motion.div 
                      key={`${balance}-${monthlyReturn}-${months}`}
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-[#9D5CFF] to-[#00D9FF] rounded-full" 
                    />
                  </div>
                </div>

                {/* Savings account bar */}
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1 text-gray-400">
                    <span>Traditional Bank (1.5% APY)</span>
                    <span className="text-gray-400">${finalBankBalance.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
                  </div>
                  <div className="w-full h-2.5 bg-[#121A28] rounded-full overflow-hidden">
                    <motion.div 
                      key={`${balance}-${months}`}
                      initial={{ width: '0%' }}
                      animate={{ width: `${Math.max((finalBankBalance / finalBalanceCompounded) * 100, 15)}%` }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="h-full bg-gray-600 rounded-full" 
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="#pricing"
                className="block w-full py-4 text-center bg-gradient-to-r from-[#9D5CFF] to-[#00D9FF] hover:opacity-95 text-white font-bold rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(157,92,255,0.4)]"
              >
                Purchase License Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
