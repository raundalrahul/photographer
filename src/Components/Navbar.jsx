import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const linkStyle =
    "text-black hover:text-gray-600 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 px-3 py-2 rounded-md text-sm font-medium";
  const iconStyle =
    "text-black hover:text-gray-600 transition-all duration-300 ease-in-out transform hover:scale-110 active:scale-95";

  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-black">
              A logo
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex md:items-center md:justify-center md:flex-1">
            <div className="flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.path} className={linkStyle}>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social & Mobile Toggle */}
          <div className="flex items-center">
            <div className="flex-shrink-0 mr-4">
              <a
                href="https://www.instagram.com/your_username"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className={iconStyle}
              >
                <FaInstagram size={24} />
              </a>
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black transition-all duration-200 ease-in-out transform hover:scale-110 active:scale-95"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
                aria-label="Toggle main menu"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <FaTimes className="h-6 w-6" />
                ) : (
                  <FaBars className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all ease-in-out duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`${linkStyle} block text-base`}
              onClick={toggleMenu}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
