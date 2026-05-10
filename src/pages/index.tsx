import type React from "react"
import Link from "next/link"
import { Github, Linkedin, Newspaper, X } from "lucide-react"
import { ThemeToggle } from "../components/theme-toggle"
import { MCPVisualization } from "../components/MCPVisualization";
import HoverGrid from '../components/HoverGrid';
import { useState, useEffect, useRef } from "react"
import About from "../components/About";
import Name from "../components/Name";
import Sidebar from "../components/Sidebar";
import GradientCircle from "../components/GradientCircle";
import FluidSphere from "../components/FluidSphere";
import CompoundCube from "../components/CompoundCube";


interface Project {
  title: string
  description: string
  tags: string[]
  slug: string
  year: string
  link?: string
  status?: "in-progress"
}

const projects: Project[] = [
  {
    title: "Readly - Calm newsletter reader",
    description: "A calm newsletter reader focused on a distraction-free reading experience.",
    tags: ["Next.js", "Newsletter", "Reader"],
    slug: "readly",
    year: "2026",
    link: "https://newsletter-app-gold.vercel.app/login",
    status: "in-progress",
  },
  {
    title: "Supplier Platform Ads, Meesho",
    description: "Led the monetisation frontend team. Built multiple microfrontend applications powering Meesho's ads platform. Shipped AI-powered Figma-to-React pipeline, Claude Code + Playwright integration for UI library migration, and improved platform LCP from ~4.1s to ~3.3s.",
    tags: ["React", "TypeScript", "Microfrontend", "Node.js"],
    slug: "supplier-platform-ads",
    year: "2024-25",
    link: "https://supplier.meesho.com/ads",
  },
  {
    title: "Documentation Portal, Zopsmart",
    description: "Built a developer documentation portal using Docusaurus with Auth0 SSO, OpenAPI swagger execution, and full-text search.",
    tags: ["Docusaurus", "Auth0", "OpenAPI"],
    slug: "documentation-portal",
    year: "2023-24",
  },
  {
    title: "EazyUpdate, Zopsmart",
    description: "Built from scratch with a team of 3: TypeScript, React, D3-org-chart for employee hierarchy visualisation.",
    tags: ["React", "TypeScript", "D3"],
    slug: "eazyupdate",
    year: "2022-23",
    link: "https://eazyupdates.com/",
  },
]

const readlyNewsletters = [
  {
    sender: "Sahil Bloom",
    initial: "S",
    time: "3h",
    title: "The Curiosity Chronicle",
    description: "Frameworks worth stealing for calmer decisions.",
    readTime: "5 min read",
    excerpt: "Simple frameworks beat clever slogans when you need to decide under pressure. Close with one question: what would this look like if it were easy?",
  },
  {
    sender: "Mark Manson",
    initial: "M",
    time: "1d",
    title: "Mindf*ck Monday",
    description: "One uncomfortable truth, zero motivational posters.",
    readTime: "4 min read",
    excerpt: "A calmer read on honesty over hype, with one uncomfortable truth and one story worth keeping.",
  },
  {
    sender: "James Clear",
    initial: "J",
    time: "2d",
    title: "3-2-1",
    description: "Habits, quotes, and questions in one quiet scroll.",
    readTime: "3 min read",
    excerpt: "Three ideas, two quotes, and one question for building better habits without the noise.",
  },
]

