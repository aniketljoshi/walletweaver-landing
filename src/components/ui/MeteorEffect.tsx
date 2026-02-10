"use client";

import React, { useMemo } from "react";
import { cn } from "../../lib/utils";

export function MeteorEffect({ number = 20 }: { number?: number }) {
  const meteors = useMemo(() => {
    return Array.from({ length: number }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 6 + 2}s`,
      width: `${Math.random() * 60 + 40}px`,
    }));
  }, [number]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {meteors.map((meteor) => (
        <span
          key={meteor.id}
          className={cn(
            "absolute top-0 h-0.5 rotate-[215deg] animate-meteor rounded-full",
            "bg-gradient-to-r from-slate-500 to-transparent"
          )}
          style={{
            left: meteor.left,
            width: meteor.width,
            animationDelay: meteor.delay,
            animationDuration: meteor.duration,
          }}
        >
          {/* Meteor head */}
          <span
            className="absolute left-0 top-1/2 h-[3px] w-[3px] -translate-y-1/2 rounded-full bg-slate-300 shadow-[0_0_6px_2px_rgba(0,240,255,0.4)]"
          />
        </span>
      ))}
    </div>
  );
}
