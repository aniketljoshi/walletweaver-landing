"use client";

import React from "react";
import { cn } from "../../lib/utils";

export function BentoGrid({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
}

export function BentoGridItem({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "group/bento row-span-1 rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all hover:border-white/[0.12] hover:bg-white/[0.04]",
        className
      )}
    >
      {header && <div className="mb-4">{header}</div>}
      <div className="flex items-center gap-3">
        {icon && (
          <span className="text-[#00f0ff] transition-colors group-hover/bento:text-[#a78bfa]">
            {icon}
          </span>
        )}
        {title && (
          <h3 className="text-lg font-semibold text-white tracking-tight">
            {title}
          </h3>
        )}
      </div>
      {description && (
        <p className="mt-2 text-sm leading-relaxed text-white/60">
          {description}
        </p>
      )}
    </div>
  );
}
