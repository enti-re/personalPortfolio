import React from "react";

const projects = [
  {
    link: "#",
    imgUrl: "#",
    projectTitle: "Retail Key Tool",
    projectDescription:
      "Retail Key Tool is a self-service tool for McAfee users to generate eCodes for any partner and package combination. It can also generate eCodes based on POSA/Non POSA part numbers and has capabilities such as activating/deactivating batches and individual eCodes, checking key redemption status, adding/modifying retailers and part numbers, and managing retailers and part numbers.",
    techStack: [
      "React.js",
      "Node.js",
      "Koa",
      "Typescript",
      "Next.js",
      "TailwindCss",
      "MUI",
    ],
  },
  {
    link: "https://eazyupdates.com/login",
    imgUrl: "#",
    projectTitle: "Eazyupdate",
    projectDescription:
      "Eazyupdate is employee management tool.It keeps track of your projects, teams, or individuals progress. EazyUpdates can ease your job of keeping track of every member's updates within the organization.",
    techStack: ["React.js", "Typescript", "Css"],
  },
  {
    link: "https://github.com/Connect-3/PlacePod",
    imgUrl: "#",
    projectTitle: "PlacePod",
    projectDescription:
      "PlacePod is a college placement platform that allows students and administrators to track the placement process. Students can see their placement status, including which companies they have coding exams or interviews with, and which companies they are eligible for. Administrators can add companies to the platform, set criteria for shortlisting students, and add or remove students from placement drives.",
    techStack: ["React.js", "Node.js", "MongoDB", "Express"],
  },
  {
    link: "https://github.com/enti-re/Webhealth",
    imgUrl: "#",
    projectTitle: "Webhealth",
    projectDescription:
      "A website that provides users with personalized recommendations for diets and workout routines based on their BMI, age, gender, and personal requirements. The website is also highly interactive and user-friendly, with a clean and modern UI. It includes a variety of features to help users track their progress and stay motivated, such as a food diary, a workout tracker",
    techStack: ["React.js", "Node.js", "MongoDB", "Express"],
  },
];
export const Projects = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const renderProject = () => {
    const renderSkills = (skills: any) => {
      return skills.map((skill: string) => {
        return (
          <div
            className={`rounded-xl ${isDarkMode ? "border-white" : "border-[#3A3A3A]"
              } border  p-1 text-sm text-black bg-white hover:text-white hover:bg-black`}
          >
            {skill}
          </div>
        );
      });
    };
    return projects.map((project) => {
      return (
        <div className="flex flex-col gap-2 sm:w-full ">
          {/* <div>{project.imgUrl}</div> */}
          <div
            className={`${isDarkMode ? "text-slate-200" : "text-[#3A3A3A]"
              } ${window.innerWidth < 1120 ? "text-lg" : "text-2xl"} text-2xl hover:underline`}
          >
            {project.projectTitle}
          </div>
          <div>{project.projectDescription}</div>
          <div className="flex flex-row flex-wrap gap-2">
            {renderSkills(project.techStack)}
          </div>
        </div>
      );
    });
  };
  return (
    <div className="sm:w-full lg:justify-end  h-full flex flex-col lg:w-[55%] overflow-scroll">
      {window.innerWidth < 1120 && <div className="text-xl mb-2 font-semibold text-slate-800">Projects</div>}
      <div className="flex flex-col gap-8">{renderProject()}</div>
    </div>
  );
};
