import React from "react";
import Card from "@/components/card";

const projects = [
  {
    name: "Jira Clone",
    description: "A clone of Jira.",
    image: "/images/jira.png", // Public içindeki resim dosyasının yolu
    link: "https://github.com/enesmalikdmn/task-management-system",
  },
  {
    name: "Job Finder",
    description: "A job search platform.",
    image: "/images/job-finder.png", // Public içindeki resim dosyasının yolu
    link: "https://github.com/enesmalikdmn/job-finder",
  },
  {
    name: "E-Commerce App",
    description: "An online platform for seamless shopping.",
    image: "/images/ecommerce.png", // Public içindeki resim dosyasının yolu
    link: "https://github.com/enesmalikdmn/ecommerce-app",
  },
  {
    name: "Moive App",
    description: "A movie app with broadcast channel.",
    image: "/images/movieList.png", // Public içindeki resim dosyasının yolu
    link: "https://github.com/enesmalikdmn/broadcast-channel-basic-example",
  },
];

function Projects() {
  return (
    <main className="flex flex-col text-primary bg-white h-full">
      <div className="relative flex flex-col items-center m-32">
        <div className="text-[8rem] uppercase font-semibold opacity-10 absolute top-1/2 -translate-y-1/2">
          Projects
        </div>
        <div className="text-[2rem] font-semibold text-black relative z-10 border-b-2 border-[#BEBE28]">
          My Work
        </div>
      </div>
      <div className="flex flex-wrap gap-24 justify-center bg-white h-full overflow-y-scroll mb-8">
        {projects.map((project, index) => (
          <Card
            key={index}
            name={project.name}
            image={project.image}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </main>
  );
}

export default Projects;
