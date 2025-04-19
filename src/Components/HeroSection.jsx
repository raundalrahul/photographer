import React from "react";

const HeroSection = () => {
  // --- Configuration ---
  // IMPORTANT: Replace this with the actual path to YOUR hero image.
  // If image is in 'public/images/', path is '/images/hero-background.jpg'
  // If imported from 'src/assets/', use the imported variable.
  const heroImageUrl = "/Images/bird2.jpg"; // <-- CHANGE THIS

  const headline = "Capturing Moments, Creating Memories"; // <-- CHANGE THIS
  const subheadline =
    "Specializing in [Your Speciality, e.g., Portrait, Wedding, Landscape] photography. Let me tell your story through impactful visuals."; // <-- CHANGE THIS
  const buttonText = "Get In Touch"; // <-- CHANGE THIS
  const buttonLink = "/contact"; // <-- Link to your contact page

  return (
    <section
      className="relative h-screen bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(${heroImageUrl})` }} // Sets background image
      aria-labelledby="hero-headline" // Accessibility
    >
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/60"></div>{" "}
      {/* Adjust opacity (e.g., bg-black/50 for 50%) */}
      {/* Content Container */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
        <h1
          id="hero-headline" // Linked by aria-labelledby
          className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl mb-4 animate-fade-in-down" // Example animation class
        >
          {headline}
        </h1>
        <p className="max-w-xl text-lg sm:text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in-up">
          {subheadline}
        </p>
        <a
          href={buttonLink}
          className="mt-4 inline-block bg-white text-black font-semibold py-3 px-8 rounded shadow-md hover:bg-gray-200 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 animate-fade-in"
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
};

export default HeroSection; /* Delay button */

// --- Optional: Add simple fade-in animations in your global CSS (e.g., index.css) ---
/*
@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animate-fade-in-down { animation: fadeInDown 1s ease-out forwards; }
.animate-fade-in-up { animation: fadeInUp 1s ease-out 0.5s forwards; } /* Delay subheadline */
/* .animate-fade-in { animation: fadeIn 1s ease-out 1s forwards; } */

/* If using Tailwind directly, configure animation in tailwind.config.js */
