import React from "react";
import Scramble from 'react-scramble'

const renderProject = () => {
  const projects = [
    {
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
      imgUrl: "#",
      projectTitle: "Eazyupdate",
      projectDescription:
        "Eazyupdate is employee management tool.It keeps track of your projects, teams, or individuals progress. EazyUpdates can ease your job of keeping track of every member's updates within the organization.",
      techStack: ["React.js", "Typescript", "Css"],
    },
    {
      imgUrl: "#",
      projectTitle: "PlacePod",
      projectDescription:
        "PlacePod is a college placement platform that allows students and administrators to track the placement process. Students can see their placement status, including which companies they have coding exams or interviews with, and which companies they are eligible for. Administrators can add companies to the platform, set criteria for shortlisting students, and add or remove students from placement drives.",
      techStack: ["React.js", "Node.js", "MongoDB", "Express"],
    },
    {
      imgUrl: "#",
      projectTitle: "Webhealth",
      projectDescription:
        "A website that provides users with personalized recommendations for diets and workout routines based on their BMI, age, gender, and personal requirements. The website is also highly interactive and user-friendly, with a clean and modern UI. It includes a variety of features to help users track their progress and stay motivated, such as a food diary, a workout tracker",
      techStack: ["React.js", "Node.js", "MongoDB", "Express"],
    },
  ];
  const renderSkills = (skills: any) => {
    return skills.map((skill: string) => {
      return (
        <div className="rounded-xl border-2 p-1 text-sm text-black bg-slate-200">
          {skill}
        </div>
      );
    });
  };
  return projects.map((project) => {
    return (
      <div className="flex flex-col gap-2">
        {/* <div>{project.imgUrl}</div> */}
        <div className="underline text-slate-200">{project.projectTitle}</div>
        <div>{project.projectDescription}</div>
        <div className="flex flex-row flex-wrap gap-2">
          {renderSkills(project.techStack)}
        </div>
      </div>
    );
  });
};

export const Projects = () => {
  return <div className="flex flex-col gap-8">{renderProject()}</div>;
};
