"use client";
// Motion is using useEffect/useState that is why I need to declare this component to a client component

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
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

      <motion.p
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hej, I'm Maria.</span> I'm a{" "}
        <span className="font-bold">frontend web developer</span> with a{" "}
        <span className="font-bold">background in design</span> and photography.
        I enjoy building <span className="italic">sites & apps</span>. My focus
        is <span className="underline">React (Next.js)</span>.
      </motion.p>
    </section>
  );
}