"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";

export function InfiniteMovingCards({
  items,
  direction = "left",
  speed = "normal",
  className,
}: {
  items: { quote: string; name: string; title: string }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current || started) return;

    const scrollerContent = Array.from(scrollerRef.current.children);
    scrollerContent.forEach((item) => {
      const clone = item.cloneNode(true) as HTMLElement;
      scrollerRef.current?.appendChild(clone);
    });

    const durationMap: Record<string, string> = {
      fast: "20s",
      normal: "40s",
      slow: "60s",
    };

    containerRef.current.style.setProperty(
      "--duration",
      durationMap[speed] || "40s"
    );
    containerRef.current.style.setProperty("--gap", "1rem");

    setStarted(true);
  }, [speed, started]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative z-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max gap-[var(--gap,1rem)] py-4",
          started && direction === "left" && "animate-marquee",
          started && direction === "right" && "animate-marquee-reverse",
          "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-8 py-6 backdrop-blur-sm"
          >
            <blockquote>
              <p className="text-sm leading-relaxed text-white/70">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="mt-4 flex items-center gap-3">
                <div>
                  <p className="text-sm font-semibold text-[#00f0ff]">
                    {item.name}
                  </p>
                  <p className="text-xs text-white/40">{item.title}</p>
                </div>
              </footer>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
}
