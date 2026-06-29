'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Candle {
  open: number
  high: number
  low: number
  close: number
  time: number
}

interface Asset {
  name: string
  symbol: string
  basePrice: number
  spread: number
  digits: number
  type: 'forex' | 'crypto'
}

const assets: Asset[] = [
  { name: 'Euro / US Dollar', symbol: 'EUR/USD', basePrice: 1.0845, spread: 0.0001, digits: 4, type: 'forex' },
  { name: 'British Pound / USD', symbol: 'GBP/USD', basePrice: 1.2680, spread: 0.0002, digits: 4, type: 'forex' },
  { name: 'Gold / US Dollar', symbol: 'XAU/USD', basePrice: 2324.50, spread: 0.15, digits: 2, type: 'forex' },
  { name: 'Bitcoin / US Dollar', symbol: 'BTC/USD', basePrice: 62450.00, spread: 5.0, digits: 2, type: 'crypto' },
  { name: 'Ethereum / US Dollar', symbol: 'ETH/USD', basePrice: 3420.00, spread: 0.40, digits: 2, type: 'crypto' },
  { name: 'Solana / US Dollar', symbol: 'SOL/USD', basePrice: 138.40, spread: 0.05, digits: 2, type: 'crypto' },
]

export default function TradingTerminal() {
  const [selectedAsset, setSelectedAsset] = useState<Asset>(assets[0])
  const [candles, setCandles] = useState<Candle[]>([])
  const [activeTab, setActiveTab] = useState<'chart' | 'logs' | 'stats'>('chart')
  const [logs, setLogs] = useState<string[]>([])
  const [currentProfit, setCurrentProfit] = useState(14232.40)
  const logsEndRef = useRef<HTMLDivElement>(null)

  // Generate initial logs
  useEffect(() => {
    setLogs([
      `[${new Date().toLocaleTimeString()}] [SYSTEM] Zentriq Client v1.4.2 Initialized successfully.`,
      `[${new Date().toLocaleTimeString()}] [API] Secure connection established with MetaTrader 5 terminal.`,
      `[${new Date().toLocaleTimeString()}] [RISK] Risk Management Mode: DYNAMIC (Max 2.0% per trade).`,
      `[${new Date().toLocaleTimeString()}] [SYSTEM] Listening to market ticks... AI engines online.`,
    ])
  }, [])

  // Auto-scroll logs
  useEffect(() => {
    if (logsEndRef.current) {
      logsEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [logs])

  // Asset change handler
  useEffect(() => {
    // Generate initial candles for selected asset
    const initialCandles: Candle[] = []
    let price = selectedAsset.basePrice
    const tickMovement = price * 0.0008

    for (let i = 0; i < 40; i++) {
      const open = price
      const movement = (Math.random() - 0.49) * tickMovement
      const close = open + movement
      const high = Math.max(open, close) + Math.random() * (tickMovement * 0.4)
      const low = Math.min(open, close) - Math.random() * (tickMovement * 0.4)

      initialCandles.push({
        open,
        high,
        low,
        close,
        time: Date.now() - (40 - i) * 2000,
      })

      price = close
    }
    setCandles(initialCandles)

    // Add log on asset switch
    const timeStr = new Date().toLocaleTimeString()
    setLogs((prev) => [
      ...prev,
      `[${timeStr}] [ASSET] Switched focus to active stream: ${selectedAsset.symbol}.`,
      `[${timeStr}] [NEURAL] Downloading historical tick data (200 periods)...`,
      `[${timeStr}] [SYSTEM] Ready. Validating signals on ${selectedAsset.symbol}...`,
    ])
  }, [selectedAsset])

  // Simulation loop for ticks and log updates
  useEffect(() => {
    if (candles.length === 0) return

    const tickInterval = setInterval(() => {
      // 1. Tick the last candle, or append a new one
      setCandles((prev) => {
        if (prev.length === 0) return prev
        const last = { ...prev[prev.length - 1] }
        const step = selectedAsset.basePrice * 0.00015 * (Math.random() - 0.48)
        last.close += step
        last.high = Math.max(last.high, last.close)
        last.low = Math.min(last.low, last.close)

        // Occasionally close candle and open new one
        if (Math.random() > 0.75) {
          const nextOpen = last.close
          const movement = selectedAsset.basePrice * 0.00025 * (Math.random() - 0.48)
          const nextClose = nextOpen + movement
          const nextHigh = Math.max(nextOpen, nextClose) + Math.random() * (selectedAsset.basePrice * 0.0001)
          const nextLow = Math.min(nextOpen, nextClose) - Math.random() * (selectedAsset.basePrice * 0.0001)

          // Add transaction logs when candles open/close
          setTimeout(() => {
            const isBuy = nextClose > nextOpen
            const confidence = (90 + Math.random() * 9.8).toFixed(1)
            const timeStr = new Date().toLocaleTimeString()
            const signalType = isBuy ? 'BUY' : 'SELL'

            setLogs((prevLogs) => [
              ...prevLogs.slice(-40),
              `[${timeStr}] [NEURAL] Multi-timeframe trend analysis complete.`,
              `[${timeStr}] [VALIDATION] Confidence level: ${confidence}% for ${signalType} setup.`,
              `[${timeStr}] [ORDER] AI triggered market ${signalType} order on ${selectedAsset.symbol}.`,
              `[${timeStr}] [MT5] Executed: ${signalType} 1.5 Lots. Fill price: ${nextClose.toFixed(selectedAsset.digits)}.`,
              `[${timeStr}] [RISK] Stop Loss: ${((isBuy ? 0.998 : 1.002) * nextClose).toFixed(
                selectedAsset.digits
              )} | Take Profit: ${((isBuy ? 1.005 : 0.995) * nextClose).toFixed(selectedAsset.digits)}`,
            ])

            // Tick profits
            setCurrentProfit((prev) => prev + (isBuy ? 45.50 : -20.25) * (Math.random() * 2))
          }, 100)

          return [...prev.slice(1), last, { open: nextOpen, close: nextClose, high: nextHigh, low: nextLow, time: Date.now() }]
        }

        return [...prev.slice(0, -1), last]
      })
    }, 1500)

    return () => clearInterval(tickInterval)
  }, [candles, selectedAsset])

  // Math for candles charting
  if (candles.length === 0) return null

  const prices = candles.map((c) => c.close)
  const highs = candles.map((c) => c.high)
  const lows = candles.map((c) => c.low)
  const minPrice = Math.min(...lows)
  const maxPrice = Math.max(...highs)
  const priceRange = maxPrice - minPrice || 1

  const getY = (price: number) => {
    return ((maxPrice - price) / priceRange) * 160 + 20
  }

  const currentPrice = candles[candles.length - 1].close
  const prevPrice = candles[candles.length - 2]?.close || currentPrice
  const isUp = currentPrice >= prevPrice

  return (
    <div className="w-full bg-[#0E131F]/90 backdrop-blur-2xl border border-white/[0.08] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] glow-purple">
      {/* OS Header / Trading Bar */}
      <div className="flex items-center justify-between px-6 py-4 bg-[#080B12]/80 border-b border-white/[0.05]">
        <div className="flex items-center gap-3">
          {/* OS Buttons */}
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 block"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 block"></span>
            <span className="w-3 h-3 rounded-full bg-green-500/80 block"></span>
          </div>
          <span className="text-gray-500 text-xs font-mono">|</span>
          <span className="text-xs font-mono font-semibold tracking-wider text-gray-400">ZENTRIQ V2.0 PRO TERMINAL</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          MT5 CONNECTION STABLE
        </div>
      </div>

      {/* Asset Switcher grid */}
      <div className="grid grid-cols-3 sm:grid-cols-6 border-b border-white/[0.05] bg-[#0E131F]/50">
        {assets.map((asset) => {
          const isActive = selectedAsset.symbol === asset.symbol
          return (
            <button
              key={asset.symbol}
              onClick={() => setSelectedAsset(asset)}
              className={`py-3 px-2 text-center text-xs font-mono font-medium border-r border-white/[0.05] transition-all duration-200 ${
                isActive
                  ? 'bg-gradient-to-b from-primary/10 to-transparent text-[#00D9FF] border-b-2 border-b-[#00D9FF]'
                  : 'text-gray-400 hover:text-white hover:bg-white/[0.02]'
              }`}
            >
              <div>{asset.symbol}</div>
              <div className="text-[10px] text-gray-500 mt-0.5">{asset.type.toUpperCase()}</div>
            </button>
          )
        })}
      </div>

      {/* Asset Title and Price overview */}
      <div className="p-6 bg-[#0E131F]/30 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-white/[0.03]">
        <div className="flex items-center gap-3">
          <div className="text-lg font-bold text-white tracking-wide">{selectedAsset.name}</div>
          <div className="text-xs font-mono px-2 py-0.5 bg-white/[0.05] rounded text-gray-400 border border-white/[0.05]">
            {selectedAsset.symbol}
          </div>
        </div>

        <div className="flex items-baseline gap-4">
          <div className="text-3xl font-mono font-bold text-white tracking-tight flex items-baseline">
            {currentPrice.toFixed(selectedAsset.digits)}
          </div>
          <div className={`text-sm font-mono font-semibold flex items-center gap-1 ${isUp ? 'text-emerald-400' : 'text-rose-500'}`}>
            {isUp ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            )}
            {(((currentPrice - selectedAsset.basePrice) / selectedAsset.basePrice) * 100).toFixed(2)}%
          </div>
        </div>
      </div>

      {/* Main Panel Content: Chart, Logs, Stats tabs */}
      <div className="grid lg:grid-cols-4 min-h-[340px]">
        {/* Sidebar Nav */}
        <div className="lg:col-span-1 border-r border-white/[0.05] bg-[#0A0D18]/50 flex lg:flex-col">
          <button
            onClick={() => setActiveTab('chart')}
            className={`flex-1 lg:flex-none py-4 px-6 text-left font-mono text-sm font-semibold flex items-center gap-3 border-b border-white/[0.03] transition-colors ${
              activeTab === 'chart' ? 'bg-white/[0.03] text-white border-l-2 border-l-[#9D5CFF]' : 'text-gray-400 hover:text-white'
            }`}
          >
            <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            Chart View
          </button>
          <button
            onClick={() => setActiveTab('logs')}
            className={`flex-1 lg:flex-none py-4 px-6 text-left font-mono text-sm font-semibold flex items-center gap-3 border-b border-white/[0.03] transition-colors ${
              activeTab === 'logs' ? 'bg-white/[0.03] text-white border-l-2 border-l-[#9D5CFF]' : 'text-gray-400 hover:text-white'
            }`}
          >
            <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            AI Engine Logs
          </button>
          <button
            onClick={() => setActiveTab('stats')}
            className={`flex-1 lg:flex-none py-4 px-6 text-left font-mono text-sm font-semibold flex items-center gap-3 border-b border-white/[0.03] transition-colors ${
              activeTab === 'stats' ? 'bg-white/[0.03] text-white border-l-2 border-l-[#9D5CFF]' : 'text-gray-400 hover:text-white'
            }`}
          >
            <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h2a2 2 0 002-2zm12 0v-11a2 2 0 00-2-2h-2a2 2 0 00-2 2v11a2 2 0 002 2h2a2 2 0 002-2z" />
            </svg>
            Bot Performance
          </button>
        </div>

        {/* Tab display */}
        <div className="lg:col-span-3 p-6 bg-[#0E131F]/10 flex flex-col justify-between">
          <AnimatePresence mode="wait">
            {activeTab === 'chart' && (
              <motion.div
                key="chart"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="w-full flex-1 flex flex-col justify-between"
              >
                {/* SVG Candlestick Chart */}
                <div className="h-48 w-full bg-[#080B11]/55 rounded-xl border border-white/[0.04] p-4 relative overflow-hidden">
                  <div className="absolute inset-0 pointer-events-none opacity-25">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-full border-t border-dashed border-gray-600"
                        style={{ top: `${(i + 1) * 20}%` }}
                      />
                    ))}
                  </div>

                  <svg className="w-full h-full" viewBox="0 0 450 180" preserveAspectRatio="none">
                    {candles.map((candle, index) => {
                      const candleWidth = 7
                      const candleGap = 3
                      const x = index * (candleWidth + candleGap) + 15
                      const isCandleUp = candle.close >= candle.open
                      const bodyTop = getY(Math.max(candle.open, candle.close))
                      const bodyBottom = getY(Math.min(candle.open, candle.close))
                      const bodyHeight = Math.max(bodyBottom - bodyTop, 1.5)

                      // Determine color (emerald green for buy, rose red for sell)
                      const color = isCandleUp ? '#10B981' : '#F43F5E'

                      return (
                        <g key={candle.time}>
                          {/* Wick */}
                          <line
                            x1={x + candleWidth / 2}
                            y1={getY(candle.high)}
                            x2={x + candleWidth / 2}
                            y2={getY(candle.low)}
                            stroke={color}
                            strokeWidth="1.2"
                          />
                          {/* Body */}
                          <rect
                            x={x}
                            y={bodyTop}
                            width={candleWidth}
                            height={bodyHeight}
                            fill={color}
                            opacity={0.85}
                            rx="1"
                          />
                        </g>
                      )
                    })}

                    {/* Technical indicator: Moving average line */}
                    <polyline
                      points={candles
                        .map((candle, i) => {
                          const candleWidth = 7
                          const candleGap = 3
                          const x = i * (candleWidth + candleGap) + 15 + candleWidth / 2
                          const avg = (candle.open + candle.close + candle.high + candle.low) / 4
                          return `${x},${getY(avg)}`
                        })
                        .join(' ')}
                      fill="none"
                      stroke="#9D5CFF"
                      strokeWidth="1.5"
                      opacity="0.75"
                    />
                  </svg>

                  {/* AI Indicators Overlay */}
                  <div className="absolute top-2 left-3 flex gap-2">
                    <span className="text-[10px] font-mono text-[#00D9FF] bg-[#00D9FF]/10 px-2 py-0.5 rounded border border-[#00D9FF]/20">
                      RSI (14): Normal
                    </span>
                    <span className="text-[10px] font-mono text-[#9D5CFF] bg-[#9D5CFF]/10 px-2 py-0.5 rounded border border-[#9D5CFF]/20">
                      EMA (50): Buy Trend
                    </span>
                  </div>

                  <div className="absolute bottom-2 right-3 text-[10px] font-mono text-gray-500">
                    Live candles stream (2s updates)
                  </div>
                </div>

                {/* Sub features description */}
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div className="bg-[#080B11]/40 border border-white/[0.04] p-3 rounded-xl">
                    <span className="block text-[10px] font-mono text-gray-500 uppercase">Broker Latency</span>
                    <span className="text-sm font-semibold text-emerald-400 font-mono">4.2 ms</span>
                  </div>
                  <div className="bg-[#080B11]/40 border border-white/[0.04] p-3 rounded-xl">
                    <span className="block text-[10px] font-mono text-gray-500 uppercase">Drawdown Limit</span>
                    <span className="text-sm font-semibold text-[#00D9FF] font-mono">2.0% Hard</span>
                  </div>
                  <div className="bg-[#080B11]/40 border border-white/[0.04] p-3 rounded-xl">
                    <span className="block text-[10px] font-mono text-gray-500 uppercase">Neural Filter</span>
                    <span className="text-sm font-semibold text-white font-mono">Active</span>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'logs' && (
              <motion.div
                key="logs"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="w-full flex-1 flex flex-col"
              >
                <div className="h-64 bg-[#080B11]/70 rounded-xl border border-white/[0.04] p-4 overflow-y-auto font-mono text-xs text-gray-300 space-y-2.5 scrollbar-thin">
                  {logs.map((log, index) => {
                    let colorClass = 'text-gray-400'
                    if (log.includes('[ORDER]')) colorClass = 'text-yellow-400 font-bold'
                    else if (log.includes('[VALIDATION]')) colorClass = 'text-[#00D9FF] font-semibold'
                    else if (log.includes('[MT5]')) colorClass = 'text-emerald-400 font-bold'
                    else if (log.includes('[RISK]')) colorClass = 'text-[#9D5CFF]'
                    else if (log.includes('[SYSTEM]')) colorClass = 'text-purple-300'

                    return (
                      <div key={index} className={colorClass}>
                        {log}
                      </div>
                    )
                  })}
                  <div ref={logsEndRef} />
                </div>
              </motion.div>
            )}

            {activeTab === 'stats' && (
              <motion.div
                key="stats"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="w-full flex-1 grid grid-cols-2 gap-4"
              >
                <div className="bg-[#080B11]/55 border border-white/[0.04] p-5 rounded-xl flex flex-col justify-between">
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">Total Net Profit</span>
                  <div>
                    <span className="text-2xl sm:text-3xl font-bold font-mono text-emerald-400 block tracking-tight">
                      ${currentProfit.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
                    <span className="text-[10px] font-mono text-gray-400 mt-1 block">Live simulated demo account</span>
                  </div>
                </div>

                <div className="bg-[#080B11]/55 border border-white/[0.04] p-5 rounded-xl flex flex-col justify-between">
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">Win Rate (Avg)</span>
                  <div>
                    <span className="text-2xl sm:text-3xl font-bold font-mono text-[#00D9FF] block">~71.4%</span>
                    <span className="text-[10px] font-mono text-gray-400 mt-1 block">Backtested historical average</span>
                  </div>
                </div>

                <div className="bg-[#080B11]/55 border border-white/[0.04] p-5 rounded-xl flex flex-col justify-between">
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">Profit Factor</span>
                  <div>
                    <span className="text-2xl font-bold font-mono text-white block">3.42</span>
                    <span className="text-[10px] font-mono text-gray-400 mt-1 block">Gross Profit / Gross Loss ratio</span>
                  </div>
                </div>

                <div className="bg-[#080B11]/55 border border-white/[0.04] p-5 rounded-xl flex flex-col justify-between">
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">Max Drawdown</span>
                  <div>
                    <span className="text-2xl font-bold font-mono text-rose-500 block">1.84%</span>
                    <span className="text-[10px] font-mono text-gray-400 mt-1 block">Controlled via dynamic stop loss</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
