import React from "react";
import Card from "@/components/card";

const projects = [
  {
    name: "E-Commerce App",
    description: "An online platform for seamless shopping.",
    image: "/images/ecommerce.png", // Public içindeki resim dosyasının yolu
  },
  {
    name: "Moive App",
    description: "A movie app with broadcast channel.",
    image: "/images/movieList.png", // Public içindeki resim dosyasının yolu
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
      <div className="flex flex-wrap gap-6 justify-center bg-white h-full">
        {projects.map((project, index) => (
          <Card
            key={index}
            name={project.name}
            image={project.image}
            description={project.description}
          />
        ))}
      </div>
    </main>
  );
}

export default Projects;
