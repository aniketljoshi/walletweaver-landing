"use client";

import React, { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface GridBackgroundProps {
  className?: string;
  children?: ReactNode;
  variant?: "grid" | "dots";
}

export function GridBackground({
  className,
  children,
  variant = "grid",
}: GridBackgroundProps) {
  return (
    <div className={cn("relative w-full", className)}>
      {/* Grid or dot pattern layer */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0",
          variant === "grid"
            ? "bg-grid-small-[rgba(0,229,255,0.03)]"
            : "bg-dot-[rgba(0,229,255,0.15)]"
        )}
        style={{
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }}
      />

      {/* Content */}
      {children}
    </div>
  );
}
