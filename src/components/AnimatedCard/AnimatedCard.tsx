import React, { useState } from 'react'

interface Tab {
  id: string
  label: string
  content: React.ReactNode
}

interface AnimatedCardProps {
  tabs: Tab[]
  defaultTab?: string
  className?: string
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({ 
  tabs, 
  defaultTab, 
  className = "" 
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id)

  const activeTabIndex = tabs.findIndex(tab => tab.id === activeTab)

  return (
    <div className={`bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-sm overflow-hidden ${className}`}>
      {/* Tab Headers */}
      <div className="relative border-b border-neutral-200 dark:border-neutral-800">
        <div className="flex">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-4 py-3 text-sm font-medium transition-colors duration-200 flex-1 ${
                activeTab === tab.id
                  ? 'text-neutral-900 dark:text-neutral-100'
                  : 'text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200'
              }`}
            >
              {tab.label}
              {/* Active Tab Indicator */}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-900 dark:bg-neutral-100 transition-all duration-300 ease-out" />
              )}
            </button>
          ))}
        </div>
        
        {/* Animated Background */}
        <div 
          className="absolute bottom-0 h-0.5 bg-neutral-900 dark:bg-neutral-100 transition-all duration-300 ease-out"
          style={{
            left: `${activeTabIndex * (100 / tabs.length)}%`,
            width: `${100 / tabs.length}%`,
          }}
        />
      </div>

      {/* Tab Content */}
      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-300 ease-out"
          style={{
            transform: `translateX(-${activeTabIndex * 100}%)`,
          }}
        >
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className="w-full flex-shrink-0 p-4"
            >
              <div className="animate-fadeIn">
                {tab.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Custom CSS for fade-in animation
const styles = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fadeIn {
    animation: fadeIn 0.3s ease-out;
  }
`

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style')
  styleSheet.textContent = styles
  document.head.appendChild(styleSheet)
}
