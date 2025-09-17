"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "AveryAI",
    description: "Is an AI-powered interview preparation platform that simulates real interview experiences and provides actionable feedback to help users improve. It combines advanced AI models, insights from industry experts, and proven user outcomes to deliver the most realistic and effective interview practice available.",
    image: "/images/projects/0.png",
    tag: ["All", "Web"],
    gitUrl: "https://singularitysoftworks.com/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "EzSports",
    description: "Is a team management and scheduling platform designed for esports players and organizations to coordinate matches, scrims, and events seamlessly. It combines real-time communication tools, intuitive calendar and scheduling features, and streamlined team collaboration workflows to deliver the most efficient and engaging experience for competitive gaming.",
    image: "/images/projects/1.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/cjmcnally/EzSports",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "VisMath",
    description: "Is an interactive math visualization platform that transforms abstract equations into dynamic, animated graphs to enhance STEM learning. It combines real-time computation, AI-driven explanations, and intuitive visual interfaces to deliver the most engaging and effective way for students to explore mathematical concepts.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/cjmcnally/VisMath",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Matrix Transformations",
    description: "Is a visualization tool that applies linear algebra concepts to modify and manipulate digital images. It combines matrix operations, Python-based computation, and intuitive image rendering to deliver an interactive and effective way to explore transformations such as scaling, rotation, reflection, and shearing.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/cjmcnally/Linear-Image-Transformation",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Depress-Minus Mobile App",
    description: "Is a mental health mobile application that supports users through mood tracking, journaling, and stress relief techniques. It combines personalized analytics, an intuitive Flutter/Dart interface, and Firebase-powered data persistence to deliver an accessible and effective way for individuals to monitor and improve their mental well-being.",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/cjmcnally/Depriminus",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Solar System Simulation",
    description: "Is an interactive web-based visualization that models planetary orbits using JavaScript, HTML, and CSS. It combines calculus-based motion equations, linear algebra transformations, and smooth browser animations to deliver an engaging and educational experience for exploring orbital mechanics.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/cjmcnally/orbitAnimation",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
