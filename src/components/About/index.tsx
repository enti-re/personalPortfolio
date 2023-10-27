import React from "react";

const About = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <div className="sm:w-full flex h-full flex-col sm:justify-start sm:items-start lg:w-[55%] lg:justify-center lg:items-center overflow-scroll gap-4 md:w-full">
      <div>
        I've been working as a{" "}
        <span
          className={`${
            isDarkMode ? "text-gray-200" : "text-[#3A3A3A]"
          } underline`}
        >
          React
        </span>{" "}
        and{" "}
        <span
          className={`${
            isDarkMode ? "text-gray-200" : "text-[#3A3A3A]"
          } underline`}
        >
          Node.js
        </span>{" "}
        Developer for the past 2 years, and I've built a variety of web
        applications. I'm also a little bit experienced in{" "}
        <span
          className={`${isDarkMode ? "text-gray-200" : "text-[#3A3A3A]"} underline`}
        >
          ui/ux
        </span>{" "}
        design, and I'm always looking for new ways to improve the user
        experience.
      </div>
      <div>
        In addition to my development work, I'm also an{" "}
        <span
          className={`${isDarkMode ? "text-gray-200" : "text-black"} underline`}
        >
          interviewer
        </span>{" "}
        and
        <span
          className={`${isDarkMode ? "text-gray-200" : "text-black"} underline`}
        >
          {" "}
          mentor
        </span>{" "}
        for React and Node.js Developers. I enjoy helping people learn new
        skills and grow in their careers.
      </div>
      <div>
        {" "}
        When I'm not coding, I'm either watching sitcom slash anime slash
        anything related to marvel, reading books, or learning something new.
        I'm also a coffee addict, but I'm trying to cut back so I can code more.
        I'm always on the lookout for new and interesting apps and websites, but
        I usually end up getting sidetracked by youtube recommendations. If you
        know of any cool resources, let me know!
      </div>
      <div>
        {" "}
        If you're looking for a talented and passionate React and Node.js
        Developer, I'd love to chat with you more.{" "}
      </div>
    </div>
  );
};

export default About;
