import React, { useState, useCallback } from "react";
import { About } from "./About";
import "./../styles/global.css";
import HomePage from "./Home";
import Head from "next/head";

const App = () => {
  return (
    <div className="w-screen h-screen">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alata&family=Caveat+Brush&family=Comfortaa:wght@400;500&family=Lilita+One&family=Narnoor&family=Rubik&family=Shadows+Into+Light&family=Tilt+Warp&display=swap"
          rel="stylesheet"
        />
      </Head>
      <HomePage />
    </div>
  );
};

export default App;
