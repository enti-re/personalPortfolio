import type React from "react"
import Link from "next/link"
import { Github, Linkedin, X } from "lucide-react"
import { ThemeToggle } from "../components/theme-toggle"
import { MCPVisualization } from "../components/MCPVisualization";
import HoverGrid from '../components/HoverGrid';
import { useState, useEffect } from "react"
import About from "../components/About";
import Name from "../components/Name";
import Sidebar from "../components/Sidebar";

const projects = [
  {
    title: "Supplier Platform Ads: Meesho",
    description: "Developed the Advertisement Panel for Meesho's Supplier Platform, empowering suppliers to create and manage targeted advertising campaigns. Built comprehensive campaign creation tools where suppliers can select product catalogs, set cost-per-click (CPC) rates, define budgets and durations. Implemented real-time analytics dashboard for monitoring campaign performance, conversion tracking, and ROI optimization. The panel provides suppliers with actionable insights to maximize their product visibility and sales on the platform.",
    tags: ["React", "TypeScript", "Node.js"],
    slug: "supplier-platform-ads",
    year: "2024-25",
  },
  {
    title: "Mcafee Key Generation Documentation",
    description: "Comprehensive documentation system for Mcafee key generation processes and workflows.",
    tags: ["Documentation", "Technical Writing", "Process Management"],
    slug: "mcafee-key-gen-docs",
    year: "2023-24",
  },
  {
    title: "Mcafee Key Generation",
    description: "Automated key generation system for Mcafee security products with advanced validation.",
    tags: ["Automation", "Security", "Key Management"],
    slug: "mcafee-key-generation",
    year: "2023-24",
  },
  {
    title: "EazyUpdate",
    description: "Developed a comprehensive update management platform that streamlines software deployment and version control processes. Built a React-based frontend with TypeScript for type safety and vanilla CSS for custom styling. The platform enables development teams to create, manage, and distribute software updates efficiently. Implemented features for automated update deployment, rollback capabilities, and real-time deployment tracking. The system provides teams with centralized control over their software release cycles, reducing deployment complexity and improving development workflow efficiency.",
    tags: ["React", "TypeScript", "Vanilla CSS"],
    slug: "eazyupdate",
    year: "2022-23",
  },
]

interface Writing {
  title: string
  slug: string
  date: string
}

const writings: Writing[] = [
  // Temporarily empty to test the "coming soon" design
]

