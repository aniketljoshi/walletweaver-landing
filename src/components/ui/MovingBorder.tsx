"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export function MovingBorderButton({
  children,
  className,
  containerClassName,
  borderRadius = "9999px",
  duration = 4,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  borderRadius?: string;
  duration?: number;
}) {
  return (
    <div
      className={cn(
        "relative inline-flex overflow-hidden p-[2px]",
        containerClassName
      )}
      style={{ borderRadius }}
    >
      {/* Rotating gradient border */}
      <motion.div
        className="absolute inset-[-100%]"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0%, #00f0ff 25%, #a78bfa 50%, transparent 75%, transparent 100%)",
        }}
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration,
          ease: "linear",
        }}
      />

      {/* Inner content */}
      <div
        className={cn(
          "relative z-10 flex items-center justify-center bg-[#000000] px-6 py-3 text-sm font-medium text-white",
          className
        )}
        style={{ borderRadius }}
      >
        {children}
      </div>
    </div>
  );
}
