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
          <HoverPill pillText="Visit Meesho">
            <Link
              href="https://meesho.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-900 dark:text-neutral-100 border-b border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-300 transition-colors hover:text-pink-500"
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
              className="text-neutral-900 dark:text-neutral-100 border-b border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-300 transition-colors"
            >
              Zopsmart
            </Link>
          </HoverPill>
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
  );
};

export default React.memo(About);
