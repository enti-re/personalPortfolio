import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic'

const HoverPill = dynamic(() => import('../HoverPill').then(mod => ({ default: mod.HoverPill })), {
  ssr: false
})

const About: React.FC = () => {
  return (
    <section className="pl-6">
      <div className="space-y-5 text-neutral-800 dark:text-neutral-300 leading-relaxed animate-reveal">
        <p>
          {"I'm a software engineer obsessed with craft. Currently SDE2 at Meesho, building microfrontend systems, AI-powered developer tooling, and shipping features that move real money."}
        </p>
        <p>
          {"I care about the intersection of design and engineering. Inspired by the way Linear, Resend, and Vercel think about product. Looking for a place where that obsession is a feature, not a bug."}
        </p>
        <p>
          {"Working with TypeScript, React, Next.js, Redux/RTK, Node.js, Tailwind CSS, microfrontend architectures, and AI tooling: Claude Code, Cursor, Playwright, Gemini CLI."}
        </p>
        <p>
          Currently building products at{" "}
          <HoverPill pillText="Visit Meesho">
            <Link
              href="https://meesho.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-900 dark:text-neutral-100 border-b border-neutral-300 dark:border-neutral-700 hover:text-pink-500 dark:hover:text-pink-400 hover:border-pink-500 dark:hover:border-pink-400 transition-colors"
            >
              Meesho
            </Link>
          </HoverPill>
          . Previously at{" "}
          <HoverPill pillText="Visit Zopsmart" color="cyan">
            <Link
              href="https://zopsmart.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-900 dark:text-neutral-100 border-b border-neutral-300 dark:border-neutral-700 hover:text-pink-500 dark:hover:text-pink-400 hover:border-pink-500 dark:hover:border-pink-400 transition-colors"
            >
              Zopsmart
            </Link>
          </HoverPill>
          .
        </p>
        <p>
          Open to new opportunities in 2026. Building something interesting?{" "}
          <Link
            href="mailto:chandnanikhil833@gmail.com"
            className="text-neutral-900 dark:text-neutral-100 border-b border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-300 transition-colors"
          >
            Let's talk.
          </Link>
          {" "}You can also{" "}
          <Link
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-900 dark:text-neutral-100 border-b border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-300 transition-colors"
          >
            view my resume →
          </Link>
        </p>
        <p className="text-sm text-neutral-500 dark:text-neutral-500">
          <Link
            href="https://github.com/enti-re"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-700 dark:hover:text-neutral-400 transition-colors"
          >
            github.com/enti-re
          </Link>
          {" "}where I experiment publicly
        </p>
      </div>
    </section>
  );
};

export default React.memo(About);
