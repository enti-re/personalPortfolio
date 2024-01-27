import React from "react";

const experiences = [
  {
    link: "https://zopsmart.com/",
    date: {
      start: "Aug:2022",
      end: "Current",
    },
    role: {
      title: "Software Engineer - Zopsmart",
      link: "#",
      description: `As a full stack developer, I built a retail key management tool from scratch for Mcafee using React and Node.js. The tool provides features to manage and generate keys, batches, part numbers, and retailers. It also implements Auth0 authentication, caching, tracking, tracing, MUI, governance modal, health check, CSV handling, and API aggregation. In addition, I mentored interns and interviewed SDE candidates.`,
    },
    techStack: [
      "React.js",
      "Node.js",
      "Koa",
      "Auth0",
      "MUI",
      "Next.js",
      "TailwindCss",
      "Typescript",
    ],
  },
  {
    link: "https://zopsmart.com/",
    date: {
      start: "Aug:2022",
      end: "Feb:2022",
    },
    role: {
      title: "Software Engineer Intern - Zopsmart",
      link: "#",
      description:
        "As a Frontend Engineer, built an employee management portal called EazyUpdate from scratch. It has features such as maintaining company projects, user timelines, project details pages, API integration, and authorization.",
    },
    techStack: ["React.js", "Typescript", "Css"],
  },
];

const ExperienceItem = ({
  experience,
  isDarkMode,
}: {
  experience: any;
  isDarkMode: boolean;
}) => {
  const renderSkills = (skills: any) => {
    return skills.map((skill: string) => {
      return (
        <div
          className={`rounded-xl text-sm border p-1 ${isDarkMode ? "border-white" : "border-[#C0C0C0]"
            } hover:bg-black bg-white text-[#3a3a3a] hover:text-white`}
        >
          {skill}
        </div>
      );
    });
  };
  return (
    <div className="flex flex-col gap-2 sm:w-full">
      <a
        href={experience.link}
        target="_blank"
        className={`${isDarkMode ? "text-slate-200" : "text-[#3a3a3a]"
          } ${window.innerWidth < 1120 ? "text-lg" : "text-2xl"} hover:underline`}
      >
        {experience.role.title}
      </a>
      <div
        className={`text-truncate whitespace-pre sm:w-full md:w-1/3 bold  ${isDarkMode ? "text-slate-200" : "text-[#3a3a3a]"
          }`}
      >
        {experience.date.start}-{experience.date.end}
      </div>
      <div>{experience.role.description}</div>
      <div className="flex flex-row flex-wrap gap-2">
        {renderSkills(experience.techStack)}
      </div>
    </div>
  );
};

export const Experience = ({ isDarkMode }: any) => {
  const renderExperience = experiences.map((experience: any) => {
    return <ExperienceItem experience={experience} isDarkMode={isDarkMode} />;
  });
  return (
    <div className="sm:w-full md:w-full h-full flex flex-col sm:justify-start sm:items-start lg:justify-center lg:items-center lg:w-[55%] overflow-scroll">
      {window.innerWidth < 1120 && <div className="text-xl mb-2 font-semibold text-slate-800">Experience:</div>}
      <div className="flex flex-col gap-8">{renderExperience}</div>
    </div>
  );
};
