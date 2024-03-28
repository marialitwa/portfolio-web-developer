"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  // creates a staggered animation for each index item having a delay of 0.05s more than the previous one
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      ref={ref}
      id="skills"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
      // scroll-mt-28 => will scroll to section and start of section will have a margin-top of 28
      // otherwise the section container start will be at the viewport top pixel 0
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3
            dark:bg-white/10 dark:text-white/80 dark:border dark:border-white/5"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            // Below: whileInView is a Framer Motion thing => animation happens only while in viewport
            whileInView="animate"
            // Below: Animation will only happen ONCE while in viewport
            viewport={{
              once: true,
            }}
            // Below: custom is need for staggering effect => check fadeInAnimationVariants variable
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
