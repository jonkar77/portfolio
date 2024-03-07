// import { ProjectCard } from "../sub/projectCard.tsx";
// import { PROJECTS } from "@/constants";

import { ProjectCard } from "../sub/projectCard";

export const Projects = () => {
    const PROJECTS = [
        {
          title: "Melon-Estate",
          description:
            'Embark on a journey through my professional evolution with the "Modern Next.js Portfolio" - a dynamic showcase of my skills, experiences, and passion for web development. Crafted with precision and powered by Next.js',
          image: "/assets/p1.png",
          link: "https://melon-estate.onrender.com",
        },
        {
          title: "Interactive Cards Portfolio",
          description:
            'Step into the extraordinary world of my professional journey through the "Interactive Cards Portfolio" - an innovative and visually captivating platform that redefines the traditional portfolio experience.',
          image: "/assets/project.png",
          link: "https://example.com",
        },
        {
            title: "Interactive Cards Portfolio",
            description:
              'Step into the extraordinary world of my professional journey through the "Interactive Cards Portfolio" - an innovative and visually captivating platform that redefines the traditional portfolio experience.',
            image: "/assets/project.png",
            link: "https://example.com",
          },
      ] as const;
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-around py-20"
    >
      <h1 className="text-[40px] font-semibold text-black pb-10">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-5 px-5">
        {PROJECTS.map((project) => (
          <div className="border border-black">
            <ProjectCard
            key={project.title}
            src={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
            </div>
        ))}
      </div>
    </section>
  );
};