

import type React from "react"
import Link from "next/link"
import { Github, Linkedin, X, Code, Palette, Zap } from "lucide-react"
import { ThemeToggle } from "../components/theme-toggle"
import { AnimatedCard } from "../components/AnimatedCard"
import { useState, useEffect } from "react"

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("about")
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const [isLocalhost, setIsLocalhost] = useState<boolean>(false)
  
  // Demo state for Activity vs Conditional rendering
  const [isToggleOn, setIsToggleOn] = useState<boolean>(true)
  const [circleData, setCircleData] = useState<string>('')
  const [hasToggledOff, setHasToggledOff] = useState<boolean>(false)
  
  // Check if we're on localhost after component mounts (client-side only)
  useEffect(() => {
    setIsLocalhost(window.location.hostname === 'localhost')
  }, [])

  // Handle toggle with demo behavior
  const handleToggle = () => {
    if (isToggleOn) {
      // Turning off - simulate conditional rendering behavior
      setHasToggledOff(true)
      setIsToggleOn(false)
    } else {
      // Turning on - simulate Activity behavior
      setIsToggleOn(true)
    }
  }

  return (
    <div className="min-h-screen flex flex-col antialiased selection:bg-neutral-200 dark:selection:bg-neutral-800">
      <div className="max-w-[900px] mx-auto px-8 py-20 w-full flex-grow">
        <header className="mb-16 flex flex-col md:flex-row">
          <div className="md:w-40 mb-8 md:mb-0">
            <div className="flex items-center justify-between mb-10">
              <div className="text-base font-medium">Nikhil Chandna</div>
              <div className="md:hidden">
                <ThemeToggle />
              </div>
            </div>
            <nav className="flex md:flex-col space-x-6 md:space-x-0 md:space-y-3">
              <NavLink active={activeSection === "about"} onClick={() => setActiveSection("about")}>
                About
              </NavLink>
              <NavLink active={activeSection === "projects"} onClick={() => setActiveSection("projects")}>
                Projects
              </NavLink>
              <NavLink active={activeSection === "writings"} onClick={() => setActiveSection("writings")}>
                Writings
              </NavLink>
              <NavLink active={activeSection === "books"} onClick={() => setActiveSection("books")}>
                Books
              </NavLink>
              {isLocalhost && (
                <NavLink active={activeSection === "animations"} onClick={() => setActiveSection("animations")}>
                  Animations
                </NavLink>
              )}
            </nav>
          </div>

          <main className="md:flex-1 md:pl-16 border-l border-neutral-100 dark:border-neutral-800">
            <div className="hidden md:flex justify-end mb-6">
              <ThemeToggle />
            </div>

            {activeSection === "projects" && (
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
            )}

            {activeSection === "writings" && (
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
            )}

            {activeSection === "books" && (
              <section className="pl-6">
                <ul className="space-y-5">
                  {fallbackBooks.map((book) => (
                    <li key={book.id} className="group">
                      <Link href={`/books/${book.id}`} className="flex items-baseline">
                        <div className="flex-1">
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
                        <div className="ml-4">
                          <span className="text-neutral-400 text-sm tabular-nums">{book.year}</span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {isLocalhost && activeSection === "animations" && (
              <section className="pl-6">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-lg font-medium text-neutral-900 dark:text-neutral-100 mb-6">
                      React Activity Demo
                    </h2>
                  </div>
                  
                  {/* Toggle Demo */}
                  <div className="bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-lg overflow-hidden max-w-sm mx-auto">
                    <div className="p-6">
                      {/* Toggle Button */}
                      <div className="flex items-center justify-center mb-6">
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

                      {/* Circle and Input Area */}
                      <div className="flex flex-col items-center justify-center py-8 space-y-6">
                        {isToggleOn ? (
                          <div className="flex flex-col items-center space-y-6 animate-in fade-in duration-300">
                            {/* Circle */}
                            <div className="w-14 h-14 bg-neutral-900 dark:bg-neutral-100 rounded-full shadow-lg animate-in zoom-in duration-500"></div>
                            
                            {/* Input for circle data */}
                            <div className="w-56">
                              <input 
                                type="text" 
                                value={circleData}
                                onChange={(e) => setCircleData(e.target.value)}
                                placeholder="Type something..."
                                className="w-full px-3 py-2 border-0 border-b-2 border-neutral-300 dark:border-neutral-600 bg-transparent text-neutral-900 dark:text-neutral-100 text-center text-sm focus:outline-none transition-all duration-300 placeholder-neutral-500 dark:placeholder-neutral-400 animate-in slide-in-from-bottom duration-400 delay-200"
                              />
                            </div>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center space-y-6 animate-out fade-out duration-300">
                            {/* Empty Circle */}
                            
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                </div>
              </section>
            )}

            {activeSection === "about" && (
              <section className="pl-6">
                <div className="space-y-5 text-neutral-800 dark:text-neutral-300 leading-relaxed">
                  <p>
                    I'm a javascript developer passionate about creating robust and scalable web applications. 
                    My expertise spans across modern JavaScript frameworks, with a focus 
                    on building intuitive user experiences and efficient systems.
                  </p>
                  <p>
                    I specialize in JavaScript, TypeScript, CSS, D3 charts, Material UI, Redux, React, 
                    Node.js and Express.js. I'm also proficient with modern development tools like 
                    Cursor IDE and Gemini CLI for enhanced productivity.
                  </p>
                  <p>
                    Currently building products at{" "}
                    <Link
                      href="https://meesho.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-900 dark:text-neutral-100 border-b border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-300 transition-colors"
                    >
                      Meesho
                    </Link>
                    . Previously at{" "}
                    <Link
                      href="https://zopsmart.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-900 dark:text-neutral-100 border-b border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-300 transition-colors"
                    >
                      Zopsmart
                    </Link>
                    .
                  </p>
                  <p>
                    Feel free to reach out at{" "}
                    <Link
                      href="mailto:chandnanikhil833@gmail.com"
                      className="text-neutral-900 dark:text-neutral-100 border-b border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-300 transition-colors"
                    >
                      chandnanikhil833@gmail.com
                    </Link>{" "}
                    for collaborations or just to say hi.
                  </p>
                </div>
              </section>
            )}
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

interface NavLinkProps {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}

function NavLink({ active, onClick, children }: NavLinkProps) {
  return (
    <button
      onClick={onClick}
      className={`text-sm ${
        active
          ? "text-neutral-900 dark:text-neutral-100 font-medium"
          : "text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-300"
      } transition-colors`}
    >
      {children}
    </button>
  )
}

// Updated data with slugs for routing
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
  },
  {
    id: "subtle-art-of-not-giving-a-fuck",
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    year: "2024",
    categories: ["Self-Help"],
  },
  {
    id: "atomic-habits",
    title: "Atomic Habits",
    author: "James Clear",
    year: "2023",
    categories: ["Self-Help", "Productivity"],
  },
  {
    id: "almanack-of-naval-ravikant",
    title: "Almanack of Naval Ravikant",
    author: "Eric Jorgenson",
    year: "2022",
    categories: ["Philosophy", "Business"],
  },
  {
    id: "the-power-of-now",
    title: "The Power of Now",
    author: "Eckhart Tolle",
    year: "2021",
    categories: ["Spirituality", "Self-Help"],
  },
]
