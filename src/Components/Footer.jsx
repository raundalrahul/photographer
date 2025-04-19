import React from "react";
// Import the icons you need
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  // Re-use or redefine navigation links
  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "About me", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  // Define your social media links
  const socialLinks = [
    {
      name: "Instagram",
      href: "https://instagram.com/your_username",
      icon: FaInstagram,
    },
    {
      name: "Facebook",
      href: "https://facebook.com/your_profile",
      icon: FaFacebookF,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/your_handle",
      icon: FaTwitter,
    },
    // Add or remove social links as needed
    // { name: 'LinkedIn', href: '#', icon: FaLinkedinIn },
  ];

  // Get current year for copyright
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-300 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        {/* Main content container: Stacked on mobile, row on medium+ screens */}
        <div className="md:flex md:items-center md:justify-between">
          {/* Left Section: Logo */}
          <div className="flex justify-center md:justify-start mb-6 md:mb-0">
            <a
              href="/"
              className="text-2xl font-bold text-white hover:text-gray-400 transition-colors duration-300"
            >
              Photographer Logo {/* Or your <img> tag */}
            </a>
          </div>

          {/* Middle Section: Navigation Links */}
          {/* Centered text on mobile, left-aligned on medium+ */}
          <nav className="mb-6 md:mb-0 text-center md:text-left">
            <ul className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 items-center justify-center">
              {navigationLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm hover:text-white transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Section: Social Media Icons */}
          {/* Centered on mobile, right-aligned on medium+ */}
          <div className="flex justify-center md:justify-end space-x-5">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank" // Open in new tab
                rel="noopener noreferrer" // Security best practice
                aria-label={item.name} // Accessibility
                className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <item.icon className="h-6 w-6" />{" "}
                {/* Render the icon component */}
              </a>
            ))}
          </div>
        </div>

        {/* Divider and Copyright */}
        <hr className="my-8 border-gray-700" />
        <div className="text-center text-sm text-gray-500">
          &copy; {currentYear} Photographer Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