const fallbackBooks = [
  {
    id: "crucial-conversations",
    title: "Crucial Conversations",
    author: "Kerry Patterson, Joseph Grenny, Ron McMillan, Al Switzler",
    year: "2025",
    categories: ["Self-Help", "Communication"],
    status: "currently-reading",
  }
]

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("about")
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const [selectedBook, setSelectedBook] = useState<string | null>(null)
  
  // Centralized toggle state
  const [isToggleOn, setIsToggleOn] = useState<boolean>(false)
  const [selectedAnimation, setSelectedAnimation] = useState<string | null>(null)
  
  // Left card state (WITHOUT Activity - resets on unmount)
  const [leftMountingPhase, setLeftMountingPhase] = useState<'loading' | 'input'>('loading')
  const [leftInputValue, setLeftInputValue] = useState<string>('')
  
  // Right card state (WITH Activity - preserves state)
  const [rightMountingPhase, setRightMountingPhase] = useState<'loading' | 'input'>('loading')
  const [rightInputValue, setRightInputValue] = useState<string>('')
  const [hasRightMounted, setHasRightMounted] = useState<boolean>(false)
  
  const initialValue = 'mounted input'
  
  // Check if we're on localhost after component mounts (client-side only)
  useEffect(() => {
    // Check URL for visualization route on initial load
    const pathname = window.location.pathname
    if (pathname.startsWith('/visualization/')) {
      const slug = pathname.split('/visualization/')[1]
      if (slug) {
        setActiveSection('visualization')
        setSelectedAnimation(slug)
      }
    }
  }, [])

  // Update URL when switching sections
  useEffect(() => {
    if (activeSection !== 'visualization' && window.location.pathname !== '/') {
      window.history.pushState({}, '', '/')
    }
  }, [activeSection])

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const pathname = window.location.pathname
      if (pathname.startsWith('/visualization/')) {
        const slug = pathname.split('/visualization/')[1]
        if (slug) {
          setActiveSection('visualization')
          setSelectedAnimation(slug)
        }
      } else {
        setSelectedAnimation(null)
      }
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  // Centralized toggle handler
  const handleToggle = () => {
    if (!isToggleOn) {
      // Turning ON - show both cards
      setIsToggleOn(true)
      
      // Left card: Always shows loader on mount
      setLeftMountingPhase('loading')
      setLeftInputValue(initialValue)
      setTimeout(() => {
        setLeftMountingPhase('input')
      }, 2000)
      
      // Right card: Only show loader on FIRST mount
      if (!hasRightMounted) {
        setRightMountingPhase('loading')
        setRightInputValue(initialValue)
        setTimeout(() => {
          setRightMountingPhase('input')
          setHasRightMounted(true)
        }, 2000)
      } else {
        // Already mounted before - just make visible (Activity behavior)
        setRightMountingPhase('input')
      }
    } else {
      // Turning OFF
      setIsToggleOn(false)
      
      // Left card: Reset to initial state (normal React unmount)
      setLeftMountingPhase('loading')
      setLeftInputValue(initialValue)
      
      // Right card: Keep state (Activity behavior - stays mounted)
      // No changes to rightInputValue or rightMountingPhase
    }
  }

  return (
    <div className="min-h-screen flex flex-col antialiased selection:bg-neutral-200 dark:selection:bg-neutral-800">
      <div className="max-w-[900px] mx-auto px-8 py-20 w-full flex-grow">
        <header className="mb-16 flex flex-col md:flex-row">
          <div className="md:w-40 mb-8 md:mb-0">
            <Name />
            <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
          </div>

          <main className="md:flex-1 md:pl-16 border-l border-neutral-100 dark:border-neutral-800">
            <div className="hidden md:flex justify-end mb-6">
              <ThemeToggle />
            </div>

            <div className={activeSection === "about" ? "" : "hidden"}>
              <About />
            </div>

            <div className={activeSection === "projects" ? "" : "hidden"}>
              <section className="pl-6">
                {selectedProject ? (
                  <div>
                    {/* Breadcrumb Navigation */}
                    <nav className="mb-8">
                      <div className="flex items-center space-x-2 text-sm text-neutral-500 dark:text-neutral-400">
                        <button 
                          onClick={() => setSelectedProject(null)}
                          className="hover:text-neutral-900 dark:hover:text-neutral-300 transition-colors"
                        >
                          Projects
                        </button>
                        <span>›</span>
                        <span className="text-neutral-900 dark:text-neutral-100">
                          {projects.find(p => p.slug === selectedProject)?.title}
                        </span>
                      </div>
                    </nav>

                    {/* Project Details */}
                    {(() => {
                      const project = projects.find(p => p.slug === selectedProject)
                      if (!project) return null

                      return (
                        <div className="space-y-6">
                          <div className="flex items-center space-x-4 text-sm text-neutral-500 dark:text-neutral-400">
                            <span>{project.year}</span>
                            <span>•</span>
                            <div className="flex flex-wrap gap-2">
                              {project.tags.map((tag) => (
                                <span 
                                  key={tag}
                                  className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-lg text-xs"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="space-y-6">
                            {/* Description */}
                            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                              {project.description}
                            </p>
                            
                            {/* Project Link */}
                            {(project.slug === "supplier-platform-ads" || project.slug === "eazyupdate") && (
                              <div className="pt-4">
                                <Link 
                                  href={project.slug === "supplier-platform-ads" ? "https://supplier.meesho.com/ads" : "https://eazyupdates.com/"}
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-300 transition-colors border-b border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-300"
                                >
                                  View Project →
                                </Link>
                              </div>
                            )}
                          </div>
                        </div>
                      )
                    })()}
                  </div>
                ) : (
                  <ul className="space-y-5">
                    {projects.map((project) => (
                      <li key={project.slug} className="group">
                        <button 
                          onClick={() => setSelectedProject(project.slug)}
                          className="flex items-baseline w-full text-left hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
                        >
                          <span className="flex-1">
                            {project.title}
                          </span>
                          <span className="ml-4 text-neutral-400 text-sm tabular-nums">{project.year}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            </div>

            <div className={activeSection === "writings" ? "" : "hidden"}>
              <section className="pl-6">
                {writings.length > 0 ? (
                  <ul className="space-y-5">
                    {writings.map((writing) => (
                      <li key={writing.slug} className="group">
                        <Link href={`/writings/${writing.slug}`} className="flex items-baseline">
                          <span className="flex-1 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                            {writing.title}
                          </span>
                          <span className="ml-4 text-neutral-400 text-sm tabular-nums">{writing.date}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="flex flex-col items-center justify-start pt-6 text-center">
                    <div className="max-w-md mx-auto space-y-4">
                      <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
                        No articles yet
                      </h3>
                      <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed">
                        I'm working on some interesting pieces. Check back soon for insights on development, design, and technology.
                      </p>
                      <div className="pt-2">
                        <div className="inline-flex items-center space-x-2 text-xs text-neutral-400 dark:text-neutral-500 bg-neutral-50 dark:bg-neutral-800 px-3 py-1.5 rounded-full">
                          <div className="w-1.5 h-1.5 rounded-full animate-blink-green-white"></div>
                          <span>Coming soon</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </section>
            </div>

            <div className={activeSection === "visualization" ? "" : "hidden"}>
              <section className="pl-6">
                {selectedAnimation ? (
                  <div>
                    {/* Breadcrumb Navigation */}
                    <nav className="mb-8">
                      <div className="flex items-center space-x-2 text-sm text-neutral-500 dark:text-neutral-400">
                        <button 
                          onClick={() => {
                            setSelectedAnimation(null)
                            window.history.pushState({}, '', '/')
                          }}
                          className="hover:text-neutral-900 dark:hover:text-neutral-300 transition-colors"
                        >
                          Visualization
                        </button>
                        <span>›</span>
                        <span className="text-neutral-900 dark:text-neutral-100">
                          {selectedAnimation === 'activity-tag' ? 'React 19 Activity Component' : 
                           selectedAnimation === 'mcp-flow' ? 'MCP Data Flow Visualization' :
                           selectedAnimation === 'hover-grid' ? 'Hover Grid' : ''}
                              </span>
                          </div>
                    </nav>

                    {/* Activity Demo Content */}
                    {selectedAnimation === 'activity-tag' && (
                  <div className="space-y-6">
                    {/* Main Heading */}
                    <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
                      &lt;Activity /&gt; tag
                    </h2>
                    
                    {/* Description */}
                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8 max-w-2xl">
                      Activity keeps components mounted when hidden. Normal React unmounts and re-mounts, losing all state. Great for tabs and modals.
                    </p>
                  
                  {/* Centralized Toggle Button */}
                  <div className="flex items-center gap-4 mb-8">
                    <h3 className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                      Hide Input
                    </h3>
                        <button
                          onClick={handleToggle}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-all duration-500 ease-in-out focus:outline-none ${ 
                            isToggleOn ? 'bg-neutral-900 dark:bg-neutral-100' : 'bg-neutral-200 dark:bg-neutral-700'
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full transition-all duration-500 ease-in-out ${ 
                              isToggleOn 
                                ? 'translate-x-6 bg-white dark:bg-neutral-900 shadow-lg scale-110' 
                                : 'translate-x-1 bg-white dark:bg-neutral-300 scale-100'
                            }`}
                          />
                        </button>
                      </div>

                  {/* Toggle Demos - Side by Side */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {/* Left Card - WITHOUT Activity */}
                    <div>
                      <h3 className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-3 text-center">
                        Without Activity
                      </h3>
                      <div className="bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-lg overflow-hidden">
                        <div className="p-6">

                      {/* Loader and Input Area */}
                        <div className="flex flex-col items-center justify-center py-6 min-h-[180px]">
                        {isToggleOn ? (
                          <div className="flex flex-col items-center space-y-3 animate-in fade-in duration-300">
                              {leftMountingPhase === 'loading' && (
                              /* Loading Phase - Custom CSS Loader */
                              <div className="flex flex-col items-center space-y-3">
                                <div className="loader">
                                  <div className="loader-dot"></div>
                                  <div className="loader-dot"></div>
                                  <div className="loader-dot"></div>
                                </div>
                                <p className="text-neutral-900 dark:text-neutral-100 text-sm font-medium">
                                  Component Mounting
                                </p>
                              </div>
                            )}
                            
                            
                              {leftMountingPhase === 'input' && (
                              /* Input Phase */
                              <div className="w-56">
                                <input 
                                  type="text" 
                                    value={leftInputValue}
                                    onChange={(e) => setLeftInputValue(e.target.value)}
                                  onFocus={(e) => e.target.setSelectionRange(0, 0)}
                                  placeholder=""
                                  className={`w-full px-3 py-2 border-0 border-b-2 border-neutral-300 dark:border-neutral-600 bg-transparent text-center text-sm focus:outline-none transition-all duration-300 animate-in slide-in-from-bottom duration-400 ${ 
                                      leftInputValue !== initialValue 
                                      ? 'text-green-600 dark:text-green-400' 
                                      : 'text-yellow-500 dark:text-yellow-400'
                                  } placeholder-yellow-300 dark:placeholder-yellow-200`}
                                />
                              </div>
                            )}
                          </div>
                        ) : (
                          <div className="flex flex-col items-center space-y-3 animate-out fade-out duration-300">
                            {/* Empty state when toggle is off */}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                    </div>

                    {/* Right Card - WITH Activity */}
                    <div>
                      <h3 className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-3 text-center">
                        With Activity
                      </h3>
                      <div className="bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-lg overflow-hidden">
                        <div className="p-6">
                        {/* Activity Wrapper - Component stays mounted */}
                        <div className="flex flex-col items-center justify-center py-6 min-h-[180px]">
                          {!hasRightMounted && isToggleOn && rightMountingPhase === 'loading' ? (
                            /* Initial Mounting - Show Loader */
                            <div className="flex flex-col items-center space-y-3">
                              <div className="loader">
                                <div className="loader-dot"></div>
                                <div className="loader-dot"></div>
                                <div className="loader-dot"></div>
                              </div>
                              <p className="text-neutral-900 dark:text-neutral-100 text-sm font-medium">
                                Component Mounting
                              </p>
                            </div>
                          ) : (
                            /* Activity: Component is mounted, just toggle visibility */
                            <div 
                              className={`w-56 transition-opacity duration-300 ${ 
                                isToggleOn ? 'opacity-100' : 'opacity-0 pointer-events-none'
                              }`}
                            >
                              <input 
                                type="text" 
                                value={rightInputValue}
                                onChange={(e) => setRightInputValue(e.target.value)}
                                onFocus={(e) => e.target.setSelectionRange(0, 0)}
                                placeholder=""
                                className={`w-full px-3 py-2 border-0 border-b-2 border-neutral-300 dark:border-neutral-600 bg-transparent text-center text-sm focus:outline-none transition-all duration-300 animate-in slide-in-from-bottom duration-400 ${ 
                                  rightInputValue !== initialValue 
                                    ? 'text-green-600 dark:text-green-400' 
                                    : 'text-yellow-500 dark:text-yellow-400'
                                } placeholder-yellow-300 dark:placeholder-yellow-200`}
                              />
                            </div>
                          )}
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Code Snippet - Blue/Green/Red (Classic) */}
                  <div className="rounded-lg overflow-hidden max-w-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 mt-8">
                    <pre className="p-4 overflow-x-auto">
                      <code className="text-sm font-mono leading-relaxed">
                        <span className="text-blue-600 dark:text-blue-400">&lt;Activity</span>{" "}
                        <span className="text-neutral-500 dark:text-neutral-500">mode</span>
                        <span className="text-neutral-500 dark:text-neutral-600">=&amp;#123;</span>
                        <span className="text-neutral-600 dark:text-neutral-400">isVisible</span>{" "}
                        <span className="text-neutral-500 dark:text-neutral-600">?</span>{" "}
                        <span className="text-green-600 dark:text-green-400">"visible"</span>{" "}
                        <span className="text-neutral-500 dark:text-neutral-600">:</span>{" "}
                        <span className="text-red-600 dark:text-red-400">"hidden"</span>
                        <span className="text-neutral-500 dark:text-neutral-600">&#125;</span>
                        <span className="text-blue-600 dark:text-blue-400">&gt;</span>
                        {"\n"}
                        {"  "}
                        <span className="text-neutral-600 dark:text-neutral-400">&lt;Input /&gt;</span>
                        {"\n"}
                        <span className="text-blue-600 dark:text-blue-400">&lt;/Activity&gt;</span>
                      </code>
                    </pre>
                  </div>
                      </div>
                    )}

                    {/* MCP Flow Visualization */}
                    {selectedAnimation === 'mcp-flow' && (
                      <div className="space-y-6">
                        <MCPVisualization />
                      </div>
                    )}
                     {selectedAnimation === 'hover-grid' && (
                      <div className="space-y-6">
                        <HoverGrid />
                      </div>
                    )}
                  </div>
                ) : (
                  <ul className="space-y-5">
                    <li className="group">
                      <button 
                        onClick={() => {
                          setSelectedAnimation('activity-tag')
                          window.history.pushState({}, '', '/visualization/activity-tag')
                        }}
                        className="flex items-baseline w-full text-left cursor-pointer"
                      >
                        <span className="flex-1 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                          React 19 Activity Component
                        </span>
                        <span className="ml-4 text-neutral-400 text-sm tabular-nums">Oct 2025</span>
                      </button>
                    </li>
                    <li className="group">
                      <button 
                        onClick={() => {
                          setSelectedAnimation('mcp-flow')
                          window.history.pushState({}, '', '/visualization/mcp-flow')
                        }}
                        className="flex items-baseline w-full text-left cursor-pointer"
                      >
                        <span className="flex-1 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                          MCP Data Flow Visualization
                        </span>
                        <span className="ml-4 text-neutral-400 text-sm tabular-nums">Dec 2024</span>
                      </button>
                    </li>
                    <li className="group">
                    <button 
                        onClick={() => {
                          setSelectedAnimation('hover-grid')
                          window.history.pushState({}, '', '/visualization/hover-grid')
                        }}
                        className="flex items-baseline w-full text-left cursor-pointer"
                      >
                          <span className="flex-1 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                            Hover Grid
                          </span>
                          <span className="ml-4 text-neutral-400 text-sm tabular-nums">Dec 2025</span>
                      </button>
                    </li>
                  </ul>
                )}
              </section>
            </div>
            
            <div className={activeSection === "books" ? "" : "hidden"}>
              <section className="pl-6">
                {selectedBook ? (
                  <div>
                    {/* Breadcrumb Navigation */}
                    <nav className="mb-8">
                      <div className="flex items-center space-x-2 text-sm text-neutral-500 dark:text-neutral-400">
                        <button 
                          onClick={() => setSelectedBook(null)}
                          className="hover:text-neutral-900 dark:hover:text-neutral-300 transition-colors"
                        >
                          Books
                        </button>
                        <span>›</span>
                        <span className="text-neutral-900 dark:text-neutral-100">
                          {fallbackBooks.find(b => b.id === selectedBook)?.title}
                        </span>
                      </div>
                    </nav>

                    {/* Work in Progress - Balanced Minimal */}
                    <div className="py-6">
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0">
                          <svg 
                            className="w-5 h-5 text-neutral-400 dark:text-neutral-600"
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                            />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                            Currently reading. Notes and highlights coming soon.
                          </p>
                        </div>
                        <div className="flex-shrink-0">
                          <div className="flex items-center space-x-1.5 text-xs text-neutral-500 dark:text-neutral-500">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                            <span>In progress</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                <ul className="space-y-5">
                  {fallbackBooks.map((book) => (
                    <li key={book.id} className="group">
                        <button 
                          onClick={(e) => {
                            e.preventDefault()
                            setSelectedBook(book.id)
                          }}
                          className="flex items-baseline w-full text-left cursor-pointer hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
                        >
                          <div className="flex-1 pointer-events-none">
                          <div className="flex items-center gap-3">
                            <span className="group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                              {book.title}
                            </span>
                            {book.status === "currently-reading" && (
                              <span className="px-1.5 py-0.5 bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-xs rounded-full font-normal">
                                Now
                              </span>
                            )}
                          </div>
                          <div className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                            {book.author}
                          </div>
                        </div>
                          <div className="ml-4 pointer-events-none">
                          <span className="text-neutral-400 text-sm tabular-nums">{book.year}</span>
                </div>
                        </button>
                    </li>
                  ))}
                </ul>
                )}
              </section>
            </div>
          </main>
        </header>
      </div>

      <footer className="w-full border-t border-neutral-100 dark:border-neutral-800">
        <div className="max-w-[900px] mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="flex space-x-5 mb-4 md:mb-0">
            <Link
              href="https://x.com/nikhilchandna01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-300 transition-colors"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">X (Twitter)</span>
            </Link>
            <Link
              href="https://github.com/enti-re"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-300 transition-colors"
            >
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/nikhilchandna01/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-300 transition-colors"
            >
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">© {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  )
}