'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Candle {
  open: number
  high: number
  low: number
  close: number
  time: number
}

export default function CandlestickChart() {
  const [candles, setCandles] = useState<Candle[]>([])

  useEffect(() => {
    // Generate initial candles
    const initialCandles: Candle[] = []
    let price = 1.0820
    
    for (let i = 0; i < 50; i++) {
      const open = price
      const movement = (Math.random() - 0.48) * 0.0015
      const close = open + movement
      const high = Math.max(open, close) + Math.random() * 0.0008
      const low = Math.min(open, close) - Math.random() * 0.0008
      
      initialCandles.push({
        open,
        high,
        low,
        close,
        time: Date.now() - (50 - i) * 3000
      })
      
      price = close
    }
    
    setCandles(initialCandles)

    // Add new candles every 3 seconds
    const interval = setInterval(() => {
      setCandles(prev => {
        const lastCandle = prev[prev.length - 1]
        const open = lastCandle.close
        const movement = (Math.random() - 0.48) * 0.0015
        const close = open + movement
        const high = Math.max(open, close) + Math.random() * 0.0008
        const low = Math.min(open, close) - Math.random() * 0.0008
        
        const newCandles = [...prev.slice(1), {
          open,
          high,
          low,
          close,
          time: Date.now()
        }]
        
        return newCandles
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  if (candles.length === 0) return null

  const minPrice = Math.min(...candles.map(c => c.low))
  const maxPrice = Math.max(...candles.map(c => c.high))
  const priceRange = maxPrice - minPrice
  
  const getY = (price: number) => {
    return ((maxPrice - price) / priceRange) * 200 + 20
  }

  const candleWidth = 6
  const candleGap = 2

  return (
    <div className="bg-[#13171D] border border-gray-800 rounded-lg p-6">
      {/* Chart Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="text-sm font-mono text-gray-400">EUR/USD</div>
          <motion.div 
            key={candles[candles.length - 1]?.close}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            className="text-2xl font-bold text-green-500"
          >
            {candles[candles.length - 1]?.close.toFixed(4)}
          </motion.div>
          <div className={`text-sm ${candles[candles.length - 1]?.close > candles[candles.length - 1]?.open ? 'text-green-500' : 'text-red-500'}`}>
            {candles[candles.length - 1]?.close > candles[candles.length - 1]?.open ? '+' : ''}
            {((candles[candles.length - 1]?.close - candles[candles.length - 1]?.open) * 100).toFixed(2)}%
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <div className="text-xs font-mono text-gray-500">LIVE</div>
        </div>
      </div>

      {/* Chart */}
      <div className="h-64 bg-[#0B0E11] rounded border border-gray-800 relative overflow-hidden">
        {/* Grid lines */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i} 
              className="absolute w-full border-t border-gray-800/50" 
              style={{ top: `${i * 25}%` }} 
            />
          ))}
        </div>

        {/* Candlesticks */}
        <svg className="w-full h-full" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid meet">
          {candles.map((candle, index) => {
            const x = index * (candleWidth + candleGap) + 10
            const isGreen = candle.close > candle.open
            const bodyTop = getY(Math.max(candle.open, candle.close))
            const bodyBottom = getY(Math.min(candle.open, candle.close))
            const bodyHeight = Math.max(bodyBottom - bodyTop, 1)
            
            return (
              <motion.g
                key={candle.time}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Wick */}
                <line
                  x1={x + candleWidth / 2}
                  y1={getY(candle.high)}
                  x2={x + candleWidth / 2}
                  y2={getY(candle.low)}
                  stroke={isGreen ? '#10b981' : '#ef4444'}
                  strokeWidth="1"
                />
                {/* Body */}
                <rect
                  x={x}
                  y={bodyTop}
                  width={candleWidth}
                  height={bodyHeight}
                  fill={isGreen ? '#10b981' : '#ef4444'}
                  opacity={0.9}
                />
              </motion.g>
            )
          })}

          {/* Moving Average Line */}
          <motion.polyline
            points={candles.map((candle, i) => {
              const x = i * (candleWidth + candleGap) + 10 + candleWidth / 2
              const avgPrice = (candle.open + candle.close) / 2
              const y = getY(avgPrice)
              return `${x},${y}`
            }).join(' ')}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="1.5"
            opacity="0.6"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2 }}
          />

          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#9D5CFF" />
              <stop offset="100%" stopColor="#00D9FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Trade Info */}
      <div className="grid grid-cols-3 gap-4 mt-4 text-sm">
        <div className="bg-[#0B0E11] p-3 rounded">
          <div className="text-gray-500 font-mono mb-1">High</div>
          <div className="text-green-500 font-mono">{maxPrice.toFixed(4)}</div>
        </div>
        <div className="bg-[#0B0E11] p-3 rounded">
          <div className="text-gray-500 font-mono mb-1">Low</div>
          <div className="text-red-500 font-mono">{minPrice.toFixed(4)}</div>
        </div>
        <div className="bg-[#0B0E11] p-3 rounded">
          <div className="text-gray-500 font-mono mb-1">Volume</div>
          <div className="text-white font-mono">1.2M</div>
        </div>
      </div>
    </div>
  )
}
