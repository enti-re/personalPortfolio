import { motion } from 'framer-motion'
import { useState } from 'react'
import type React from 'react'

interface HoverPillProps {
  children: React.ReactNode
  pillText: string
  color?: 'pink' | 'teal' | 'green' | 'cyan'
}

export function HoverPill({ children, pillText, color = 'pink' }: HoverPillProps) {
  const [isHovered, setIsHovered] = useState(false)

  const colorClasses = {
    pink: {
      bg: 'bg-pink-500/10 dark:bg-pink-500/20',
      border: 'border-pink-500/30 dark:border-pink-400/40',
      text: 'text-pink-600 dark:text-pink-400'
    },
    teal: {
      bg: 'bg-teal-500/10 dark:bg-teal-500/20',
      border: 'border-teal-500/30 dark:border-teal-400/40',
      text: 'text-teal-600 dark:text-teal-400'
    },
    green: {
      bg: 'bg-green-500/10 dark:bg-green-500/20',
      border: 'border-green-500/30 dark:border-green-400/40',
      text: 'text-green-600 dark:text-green-400'
    },
    cyan: {
      bg: 'bg-cyan-500/10 dark:bg-cyan-500/20',
      border: 'border-cyan-500/30 dark:border-cyan-400/40',
      text: 'text-cyan-600 dark:text-cyan-400'
    }
  }

  const colors = colorClasses[color]

  return (
    <span 
      className="relative inline-block shadow-xl shad"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <motion.div
        className={`shadow-xl absolute bottom-full  -translate-x-1/2 mb-1 px-3 py-1 rounded-md ${colors.bg} border ${colors.border} ${colors.text} text-xs font-medium whitespace-nowrap pointer-events-none z-10 backdrop-blur-lg`}
        initial={{ opacity: 0, y: 3 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : 3
        }}
        transition={{ 
          duration: 0.18,
          ease: "easeOut"
        }}
      >
        {pillText}
      </motion.div>
    </span>
  )
}

