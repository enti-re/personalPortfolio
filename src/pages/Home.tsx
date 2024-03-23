import React, { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import "../styles/global.css";
import profilePic from "./../../public/dp.jpg";
import { Sun } from "react-feather";
import { GitHub, Instagram, Linkedin, Twitter,Mail,FileText } from "react-feather";


const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import EntryLoader from "@/components/EntryLoader";
import { useTheme } from "next-themes";
import Link from "next/link";

const HomePage = () => {
  const { systemTheme } = useTheme();
  const [page, setPage] = useState("about");
  const [navigation, setNavigation] = useState("about");
  const [loader, setLoder] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showHeader,setShowHeader] = useState(true)

  useEffect(() => {
    window.addEventListener("scroll", function (event) {
      if(this.window.scrollY <200) setShowHeader(true)
      else setShowHeader(false);
      if (this.window.scrollY < 400) setNavigation("about");
      if (this.window.scrollY > 400) setNavigation("experience");
      if (this.window.scrollY > 1000) setNavigation("projects");
      if (this.window.scrollY > 2000) setNavigation("contact");
    });
  });

  useEffect(() => {
    setTimeout(() => {
      setLoder(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (systemTheme === "dark") setIsDarkMode(true);
    else setIsDarkMode(false);
  }, [systemTheme]);

  if (loader) {
    return (
      <div
        className={`${isDarkMode ? "bg-black" : "bg-white"} w-screen h-screen`}
      >
        <AnimatedCursor
          color={"255, 255, 255"}
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
        <EntryLoader isDarkMode={isDarkMode} />
      </div>
    );
  }
  return (
    <>
     {window.innerWidth > 810 && (
        <AnimatedCursor
          color={isDarkMode ? "255, 255, 255" : "58, 58, 58"}
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
            ".writing",
            ".link",
          ]}
          outerStyle={{
            mixBlendMode: "exclusion",
          }}
        />
      )}
      {showHeader && <header className="flex flex-row fixed top-10 left-10 gap-4 justify-end mx-40 w-[80%]">
       {/* <div className={`writing ${isDarkMode ? "text-white" : "text-[#3A3A3A]"
            }`}  style={{
        textDecoration: "underline"
       }}><Link href="/writings">Writings</Link></div> */}
        <button
          className={`${isDarkMode ? "text-white" : "text-[#3A3A3A]"
            }`}
          onClick={() => {
            setIsDarkMode(!isDarkMode);
          }}
        >
          <Sun />
        </button>
      </header>}
    <div
      className={`flex flex-col lg:flex-row sm:justify-start px-2 md:px-36 lg:px-24 pt-16 lg:gap-100 ml-100 items-start ${isDarkMode ? "bg-black text-gray-400" : "bg-white text-[#6f6f6f]"
        }`}
    >
     
    
      <div className="lg:fixed flex lg:mt-40 flex-col lg:w-[35%] justify-start sm:items-center lg:items-start gap-6 overflow-hidden">
        <div className="text-6xl flex flex-row gap-4">
          <img
            width={"180px"}
            height={"180px"}
            className="rounded-xl text-center border border-black w-2/5"
            src={profilePic.src}
          />
          <div className="w-3/5">
            <div
              className={`flex flex-row text-5xl md:text-7xl w-1/3 ${isDarkMode ? "text-slate-200" : "text-[#3A3A3A]"
                }  word-break`}
            >
              Nikhil Chandna
            </div>
            <div
              className={`text-lg md:text-xl pl-2 ${isDarkMode ? "text-slate-200" : "text-[#3A3A3A]"
                } `}
            >
              Software Engineer
            </div>
           {window.innerWidth<1400 && <div className="flex flex-row gap-3 pl-2 pt-1">
        <div
          className={`cursor-pointer ${isDarkMode ? "text-slate-200" : "text-[#3A3A3A]"
            } `}
        >
          <a href="https://twitter.com/Nikhil51707080" target="_blank">
            <Twitter size={"18px"} />
          </a>
        </div>
        <div
          className={`cursor-pointer ${isDarkMode ? "text-slate-200" : "text-[#3A3A3A]"
            } `}
        >
          <a href="https://www.linkedin.com/in/nikhil-chandna-3159631b5/" target="_blank">
            <Linkedin size={"20px"} />
          </a>
        </div>
        <div
          className={`cursor-pointer ${isDarkMode ? "text-slate-200" : "text-[#3A3A3A]"
            } `}
        >
          <a href="https://github.com/enti-re" target="_blank">
            <GitHub size={"20px"} />
          </a>
        </div>
        <div
          className={`cursor-pointer ${isDarkMode ? "text-slate-200" : "text-[#3A3A3A]"
            } `}
        >
          <a href="https://www.instagram.com/nikhil_chandna_/" target="_blank">
            <Instagram size={"20px"} />
          </a>
        </div>
        <div
          className={`cursor-pointer ${isDarkMode ? "text-slate-200" : "text-[#3A3A3A]"
            } `}
        >
          <a href="https://www.instagram.com/nikhil_chandna_/" target="_blank">
            <Mail size={"20px"} />
          </a>
        </div>
      </div>}
          </div>
        </div>
        {window.innerWidth > 1400 && <div className="flex sm:flex-row sm:justify-center lg:flex-col items-start gap-2">
          <a
            href="#"
            className={`${navigation === "about"
              ? isDarkMode
                ? "text-white  text-lg"
                : "text-[#3A3A3A] text-lg"
              : ""
              }`}
            onClick={async () => {
              setNavigation("about");
              setPage("loader");
              window.scroll(0, 0);
              setTimeout(() => {
                setPage("about");
              }, 2000);
            }}
          >
            {navigation==="about" ? "______About ": "___About"}
          </a>
          <a
            className={`${navigation === "experience"
              ? isDarkMode
                ? "text-white  text-lg"
                : "text-[#3A3A3A] text-lg"
              : ""
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
            {navigation==="experience" ? "______Experience ": "___Experience"}
          </a>
          <a
            className={`${navigation === "projects"
              ? isDarkMode
                ? "text-white  text-lg"
                : "text-[#3A3A3A] text-lg"
              : ""
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
            {navigation==="projects" ? "______Projects ": "___Projects"}
          </a>
          {/* <a
            className={`${navigation === "contact"
              ? isDarkMode
                ? "text-white  text-lg"
                : "text-[#3A3A3A] text-lg"
              : ""
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
            {navigation==="contact" ? "______Contact ": "___Contact"}
          </a> */}
        </div>}
       {window.innerWidth>1400 &&  <div className="flex flex-col gap-3 pt-56"> 
        <div className="flex flex-row gap-3">
        <div
          className={`cursor-pointer ${isDarkMode ? "text-slate-200" : "text-[#3A3A3A]"
            } `}
        >
          <a href="https://twitter.com/Nikhil51707080" target="_blank">
            <Twitter color={isDarkMode ? "#fff" : "#6F6F6F"} size={"24px"} />
          </a>
        </div>
        <div
          className={`cursor-pointer ${isDarkMode ? "text-slate-200" : "text-[#3A3A3A]"
            } `}
        >
          <a href="https://www.linkedin.com/in/nikhil-chandna-3159631b5/" target="_blank">
            <Linkedin color={isDarkMode ? "#fff" : "#6F6F6F"} size={"24px"} />
          </a>
        </div>
        <div
          className={`cursor-pointer ${isDarkMode ? "text-slate-200" : "text-[#3A3A3A]"
            } `}
        >
          <a href="https://github.com/enti-re" target="_blank">
            <GitHub color={isDarkMode ? "#fff" : "#6F6F6F"} size={"24px"} />
          </a>
        </div>
        <div
          className={`cursor-pointer ${isDarkMode ? "text-slate-200" : "text-[#3A3A3A]"
            } `}
        >
          <a href="https://www.instagram.com/nikhil_chandna_/" target="_blank">
            <Instagram color={isDarkMode ? "#fff" : "#6F6F6F"} size={"24px"} />
          </a>
        </div>
        <div
          className={`cursor-pointer ${isDarkMode ? "text-slate-200" : "text-[#3A3A3A]"
            } `}
        >
          <a href="https://mail.google.com/mail/?view=cm&to=chandnanikhil833@gmail.com" target="_blank">
            <Mail color={isDarkMode ? "#fff" : "#6F6F6F"} size={"24px"} />
          </a>
        </div>
        <div
          className={`cursor-pointer ${isDarkMode ? "text-slate-200" : "text-[#3A3A3A]"
            } `}
        >
          <a href="https://shorturl.at/jsuAW" target="_blank">
            <FileText color={isDarkMode ? "#fff" : "#6F6F6F"} size={"24px"} />
          </a>
        </div>
        </div>
      </div>}
      </div>
      {/* <div className="sm:w-full lg:w-[55%] overflow-scroll"> */}
      {/* {page === "loader" && <Loader />} */}
      <div className="flex flex-col justify-center items-end pt-4 lg:pt-40 gap-20 lg:gap-32 overflow-scroll">
        {<About isDarkMode={isDarkMode} />}
        {<Experience isDarkMode={isDarkMode} />}
        {<Projects isDarkMode={isDarkMode} />}
        {/* {<Contact isDarkMode={isDarkMode} />} */}
      </div>
    </div>
    </>
  );
};

export default HomePage;
