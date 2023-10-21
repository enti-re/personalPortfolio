import React from "react";
import { GitHub, Instagram, Linkedin, Twitter } from "react-feather";

const Contact = () => {
  return (
    <div className="sm:w-full sm:justify-start h-full flex flex-col  items-left overflow-scroll gap-4 lg:w-[55%] lg:justify-center ">
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
          <a href="https://www.instagram.com/nikhil_chandna_/" target="_blank">
            <Linkedin />
          </a>
        </div>
        <div className="cursor-pointer text-slate-200">
          <a href="https://github.com/enti-re" target="_blank">
            <GitHub />
          </a>
        </div>
        <div className="cursor-pointer text-slate-200">
          <a href="https://www.instagram.com/nikhil_chandna_/" target="_blank">
            <Instagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
