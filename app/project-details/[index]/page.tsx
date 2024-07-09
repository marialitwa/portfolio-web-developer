"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { projectDetails } from "@/lib/data";
import SectionHeading from "@/components/section-heading";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useActiveSectionContext } from "@/context/active-section-context";

type ProjectDetailsProps = {
  projectTitle: string;
  projectDescription: string;
  techStack: string;
  websiteUrl: string;
  githubUrl: string;
  problemsAndThoughts: string;
  lessonsLearned: string;
  imageUrl: StaticImageData;
  appScreenshot01: StaticImageData;
  appScreenshot02: StaticImageData;
};

export default function ProjectDetailsPage() {
  const router = useRouter();
  const params = useParams();

  const index = params.index as string;

  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <div className="scroll-mt-32 mb-28">
      <header className="z-[999] relative">
        <button
          className="fixed top-5 left-5 px-5 py-2 text-[0.9rem] font-medium capitalize text-gray-600 rounded-full border border-white border-opacity-40
        bg-white bg-opacity-40 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] 
        
        dark:bg-gray-950 dark:bg-opacity-75 dark:border-black/40"
          type="button"
          onClick={() => {
            setActiveSection("Projects");
            setTimeOfLastClick(Date.now());
            router.push("/#projects");
          }}
        >
          Back
        </button>
      </header>
      <div className="flex flex-col items-center -mt-6">
        {/*  -- TITLE -- */}
        <section
          className="w-[55rem] sm:mb-40 border border-white border-opacity-40
         bg-white bg-opacity-60 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] rounded-3xl px-10 py-8"
        >
          <SectionHeading>
            {projectDetails[Number(index)].projectTitle}
          </SectionHeading>

          {/*  -- DESCRIPTION -- */}
          <p className="mb-6 leading-7">
            {projectDetails[Number(index)].projectDescription}
          </p>

          {/*  -- LINKS -- */}
          <div className="flex items-center justify-center gap-6 mb-6">
            <Link
              target="_blank"
              className="bg-gray-900 text-white px-7 py-3 
              flex items-center gap-2 rounded-full outline-none 
              focus:scale-110 hover:scale-110 hover:bg-gray-950 
              active:scale-105 transition"
              href={projectDetails[Number(index)].websiteUrl}
            >
              View Site
            </Link>
            <Link
              target="_blank"
              className="bg-gray-900 text-white px-7 py-3 
              flex items-center gap-2 rounded-full outline-none 
              focus:scale-110 hover:scale-110 hover:bg-gray-950 
              active:scale-105 transition"
              href={projectDetails[Number(index)].githubUrl}
            >
              View on GitHub
            </Link>
          </div>
        </section>

        {/*  -- APP IMPRESSIONS -- */}
        <section
          className="w-[55rem] sm:mb-40 flex flex-col items-center border border-white border-opacity-40
         bg-white bg-opacity-90 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] rounded-3xl px-10 py-8 -mt-10"
        >
          <h3 className="text-[1.35rem] capitalize mb-6">App impressions</h3>
          <Image
            className="justify-center items-center mb-8"
            src={projectDetails[Number(index)].appScreenshot01}
            alt="App impressions"
            quality={95}
          />
          <Image
            className="justify-center items-center"
            src={projectDetails[Number(index)].appScreenshot02}
            alt="App impressions"
            quality={95}
          />
        </section>

        {/*  -- TECH STACK -- */}
        <section
          className="w-[55rem] sm:mb-40 border border-white border-opacity-40
         bg-white bg-opacity-90 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] rounded-3xl px-10 py-8 -mt-10"
        >
          <h3 className="text-[1.35rem] capitalize mb-8 text-center">
            Tech stack
          </h3>
          <ul className="mb-6 flex flex-wrap justify-center gap-2.5 text-gray-800">
            {projectDetails[Number(index)].techStack.map(
              (technology, index) => (
                <li
                  key={index}
                  className=" bg-gray-100 borderBlack rounded-xl px-5 py-3
                  dark:bg-white/10 dark:text-white/80 dark:border dark:border-white/5"
                >
                  {technology}
                </li>
              )
            )}
          </ul>
        </section>

        {/* -- PROBLEMS AND THOUGHTS -- */}
        <section
          className="w-[55rem] sm:mb-40 flex flex-col items-center border border-white border-opacity-40
         bg-white bg-opacity-90 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] rounded-3xl px-10 py-8 -mt-10"
        >
          <h3 className="text-[1.35rem] capitalize mb-6">
            Problems and thought process
          </h3>
          <p className="leading-7">
            {projectDetails[Number(index)].problemsAndThoughts}
          </p>
        </section>

        {/* -- LESSONS LEARNED -- */}
        <section
          className="w-[55rem] sm:mb-40 flex flex-col items-center border border-white border-opacity-40
         bg-white bg-opacity-90 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] rounded-3xl px-10 py-8 -mt-10"
        >
          <h3 className="text-[1.35rem] capitalize mb-6">Lessons learned</h3>
          <p className="leading-7">
            {projectDetails[Number(index)].lessonsLearned}
          </p>
        </section>
      </div>
    </div>
  );
}
