"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion, AnimatePresence } from "framer-motion";

const AboutSection: React.FC = () => {
  const [tab, setTab] = useState<string>("skills");
  const [isPending, startTransition] = useTransition();
  const [showEducationDetails, setShowEducationDetails] = useState(false);

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const skills = [
    { icon: "💻", text: "Web/App Development" },
    { icon: "🧠", text: "System Designer" },
    { icon: "🎯", text: "Clarity in Chaos" },
    { icon: "🛠️", text: "Builder's DNA" },
    { icon: "🚀", text: "Rapid Prototyping" },
    { icon: "🔍", text: "Pattern Seeker" },
  ];

  const renderTabContent = () => {
    switch (tab) {
      case "skills":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, x: 5 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-100 hover:border-purple-300 transition-all duration-300"
              >
                <span className="text-2xl">{skill.icon}</span>
                <span className="text-gray-700 font-medium">{skill.text}</span>
              </motion.div>
            ))}
          </motion.div>
        );
      case "education":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4"
          >
            <motion.div
              onClick={() => setShowEducationDetails((prev) => !prev)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="cursor-pointer p-6 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 hover:border-blue-400 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">🎓</span>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">
                    Indian Institute of Information Technology Surat
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">Click to view details</p>
                </div>
              </div>
            </motion.div>
            <AnimatePresence>
              {showEducationDetails && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-3 pl-4 border-l-4 border-purple-500"
                >
                  <div className="p-4 rounded-lg bg-white/80 backdrop-blur-sm">
                    <p className="text-gray-700">
                      <span className="font-semibold">📜 Degree:</span>{" "}
                      <i>Bachelor of Technology in Electronics and Communication Engineering</i>
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-white/80 backdrop-blur-sm">
                    <p className="text-gray-700">
                      <span className="font-semibold">📅 Duration:</span> 2020 - 2024
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-white/80 backdrop-blur-sm">
                    <p className="text-gray-700">
                      <span className="font-semibold">📚 Relevant Coursework:</span> Data Structures, Web Development, Artificial Intelligence, Machine Learning
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="relative py-24 overflow-hidden" id="about">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-extrabold mb-4 bg-gradient-to-r from-gray-900 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 rounded-full mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20" />
              <Image
                src="/assets/me.png"
                width={500}
                height={500}
                alt="About me"
                className="relative z-10 object-contain"
              />
            </div>
            {/* Decorative elements */}
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -top-4 -right-4 w-24 h-24 border-4 border-purple-300 rounded-full opacity-50"
            />
            <motion.div
              animate={{
                rotate: [360, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -bottom-4 -left-4 w-16 h-16 border-4 border-blue-300 rounded-full opacity-50"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-gray-700 text-lg leading-relaxed">
              🚀 I'm a <span className="font-semibold text-purple-600">full-stack engineer</span> with a builder's mindset. I don't just ship features, I architect momentum. From spinning up clean APIs to crafting pixel-perfect UIs, I live at the intersection of product intuition and system design.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              <span className="font-semibold text-blue-600">React, Node.js, Postgres, Java, Springboot, Flutter</span> and scalable thinking are my weapons of choice. I write code that earns its keep — modular, testable, and ready to grow.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              If you're building something meaningful — fast, ambitious, and user-obsessed — I want in. <span className="font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Let's make something legendary.</span>
            </p>

            {/* Tabs */}
            <div className="flex flex-row gap-4 mt-8 p-1 bg-gray-100 rounded-xl">
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                Skills
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                Education
              </TabButton>
            </div>

            {/* Tab Content */}
            <div className="mt-6 min-h-[200px]">
              <AnimatePresence mode="wait">
                {renderTabContent()}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
