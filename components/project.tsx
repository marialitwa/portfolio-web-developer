"use client";

import { projectDetails, projectsData } from "@/lib/data";
import { useScroll, motion, useTransform } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { BsArrowRight } from "react-icons/bs";

type ProjectProps = {
  title: string;
  description: string;
  tags:
    | readonly [
        "React",
        "TypeScript",
        "MongoDB",
        "Tailwind",
        "Styled Components"
      ]
    | readonly ["React", "Next.js", "Styled Components"]
    | readonly ["React", "Styled Components", "REST-API"];
  imageUrl: StaticImageData;
  index: number;
};

// REVIEW
// More specific type:
// type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  index,
}: ProjectProps) {
  // Scroll animation to enlarge each project card by entering the viewport.
  // Here the div wrapper is animated though for better smoothness
  // REVIEW useRef
  const ref = useRef<HTMLDivElement>(null);
  // REVIEW https://www.framer.com/motion/use-scroll/
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  // REVIEW useTransform
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      {/* "last" property in CSS Tailwind: I can define a specific value to the last element only */}

      <section
        className="bg-gray-100 max-w-[42rem] border border-black/5 
                    rounded-lg overflow-hidden sm:pr-8 relative sm:h-[22rem]
                     hover:bg-gray-200 transition sm:group-odd:pl-8
                     dark:bg-white/10 dark:hover:bg-white/20 dark:text-white
                     dark:border dark:border-white/5"
      >
        <div
          className="px-5 pt-4 pb-7 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] 
                    flex flex-col h-full sm:group-odd:ml-[18rem] "
        >
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 text-gray-700 leading-relaxed dark:text-white/70">
            {description}
          </p>

          {/* {projectDetails.map((project) => (
            <Link
              key={project.id}
              href={`/project-details/${project.id}`}
              className="underline font-semibold text-gray-800 text-sm uppercase mt-4 flex items-center"
            >
              View project
              <BsArrowRight
                className="mx-1
          hover:translate-x-1 transition -rotate-45 text-sm -translate-y-[0.03rem] font-extrabold"
              />
            </Link>
          ))} */}

          <Link
            href={`/project-details/${index}`}
            className="underline font-semibold text-gray-800 text-sm uppercase mt-4 flex items-center"
          >
            View project
            <BsArrowRight
              className="mx-1
          hover:translate-x-1 transition -rotate-45 text-sm -translate-y-[0.03rem] font-extrabold"
            />
          </Link>
          <ul
            className="flex flex-wrap gap-2 mt-4 
                         sm:mt-auto"
          >
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.8] text-[0.7rem] text-white uppercase 
                            tracking-wider px-3.5 py-1.5 rounded-full
                             dark:text-white/70 dark:bg-black/55"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
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
      </section>
    </motion.div>
  );
}
