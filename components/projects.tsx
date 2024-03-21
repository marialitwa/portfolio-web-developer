import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Image from "next/image";

export default function Projects() {
  return (
    <section>
      <SectionHeading>My projects</SectionHeading>

      {projectsData.map((project, index) => (
        <React.Fragment key={index}>
          <Project {...project} />
        </React.Fragment>
      ))}
    </section>
  );
}

// type ProjectProps = {
//   title: string;
//   description: string;
//   tags: string;
//   imageUrl: StaticImageData;
// };

// More specific type:
type ProjectProps = (typeof projectsData)[number];

function Project({ title, description, tags, imageUrl }: ProjectProps) {
  return (
    <article
      className="group bg-gray-100 max-w-[42rem] border border-black/5 
    rounded-lg overflow-hidden sm:pr-8 relative sm:h-[22rem] mb-3 sm:mb-8 last:mb-0 odd:pl-8 hover:bg-gray-200 transition"
    >
      {/* "last" property in CSS Tailwind: I can define a specific value to the last element only */}

      <div
        className="px-5 pt-4 pb-7 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] 
      flex flex-col h-full group-odd:ml-[18rem]"
      >
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 text-gray-700 leading-relaxed">{description}</p>
        <ul
          className="flex flex-wrap gap-2 mt-4 
        sm:mt-auto"
        >
          {tags.map((tag, index) => (
            <li
              className="bg-black/[0.8] text-[0.7rem] text-white uppercase 
              tracking-wider px-3 py-1 rounded-full"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <Image
        className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        group-hover:scale-[1.04]
        
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2
          
        // applies to odd card numbers
        group-odd:group-hover:translate-x-3
        group-odd:group-hover:translate-y-3
        group-odd:group-hover:rotate-2

        // positions odd card numbers to the left side of card
        group-odd:right-[initial] group-odd:-left-40
        "
        src={imageUrl}
        alt="Project I worked on"
        quality={95}
      />
    </article>
  );
}
