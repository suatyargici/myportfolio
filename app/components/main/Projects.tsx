import React from "react";
import ProjectCard from "../sub/ProjectCard";
import yeniha from "@/public/yehiha.png"
import mynews from "@/public/mynews.png"
import zalisoft from "@/public/zalisoft.png"
import sinav from "@/public/sinav.png"
const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full grid max-lg:grid-cols-1 max-xl:grid-cols-2 grid-cols-3 gap-10 px-10">
        <ProjectCard
          src="/elira.png"
          title="Elira Web Technology Website"
          description="I created a Token site using Nextjs. I used Typescript and Tailwindcss."
        />
        <ProjectCard
          src={yeniha}
          title="yeniha Website"
          description="I created cargo transportation software using Nextjs. I used Typescript and Tailwindcss."
        />
        <ProjectCard
          src={mynews}
          title="MyNews Website"
          description="I created a News website using Nextjs. I used Typescript and Tailwindcss."
        />
        <ProjectCard
          src={zalisoft}
          title="Zalisoft Website"
          description="I created the website of the company I work for using Nextjs. I used Typescript and Tailwindcss."
        />
            <ProjectCard
          src={sinav}
          title="Sınav Doçenti Website"
          description="
          I created a mentoring website for students. I used TypeScript and Tailwindcss."
        />
      </div>
    </div>
  );
};

export default Projects;
