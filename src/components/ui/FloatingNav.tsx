"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";

interface FloatingNavProps {
  navItems: {
    name: string;
    link: string;
  }[];
  className?: string;
}

export function FloatingNav({ navItems, className }: FloatingNavProps) {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 100) {
        // Near top of page - always show
        setVisible(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show
        setVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down - hide
        setVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{
            duration: 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={cn(
            "fixed top-4 inset-x-0 z-[100] mx-auto flex max-w-fit items-center justify-center gap-1 rounded-full",
            "border border-white/[0.08] bg-[#000000]/80 px-6 py-3",
            "shadow-[0_0_30px_rgba(0,240,255,0.08)] backdrop-blur-2xl",
            className
          )}
        >
          {navItems.map((item, idx) => (
            <a
              key={`nav-${idx}`}
              href={item.link}
              className={cn(
                "relative px-4 py-2 text-sm font-medium text-white/60 transition-colors duration-200",
                "hover:text-[#00f0ff]",
                "group"
              )}
            >
              {/* Hover glow background */}
              <span className="absolute inset-0 rounded-full bg-[#00f0ff]/0 transition-all duration-200 group-hover:bg-[#00f0ff]/5" />
              <span className="relative z-10">{item.name}</span>
            </a>
          ))}

          {/* Subtle border glow on the entire nav */}
          <div className="pointer-events-none absolute inset-0 rounded-full border border-[#00f0ff]/10" />
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
