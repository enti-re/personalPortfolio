import React from "react";
import "../styles/global.css";
import HomePage from "./Home";
import Head from "next/head";
import { ThemeProvider } from "next-themes";

const App = () => {
  return (
    <div className="w-screen h-screen bg-black">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alata&family=Anton&family=Caveat+Brush&family=Comfortaa:wght@400;500&family=DM+Sans:opsz@9..40&family=Lilita+One&family=Narnoor&family=Rubik&family=Shadows+Into+Light&family=Tilt+Warp&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider>
        <HomePage />
      </ThemeProvider>
    </div>
  );
};

export default App;
