"use client";

import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group flex justify-center items-center gap-2 h-[3rem] w-[8rem]
           bg-gray-900 text-white rounded-full outline-none transition-all 
           focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105
           disabled:scale-100 disabled:bg-opacity-65
           dark:bg-white dark:bg-opacity-20"
      // styling can be easily adjusted for disabled button state
      disabled={pending}
      // If pending is true disable the button and apply disabled:styling
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane
            className="text-xs opacity-80 transition-all 
          group-hover:-translate-y-1 group-hover:translate-x-1"
          />
        </>
      )}
    </button>
  );
}
