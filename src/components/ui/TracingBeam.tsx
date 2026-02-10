"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { cn } from "../../lib/utils";

interface TracingBeamProps {
  children: React.ReactNode;
  className?: string;
}

export function TracingBeam({ children, className }: TracingBeamProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Map scroll progress to path drawing
  const pathLength = useTransform(smoothProgress, [0, 1], [0, 1]);
  const pathOpacity = useTransform(smoothProgress, [0, 0.05], [0, 1]);

  // Dot position follows scroll progress along the SVG height
  const dotY = useTransform(smoothProgress, [0, 1], [0, 100]);

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full", className)}
    >
      {/* Tracing beam SVG - left side */}
      <div className="absolute left-4 top-0 bottom-0 w-6 md:left-8">
        <svg
          viewBox="0 0 20 100"
          preserveAspectRatio="none"
          className="h-full w-full"
          fill="none"
        >
          {/* Background track line */}
          <line
            x1="10"
            y1="0"
            x2="10"
            y2="100"
            stroke="rgba(0, 240, 255, 0.1)"
            strokeWidth="1"
          />

          {/* Animated tracing line */}
          <motion.line
            x1="10"
            y1="0"
            x2="10"
            y2="100"
            stroke="url(#beam-gradient)"
            strokeWidth="2"
            style={{
              pathLength,
              opacity: pathOpacity,
            }}
            strokeLinecap="round"
          />

          {/* Glowing dot at leading edge */}
          <motion.circle
            cx="10"
            r="4"
            fill="#00f0ff"
            style={{
              cy: dotY,
              opacity: pathOpacity,
            }}
            filter="url(#glow)"
          />

          {/* SVG filter for glow effect */}
          <defs>
            <linearGradient
              id="beam-gradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#00e5ff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#a78bfa" stopOpacity="1" />
            </linearGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>
      </div>

      {/* Content area - offset to the right */}
      <div className="pl-16 md:pl-24">
        {children}
      </div>
    </div>
  );
}
