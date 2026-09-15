import type { AppProps } from "next/app"
import Head from "next/head"
import { ThemeProvider } from "../components/theme-provider"
import "../styles/global.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Nikhil Chandna — Software Engineer</title>
        <meta name="description" content="Software engineer obsessed with craft. SDE2 at Meesho. TypeScript, React, AI tooling." />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
        <div className="font-sans bg-white dark:bg-[#111010] text-[#111010] dark:text-[#FFFCF9] text-[15px] cursor-dot transition-colors duration-300">
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>
  )
}
