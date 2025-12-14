import React from 'react'
import { motion } from 'framer-motion'
import { SiFigma, SiSentry, SiAtlassian, SiGooglechrome } from 'react-icons/si'

const MCPVisualization: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto h-full">
      {/* Main visualization */}
      <div className="flex items-center justify-center px-8 py-12">
        <motion.svg
          width="100%"
          height="100%"
          viewBox="0 0 1600 600"
          preserveAspectRatio="xMidYMid meet"
          className="text-neutral-700 dark:text-neutral-300 max-w-7xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Background (optional) */}
          {/* <rect fill="none"/> */}
          
          {/* 1. Chrome Icon Position (x: 80, y: 258) - 70x70 icon */}
          <foreignObject x="80" y="223" width="70" height="70">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-[70px] h-[70px]"
            >
              <SiGooglechrome className="w-[70px] h-[70px] text-neutral-700 dark:text-neutral-300" />
            </motion.div>
          </foreignObject>
          
          {/* Horizontal line 1: Chrome to Cursor (x: 150 to 310) */}
          <motion.line
            x1="150"
            y1="258"
            x2="310"
            y2="258"
            stroke="currentColor"
            strokeWidth="4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          
          {/* 2. Cursor Icon Position (x: 320, y: 258) with spacing */}
          <foreignObject x="320" y="223" width="70" height="70">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-[70px] h-[70px]"
            >
              <svg viewBox="0 0 466.73 532.09" className="w-[70px] h-[70px] text-neutral-700 dark:text-neutral-300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M457.43,125.94L244.42,2.96c-6.84-3.95-15.28-3.95-22.12,0L9.3,125.94c-5.75,3.32-9.3,9.46-9.3,16.11v247.99c0,6.65,3.55,12.79,9.3,16.11l213.01,122.98c6.84,3.95,15.28,3.95,22.12,0l213.01-122.98c5.75-3.32,9.3-9.46,9.3-16.11v-247.99c0-6.65-3.55-12.79-9.3-16.11h-.01ZM444.05,151.99l-205.63,356.16c-1.39,2.4-5.06,1.42-5.06-1.36v-233.21c0-4.66-2.49-8.97-6.53-11.31L24.87,145.67c-2.4-1.39-1.42-5.06,1.36-5.06h411.26c5.84,0,9.49,6.33,6.57,11.39h-.01Z" fill="currentColor"/>
              </svg>
            </motion.div>
          </foreignObject>
          
          {/* Horizontal line 2: Cursor to branching point (x: 400 to 520) */}
          <motion.line
            x1="400"
            y1="258"
            x2="520"
            y2="258"
            stroke="currentColor"
            strokeWidth="4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          />
          
          {/* Vertical line (x: 520, y: 60 to 456) */}
          <motion.line
            x1="520"
            y1="60"
            x2="520"
            y2="456"
            stroke="currentColor"
            strokeWidth="4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          />
          
          {/* Top horizontal branch (x: 520 to 680) */}
          <motion.line
            x1="520"
            y1="60"
            x2="680"
            y2="60"
            stroke="currentColor"
            strokeWidth="4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.4, delay: 1.3 }}
          />
          
          {/* Middle horizontal branch (x: 520 to 680) */}
          <motion.line
            x1="520"
            y1="258"
            x2="680"
            y2="258"
            stroke="currentColor"
            strokeWidth="4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.4, delay: 1.3 }}
          />
          
          {/* Bottom horizontal branch (x: 520 to 680) */}
          <motion.line
            x1="520"
            y1="456"
            x2="680"
            y2="456"
            stroke="currentColor"
            strokeWidth="4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.4, delay: 1.3 }}
          />
          
          {/* Atlassian Icon (x: 680, y: 25) */}
          <foreignObject x="680" y="25" width="70" height="70">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 1.7 }}
              className="w-[70px] h-[70px]"
            >
              <SiAtlassian className="w-[70px] h-[70px] text-neutral-700 dark:text-neutral-300" />
            </motion.div>
          </foreignObject>
          
          {/* Figma Icon (x: 680, y: 223) */}
          <foreignObject x="680" y="223" width="70" height="70">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 1.7 }}
              className="w-[70px] h-[70px]"
            >
              <SiFigma className="w-[70px] h-[70px] text-neutral-700 dark:text-neutral-300" />
            </motion.div>
          </foreignObject>
          
          {/* Sentry Icon (x: 680, y: 421) */}
          <foreignObject x="680" y="421" width="70" height="70">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 1.7 }}
              className="w-[70px] h-[70px]"
            >
              <SiSentry className="w-[70px] h-[70px] text-neutral-700 dark:text-neutral-300" />
            </motion.div>
          </foreignObject>
        </motion.svg>
      </div>
    </div>
  )
}

export default MCPVisualization

