"use client"

import type React from "react"
import Link from "next/link"
import { Github, Linkedin, X } from "lucide-react"
import { ThemeToggle } from "../components/theme-toggle"
import { useState } from "react"

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("about")

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
            </nav>
          </div>

          <main className="md:flex-1 md:pl-16 border-l border-neutral-100 dark:border-neutral-800">
            <div className="hidden md:flex justify-end mb-6">
              <ThemeToggle />
            </div>

            {activeSection === "projects" && (
              <section className="pl-6">
                <ul className="space-y-5">
                  {projects.map((project) => (
                    <li key={project.slug} className="group">
                      <Link href={`/projects/${project.slug}`} className="flex items-baseline">
                        <span className="flex-1 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                          {project.title}
                        </span>
                        <span className="ml-4 text-neutral-400 text-sm tabular-nums">{project.year}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {activeSection === "writings" && (
              <section className="pl-6">
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
              </section>
            )}

            {activeSection === "books" && (
              <section className="pl-6">
                <ul className="space-y-5">
                  {fallbackBooks.map((book) => (
                    <li key={book.id} className="group">
                      <Link href={`/books/${book.id}`} className="flex items-baseline">
                        <span className="flex-1 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                          {book.title}
                        </span>
                        <span className="ml-4 text-neutral-400 text-sm tabular-nums">{book.year}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
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
                      className="text-neutral-900 dark:text-neutral-100 border-b border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-300 transition-colors"
                    >
                      Meesho
                    </Link>
                    . Previously at{" "}
                    <Link
                      href="https://zopsmart.com"
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
              href="https://twitter.com/yourusername"
              className="text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-300 transition-colors"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">X (Twitter)</span>
            </Link>
            <Link
              href="https://github.com/yourusername"
              className="text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-300 transition-colors"
            >
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/yourusername"
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
    title: "Supplier Platform Ads",
    description: "Advanced advertising platform for supplier management and campaign optimization.",
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
    description: "Streamlined update management system for efficient software deployment and version control.",
    tags: ["Update Management", "Deployment", "Version Control"],
    slug: "eazyupdate",
    year: "2022-23",
  },
]

const writings = [
  {
    title: "The Value of Minimalism in Digital Design",
    description: "Exploring how reduction can lead to more meaningful user experiences.",
    date: "May 2023",
    slug: "minimalism-in-digital-design",
  },
  {
    title: "Typography as Interface",
    description: "How thoughtful typography choices can improve usability and readability.",
    date: "Mar 2023",
    slug: "typography-as-interface",
  },
  {
    title: "Designing with Intention",
    description: "Creating products that align with user needs and business goals.",
    date: "Jan 2023",
    slug: "designing-with-intention",
  },
]

const fallbackBooks = [
  {
    id: "design-of-everyday-things",
    title: "The Design of Everyday Things",
    author: "Don Norman",
    year: "2013",
    categories: ["Design", "Psychology", "UX"],
    notes: "A fundamental text on human-centered design.",
  },
  {
    id: "thinking-fast-and-slow",
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    year: "2011",
    categories: ["Psychology", "Behavioral Economics"],
    notes: "Explores the two systems that drive the way we think and make choices.",
  },
  {
    id: "atomic-design",
    title: "Atomic Design",
    author: "Brad Frost",
    year: "2016",
    categories: ["Design Systems", "Web Design"],
    notes: "A methodology for creating design systems.",
  },
]
