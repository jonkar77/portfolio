"use client";
import { ProjectCard } from "../sub/projectCard";
import { motion } from "framer-motion";

export const Projects = () => {
  const PROJECTS = [
    {
      title: "Melon-Estate",
      description:
        'Embark on a journey through my professional evolution with the "Modern Next.js Portfolio" - a dynamic showcase of my skills, experiences, and passion for web development. Crafted with precision and powered by Next.js',
      image: "/assets/project.png",
      link: "https://melon-estate.onrender.com",
    },
    {
      title: "Noodle Search",
      description:
        'Step into the extraordinary world of my professional journey through the "Interactive Cards Portfolio" - an innovative and visually captivating platform that redefines the traditional portfolio experience.',
      image: "/assets/project.png",
      link: "https://noodle-eng.vercel.app/",
    },
    {
      title: "TradingGale",
      description:
        'Step into the extraordinary world of my professional journey through the "Interactive Cards Portfolio" - an innovative and visually captivating platform that redefines the traditional portfolio experience.',
      image: "/assets/project.png",
      link: "https://example.com",
    },
    {
      title: "Stream regulator",
      description:
        'Step into the extraordinary world of my professional journey through the "Interactive Cards Portfolio" - an innovative and visually captivating platform that redefines the traditional portfolio experience.',
      image: "/assets/project.png",
      link: "https://github.com/jonkar77/controlled-backpressure-service",
    },
    {
      title: "Prod-Lab",
      description:
        'Step into the extraordinary world of my professional journey through the "Interactive Cards Portfolio" - an innovative and visually captivating platform that redefines the traditional portfolio experience.',
      image: "/assets/project.png",
      link: "https://github.com/jonkar77/ProdLab",
    },
    {
      title: "Resume Factory",
      description:
        'Step into the extraordinary world of my professional journey through the "Interactive Cards Portfolio" - an innovative and visually captivating platform that redefines the traditional portfolio experience.',
      image: "/assets/project.png",
      link: "https://github.com/jonkar77/resume-factory",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section
      id="projects"
      className="relative flex flex-col items-center justify-center py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-4 bg-gradient-to-r from-gray-900 via-purple-600 to-blue-600 bg-clip-text text-transparent"
          >
            My Projects
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Explore my latest creations and innovative solutions
          </motion.p>
          <motion.div
            className="mt-6 flex justify-center"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 rounded-full" />
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {PROJECTS.map((project: any, index: number) => (
            <ProjectCard
              key={project.title}
              src={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
