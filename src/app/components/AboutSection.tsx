"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const AboutSection: React.FC = () => {
  const [tab, setTab] = useState<string>("skills");
  const [isPending, startTransition] = useTransition();
  const [showEducationDetails, setShowEducationDetails] = useState(false);

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const renderTabContent = () => {
    switch (tab) {
      case "skills":
        return (
          <ul className="list-none space-y-2">
            <li>💻 Web/App Development</li>
            <li>🧠 System Designer</li>
            <li>🎯 Clarity in Chaos</li>
            <li>🛠️ Builder’s DNA</li>
            <li>🚀 Rapid Prototyping</li>
            <li>🔍 Pattern Seeker</li>
          </ul>
        );
      case "education":
        return (
          <ul className="list-none space-y-2">
            <li
              onClick={() => setShowEducationDetails((prev) => !prev)}
              className="cursor-pointer hover:underline"
            >
              <b>🎓 Indian Institute of Information Technology Surat</b>
            </li>
            {showEducationDetails && (
              <ul className="list-none space-y-2 pl-4">
                <li>
                  📜 <i>Bachelor of Technology in Electronics and Communication Engineering</i>
                </li>
                <li><b>📅</b> 2020 - 2024</li>
                <li>
                  <b>📚</b> Relevant Coursework: Data Structures, Web Development, Artificial Intelligence, Machine Learning
                </li>
              </ul>
            )}
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <section className="text-black py-20" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center px-4 xl:gap-16 sm:py-16 xl:px-19">
        <Image src="/assets/me.png" width={400} height={400} alt="img" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-black mb-4">About Me</h2>
          <p className="text-black lg:text-lg">
            🚀 I’m a full-stack engineer with a builder’s mindset, I don’t just ship features, I architect momentum. From spinning up clean APIs to crafting pixel-perfect UIs, I live at the intersection of product intuition and system design.

            React, Node.js, Postgres, Java, Springboot, Flutter and scalable thinking are my weapons of choice. I write code that earns its keep — modular, testable, and ready to grow.

            If you’re building something meaningful — fast, ambitious, and user-obsessed — I want in. Let’s make something legendary.
          </p>

          <div className="flex flex-row justify-start mt-8">
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

          <div className="mt-4">{renderTabContent()}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
