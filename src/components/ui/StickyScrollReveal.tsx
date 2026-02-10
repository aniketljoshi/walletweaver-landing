"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "../../lib/utils";

interface StickyScrollRevealProps {
  content: {
    title: string;
    description: string;
  }[];
  contentClassName?: string;
}

export function StickyScrollReveal({
  content,
  contentClassName,
}: StickyScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Determine active step index based on scroll progress
  const activeIndex = useTransform(scrollYProgress, (progress) => {
    const step = Math.floor(progress * content.length);
    return Math.min(step, content.length - 1);
  });

  const [activeStep, setActiveStep] = React.useState(0);

  React.useEffect(() => {
    const unsubscribe = activeIndex.on("change", (latest) => {
      setActiveStep(latest);
    });
    return () => unsubscribe();
  }, [activeIndex]);

  return (
    <div
      ref={containerRef}
      className={cn("relative", contentClassName)}
      // Each content step gets roughly 100vh of scroll space
      style={{ height: `${content.length * 100}vh` }}
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="mx-auto flex w-full max-w-7xl gap-8 px-4 md:gap-16 md:px-8">
          {/* Left column: sticky text */}
          <div className="flex w-full flex-col justify-center md:w-1/2">
            {content.map((item, idx) => (
              <motion.div
                key={idx}
                className="absolute max-w-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: activeStep === idx ? 1 : 0,
                  y: activeStep === idx ? 0 : 30,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {/* Step indicator */}
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#00f0ff]/30 bg-[#00f0ff]/10 text-sm font-medium text-[#00f0ff]">
                    {idx + 1}
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-r from-[#00f0ff]/30 to-transparent" />
                </div>

                <h3 className="mb-4 text-3xl font-bold leading-tight text-white md:text-4xl">
                  {item.title}
                </h3>
                <p className="text-base leading-relaxed text-white/60 md:text-lg">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right column: scrolling visual cards */}
          <div className="relative hidden w-1/2 md:flex md:items-center md:justify-center">
            {content.map((item, idx) => (
              <motion.div
                key={idx}
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                animate={{
                  opacity: activeStep === idx ? 1 : 0,
                  scale: activeStep === idx ? 1 : 0.9,
                  rotateY: activeStep === idx ? 0 : -15,
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{ perspective: "1000px" }}
              >
                {/* Glass card */}
                <div className="relative h-80 w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 backdrop-blur-xl">
                  {/* Gradient accent at top */}
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#00f0ff] via-[#a78bfa] to-[#34d399]" />

                  {/* Inner glow */}
                  <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-[#00f0ff]/10 blur-3xl" />
                  <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-[#a78bfa]/10 blur-3xl" />

                  {/* Card content */}
                  <div className="relative z-10 flex h-full flex-col justify-between">
                    <div>
                      <div className="mb-3 inline-flex rounded-lg border border-[#00f0ff]/20 bg-[#00f0ff]/5 px-3 py-1 text-xs font-medium text-[#00f0ff]">
                        Step {idx + 1}
                      </div>
                      <h4 className="text-xl font-semibold text-white">
                        {item.title}
                      </h4>
                    </div>

                    {/* Decorative grid pattern */}
                    <div className="grid grid-cols-4 gap-2">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <motion.div
                          key={i}
                          className="h-8 rounded-md border border-white/[0.05] bg-white/[0.02]"
                          initial={{ opacity: 0 }}
                          animate={{
                            opacity: activeStep === idx ? 1 : 0,
                          }}
                          transition={{
                            delay: i * 0.05,
                            duration: 0.3,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
