import React from "react";
import ProjectCard from "../sub/ProjectCard";
import yeniha from "@/public/yehiha.png";
import mynews from "@/public/mynews.png";
import zalisoft from "@/public/zalisoft.png";
import sinav from "@/public/sinav.png";
import turfilo from "@/public/tur-filo.png";

import Link from "next/link";
const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text py-20 text-[40px] font-semibold text-transparent">
        My Projects
      </h1>
      <div className="grid h-full w-full grid-cols-3 gap-10 px-10 max-xl:grid-cols-2 max-lg:grid-cols-1">
        <Link href="https://elira.tech/" target="_blank">
          <ProjectCard
            src="/elira.png"
            title="Elira Web Technology Website"
            description="I created a Token site using Nextjs. I used Typescript and Tailwindcss."
          />
        </Link>
        <Link href="https://yeniha.com/" target="_blank">
          <ProjectCard
            src={yeniha}
            title="yeniha Website"
            description="I created cargo transportation software using Nextjs. I used Typescript and Tailwindcss."
          />
        </Link>
        <Link href="https://mynews.com.tr/" target="_blank">
          <ProjectCard
            src={mynews}
            title="MyNews Website"
            description="I created a News website using Nextjs. I used Typescript and Tailwindcss."
          />
        </Link>
        <Link href="https://zalisoft.com/" target="_blank">
        <ProjectCard
          src={zalisoft}
          title="Zalisoft Website"
          description="I created the website of the company I work for using Nextjs. I used Typescript and Tailwindcss."
        />
        </Link>
        <Link href="https://sinavdocenti.com/" target="_blank">
        <ProjectCard
          src={sinav}
          title="Sınav Doçenti Website"
          description="
          I created a mentoring website for students. I used TypeScript and Tailwindcss."
        />
        </Link>
        <Link href="https://www.turfilokiralama.com/" target="_blank">
        <ProjectCard
          src={turfilo}
          title="Tur-Filo Website"
          description="
          I created a website for the company I work for. I used TypeScript and Tailwindcss."
        />
        </Link>
      </div>
    </div>
  );
};

export default Projects;
