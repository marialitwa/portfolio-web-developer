"use client";
// Framer Motion is using useEffect/useState that is why I need to declare this component to a client component

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      id="home"
    >
      {/* ===== IMAGE & EMOJI ===== */}
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
              src="https://images.squarespace-cdn.com/content/v1/517ece06e4b0f2c07592f79b/1438813079806-KRO5UGHV4TEZ2VQBFE8D/image-asset.jpeg?format=1000w"
              alt="Portrait picture of Maria Litwa"
              width="192"
              height="192"
              quality="95"
              // default quality set by Next.js is 75 or 80
              priority={true}
              // => image will load as fast as possible
              className="h-24 w-24 object-cover rounded-full border-[0.25rem] border-white shadow-xl"
              // object-cover will preserve aspect-ratio
            />
          </motion.div>
          {/* EMOJI optional */}
          <motion.span
            className="text-4xl absolute bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              // stiffness defines intensity of bounce effect
              delay: 0.1,
              duration: 0.7,
            }}
          >
            🦩
          </motion.span>
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
        >
          Contact me here{" "}
          <BsArrowRight
            className="opacity-70 
          group-hover:translate-x-1 transition"
          />{" "}
        </Link>

        <a
          href="/assets/CV_BlankoTest.pdf"
          download={true}
          className="group bg-white px-7 py-3 flex items-center 
          gap-2 rounded-full font-medium outline-none focus:scale-110 
          hover:scale-110 active:scale-105 transition cursor-pointer 
          border border-black/10"
        >
          Download CV{" "}
          <HiDownload
            className="opacity-60 
          group-hover:translate-y-1 transition"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/maria-litwa/"
          target="_blank"
          className="bg-white p-4 text-gray-800 flex 
          items-center gap-2 rounded-full focus:scale-[1.15] 
          hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition 
          cursor-pointer border border-black/10"
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
          cursor-pointer border border-black/10"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
