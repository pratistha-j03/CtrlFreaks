import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = ({ navLinks }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        <a href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-[#0f705d]">
            SwacchConnect
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-600 hover:text-[#0f705d] transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        
        <div className="hidden md:flex items-center space-x-2">
          <button className="text-gray-600 hover:text-[#0f705d] transition-colors duration-300">
            Login
          </button>
          <button className="bg-[#0f705d] text-white px-4 py-2 rounded-full hover:bg-[#0c5a4a] transition-colors duration-300 shadow-lg shadow-[#0f705d]/20">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4">
          <nav className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-600 hover:text-[#0f705d] transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col space-y-2 w-full px-6 pt-4">
              <button className="w-full text-center border border-gray-300 text-gray-600 py-2 rounded-full hover:bg-gray-100 transition-colors duration-300">
                Login
              </button>
              <button className="w-full text-center bg-[#0f705d] text-white py-2 rounded-full hover:bg-[#0c5a4a] transition-colors duration-300">
                Sign Up
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
