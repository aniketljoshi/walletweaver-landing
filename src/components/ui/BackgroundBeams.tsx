"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface BackgroundBeamsProps {
  className?: string;
}

interface Beam {
  id: number;
  x1: string;
  x2: string;
  delay: number;
  duration: number;
  opacity: number;
}

export function BackgroundBeams({ className }: BackgroundBeamsProps) {
  const beams: Beam[] = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x1: `${10 + Math.random() * 80}%`,
      x2: `${10 + Math.random() * 80}%`,
      delay: Math.random() * 5,
      duration: 4 + Math.random() * 6,
      opacity: 0.1 + Math.random() * 0.15,
    }));
  }, []);

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="beam-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(0,229,255,0)" />
            <stop offset="50%" stopColor="rgba(0,229,255,0.5)" />
            <stop offset="100%" stopColor="rgba(0,229,255,0)" />
          </linearGradient>
        </defs>

        {beams.map((beam) => (
          <motion.line
            key={beam.id}
            x1={beam.x1}
            y1="0%"
            x2={beam.x2}
            y2="100%"
            stroke="url(#beam-gradient)"
            strokeWidth="1"
            initial={{
              pathLength: 0,
              opacity: 0,
            }}
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, beam.opacity, 0],
            }}
            transition={{
              duration: beam.duration,
              delay: beam.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
}
