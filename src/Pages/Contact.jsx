import React, { useState } from "react";
import {
  EnvelopeIcon as MailIcon,
  PhoneIcon,
  MapPinIcon as LocationMarkerIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: integrate with EmailJS or backend
    setSubmitted(true);
  };

  return (
    <div className="bg-white text-black py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-6">Get in Touch</h1>
        <p className="text-center text-gray-600 mb-12">
          Whether you have a question about services, pricing, or anything else,
          our team is ready to answer all your questions.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <LocationMarkerIcon className="h-6 w-6 text-yellow-400 mt-1" />
              <div>
                <h3 className="text-xl font-semibold">Studio Location</h3>
                <p className="text-gray-700">
                  1234 Lens Lane, Photo City, PC 56789
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <PhoneIcon className="h-6 w-6 text-yellow-400 mt-1" />
              <div>
                <h3 className="text-xl font-semibold">Call Us</h3>
                <p className="text-gray-700">+1 (234) 567-8901</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MailIcon className="h-6 w-6 text-yellow-400 mt-1" />
              <div>
                <h3 className="text-xl font-semibold">Email</h3>
                <p className="text-gray-700">contact@photographer.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <ClockIcon className="h-6 w-6 text-yellow-400 mt-1" />
              <div>
                <h3 className="text-xl font-semibold">Hours</h3>
                <p className="text-gray-700">Mon - Fri: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-700">Sat: 10:00 AM - 4:00 PM</p>
              </div>
            </div>

            {/* Socials */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-2">Follow Me</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-700 hover:text-black transition"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-black transition"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-black transition"
                >
                  Twitter
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-2">Find Me</h3>
              <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden shadow">
                {/* Replace src with real embed */}
                <iframe
                  title="Studio Location"
                  src="https://maps.google.com/maps?q=New%20York%20City&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                  className="w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-yellow-400 focus:border-yellow-400"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-yellow-400 focus:border-yellow-400"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="subject"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-yellow-400 focus:border-yellow-400"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-yellow-400 focus:border-yellow-400"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 rounded-full hover:opacity-80 transition"
                >
                  Send Message
                </button>
              </form>
            ) : (
              <div className="text-center py-20">
                <h2 className="text-2xl font-semibold mb-4">Thank you!</h2>
                <p className="text-gray-700">
                  Your message has been sent. I’ll get back to you soon.
                </p>
              </div>
            )}

            {/* Newsletter */}
            <div className="mt-12 bg-gray-50 p-6 rounded-xl text-center">
              <h3 className="text-xl font-semibold mb-2">
                Subscribe to Newsletter
              </h3>
              <p className="text-gray-600 mb-4">
                Get the latest updates, tips, and stories delivered to your
                inbox.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:ring-yellow-400 focus:border-yellow-400"
                />
                <button className="bg-black text-white px-6 rounded-r-lg hover:opacity-80 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
