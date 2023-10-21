import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "../styles/global.css";
import Loader from "@/components/Loader";
import profilePic from "./../../public/dp.jpg";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import EntryLoader from "@/components/EntryLoader";
import DownIcon from "@/Icons/DownIcon";

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
    <div className="flex flex-col lg:flex-row w-screen h-screen sm:justify-start px-4 md:px-36 pt-16 lg:gap-20 lg:justify-center items-center bg-black text text-gray-400 overflow-scroll">
      {window.innerWidth > 540 && (
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
      )}
      <div className="flex flex-col sm:w-[45%] justify-center sm:items-start lg:items-start gap-6">
        <div className="text-6xl flex flex-row gap-4">
          <img
            width={"180px"}
            height={"180px"}
            className="rounded-xl text-center"
            src={profilePic.src}
          />
          <div>
            <div className="flex flex-row text-5xl md:text-7xl w-1/3 text-slate-200 word-break">
              Nikhil Chandna
            </div>
            <div className="text-lg md:text-xl text-slate-200">
              Software Engineer
            </div>
          </div>
        </div>
        <div className="flex sm:flex-row sm:justify-center lg:flex-col items-start gap-2">
          <a
            href="#"
            className={`${navigation === "about" ? "text-white text-lg" : ""}`}
            onClick={async () => {
              setNavigation("about");
              setPage("loader");
              setTimeout(() => {
                setPage("about");
              }, 2000);
            }}
          >
            - About
          </a>
          <a
            className={`${navigation === "experience" ? "text-white text-lg" : ""} `}
            onClick={() => {
              setNavigation("experience");
              setPage("loader");
              setTimeout(() => {
                setPage("experience");
              }, 2000);
            }}
          >
            - Experience
          </a>
          <a
            className={`${navigation === "projects" ? "text-white text-lg" : ""}`}
            onClick={() => {
              setNavigation("projects");
              setPage("loader");
              setTimeout(() => {
                setPage("projects");
              }, 2000);
            }}
          >
            - Projects
          </a>
          <a
            className={`${navigation === "contact" ? "text-white text-lg" : ""}`}
            onClick={() => {
              setNavigation("contact");
              setPage("loader");
              setTimeout(() => {
                setPage("contact");
              }, 2000);
            }}
          >
            - Contact
          </a>
        </div>
      </div>
      {/* <div className="sm:w-full lg:w-[55%] overflow-scroll"> */}
        {page === "loader" && <Loader />}
        {page === "about" && <About />}
        {page === "experience" && <Experience />}
        {page === "projects" && <Projects />}
        {page === "contact" && <Contact />}
      {/* </div> */}
    </div>
  );
};

export default HomePage;
