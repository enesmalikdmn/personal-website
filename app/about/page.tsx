"use client";
import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import animationData from "@/public/animations/developer.json";
import TechIcon from "@/components/TechIcon";
import { techStack } from "@/lib/logos";
import Button from "@mui/material/Button";

export default function About() {
  const container = useRef(null);

  useEffect(() => {
    if (container.current) {
      const anim = lottie.loadAnimation({
        container: container.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationData,
      });

      return () => anim.destroy();
    }
  }, []);

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/EnesMalikDuman-CV.pdf";
    link.download = "EnesMalikDuman-CV.pdf";
    link.click();
  };

  return (
    <main className="flex flex-col text-primary bg-white h-full">
      <div className="relative flex flex-col items-center m-16 md:m-24 lg:m-32">
        <div className="text-[2rem] md:text-[6rem] lg:text-[8rem] uppercase flex font-semibold opacity-10 absolute top-1/2 -translate-y-1/2">
          About Me
        </div>
        <div className="text-[0.75rem] md:text-[1.5rem] lg:text-[2rem] font-semibold text-black relative z-10 border-b-2 border-[#BEBE28]">
          Know Me More
        </div>
      </div>
      <div className="flex flex-col sm:flex-row md:flex-row justify-center overflow-y-scroll pt-12 md:pt-0 gap-4 md:gap-14 p-3">
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <div className="page-text-font text-[1.25rem] md:text-[2rem]">
            I&apos;m <span className="text-[#BEBE28]">Enes Malik Duman</span>,
            Frontend Developer
          </div>
          <p className="text-primary page-text-font text-[0.75rem] md:text-[1rem] text-left">
            I graduated from Ege University, Department of Electrical and
            Electronics Engineering. Disciplined temperament, eager to learn new
            skills, prone to leadership capacity, became a leader at Kuleli
            Military High School.
          </p>
          <p className="text-primary page-text-font text-[0.75rem] md:text-[1rem] text-left">
            I am currently a software engineer with a passion for learning new
            technologies. Technologies I use:
            <div className="flex gap-4 my-4">
              {techStack.map((tech) => (
                <TechIcon key={tech.name} {...tech} />
              ))}
            </div>
            I have implemented and managed projects both alone and with teams. I
            have worked closely with designers to ensure proper implementation
            of UI components and visuals.
          </p>
          <p className="text-primary page-text-font text-[0.75rem] md:text-[1rem] text-left">
            I adhered to Agile methodologies including Scrum and Kanban. I have
            improved myself in subjects such as leadership and teamwork. I have
            been working as a Frontend Developer since 2021. I have been working
            as a Frontend team leader for three months.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div
            ref={container}
            style={{ zIndex: 2 }}
            className="w-[12rem] h-[12rem] flex justify-center md:w-[18rem] md:h-[18rem]"
          />
          <div className="flex justify-center mt-2 md:mt-10">
            <Button
              sx={{ backgroundColor: "#BEBE28" }}
              variant="contained"
              style={{ zIndex: 2 }}
              onClick={downloadCV}
            >
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
