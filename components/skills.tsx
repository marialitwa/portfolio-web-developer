"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      ref={ref}
      id="skills"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
      // scroll-mt-28 => will scroll to section and start of section will have a margin-top of 28
      // otherwise the section container start will be at the viewport top pixel
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <li className="bg-white borderBlack rounded-xl px-5 py-3" key={index}>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
