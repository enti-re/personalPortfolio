import React from "react";
import Image from "next/image";
import AboutImage from "./../mediaFiles/AboutImage.png";

export const About = () => {
  return (
    <div className="flex flex-col justify-center p-16 gap-8">
      <div className="text-6xl">About Me.</div>
      <hr className="w-1/4"></hr>
      <div className="flex flex-row justify-between">
        <div className="w-3/5">
          As a full stack developer based in Bangalore, I work at a dynamic
          startup called Zopsmart. My primary focus lies in building web
          applications using <span className="text-gray-200 bolder">React</span> and Node.js, harnessing the power of
          JavaScript, HTML, and CSS to create intuitive and visually appealing
          user interfaces. Over time, I've honed my skills with various
          frameworks like MUI, Next.js, and Tailwind, allowing me to craft
          feature-rich and high-performing applications. Staying up-to-date with
          the latest technologies and best practices is essential to me, as it
          ensures I can deliver top-notch solutions to our customers. Beyond
          development, I also have a flair for design, which comes in handy
          while creating user-friendly and aesthetically pleasing interfaces.
          This additional expertise enhances the overall user experience and
          contributes to the success of our products. Working in a startup
          environment has been an exciting journey, constantly challenging me to
          think creatively and problem-solve efficiently. As a full stack
          developer, my role is crucial in driving the growth and success of
          Zopsmart's digital products and services. In summary, my proficiency
          in React, Node.js, JavaScript, HTML, CSS, and various frameworks,
          along with my design skills, enables me to make a significant impact
          in the ever-evolving world of web development.
        </div>
        <div>
          <Image src={AboutImage} width={"400"} height={"400"} alt={""} />
        </div>
      </div>
    </div>
  );
};
