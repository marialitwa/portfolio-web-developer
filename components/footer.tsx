import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-1.5 block text-xs">
        &copy; 2024 Maria Litwa. All rights reserved. Inspired by ByteGrad.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website: </span>built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
}
