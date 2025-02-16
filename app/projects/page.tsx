import React from "react";
import Card from "@/components/card";

const projects = [
  {
    name: "Jira Clone",
    description: "A clone of Jira.",
    image: "/images/jira.png", // Public içindeki resim dosyasının yolu
    link: "https://github.com/enesmalikdmn/task-management-system",
    technologies: [
      "React",
      "Next.js",
      "TailwindCSS",
      "Material UI",
      "Zustand",
      "ESLint",
      "DayJs",
      "Uuid",
    ],
  },
  {
    name: "Job Finder",
    description: "A job search platform.",
    image: "/images/job-finder.png", // Public içindeki resim dosyasının yolu
    link: "https://github.com/enesmalikdmn/job-finder",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Cypress",
      "REST API",
      "Zustand",
      "React Query",
      "TailwindCSS",
      "Axios",
      "Formik",
      "Yup",
      "ESLint",
      "Framer Motion",
    ],
  },
  {
    name: "E-Commerce App",
    description: "An online platform for seamless shopping.",
    image: "/images/ecommerce.png", // Public içindeki resim dosyasının yolu
    link: "https://github.com/enesmalikdmn/ecommerce-app",
    technologies: [
      "React",
      "React Router",
      "React Query",
      "Formik",
      "Yup",
      "Chakra UI",
      "Context API",
      "Axios",
      "TailwindCSS",
      "ESLint",
      "Framer Motion",
    ],
  },
  {
    name: "Moive App",
    description: "A movie app with broadcast channel.",
    image: "/images/movieList.png", // Public içindeki resim dosyasının yolu
    link: "https://github.com/enesmalikdmn/broadcast-channel-basic-example",
    technologies: ["React", "Broadcast Channel"],
  },
];

function Projects() {
  return (
    <main className="flex flex-col text-primary bg-white h-full">
      <div className="relative flex flex-col items-center m-16 md:m-24 lg:m-32">
        <div className="text-[2rem] md:text-[6rem] lg:text-[8rem] uppercase flex font-semibold opacity-10 absolute top-1/2 -translate-y-1/2">
          Projects
        </div>
        <div className="text-[0.75rem] md:text-[1.5rem] lg:text-[2rem] font-semibold text-black relative z-10 border-b-2 border-[#BEBE28]">
          My Work
        </div>
      </div>
      <div className="flex flex-wrap gap-8 md:gap-24 m-4 justify-center bg-white h-full overflow-y-scroll mb-8">
        {projects.map((project, index) => (
          <Card
            key={index}
            name={project.name}
            image={project.image}
            description={project.description}
            link={project.link}
            technologies={project.technologies}
          />
        ))}
      </div>
    </main>
  );
}

export default Projects;
