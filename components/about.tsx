"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-32"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>{" "}
      <p className="mb-6">
        After graduating with a diploma degree in{" "}
        <span className="font-medium">Communications Design</span> at FH
        Dortmund and working for 10 years as a documentary & portrait
        photographer, I decided to pursue my passion for programming. I enrolled
        in a coding bootcamp and learned{" "}
        <span className="font-medium">Fullstack Web Development</span>. I like
        to stay busy and always have a project in the works. Take a look at some
        of the applications I’ve dedicated my time to.{" "}
      </p>
      <p className="mb-6">
        I'm currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a{" "}
        <span className="font-medium">Frontend or Fullstack Developer</span> in{" "}
        <span className="font-medium">Berlin</span>, Germany. I’m very excited
        to work as a developer and I’m{" "}
        <span className="italic">passionate</span> about beautiful UX/UI and
        clean code.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is <span className="font-medium">React</span> and{" "}
        <span className="font-medium">Next.js</span>. I'm also familiar with{" "}
        <span className="font-medium">TypeScript, Tailwind CSS, Node.js,</span>{" "}
        and <span className="font-medium">MongoDB</span>. I am structured,
        focused and dedicated with empathetic social & communication skills.
        Also, I’m a strong believer in lifelong learning and love to work with
        a thriving & supportive team.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I love cooking{" "}
        delicious vegan dishes or sweet treats. I enjoy going to the gym, do
        yoga or meet & chat with my friends.
      </p>
    </motion.section>
  );
}
