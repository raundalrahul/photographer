import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Alice Smith",
    role: "Travel Photographer",
    text: "Working with this photographer was an absolute delight. Their attention to detail and ability to capture the perfect moment blew me away.",
  },
  {
    id: 2,
    name: "Bob Johnson",
    role: "Wedding Couple",
    text: "Our wedding photos are beyond beautiful! Every shot tells a story, and we couldn’t be happier with how they turned out.",
  },
  {
    id: 3,
    name: "Catherine Lee",
    role: "Brand Owner",
    text: "Professional, creative, and reliable. The photos elevated my brand’s image and made a huge impact on our marketing materials.",
  },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const { name, role, text } = testimonials[index];

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-white p-16 my-20 rounded-2xl shadow-lg flex flex-col items-center">
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={testimonials[index].id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-lg italic mb-4">“{text}”</p>
          <h3 className="text-xl font-semibold">{name}</h3>
          <span className="text-sm text-gray-500">{role}</span>
        </motion.div>
      </AnimatePresence>

      <div className="mt-6 flex space-x-4">
        <button
          onClick={handlePrev}
          className="bg-black text-white px-4 py-2 rounded-full hover:opacity-80 transition"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="bg-black text-white px-4 py-2 rounded-full hover:opacity-80 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
}
