"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/server-actions/sendEmail";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      className="mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
      // NOTE Nice responsive CSS trick: w-[min(100%, 38rem)]
      // 38rem is the fixed value. Whenever the viewport is smaller make width 100%
      // => Always apply the smaller value of these two whichever it is in the current viewport size.

      id="contact"
      ref={ref}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-4">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:contact@marialitwa.com">
          contact@marialitwa.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="flex flex-col mt-10"
        action={async (formData) => {
          await sendEmail(formData);
          // New feature: with formData.get() I can access the input values!
          // This is running on the client-side only
          // console.log("Running on CLIENT:");
          // console.log(formData.get("senderEmail"));
          // console.log(formData.get("message"));
          // Check sendEmail.ts for server side rendering/server action
        }}
      >
        <label htmlFor="email" aria-label="Email"></label>
        <input
          className="h-14 px-4 rounded-lg borderBlack outline-gray-600"
          type="email"
          id="email"
          name="senderEmail"
          placeholder="ada.lovelace@example.com"
          // client side validation:
          maxLength={500}
          required
        />
        <label htmlFor="message" aria-label="Message"></label>
        <textarea
          className="h-52 my-3 rounded-lg p-4 borderBlack outline-gray-600"
          name="message"
          id="message"
          placeholder="Your Message"
          // client side validation:
          maxLength={5000}
          required
        ></textarea>
        <button
          className="group flex justify-center items-center gap-2 h-[3rem] w-[8rem]
           bg-gray-900 text-white rounded-full outline-none transition-all 
           focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105"
          type="submit"
        >
          Submit{" "}
          <FaPaperPlane
            className="text-xs opacity-80 transition-all 
          group-hover:-translate-y-1 group-hover:translate-x-1"
          />
        </button>
      </form>
    </motion.section>
  );
}
