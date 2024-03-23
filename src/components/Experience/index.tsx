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
      description: `As a fullstack developer, I led the creation of a user-friendly Documentation portal using Docusaurus (React), featuring secure authentication via Auth0 and efficient API execution with Open-API supported swaggers. I streamlined our process with Microfrontend architecture and Monorepo Configuration in the TN TOOL. Using React and Tailwind UI, I built a shared CRUD Operation Table. In the Retail Key Tool, I crafted a sleek React Application with TypeScript and MUI Framework, including Auth0 authentication and rigorous unit testing. On the backend, I developed Restful APIs with Node.js and Koa.js, integrating Auth0 for security and optimizing performance with caching. Additionally, I automated our workflow with CI/CD and mentored Junior Developer Interns for code quality and teamwork.`,
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
      "Docusaurus",
      "TanStack"
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
        "EazyUpdate is a collaborative project where, alongside a team of three, we utilized TypeScript, CSS, and React to develop a comprehensive application from scratch. Within the project, I spearheaded the seamless integration of API interactions from React components to the backend, ensuring a cohesive UI architecture. My focus on the Task Page functionality resulted in a robust feature set, including task creation, deletion, modification, and management of subtasks, all while prioritizing seamless responsiveness across diverse screen sizes and platforms for optimal user experience. Furthermore, I enhanced the organizational structure by adapting the D3-org-chart library to efficiently visualize the employee hierarchy, contributing to the project's overall functionality and usability.",
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
      {window.innerWidth < 1120 && <div className={`text-xl mb-2 font-semibold ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>Experience:</div>}
      <div className="flex flex-col gap-8">{renderExperience}</div>
    </div>
  );
};
