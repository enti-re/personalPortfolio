import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "../styles/global.css";
import Loader from "@/components/Loader";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import EntryLoader from "@/components/EntryLoader";

const HomePage = () => {
  const [page, setPage] = useState("about");
  const [navigation, setNavigation] = useState("about");
  const [loader, setLoder] = useState(true);

  useEffect(() => {
    console.log("enteirng here...");
    setTimeout(() => {
      setLoder(false);
    }, 3000);
  }, []);

  if (loader) {
    return (
      <div className="bg-black w-screen h-screen">
        <AnimatedCursor
          color="255, 255, 255"
          innerSize={8}
          outerSize={8}
          innerScale={2}
          outerScale={2}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
          ]}
          outerStyle={{
            mixBlendMode: "exclusion",
          }}
        />
        <EntryLoader />
      </div>
    );
  }
  return (
    <div className="flex flex-col md:flex-row w-screen h-screen px-4 md:px-36 pt-16 gap-12 md:gap-48 justify-center items-center bg-black text-gray-400 overflow-scroll">
      {window.innerWidth > 540 && <AnimatedCursor
        color="255, 255, 255"
        innerSize={8}
        outerSize={8}
        innerScale={2}
        outerScale={2}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
        outerStyle={{
          mixBlendMode: "exclusion",
        }}
      />}
      <div className="sm:w-full sm:w-1/3 flex sm:flex-row md:flex-col justify-center gap-8 md:gap-2">
        <div className="text-6xl">
          <div className="text-5xl md:text-6xl text-slate-200 word-break">
            Nikhil Chandna
          </div>
          <div className="text-lg md:text-2xl text-slate-200">
            Software Engineer at Zopsmart
          </div>
        </div>
        <div className="flex flex-col sm:justify-center">
          <a
            href="#"
            className={`${navigation === "about" ? "text-white" : ""}`}
            onClick={async () => {
              setNavigation("about");
              setPage("loader");
              setTimeout(() => {
                setPage("about");
              }, 2000);
            }}
          >
            {navigation === "about" ? "____" : "_"}About
          </a>
          <a
            className={`${navigation === "experience" ? "text-white" : ""} `}
            onClick={() => {
              setNavigation("experience");
              setPage("loader");
              setTimeout(() => {
                setPage("experience");
              }, 2000);
            }}
          >
            {navigation === "experience" ? "____" : "_"}Experience
          </a>
          <a
            className={`${navigation === "projects" ? "text-white" : ""}`}
            onClick={() => {
              setNavigation("projects");
              setPage("loader");
              setTimeout(() => {
                setPage("projects");
              }, 2000);
            }}
          >
            {navigation === "projects" ? "____" : "_"}Projects
          </a>
          <a
            className={`${navigation === "contact" ? "text-white" : ""}`}
            onClick={() => {
              setNavigation("contact");
              setPage("loader");
              setTimeout(() => {
                setPage("contact");
              }, 2000);
            }}
          >
            {navigation === "contact" ? "____" : "_"}Contact
          </a>
        </div>
      </div>
      {page === "loader" && <Loader />}
      {page === "about" && <About />}
      {page === "experience" && <Experience />}
      {page === "projects" && <Projects />}
      {page === "contact" && <Contact />}
    </div>
  );
};

export default HomePage;
