"use client"
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

interface TabData {
  title: string;
  id: string;
  content: JSX.Element;
}

const TAB_DATA: TabData[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Java Programming</li>
        <li>JavaScript</li>
        <li>Node.js</li>
        <li>React</li>
        <li>Flutter</li>
        <li>SQL</li>
        <li>Data Analytics</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li><b>Indian Institute of Information Technology Surat</b></li>
        <li>Bachelor of Technology in Electronics and Communication Engineering</li>
        <li>2020 - 2024</li>
        <li>GPA: 7.9</li>
        <li>Relevant Coursework: Data Structures, Web Development, Artificial Intelligence, Machine Learning</li>        
      </ul>
    ),
  }
];

const AboutSection: React.FC = () => {
  const [tab, setTab] = useState<string>("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-black py-20" id="about">
      <div className=" md:grid md:grid-cols-2 gap-8 items-center px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/assets/me.png" width={400} alt="img" height={400}/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-black mb-4">About Me</h2>
          <p className="text-black lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express,
            PostgreSQL, Sequelize, HTML, CSS, and Git. I am a quick learner
            and I am always looking to expand my knowledge and skill set. I
            am a team player and I am excited to work with others to create
            amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content || ""}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
