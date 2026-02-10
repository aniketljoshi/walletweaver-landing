"use client";

import React, { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface AuroraBackgroundProps {
  children: ReactNode;
  className?: string;
  showRadialGradient?: boolean;
}

export function AuroraBackground({
  children,
  className,
  showRadialGradient = true,
}: AuroraBackgroundProps) {
  return (
    <div
      className={cn(
        "relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-void-deep",
        className
      )}
    >
      {/* Primary aurora gradient layer */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: [
            "repeating-linear-gradient(100deg, rgba(0,240,255,0.08) 0%, rgba(0,229,255,0.05) 7%, transparent 10%, transparent 12%, rgba(167,139,250,0.06) 16%)",
            "repeating-linear-gradient(100deg, rgba(0,240,255,0.12) 10%, rgba(52,211,153,0.06) 15%, rgba(167,139,250,0.06) 20%, rgba(0,229,255,0.08) 25%, rgba(52,211,153,0.04) 30%)",
          ].join(", "),
          backgroundSize: "300% 200%",
          animation: "aurora 30s ease infinite",
        }}
      />

      {/* Secondary aurora layer with difference blend */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: [
            "repeating-linear-gradient(100deg, rgba(0,240,255,0.06) 0%, rgba(167,139,250,0.04) 7%, transparent 10%, transparent 12%, rgba(52,211,153,0.05) 16%)",
            "repeating-linear-gradient(100deg, rgba(52,211,153,0.1) 10%, rgba(0,229,255,0.06) 15%, rgba(167,139,250,0.08) 20%, rgba(0,240,255,0.06) 25%, rgba(167,139,250,0.04) 30%)",
          ].join(", "),
          backgroundSize: "300% 200%",
          animation: "aurora 30s ease infinite reverse",
          mixBlendMode: "difference",
        }}
      />

      {/* Radial gradient mask for vignette effect */}
      {showRadialGradient && (
        <div
          className="pointer-events-none absolute inset-0 bg-void-deep"
          style={{
            maskImage:
              "radial-gradient(ellipse at center, transparent 20%, black 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, transparent 20%, black 70%)",
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 w-full">{children}</div>

      <style>{`
        @keyframes aurora {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
}
