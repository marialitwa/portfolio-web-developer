"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      aria-label="color theme toggle button"
      className="fixed bottom-5 right-5 text-black text-xl bg-white w-[3.25rem] h-[3.25rem] 
    bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full 
    flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all
     dark:bg-gray-950 dark:text-gray-400 dark:border-black/40"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
