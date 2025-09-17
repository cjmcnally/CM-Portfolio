"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Languages",
    id: "languages",
    content: (
      <ul className="list-disc pl-2">
        <li>Python</li>
        <li>TypeScript</li>
        <li>C++</li>
        <li>Java</li>
        <li>JavaScript</li>
        <li>SQL</li>
      </ul>
    ),
  },
  {
    title: "Frameworks",
    id: "frameworks",
    content: (
      <ul className="list-disc pl-2">
        <li>React.js</li>
        <li>Next.js</li>
        <li>React Native</li>
        <li>Flutter</li>
      </ul>
    ),
  },
  {
    title: "Tools",
    id: "applications",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Firebase</li>
        <li>Figma</li>
        <li>Drizzle ORM</li>
        <li>Clerk</li>
        <li>Stripe</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("languages");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about.png"
          width={500}
          height={500}
          alt="Illustration of software development setup"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            {`I'm a Computer Science student at Worcester Polytechnic Institute
            with a passion for building impactful software. I specialize in
            full-stack development and have experience creating web and mobile
            applications. My projects range from AI-powered math visualization
            tools to mental health apps, reflecting my drive to combine
            technology with real-world problem-solving. I'm always looking for
            opportunities to learn, collaborate, and bring ideas to life through
            clean, scalable code.`}
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("languages")}
              active={tab === "languages"}
            >
              {" "}
              Languages{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("frameworks")}
              active={tab === "frameworks"}
            >
              {" "}
              Frameworks{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("applications")}
              active={tab === "applications"}
            >
              {" "}
              Applications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
