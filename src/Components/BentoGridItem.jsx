// src/components/BentoGridItem.jsx
import React from "react";
import { cn } from "../lib/utils"; // Adjust the import path as needed

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  children, // Allow custom children as fallback or addition
}) => {
  return (
    <div
      className={cn(
        // Base styles with transition for hover effects
        "row-span-1 rounded-xl group/bento transition duration-200 p-4 bg-white dark:bg-zinc-900 border border-neutral-200 dark:border-white/[0.2] shadow-input justify-between flex flex-col space-y-4",
        // Hover effect
        "hover:shadow-xl",
        className // Allow overriding/adding classes (like col-span/row-span)
      )}
    >
      {/* Optional Header Element (e.g., image placeholder) */}
      {header}

      {/* Content Area */}
      <div className="group-hover/bento:translate-x-2 transition duration-200 flex-1">
        {/* Optional Icon */}
        {icon}
        {/* Title */}
        <div className="font-sans font-bold text-neutral-700 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        {/* Description */}
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
        {/* Render children if passed explicitly */}
        {children}
      </div>
    </div>
  );
};

// Optional: Simple Skeleton component for placeholder visuals
export const Skeleton = ({ className }) => (
  <div
    className={cn(
      "animate-pulse rounded-md bg-neutral-200 dark:bg-neutral-800",
      className
    )}
  />
);
