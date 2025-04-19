import React from "react";
import HeroSection from "../Components/HeroSection";
import BentoGridGallery from "../Components/BentoGridGallery";
import Testimonial from "../Components/Testimonial";
import FAQ from "../Components/FAQ";

function Home() {
  return (
    <>
      <HeroSection />
      <BentoGridGallery />
      <Testimonial />
      <Testimonial />
      <FAQ />
    </>
  );
}

export default Home;
