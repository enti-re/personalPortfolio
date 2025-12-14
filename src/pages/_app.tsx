import type { AppProps } from "next/app"
import Head from "next/head"
import { ThemeProvider } from "../components/theme-provider"
import "../styles/global.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Nikhil Chandna — Designer & Developer</title>
        <meta name="description" content="Personal portfolio showcasing selected works and projects" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const isDark = localStorage.getItem('theme') === 'dark' || 
                    (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
                  
                  if (isDark) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {
                  console.error(e);
                }
              })();
            `,
          }}
        />
      </Head>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <div className="font-sans bg-white dark:bg-[#111010] text-[#111010] dark:text-[#FFFCF9] text-[15px] cursor-dot transition-colors duration-300">
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>
  )
}
