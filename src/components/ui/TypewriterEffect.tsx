"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface TypewriterEffectProps {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}

export function TypewriterEffect({
  words,
  className,
  cursorClassName,
}: TypewriterEffectProps) {
  // Build a flat list of characters with their word-level className
  const characters = words.flatMap((word, wordIdx) => {
    const chars = word.text.split("").map((char) => ({
      char,
      className: word.className,
    }));
    // Add a space after each word except the last
    if (wordIdx < words.length - 1) {
      chars.push({ char: "\u00A0", className: undefined });
    }
    return chars;
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const charVariants = {
    hidden: {
      opacity: 0,
      display: "none" as const,
    },
    visible: {
      opacity: 1,
      display: "inline-block" as const,
      transition: {
        duration: 0.05,
      },
    },
  };

  return (
    <motion.div
      className={cn("inline-flex flex-wrap", className)}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {characters.map((item, idx) => (
        <motion.span
          key={`char-${idx}`}
          className={cn(
            "text-white",
            item.className
          )}
          variants={charVariants}
        >
          {item.char}
        </motion.span>
      ))}

      {/* Blinking cursor */}
      <motion.span
        className={cn(
          "inline-block ml-0.5 h-[1em] w-[2px] bg-[#00f0ff] align-middle",
          cursorClassName
        )}
        animate={{
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        |
      </motion.span>
    </motion.div>
  );
}
