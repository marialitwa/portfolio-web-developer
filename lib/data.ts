import React from "react";
import { CgWorkAlt } from "react-icons/cg";
// import { FaReact } from "react-icons/fa";
import { TiImage } from "react-icons/ti";

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
      "I graduated after 5 months of studying fullstack web development full-time at Code Academy Berlin with 840 hrss of everyday coding. I'm open to full-time opportunities.",
    // icon: React.createElement(FaReact),
    icon: React.createElement(LuGraduationCap),
    date: "Nov 2023 - April 2024",
  },
  {
    title: "Image editor",
    location: "Cologne, Germany / remote",
    description:
      "I worked as a picture editor for Deutsche Welle in the online editorial team for 3 years.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2023",
  },
  {
    title: "Photographer",
    location: "Cologne, Germany & Middle East",
    description:
      "I worked as a portraiture & documentary photographer for NGOs, editorial and corporate clients.",
    icon: React.createElement(TiImage),
    date: "2012 - 2022",
  },

] as const;

export const projectsData = [
  {

    title: "New in Town.",
    description:
      "Collect all new favorite spots in one app to discover the place you have moved to.",
    tags: ["MERN", "React", "TypeScript", "MongoDB", "Tailwind CSS", "Styled Components"],
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
    tags: ["React", "JavaScript", "REST-API", "CSS", "Styled Components"],
    imageUrl: rickAndMortyImg,
  },
] as const;

export const projectDetails = [

  {
    id: 1,
    projectTitle: "New in Town.",
    projectDescription: "I'm currently working on my fullstack app New in Town. A user can collect and save all new & neccessary places after moving to a new city. New doctors to see, new cafés, restaurants and bars you get recommendations for and want to go out to, new places for trips in & around the city, new haircutters, new spa & wellness spots, and so on and so forth. I developed the web app as my first MERN Stack project during my professional education as a Fullstack Web Developer at Code Academy Berlin. The idea came to me after I moved from Cologne to Berlin in 2023. Before and after the move, I collected all kinds of informations in different apps with little structure. That’s why I set out to build a web app that is well structured and easy to use, and which helps the user to arrive and settle better in a new habitat.",
    techStack: ["React", "React Context", "React Router", "JavaScript", "TypeScript", "MongoDB", "mongoose", "Express", "Node.js", "HTML", "CSS", "Tailwind CSS", "Styled Components", "Authentication", "Authorization", "JSON Web Token", "bcrypt"],
    websiteUrl: "https://new-in-town.vercel.app/",
    githubUrl: "https://github.com/marialitwa/mern-new-in-town",
    problemsAndThoughts: "Like most projects, I ran into a few bumps along the way. One particularly difficult area was understanding how to structure server-side code and the database with MongoDB. As for the CSS, I wanted to learn Tailwind along this project. In the end though, my brain was too busy learning backend technologies and because of the greater familiarity, I often ended up using Styled Components. Looking back, I would use either Tailwind or Styled Components to have a clear and well-structured CSS.",
    lessonsLearned: "I could spend all day describing the lessons that I learned while working on this project. It’s my first fullstack web application project and I'm still working on it. Developing the backend and frontend and implementing a whole bunch of backend technologies was definitely a lot to process and apply for the first time. I learned about middlewares, models, routes, controller functions, passport tokens, bcrypt, authentication and so on. I’d say the most important lesson was how backend and frontend work together and how the backend is structured in the MERN stack. I was very grateful to have supportive mentors around me that I could always ask for help. I really learned a lot during code reviews and pair programming sessions with them and it definitely helped me overcome some frustrating moments. I'm proud to have achieved so much and look forward to developing the app further.",
  },
  {
    id: 2,
    projectTitle: "Das Beste des Tages.",
    projectDescription: "My App Das Beste des Tages. (The Best of Your Day.) helps to focus on the positive things on a daily basis. In the mornings you can reflect on what you're looking forward to today. In the evenings about what was your highlight during the day, what made you feel happy. My favorite feature is that you can treasure your chosen highlights, and that can serve as your feel good booster whenever you need one. I developed this app as my capstone project during the final four weeks of the neue fische Frontend Web Development Bootcamp in winter 2022. Please note: The design is optimized for mobile usage. Please switch your browser to responsive mode (iPhone SE/6/7/8).",
    techStack: ["React", "Next.js", "JavaScript", "HTML", "CSS", "Styled Components", "LocalStorage", "uuid", "Jest", "user stories"],
    websiteUrl: "https://das-beste-des-tages.vercel.app/",
    githubUrl: "https://github.com/marialitwa/capstone-project",
    problemsAndThoughts: "This project was my first real frontend web app project, and as always there were some challenges to overcome. The biggest difficulty for me was creating the logic for the dynamic page routing to allow the user to navigate back and forth through the data and see their responses from the corresponding day. I was able to accomplish this together with my mentor, a senior programmer, in a pair programming session, which was a great experience to learn from. I also put a lot of thought into the design and user flow by creating low-key wireframes and a 'Look & Feel' moodboard, to have a clear vision of the app as it speeds up the programming process. I was grateful for the feedback on my user stories from my fellow students, which helped to improve a clear and simple user experience.  I used Styled Components, because the structure of CSS-in-JS is much clearer and prevents overrides.",
    lessonsLearned: "Here, too, I learned a lot, a lot, a lot. Apart from the technologies, one important thing I learned was that I shouldn't take too long to ask for help. It's definitely not that I'm afraid or too shy. It's more that I truely want to understand the problem and find a solution. Setting time limits during coding helped me to work independently and stay focused, avoiding frustration and wasted time. Also, I realized the importance of daily documentation of achievements to maintain motivation and focus on my progress rather than struggles.",
  },
  {
    id: 3,
    projectTitle: "Rick & Morty.",
    projectDescription: "This web app is a mini refresh React project using the Rick & Morty REST-API to search for characters & display specific data about each character.",
    techStack: ["React", "JavaScript", "HTML", "CSS", "Styled Components"],
    websiteUrl: "https://react-rick-n-morty.vercel.app/",
    githubUrl: "https://github.com/marialitwa/react_rick-and-morty",
    problemsAndThoughts: "t.b.a.",
    lessonsLearned: "t.b.a.",
  }


] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js (Page & App Router)",
  "Git",
  "GitHub",
  "Tailwind CSS",
  "Styled Components",
  "Framer Motion",
  "Bootstrap",
  "BEM",
  "REST API",
  "Node.js",
  "MongoDB",
  "mongoose",
  "Express.js",
  "Postman",
  "npm",
  "User Stories",
  "Accessibility",
  "Agile Methods",
  "SCRUM",

] as const;