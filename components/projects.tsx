"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section className="scroll-mt-32 mb-28" id="projects" ref={ref}>
      <SectionHeading>My projects</SectionHeading>
      {projectsData.map((project, index) => (
        <React.Fragment key={index}>
          <Project {...project} index={index} />
        </React.Fragment>
      ))}
    </section>
  );
}
