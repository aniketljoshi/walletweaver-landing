"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export function LampEffect({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-start overflow-hidden bg-[#000000]",
        className
      )}
    >
      {/* Lamp cone container */}
      <div className="relative flex w-full items-center justify-center pt-40">
        {/* Left cone gradient */}
        <motion.div
          initial={{ scaleY: 0.5, opacity: 0.5 }}
          whileInView={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="absolute top-0 h-48 w-1/2 origin-top"
          style={{
            background:
              "conic-gradient(from 180deg at 50% 0%, transparent 40%, rgba(0, 240, 255, 0.2) 50%, transparent 60%)",
          }}
        />

        {/* Right cone gradient (mirror) */}
        <motion.div
          initial={{ scaleY: 0.5, opacity: 0.5 }}
          whileInView={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="absolute top-0 h-48 w-1/2 origin-top"
          style={{
            background:
              "conic-gradient(from 0deg at 50% 0%, transparent 40%, rgba(0, 240, 255, 0.2) 50%, transparent 60%)",
          }}
        />

        {/* Horizontal gradient line */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "33.333%", opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="absolute top-48 h-px bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent"
        />

        {/* Radial glow orb below line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="absolute top-48 h-40 w-1/3"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(0, 240, 255, 0.15) 0%, transparent 70%)",
            filter: "blur(20px)",
          }}
        />
      </div>

      {/* Content below lamp */}
      <div className="relative z-10 -mt-8 w-full">{children}</div>
    </div>
  );
}