function ReadlyEmailPreview() {
  const [selectedTitle, setSelectedTitle] = useState(readlyNewsletters[0].title)
  const [activeView, setActiveView] = useState<"inbox" | "saved" | "archive">("inbox")
  const [savedTitles, setSavedTitles] = useState<string[]>([readlyNewsletters[0].title])
  const [archivedTitles, setArchivedTitles] = useState<string[]>([])
  const visibleNewsletters = readlyNewsletters.filter((newsletter) => {
    if (activeView === "saved") return savedTitles.includes(newsletter.title)
    if (activeView === "archive") return archivedTitles.includes(newsletter.title)
    return !archivedTitles.includes(newsletter.title)
  })
  const selectedNewsletter =
    visibleNewsletters.find((newsletter) => newsletter.title === selectedTitle) ??
    visibleNewsletters[0] ??
    null
  const isSaved = selectedNewsletter ? savedTitles.includes(selectedNewsletter.title) : false
  const isArchived = selectedNewsletter ? archivedTitles.includes(selectedNewsletter.title) : false

  const toggleSaved = () => {
    if (!selectedNewsletter) return
    setSavedTitles((current) =>
      current.includes(selectedNewsletter.title)
        ? current.filter((title) => title !== selectedNewsletter.title)
        : [...current, selectedNewsletter.title]
    )
  }

  const toggleArchived = () => {
    if (!selectedNewsletter) return
    setArchivedTitles((current) =>
      current.includes(selectedNewsletter.title)
        ? current.filter((title) => title !== selectedNewsletter.title)
        : [...current, selectedNewsletter.title]
    )
  }

  return (
    <div className="max-w-sm overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
      <div className="flex h-10 items-center gap-2 border-b border-neutral-200 px-3 dark:border-neutral-800">
        <Newspaper className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
        <span className="flex-1 text-xs font-medium text-neutral-900 dark:text-neutral-100">Newsletter</span>
        <span className="text-[10px] tabular-nums text-neutral-400">{readlyNewsletters.length}</span>
      </div>
      <div className="flex gap-1 border-b border-neutral-200 px-2 py-2 dark:border-neutral-800">
        {([
          ["inbox", "Inbox", readlyNewsletters.length - archivedTitles.length],
          ["saved", "Saved", savedTitles.length],
          ["archive", "Archive", archivedTitles.length],
        ] as const).map(([view, label, count]) => (
          <button
            key={view}
            type="button"
            onClick={() => setActiveView(view)}
            className={`rounded-md px-2 py-1 text-[11px] transition-colors ${activeView === view
              ? "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900"
              : "text-neutral-500 hover:bg-white hover:text-neutral-800 dark:hover:bg-neutral-950 dark:hover:text-neutral-200"
              }`}
          >
            {label} <span className="tabular-nums opacity-70">{count}</span>
          </button>
        ))}
      </div>
      <div className="divide-y divide-neutral-200/70 dark:divide-neutral-800">
        {visibleNewsletters.length === 0 ? (
          <div className="px-3 py-5 text-center text-xs text-neutral-400">
            Nothing here yet.
          </div>
        ) : visibleNewsletters.map((newsletter) => (
          <button
            type="button"
            key={newsletter.sender}
            onClick={() => setSelectedTitle(newsletter.title)}
            aria-pressed={selectedNewsletter?.title === newsletter.title}
            className={`flex w-full items-start gap-2.5 px-3 py-2.5 text-left transition-colors ${selectedNewsletter?.title === newsletter.title ? "border-l-2 border-amber-500 bg-white dark:bg-neutral-950/60" : "border-l-2 border-transparent hover:bg-white/70 dark:hover:bg-neutral-950/40"
              }`}
          >
            <span className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-semibold ${selectedNewsletter?.title === newsletter.title
              ? "border border-amber-500/40 bg-amber-500/20 text-amber-700 dark:text-amber-300"
              : "border border-neutral-200 bg-neutral-100 text-neutral-500 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-500"
              }`}
            >
              {newsletter.initial}
            </span>
            <div className="min-w-0 flex-1">
              <div className="mb-0.5 flex items-center justify-between gap-2">
                <span className="truncate text-xs font-medium text-neutral-800 dark:text-neutral-200">{newsletter.sender}</span>
                <span className="shrink-0 text-[10px] text-neutral-400">{newsletter.time}</span>
              </div>
              <p className="truncate text-xs text-neutral-700 dark:text-neutral-300">{newsletter.title}</p>
              <p className="mt-0.5 truncate text-[11px] leading-relaxed text-neutral-500 dark:text-neutral-500">
                {newsletter.description}
              </p>
            </div>
          </button>
        ))}
      </div>
      <div className="border-t border-neutral-200 bg-white p-3 dark:border-neutral-800 dark:bg-neutral-950/70">
        {selectedNewsletter ? (
          <>
            <div className="mb-2 flex items-center gap-2">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-neutral-200 bg-neutral-50 text-xs font-medium text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300">
                {selectedNewsletter.initial}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-medium text-neutral-900 dark:text-neutral-100">{selectedNewsletter.title}</p>
                <p className="text-[10px] text-neutral-400">
                  {selectedNewsletter.sender} · {selectedNewsletter.readTime}
                </p>
              </div>
            </div>
            <p className="line-clamp-2 text-[11px] leading-relaxed text-neutral-500 dark:text-neutral-400">
              {selectedNewsletter.excerpt}
            </p>
            <div className="mt-3 flex items-center gap-2">
              <button
                type="button"
                onClick={toggleSaved}
                className={`rounded-md border px-2 py-1 text-[11px] transition-colors ${isSaved
                  ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                  : "border-neutral-200 text-neutral-500 hover:border-neutral-300 hover:text-neutral-800 dark:border-neutral-800 dark:hover:border-neutral-700 dark:hover:text-neutral-200"
                  }`}
              >
                {isSaved ? "Saved" : "Save"}
              </button>
              <button
                type="button"
                onClick={toggleArchived}
                className={`rounded-md border px-2 py-1 text-[11px] transition-colors ${isArchived
                  ? "border-neutral-300 bg-neutral-100 text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
                  : "border-neutral-200 text-neutral-500 hover:border-neutral-300 hover:text-neutral-800 dark:border-neutral-800 dark:hover:border-neutral-700 dark:hover:text-neutral-200"
                  }`}
              >
                {isArchived ? "Restore" : "Archive"}
              </button>
            </div>
          </>
        ) : (
          <p className="text-center text-xs text-neutral-400">
            Select another tab to continue reading.
          </p>
        )}
      </div>
    </div>
  )
}

const tools = [
  {
    title: "Claude Code + Playwright Integration",
    description: "Built an MCP skill enabling AI-driven UI library migration, adopted org-wide at Meesho. Reduced manual component migration effort significantly.",
    slug: "claude-playwright",
  },
  {
    title: "Figma-to-React Pipeline",
    description: "AI-powered component scaffolding pipeline using Cursor Rules and MCP. Bridges design and code for the ads team.",
    slug: "figma-react-pipeline",
  },
  {
    title: "Automated PR Review Bot",
    description: "Gemini CLI integration for automated code review. Reduced inconsistencies across the TypeScript codebase org-wide.",
    slug: "pr-review-bot",
  },
]

const visualizations = [
  {
    title: "React 19 Activity Component",
    slug: "activity-tag",
    date: "Oct 2025",
    description: "Exploring React 19's new Activity API for deferred rendering and state preservation",
  },
  {
    title: "MCP Data Flow Visualization",
    slug: "mcp-flow",
    date: "Dec 2024",
    description: "Interactive diagram showing how Model Context Protocol connects Claude to external tools",
  },
  {
    title: "Hover Grid",
    slug: "hover-grid",
    date: "Dec 2025",
    description: "CSS grid experiment with neighbour-aware hover interactions",
  },
  {
    title: "Fluid Sphere",
    slug: "fluid-sphere",
    date: "Jan 2026",
    description: "WebGL shader experiment, fluid simulation on a 3D sphere",
  },
  {
    title: "Compound Cube",
    slug: "compound-cube",
    date: "Jan 2026",
    description: "Three.js geometric exploration",
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
  const mainRef = useRef<HTMLElement | null>(null)

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

  useEffect(() => {
    mainRef.current?.scrollTo({ top: 0, left: 0 })
  }, [activeSection, selectedProject, selectedBook, selectedAnimation])

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
    <div className="flex h-dvh max-h-dvh flex-col overflow-hidden antialiased selection:bg-neutral-200 dark:selection:bg-neutral-800">
      <div className="mx-auto flex min-h-0 w-full max-w-[900px] flex-1 px-6 py-10 sm:px-8 sm:py-20">
        <header className="flex min-h-0 min-w-0 flex-1 flex-col md:flex-row">
          <div className="mb-8 shrink-0 md:mb-0 md:w-40">
            <Name />
            <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
          </div>

          <main ref={mainRef} className="min-h-0 min-w-0 overflow-y-auto overflow-x-hidden overscroll-contain border-l border-neutral-100 pb-4 dark:border-neutral-800 sm:pb-8 md:flex-1 md:pl-16">
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
                          <div className="flex flex-col items-start gap-3 text-sm text-neutral-500 dark:text-neutral-400 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4 sm:gap-y-2">
                            <span className="whitespace-nowrap">{project.year}</span>
                            <span className="hidden sm:inline">•</span>
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
                            {project.status === "in-progress" && (
                              <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-600 dark:bg-green-900/20 dark:text-green-400">
                                <span className="h-1.5 w-1.5 rounded-full animate-blink-green-white" aria-hidden="true" />
                                In progress
                              </span>
                            )}
                          </div>

                          <div className="space-y-6">
                            {/* Description */}
                            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                              {project.description}
                            </p>

                            {project.slug === "readly" && <ReadlyEmailPreview />}

                            {/* Project Link */}
                            {project.link && (
                              <div className="pt-4">
                                <Link
                                  href={project.link}
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
                          className="flex w-full items-center text-left hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
                        >
                          <span className="flex min-w-0 flex-1 items-center gap-2">
                            <span className="truncate text-[14px] sm:text-[15px]">{project.title}</span>
                            {project.status === "in-progress" && (
                              <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-green-100 px-1.5 py-0.5 text-[11px] leading-none text-green-600 dark:bg-green-900/20 dark:text-green-400 sm:gap-1.5 sm:px-2 sm:text-xs">
                                <span className="h-1.5 w-1.5 rounded-full animate-blink-green-white" aria-hidden="true" />
                                In progress
                              </span>
                            )}
                          </span>
                          <span className="ml-2 shrink-0 text-neutral-400 text-sm tabular-nums sm:ml-4">{project.year}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            </div>

            <div className={activeSection === "tools" ? "" : "hidden"}>
              <section className="pl-6">
                <ul className="space-y-8">
                  {tools.map((tool) => (
                    <li key={tool.slug}>
                      <div className="space-y-1.5">
                        <span className="text-neutral-900 dark:text-neutral-100">{tool.title}</span>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                          {tool.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
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
              <section className="min-w-0 overflow-x-hidden pl-4 pr-0 sm:pl-6">
                {selectedAnimation ? (
                  <div className="min-w-0">
                    {/* Breadcrumb Navigation */}
                    <nav className="mb-8">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-neutral-500 dark:text-neutral-400">
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
                        <span className="min-w-0 break-words text-neutral-900 dark:text-neutral-100">
                          {visualizations.find(v => v.slug === selectedAnimation)?.title ?? selectedAnimation}
                        </span>
                      </div>
                    </nav>

                    {/* Activity Demo Content */}
                    {selectedAnimation === 'activity-tag' && (
                      <div className="min-w-0 space-y-5 sm:space-y-6">
                        {/* Main Heading */}
                        <h2 className="mb-4 text-xl font-semibold text-neutral-900 dark:text-neutral-100 sm:text-2xl">
                          &lt;Activity /&gt; tag
                        </h2>

                        {/* Description */}
                        <p className="mb-6 max-w-full break-words text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 sm:mb-8 sm:text-base">
                          Activity keeps components mounted when hidden. Normal React unmounts and re-mounts, losing all state. Great for tabs and modals.
                        </p>

                        {/* Centralized Toggle Button */}
                        <div className="mb-6 flex items-center gap-4 sm:mb-8">
                          <h3 className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                            Hide Input
                          </h3>
                          <button
                            onClick={handleToggle}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-all duration-500 ease-in-out focus:outline-none ${isToggleOn ? 'bg-neutral-900 dark:bg-neutral-100' : 'bg-neutral-200 dark:bg-neutral-700'
                              }`}
                          >
                            <span
                              className={`inline-block h-4 w-4 transform rounded-full transition-all duration-500 ease-in-out ${isToggleOn
                                ? 'translate-x-6 bg-white dark:bg-neutral-900 shadow-lg scale-110'
                                : 'translate-x-1 bg-white dark:bg-neutral-300 scale-100'
                                }`}
                            />
                          </button>
                        </div>

                        {/* Compact mobile summary */}
                        <div className="space-y-3 sm:hidden">
                          <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900">
                            <div className="flex items-center justify-between gap-3">
                              <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                                Without Activity
                              </h3>
                              <span className="rounded-full border border-neutral-200 px-2 py-0.5 text-xs text-neutral-400 dark:border-neutral-800 dark:text-neutral-500">
                                {isToggleOn ? "Mounted" : "Unmounted"}
                              </span>
                            </div>
                            <p className="mt-2 text-xs leading-relaxed text-neutral-500 dark:text-neutral-500">
                              Turning the toggle off removes the input, so its state resets when it comes back.
                            </p>
                            {isToggleOn && (
                              <div className="mt-4 flex min-h-[64px] items-center justify-center">
                                {leftMountingPhase === 'loading' ? (
                                  <div className="flex flex-col items-center space-y-2">
                                    <div className="loader">
                                      <div className="loader-dot"></div>
                                      <div className="loader-dot"></div>
                                      <div className="loader-dot"></div>
                                    </div>
                                    <p className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
                                      Component Mounting
                                    </p>
                                  </div>
                                ) : (
                                  <input
                                    type="text"
                                    value={leftInputValue}
                                    onChange={(e) => setLeftInputValue(e.target.value)}
                                    onFocus={(e) => e.target.setSelectionRange(0, 0)}
                                    className={`w-full border-0 border-b border-neutral-300 bg-transparent px-2 py-1.5 text-center text-sm focus:outline-none dark:border-neutral-700 ${leftInputValue !== initialValue
                                      ? 'text-green-600 dark:text-green-400'
                                      : 'text-yellow-500 dark:text-yellow-400'
                                      }`}
                                  />
                                )}
                              </div>
                            )}
                          </div>

                          <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900">
                            <div className="flex items-center justify-between gap-3">
                              <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                                With Activity
                              </h3>
                              <span className="rounded-full border border-neutral-200 px-2 py-0.5 text-xs text-neutral-400 dark:border-neutral-800 dark:text-neutral-500">
                                {isToggleOn ? "Visible" : "Hidden"}
                              </span>
                            </div>
                            <p className="mt-2 text-xs leading-relaxed text-neutral-500 dark:text-neutral-500">
                              Activity hides the input while keeping it mounted, preserving its state.
                            </p>
                            <div className="mt-4 flex min-h-[64px] items-center justify-center">
                              {!hasRightMounted && isToggleOn && rightMountingPhase === 'loading' ? (
                                <div className="flex flex-col items-center space-y-2">
                                  <div className="loader">
                                    <div className="loader-dot"></div>
                                    <div className="loader-dot"></div>
                                    <div className="loader-dot"></div>
                                  </div>
                                  <p className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
                                    Component Mounting
                                  </p>
                                </div>
                              ) : (
                                <div className="relative w-full">
                                  <div
                                    className={`transition-opacity duration-300 ${isToggleOn ? 'opacity-100' : 'opacity-0 pointer-events-none'
                                      }`}
                                  >
                                    <input
                                      type="text"
                                      value={rightInputValue}
                                      onChange={(e) => setRightInputValue(e.target.value)}
                                      onFocus={(e) => e.target.setSelectionRange(0, 0)}
                                      className={`w-full border-0 border-b border-neutral-300 bg-transparent px-2 py-1.5 text-center text-sm focus:outline-none dark:border-neutral-700 ${rightInputValue !== initialValue
                                        ? 'text-green-600 dark:text-green-400'
                                        : 'text-yellow-500 dark:text-yellow-400'
                                        }`}
                                    />
                                  </div>
                                  {!isToggleOn && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                      <span className="rounded-full border border-neutral-200 px-2.5 py-1 text-xs text-neutral-400 dark:border-neutral-800 dark:text-neutral-500">
                                        Hidden
                                      </span>
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Toggle Demos - Side by Side */}
                        <div className="hidden w-full max-w-full grid-cols-1 gap-5 sm:grid md:grid-cols-2 md:gap-6">
                          {/* Left Card - WITHOUT Activity */}
                          <div className="min-w-0">
                            <h3 className="mb-3 text-left text-sm font-medium text-neutral-600 dark:text-neutral-400 sm:text-center">
                              Without Activity
                            </h3>
                            <div className="bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-lg overflow-hidden">
                              <div className="p-4 sm:p-6">

                                {/* Loader and Input Area */}
                                <div className="flex min-h-[140px] flex-col items-center justify-center py-4 sm:min-h-[180px] sm:py-6">
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
                                        <div className="w-full max-w-56">
                                          <input
                                            type="text"
                                            value={leftInputValue}
                                            onChange={(e) => setLeftInputValue(e.target.value)}
                                            onFocus={(e) => e.target.setSelectionRange(0, 0)}
                                            placeholder=""
                                            className={`w-full px-3 py-2 border-0 border-b-2 border-neutral-300 dark:border-neutral-600 bg-transparent text-center text-sm focus:outline-none transition-all duration-300 animate-in slide-in-from-bottom duration-400 ${leftInputValue !== initialValue
                                              ? 'text-green-600 dark:text-green-400'
                                              : 'text-yellow-500 dark:text-yellow-400'
                                              } placeholder-yellow-300 dark:placeholder-yellow-200`}
                                          />
                                        </div>
                                      )}
                                    </div>
                                  ) : (
                                    <div className="flex flex-col items-center space-y-2 animate-out fade-out duration-300">
                                      <span className="rounded-full border border-neutral-200 px-2.5 py-1 text-xs text-neutral-400 dark:border-neutral-800 dark:text-neutral-500">
                                        Unmounted
                                      </span>
                                      <p className="text-center text-xs text-neutral-400 dark:text-neutral-500">
                                        Toggle on to mount this input again.
                                      </p>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Right Card - WITH Activity */}
                          <div className="min-w-0">
                            <h3 className="mb-3 text-left text-sm font-medium text-neutral-600 dark:text-neutral-400 sm:text-center">
                              With Activity
                            </h3>
                            <div className="bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-lg overflow-hidden">
                              <div className="p-4 sm:p-6">
                                {/* Activity Wrapper - Component stays mounted */}
                                <div className="flex min-h-[140px] flex-col items-center justify-center py-4 sm:min-h-[180px] sm:py-6">
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
                                      className="relative w-full max-w-56"
                                    >
                                      <div
                                        className={`transition-opacity duration-300 ${isToggleOn ? 'opacity-100' : 'opacity-0 pointer-events-none'
                                          } placeholder-yellow-300 dark:placeholder-yellow-200`}
                                      >
                                        <input
                                          type="text"
                                          value={rightInputValue}
                                          onChange={(e) => setRightInputValue(e.target.value)}
                                          onFocus={(e) => e.target.setSelectionRange(0, 0)}
                                          placeholder=""
                                          className={`w-full px-3 py-2 border-0 border-b-2 border-neutral-300 dark:border-neutral-600 bg-transparent text-center text-sm focus:outline-none transition-all duration-300 animate-in slide-in-from-bottom duration-400 ${rightInputValue !== initialValue
                                            ? 'text-green-600 dark:text-green-400'
                                            : 'text-yellow-500 dark:text-yellow-400'
                                            } placeholder-yellow-300 dark:placeholder-yellow-200`}
                                        />
                                      </div>
                                      {!isToggleOn && (
                                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                                          <span className="rounded-full border border-neutral-200 px-2.5 py-1 text-xs text-neutral-400 dark:border-neutral-800 dark:text-neutral-500">
                                            Hidden
                                          </span>
                                          <p className="text-center text-xs text-neutral-400 dark:text-neutral-500">
                                            State is preserved while hidden.
                                          </p>
                                        </div>
                                      )}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Code Snippet - Blue/Green/Red (Classic) */}
                        <div className="mt-8 hidden max-w-full overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 sm:block">
                          <pre className="overflow-x-auto p-3 sm:p-4">
                            <code className="font-mono text-xs leading-relaxed sm:text-sm">
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
                      <div className="min-w-0 space-y-6 overflow-x-hidden">
                        <MCPVisualization />
                      </div>
                    )}
                    {selectedAnimation === 'hover-grid' && (
                      <div className="min-w-0 space-y-6 overflow-x-hidden">
                        <HoverGrid />
                      </div>
                    )}
                    {selectedAnimation === 'gradient-circle' && (
                      <div className="min-w-0 space-y-6 overflow-x-hidden">
                        <GradientCircle />
                      </div>
                    )}
                    {selectedAnimation === 'fluid-sphere' && (
                      <div className="h-[420px] min-w-0 space-y-6 overflow-hidden sm:h-[600px]">
                        <FluidSphere />
                      </div>
                    )}
                    {selectedAnimation === 'compound-cube' && (
                      <div className="h-[420px] min-w-0 space-y-6 overflow-hidden sm:h-[600px]">
                        <CompoundCube />
                      </div>
                    )}

                  </div>
                ) : (
                  <ul className="space-y-6">
                    {visualizations.map((viz) => (
                      <li key={viz.slug} className="group">
                        <div className="space-y-0.5">
                          <button
                            onClick={() => {
                              setSelectedAnimation(viz.slug)
                              window.history.pushState({}, '', `/visualization/${viz.slug}`)
                            }}
                            className="flex w-full min-w-0 cursor-pointer items-baseline text-left"
                          >
                            <span className="min-w-0 flex-1 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                              {viz.title}
                            </span>
                            <span className="ml-4 shrink-0 text-neutral-400 text-sm tabular-nums">{viz.date}</span>
                          </button>
                          <p className="text-sm text-neutral-500 dark:text-neutral-400">{viz.description}</p>
                        </div>
                      </li>
                    ))}
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

      <footer className="w-full shrink-0 border-t border-neutral-100 dark:border-neutral-800">
        <div className="mx-auto flex max-w-[900px] items-center justify-between px-6 py-3 sm:px-8 sm:py-6">
          <div className="flex space-x-5">
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