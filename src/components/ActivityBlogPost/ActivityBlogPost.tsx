import React, { useState } from 'react'
import { ChevronRight, Code, Zap, Shield, Clock } from 'lucide-react'

interface BlogPostProps {
  className?: string
}

export const ActivityBlogPost: React.FC<BlogPostProps> = ({ className = "" }) => {
  const [activeExample, setActiveExample] = useState<'conditional' | 'activity'>('conditional')

  return (
    <article className={`max-w-4xl mx-auto prose prose-neutral dark:prose-invert ${className}`}>
      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center space-x-2 text-sm text-neutral-500 dark:text-neutral-400 mb-2">
          <span>React</span>
          <ChevronRight className="h-3 w-3" />
          <span>Components</span>
          <ChevronRight className="h-3 w-3" />
          <span>Activity</span>
        </div>
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
          Understanding React Activity: Preserve State While Hiding Components
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
          Learn how the React Activity component solves the state preservation problem in modern React applications.
        </p>
      </header>

      {/* Introduction */}
      <section className="mb-12">
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
                The Problem
              </h3>
              <p className="text-blue-800 dark:text-blue-200 text-sm leading-relaxed">
                When you conditionally render components with <code>{`{isVisible && <Component />}`}</code>, 
                React unmounts and destroys the component's state when hidden. This means losing form data, 
                scroll positions, and any internal state.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Comparison */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
          Conditional Rendering vs Activity Component
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Conditional Rendering */}
          <div className="border border-red-200 dark:border-red-800 rounded-lg p-6 bg-red-50 dark:bg-red-900/10">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <h3 className="font-semibold text-red-900 dark:text-red-100">Conditional Rendering</h3>
            </div>
            <div className="space-y-3">
              <div className="bg-white dark:bg-neutral-800 p-3 rounded border">
                <code className="text-sm text-red-600 dark:text-red-400">
                  {`{isVisible && <Component />}`}
                </code>
              </div>
              <div className="space-y-2 text-sm text-red-700 dark:text-red-300">
                <div className="flex items-center space-x-2">
                  <span className="text-red-500">❌</span>
                  <span>Destroys state when hidden</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-red-500">❌</span>
                  <span>Re-mounts component when shown</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-red-500">❌</span>
                  <span>Loses form data & scroll position</span>
                </div>
              </div>
            </div>
          </div>

          {/* Activity Component */}
          <div className="border border-green-200 dark:border-green-800 rounded-lg p-6 bg-green-50 dark:bg-green-900/10">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <h3 className="font-semibold text-green-900 dark:text-green-100">Activity Component</h3>
            </div>
            <div className="space-y-3">
              <div className="bg-white dark:bg-neutral-800 p-3 rounded border">
                <code className="text-sm text-green-600 dark:text-green-400">
                  {`<Activity mode={isVisible ? "visible" : "hidden"}>
  <Component />
</Activity>`}
                </code>
              </div>
              <div className="space-y-2 text-sm text-green-700 dark:text-green-300">
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✅</span>
                  <span>Preserves all state</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✅</span>
                  <span>Maintains DOM elements</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✅</span>
                  <span>Keeps form data & scroll position</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
          Interactive Demo
        </h2>
        
        <div className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-6">
          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => setActiveExample('conditional')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeExample === 'conditional'
                  ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                  : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400'
              }`}
            >
              Conditional Rendering
            </button>
            <button
              onClick={() => setActiveExample('activity')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeExample === 'activity'
                  ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                  : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400'
              }`}
            >
              Activity Component
            </button>
          </div>

          <div className="bg-white dark:bg-neutral-900 rounded-lg p-6 border">
            {activeExample === 'conditional' ? (
              <div className="space-y-4">
                <h3 className="font-semibold text-red-600 dark:text-red-400">Conditional Rendering Behavior</h3>
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded border-l-4 border-red-500">
                  <p className="text-sm text-red-700 dark:text-red-300">
                    When you hide this component, it gets completely unmounted. 
                    Any form data, counters, or state will be lost and reset to initial values.
                  </p>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    Try typing something:
                  </label>
                  <input 
                    type="text" 
                    placeholder="This will be lost when hidden"
                    className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <h3 className="font-semibold text-green-600 dark:text-green-400">Activity Component Behavior</h3>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded border-l-4 border-green-500">
                  <p className="text-sm text-green-700 dark:text-green-300">
                    When you hide this component, it preserves all state. 
                    Form data, counters, and any internal state will be maintained.
                  </p>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    Try typing something:
                  </label>
                  <input 
                    type="text" 
                    placeholder="This will be preserved when hidden"
                    className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
          Key Features
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-3">
              <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">State Preservation</h3>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">
              Maintains component state, form data, and scroll positions when hidden.
            </p>
          </div>

          <div className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-3">
              <Zap className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">Effect Cleanup</h3>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">
              Automatically cleans up Effects when hidden, preventing memory leaks.
            </p>
          </div>

          <div className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-3">
              <Clock className="h-6 w-6 text-green-600 dark:text-green-400" />
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">Performance</h3>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">
              Improves hydration performance by prioritizing visible content.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
          Perfect Use Cases
        </h2>
        
        <div className="space-y-4">
          <div className="flex items-start space-x-4 p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
            <div>
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1">Tab Interfaces</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                Preserve form data when users switch between tabs, maintaining their progress.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
            <div>
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1">Sidebars</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                Keep expanded sections and scroll positions when toggling sidebar visibility.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
            <div>
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1">Video Players</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                Maintain video timecode and playback state when switching between content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
          Implementation Example
        </h2>
        
        <div className="bg-neutral-900 rounded-lg p-6 overflow-x-auto">
          <pre className="text-sm text-neutral-100">
            <code>{`import { Activity, useState } from 'react';

function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  return (
    <div className="app">
      <button onClick={() => setIsSidebarVisible(!isSidebarVisible)}>
        Toggle Sidebar
      </button>
      
      <Activity mode={isSidebarVisible ? "visible" : "hidden"}>
        <Sidebar />
      </Activity>
      
      <main>Main content</main>
    </div>
  );
}`}</code>
          </pre>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-8">
        <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
          <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-3">
            Conclusion
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
            The React Activity component is a powerful tool for creating better user experiences. 
            By preserving state and DOM elements when hiding components, it solves common problems 
            with conditional rendering while improving performance. Use it whenever you need to 
            temporarily hide content that users are likely to interact with again.
          </p>
        </div>
      </section>
    </article>
  )
}
