// src/components/BentoGridGallery.jsx (or wherever you use it)
import React from "react";
import { BentoGrid, Skeleton } from "./BentoGrid"; // Make sure Skeleton is exported or create it here/import it
import { BentoGridItem } from "./BentoGridItem";
import { cn } from "../lib/utils"; // Adjust path if needed
import {
  FaCameraRetro,
  FaImage,
  FaImages,
  FaUserEdit,
  FaMapMarkedAlt,
  FaCalendarAlt,
  FaCogs,
} from "react-icons/fa"; // Example icons

function BentoGridGallery() {
  // Define fake content items
  const items = [
    {
      title: "Vintage Shots",
      description: "Explore the beauty of classic photography techniques.",
      header: <Skeleton className="h-40 w-full" />, // Taller skeleton for main items
      icon: <FaCameraRetro className="h-4 w-4 text-neutral-500" />,
      className: "md:col-span-2", // Spanning
    },
    {
      title: "Digital Portraits",
      description: "Modern techniques for stunning digital captures.",
      header: <Skeleton className="h-20 w-full" />,
      icon: <FaImage className="h-4 w-4 text-neutral-500" />,
      className: "md:col-span-1",
    },
    {
      title: "Gallery Showcase",
      description: "Curated collections from various photoshoots.",
      header: <Skeleton className="h-20 w-full" />,
      icon: <FaImages className="h-4 w-4 text-neutral-500" />,
      className: "md:col-span-1",
    },
    {
      title: "Editing Workflow",
      description: "Learn about the post-processing steps.",
      header: <Skeleton className="h-40 w-full" />,
      icon: <FaUserEdit className="h-4 w-4 text-neutral-500" />,
      className: "md:col-span-2", // Spanning
    },
    {
      title: "Location Scouting",
      description: "Finding the perfect backdrop for every shot.",
      header: <Skeleton className="h-full w-full min-h-[6rem]" />, // Fill height for row-span
      icon: <FaMapMarkedAlt className="h-4 w-4 text-neutral-500" />,
      className: "md:row-span-2", // Spanning rows
    },
    {
      title: "Booking Calendar",
      description: "Check availability and schedule your session.",
      header: <Skeleton className="h-20 w-full" />,
      icon: <FaCalendarAlt className="h-4 w-4 text-neutral-500" />,
      className: "md:col-span-1",
    },
    {
      title: "Equipment Setup",
      description: "Details about the gear used for high-quality results.",
      header: <Skeleton className="h-20 w-full" />,
      icon: <FaCogs className="h-4 w-4 text-neutral-500" />,
      className: "md:col-span-1",
    },
  ];

  return (
    <>
      <p className="text-5xl p-16">Gallery</p>
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={cn("[&>p:text-lg]", item.className)} // Apply item-specific classNames like col-span/row-span
            // Added [&>p:text-lg] example for potential style overrides
          />
        ))}
      </BentoGrid>
    </>
  );
}

export default BentoGridGallery;

// If you didn't export Skeleton from BentoGridItem.jsx, define it here:
// const Skeleton = ({ className }) => (
//  <div
//    className={cn("animate-pulse rounded-md bg-neutral-200 dark:bg-neutral-800", className)}
//  />
// );
