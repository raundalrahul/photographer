import React from "react";

export default function About() {
  return (
    <div className="bg-white text-black p-20">
      {/* Header */}
      <div className="container mx-auto px-4 mb-12">
        <h1 className="text-4xl font-bold text-center mb-4">About Me</h1>
        <p className="text-center text-lg max-w-2xl mx-auto text-gray-700">
          Hi, I'm John Doe, a professional photographer with over 10 years of
          experience capturing stunning moments around the world. My mission is
          to tell stories through my lens and create timeless memories for my
          clients.
        </p>
      </div>

      {/* Profile Section */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center mb-16">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img
            src="https://images.unsplash.com/photo-1609866975749-2238afebfa27?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
            alt="John Doe"
            className="rounded-2xl shadow-lg"
          />
        </div>
        <div className="w-full md:w-2/3 md:pl-12">
          <h2 className="text-3xl font-semibold mb-4">Biography</h2>
          <p className="text-gray-700 mb-4">
            I started my photography journey back in 2012, when I picked up my
            first camera and discovered the power of visual storytelling. Over
            the years, I've worked with diverse clients—from couples on their
            wedding day to major brands launching new products.
          </p>
          <p className="text-gray-700">
            My style blends candid moments with artistic flair, ensuring each
            photo is both genuine and aesthetically striking. I believe in
            building strong connections with my clients, listening to their
            vision, and surpassing expectations.
          </p>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Key Statistics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-xl text-center shadow">
            <h3 className="text-4xl font-bold text-yellow-400 mb-2">500+</h3>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl text-center shadow">
            <h3 className="text-4xl font-bold text-yellow-400 mb-2">10</h3>
            <p className="text-gray-600">Years of Experience</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl text-center shadow">
            <h3 className="text-4xl font-bold text-yellow-400 mb-2">300+</h3>
            <p className="text-gray-600">Happy Clients</p>
          </div>
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Experience & Milestones
        </h2>
        <ul className="relative border-l-2 border-gray-200">
          {[
            { year: "2021", event: "Launched John Doe Photography Academy" },
            {
              year: "2018",
              event: "Opened first international studio in Paris",
            },
            { year: "2015", event: "Awarded Photographer of the Year" },
            { year: "2012", event: "Started professional career" },
          ].map((item, idx) => (
            <li key={idx} className="mb-10 ml-6">
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-yellow-400 rounded-full ring-8 ring-white">
                <span className="text-white font-bold">{item.year}</span>
              </span>
              <p className="mb-2 text-lg font-medium">{item.event}</p>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus imperdiet, nulla et dictum interdum.
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Values Section */}
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-3xl font-semibold text-center mb-8">Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Creativity",
              desc: "Pushing boundaries to craft unique visuals.",
            },
            {
              title: "Professionalism",
              desc: "Timely delivery and clear communication.",
            },
            {
              title: "Passion",
              desc: "Genuine love for photography drives my work.",
            },
            { title: "Quality", desc: "Attention to detail in every shot." },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-6 rounded-xl shadow hover:bg-yellow-50 transition"
            >
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 text-center py-12 bg-gray-100 rounded-2xl">
        <h2 className="text-3xl font-semibold mb-4">
          Ready to Capture Your Moments?
        </h2>
        <p className="text-gray-700 mb-6">
          Contact me today to book a session or learn more about my services.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-full hover:opacity-80 transition">
          Get in Touch
        </button>
      </div>
    </div>
  );
}
