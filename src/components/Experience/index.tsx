import React from "react";

const experiences = [
  {
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

const renderSkills = (skills: any) => {
  return skills.map((skill: string) => {
    return (
      <div className="rounded-xl border-2 p-1 text-sm text-black bg-slate-200">
        {skill}
      </div>
    );
  });
};

const ExperienceItem = ({ experience }: { experience: any }) => {
  return (
    <div className="flex flex-row">
      <div className="text-truncate whitespace-pre w-1/3 bold text-slate-200">
        {experience.date.start}-{experience.date.end}
      </div>
      <div className="flex flex-col gap-2 w-2/3">
        <div className="text-slate-200 underline">{experience.role.title}</div>
        <div>{experience.role.description}</div>
        <div className="flex flex-row flex-wrap gap-2">
          {renderSkills(experience.techStack)}
        </div>
      </div>
    </div>
  );
};

const renderExperience = experiences.map((experience: any) => {
  return <ExperienceItem experience={experience} />;
});

export const Experience = () => {
  return (
    <div className="w-1/2 h-full flex justify-center items-center overflow-scroll">
      <div className="flex flex-col gap-4">{renderExperience}</div>
    </div>
  );
};
