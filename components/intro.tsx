"use client";
// Framer Motion is using useEffect/useState that is why I need to declare this component to a client component

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
// import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      id="home"
    >
      {/* ===== PORTRAIT IMAGE ===== */}
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              // default type is "spring" which is the bounce effect
              duration: 0.2,
            }}
          >
            <Image
              src="/assets/Portrait_MariaLitwa_CV_circle.png"
              alt="Portrait picture of Maria Litwa"
              width="250"
              height="250"
              quality="95"
              // default quality set by Next.js is 75 or 80
              priority={true}
              // => image will load as fast as possible
              className="h-32 w-32 object-cover rounded-full border-[0.22rem] border-white shadow-xl dark:border-opacity-20"
              // object-cover will preserve aspect-ratio
            />
          </motion.div>
        </div>
      </div>

      {/* ===== INTRO TEXT ===== */}
      <motion.h1
        className="mt-10 mb-16 px-4 text-2xl font-medium 
        !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hej, I'm Maria.</span> I'm a{" "}
        <span className="font-bold">frontend web developer</span> with a{" "}
        background in <span className="font-bold">design</span> and photography.
        I enjoy building <span className="italic">sites & apps</span>. My focus
        is <span className="underline">React (Next.js)</span>.
      </motion.h1>

      {/* ===== LINKS & BUTTONS ===== */}
      <motion.div
        className="flex flex-col sm:flex-row 
        items-center justify-center gap-4 px-4 text-lg"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 
          flex items-center gap-2 rounded-full outline-none 
          focus:scale-110 hover:scale-110 hover:bg-gray-950 
          active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight
            className="opacity-70 
          group-hover:translate-x-1 transition"
          />{" "}
        </Link>

        {/* ===== Disabled Download CV button ===== */}
        {/* <a
          href="/assets/CV_MariaLitwa_Frontend.pdf"
          download={true}
          className="group bg-white px-7 py-3 flex items-center 
          gap-2 rounded-full font-medium outline-none focus:scale-110 
          hover:scale-110 active:scale-105 transition cursor-pointer 
          borderBlack dark:bg-white/10"
        >
          Download CV{" "}
          <HiDownload
            className="opacity-60 
          group-hover:translate-y-1 transition"
          />
        </a> */}
        <a
          href="https://www.linkedin.com/in/maria-litwa/"
          target="_blank"
          className="bg-white p-4 text-gray-800 flex 
          items-center gap-2 rounded-full focus:scale-[1.15] 
          hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition 
          cursor-pointer borderBlack dark:bg-white/10 dark:text-white/75"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://www.github.com/marialitwa"
          target="_blank"
          className="bg-white p-4 text-gray-800 flex 
          items-center gap-2 rounded-full text-[1.35rem] 
          focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 
          active:scale-105 transition 
          cursor-pointer borderBlack dark:bg-white/10 dark:text-white/75"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
