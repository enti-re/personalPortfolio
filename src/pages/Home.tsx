import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
// import AnimatedCursor from "react-animated-cursor";
import "./../styles/global.css";
import { Twitter, Instagram, Linkedin, GitHub } from "react-feather";
import Loader from "@/components/Loader";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";

const HomePage = (props: any) => {
  const [page, setPage] = useState("about");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(counter + 1);
    const key = setInterval(() => {
      console.log({ counter });
      setCounter(counter + 1);
    }, 1000);
  }, []);

  return (
    <div className="flex flex-row w-screen h-screen px-36 pt-16 justify-center items-center gap-48 bg-black text-gray-400">
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
      <div className="w-1/3 h-full flex flex-col justify-center items-start gap-2">
        <div className="text-6xl">
          <div className="text-6xl word-break">Nikhil Chandna</div>
          <div className="text-2xl">Software Engineer at Zopsmart</div>
        </div>
        <div className="flex flex-col">
          <a
            href="#"
            className={`${page === "about" ? "text-white" : ""}`}
            onClick={async () => {
              setPage("loader");
              setTimeout(() => {
                setPage("about");
              }, 2000);
            }}
          >
            {page === "about" ? "____" : "_"}About
          </a>
          <a
            className={`${page === "experience" ? "text-white" : ""} `}
            onClick={() => {
              setPage("loader");
              setTimeout(() => {
                setPage("experience");
              }, 2000);
            }}
          >
            {page === "experience" ? "____" : "_"}Experience
          </a>
          <a
            className={`${page === "projects" ? "text-xl text-white" : ""}`}
            onClick={() => {
              setPage("loader");
              setTimeout(() => {
                setPage("projects");
              }, 2000);
            }}
          >
            {page === "projects" ? "____" : "_"} Projects
          </a>
          {/* <div
            className={`${page === "tools" ? "text-white" : ""} cursor-pointer`}
            onClick={() => {
              setPage("tools");
            }}
          >
            {page === "tools" ? "____" : "_"}Tools
          </div> */}
          <a
            className={`${page === "contact" ? "text-white" : ""}`}
            onClick={() => {
              setPage("loader");
              setTimeout(() => {
                setPage("contact");
              }, 2000);
            }}
          >
            {page === "contact" ? "____" : "_"}Contact
          </a>
        </div>
      </div>
      {page === "loader" && <Loader />}
      {page === "about" && (
        <div className="w-2/3 h-full flex flex-col justify-center items-center overflow-scroll gap-4">
          <div>
            I've been working as a <span className="text-gray-200">React</span>{" "}
            and <span className="text-gray-200">Node.js</span> Developer for the
            past 2 years, and I've built a variety of web applications. I'm also
            a little bit experienced in{" "}
            <span className="text-gray-200">ui/ux</span> design, and I'm always
            looking for new ways to improve the user experience.
          </div>
          <div>
            In addition to my development work, I'm also an{" "}
            <span className="text-gray-200">interviewer</span> and
            <span className="text-gray-200"> mentor</span> for React and Node.js
            Developers. I enjoy helping people learn new skills and grow in
            their careers.
          </div>
          <div>
            {" "}
            When I'm not coding, I'm either watching sitcom slash anime slash
            anything related to marvel, reading books, or learning something
            new. I'm also a coffee addict, but I'm trying to cut back so I can
            code more. I'm always on the lookout for new and interesting apps
            and websites, but I usually end up getting sidetracked by youtube
            recommendations. If you know of any cool resources, let me know!
          </div>
          <div>
            {" "}
            If you're looking for a talented and passionate React and Node.js
            Developer, I'd love to chat with you more.{" "}
            <span className="text-gray-200">Let's connect!</span>
          </div>
        </div>
      )}
      {page === "experience" && (
        <div className="w-1/2 h-full flex justify-center items-center overflow-scroll">
          <Experience />
        </div>
      )}
      {page === "projects" && (
        <div className="w-1/2 h-full flex justify-start items-start overflow-scroll">
          <Projects />
        </div>
      )}
      {page === "contact" && (
        <div className="w-1/2 h-full flex flex-col justify-center items-left overflow-scroll gap-4">
          <div>
            Contact me if you need a developer for any javascript work - React,
            Node.js, Next.js, Express.js
          </div>
          <div>
            shoot me an email at{" "}
            <span className="text-slate-200 underline">
              chandnanikhil833@gmail.com
            </span>
          </div>
          <div className="flex flex-row gap-3">
            <div>On Internet: </div>
            <div className="cursor-pointer text-slate-200">
              <a href="https://twitter.com/Nikhil51707080" target="_blank">
                <Twitter />
              </a>
            </div>
            <div className="cursor-pointer text-slate-200">
              <a
                href="https://www.instagram.com/nikhil_chandna_/"
                target="_blank"
              >
                <Linkedin />
              </a>
            </div>
            <div className="cursor-pointer text-slate-200">
              <a href="https://github.com/enti-re" target="_blank">
                <GitHub />
              </a>
            </div>
            <div className="cursor-pointer text-slate-200">
              <a
                href="https://www.instagram.com/nikhil_chandna_/"
                target="_blank"
              >
                <Instagram />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
