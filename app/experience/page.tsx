import Card from "@/components/card";
const experiences = [
  {
    name: "Digitastic",
    description: "Develop and maintain the B2B module of an application design for accounting firms based in Germany. Collaborate closely with the UI/UX team to ensure a seamless and user-friendly customer experience. Maintain clear and detailed documentation of all code changes and updates.",
    image: "/images/dp-logo.png",
    link: "",
    technologies: ["React", "Vue", "Tanstack Query", "Vuex", "Pinia", "Cypress", "PrimeVue", "DevExtreme", "TailwindCSS", "Vuetify", "Material UI", "ESLint", "Prettier", "DayJs", "Uuid"],
  }
]

export default function Experience() {
  return (
    <main className="flex flex-col text-primary bg-white h-full">
      <div className="relative flex flex-col items-center m-32">
        <div className="text-[8rem] uppercase font-semibold opacity-10 absolute top-1/2 -translate-y-1/2">
          Experiences
        </div>
        <div className="text-[2rem] font-semibold text-black relative z-10 border-b-2 border-[#BEBE28]">
          My Experience
        </div>
      </div>
      <div className="flex flex-wrap gap-6 justify-center bg-white h-full overflow-y-scroll">
      {experiences.map((experience, index) => (
          <Card
            key={index}
            name={experience.name}
            image={experience.image}
            description={experience.description}
            link={experience.link}
            technologies={experience.technologies}
          />
        ))}
      </div>
    </main>
  );
}
