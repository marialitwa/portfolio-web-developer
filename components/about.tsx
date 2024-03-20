"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
    >
      <SectionHeading>About me</SectionHeading>{" "}
      <p className="mb-3">
        After graduating with a diploma degree in{" "}
        <span className="font-medium">Communications Design</span> and working
        for 10 years as a photographer, I decided to pursue my passion for
        programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with{" "}
        <span className="font-medium">TypeScript and Tailwind</span>. I am
        always looking to learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a{" "}
        <span className="font-medium">Frontend Developer</span> in{" "}
        <span className="font-medium">Berlin</span>, Germany.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy going to
        the gym, watching series, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">
          healthy nutrition and fitness exercises
        </span>
        . I'm also learning how to play the ukulele.
      </p>
    </motion.section>
  );
}
