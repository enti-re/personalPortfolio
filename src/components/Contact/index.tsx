import React from "react";
import { GitHub, Instagram, Linkedin, Twitter } from "react-feather";

const Contact = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <div className="sm:w-full lg:pt-32 sm:justify-start flex flex-col items-left overflow-scroll gap-4 lg:w-[55%] lg:justify-start h-[700px] ">
      {window.innerWidth < 1120 && <div className="text-xl font-semibold -mb-2 text-slate-800">Contact:</div>}
      <div>
        Contact me if you need a developer for any javascript work - React,
        Node.js, Next.js, Express.js
      </div>
      <div>
        shoot me an email at{" "}
        <span
          className={`${isDarkMode ? "text-slate-200" : "text-[#3A3A3A]"
            } underline`}
        >
          chandnanikhil833@gmail.com
        </span>
      </div>
      <div className="flex flex-row gap-3">
        <div>On Internet: </div>
        <div
          className={`cursor-pointer ${isDarkMode ? "text-slate-200" : "text-[#3A3A3A]"
            } `}
        >
          <a href="https://twitter.com/Nikhil51707080" target="_blank">
            <Twitter />
          </a>
        </div>
        <div
          className={`cursor-pointer ${isDarkMode ? "text-slate-200" : "text-[#3A3A3A]"
            } `}
        >
          <a href="https://www.linkedin.com/in/nikhil-chandna-3159631b5/" target="_blank">
            <Linkedin />
          </a>
        </div>
        <div
          className={`cursor-pointer ${isDarkMode ? "text-slate-200" : "text-[#3A3A3A]"
            } `}
        >
          <a href="https://github.com/enti-re" target="_blank">
            <GitHub />
          </a>
        </div>
        <div
          className={`cursor-pointer ${isDarkMode ? "text-slate-200" : "text-[#3A3A3A]"
            } `}
        >
          <a href="https://www.instagram.com/nikhil_chandna_/" target="_blank">
            <Instagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
