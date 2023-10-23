import React, { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import "../styles/global.css";
import profilePic from "./../../public/dp.jpg";

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
    window.addEventListener("scroll", function (event) {
      if (this.window.scrollY < 400) setNavigation("about");
      if (this.window.scrollY > 400) setNavigation("experience");
      if (this.window.scrollY > 1000) setNavigation("projects");
      if (this.window.scrollY > 2000) setNavigation("contact");
    });
  });

  useEffect(() => {
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
    <div className="flex flex-col lg:flex-row sm:justify-start px-4 md:px-36 pt-16 lg:gap-56 ml-100 items-start bg-black text text-gray-400">
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
      <div className="lg:fixed flex lg:mt-40 flex-col sm:w-[45%] justify-start sm:items-center lg:items-start gap-6 overflow-hidden">
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
              window.scroll(0, 0);
              setTimeout(() => {
                setPage("about");
              }, 2000);
            }}
          >
            - About
          </a>
          <a
            className={`${
              navigation === "experience" ? "text-white text-lg" : ""
            } `}
            onClick={() => {
              setNavigation("experience");
              window.scroll(0, 460);
              setPage("loader");
              setTimeout(() => {
                setPage("experience");
              }, 2000);
            }}
          >
            - Experience
          </a>
          <a
            className={`${
              navigation === "projects" ? "text-white text-lg" : ""
            }`}
            onClick={() => {
              setNavigation("projects");
              window.scroll(0, 1050);
              setPage("loader");
              setTimeout(() => {
                setPage("projects");
              }, 2000);
            }}
          >
            - Projects
          </a>
          <a
            className={`${
              navigation === "contact" ? "text-white text-lg" : ""
            }`}
            onClick={() => {
              setNavigation("contact");
              window.scroll(0, 3000);
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
      {/* {page === "loader" && <Loader />} */}
      <div className="flex flex-col justify-center items-end lg:pt-40 gap-20 lg:gap-32 overflow-scroll">
        {<About />}
        {<Experience />}
        {<Projects />}
        {<Contact />}
      </div>
      {/* </div> */}
    </div>
  );
};

export default HomePage;
