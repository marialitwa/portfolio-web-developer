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
    title: "Full-Stack Developer",
    location: "Berlin, Germany",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
  {
    title: "Front-End Developer",
    location: "Berlin, Germany",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - present",
  },
  {
    title: "Graduated bootcamp",
    location: "Berlin, Germany",
    description:
      "I graduated after 5 months of studying fullstack web development at Code Academy Berlin. I immediately found a job as a front-end web developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
] as const;

export const projectsData = [
  {
  
    title: "New in Town.",
    description:
      "Collect all new favorite spots in one app to discover the place you have moved to.",
    tags: ["React", "TypeScript", "MongoDB", "Tailwind CSS", "Styled Components"],
    imageUrl: newInTownImg,

  },
  { 
    title: "Das Beste des Tages.",
    description:
      "My app helps you to focus on the positive in everyday life and serves as a motivation booster.",
    tags: ["Next.js", "JavaScript", "CSS", "Styled Components"],
    imageUrl: dasBesteDesTagesImg,
  },
  {
    title: "Rick & Morty",
    description:
      "Discover the multi-dimensional world of Rick & Morty characters.",
    tags: ["React", "JavaScript", "REST-API", "CSS", "Styled Components" ],
    imageUrl: rickAndMortyImg,
  },
] as const;

export const projectDetails = [
  
  {
    id: 1,
    projectTitle: "New in Town.",
    projectDescription: "MERN: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ",
    techStack: ["React", "JavaScript", "TypeScript", "MongoDB", "Express", "Node.js", "CSS", "Tailwind CSS", "Styled Components" ], 
    websiteUrl: "https://mern-new-in-town.vercel.app/",
    githubUrl: "https://github.com/marialitwa/mern-new-in-town",   
  },
  {
    id: 2,
    projectTitle: "Das Beste des Tages.",
    projectDescription: "My App Das Beste des Tages. (The Best of Your Day.) helps to focus on the positive things on a daily basis. In the mornings you can reflect on what you're looking forward to today. In the evenings about what was your highlight during the day, what made you feel happy. My favorite feature is that you can treasure your chosen highlights, and that can serve as your feel good booster whenever you need one. I developed this app as my capstone project during the final four weeks of the neue fische Web Development Bootcamp in winter 2022. Please watch out: The design is optimized for mobile usage. Please switch your browser to responsive mode (iPhone SE/6/7/8).",
    techStack: ["React", "Next.js",  "JavaScript", "TypeScript", "CSS", "Styled Components", "LocalStorage" ], 
    websiteUrl: "https://das-beste-des-tages.vercel.app/",
    githubUrl: "https://github.com/marialitwa/capstone-project",   
  },
  {
    id: 3,  
    projectTitle: "Rick & Morty.",
    projectDescription: "NEXT.JS: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ",
    techStack: ["React", "JavaScript", "CSS", "Styled Components" ], 
    websiteUrl: "https://react-rick-and-morty-pi.vercel.app/",
    githubUrl: "https://github.com/marialitwa/react_rick-and-morty", 
  }
   

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
  "Tailwind CSS",
  "Styled Components",
  "Framer Motion",
  "Bootstrap",
  "BEM",
  "Node.js",
  "MongoDB",
  "mongoose",
  "Express.js",
  "Postman",
  "npm",
  "Accessibility",
  "Agile Methods",
  "SCRUM",
  
] as const;