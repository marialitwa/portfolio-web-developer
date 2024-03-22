import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import newInTownImg from "@/public/assets/mern-new-in-town.png";
import dasBesteDesTagesImg from "@/public/assets/nextjs-das-beste-des-tages.png";
import rickAndMortyImg from "@/public/assets/react-rick-and-morty.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;
// Exporting "as const" is a Typescript 'feature': it will not just say this is typeof "string" !!
// It will be explicitly and exactly THESE strings ! E.g. name: "Home" etc. and not just name: "string"
// When data is coming from a backend do not use this "as const" method, because you don't know exactly what data it's going to be

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Berlin, Germany",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Front-End Developer",
    location: "Berlin, Germany",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Berlin, Germany",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "New in Town.",
    description:
      "Collect all new favorite spots in one app to discover the place you have moved to.",
    tags: ["React", "TypeScript", "MongoDB", "Tailwind", "Styled Components"],
    imageUrl: newInTownImg,
  },
  {
    title: "Das Beste des Tages.",
    description:
      "My app helps you to focus on the positive in everyday life and serves as a motivation booster. Record your daily highlights and save your joyful moments as favorites.",
    tags: ["React", "Next.js", "Styled Components"],
    imageUrl: dasBesteDesTagesImg,
  },
  {
    title: "Rick & Morty",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
    tags: ["React", "Styled Components", "REST-API",],
    imageUrl: rickAndMortyImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "GitHub",
  "Tailwind",
  "Styled Components",
  "Framer Motion",
  "Bootstrap",
  "BEM",
  "Node.js",
  "MongoDB",
  "mongoose",
  "Express.js",
  "npm",
  "Accessibility/A11y",
  "Agile Methods",
  "SCRUM",
  
] as const;