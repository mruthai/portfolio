import React, { useState } from 'react';
import Theme from '../Theme/Theme';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <nav className="flex flex-row md:justify-center justify-between items-center gap-20 h-20 md:px-10 px-5">

        {/* Hamburger menu icon or Close icon based on isMenuOpen */}
        <div className="md:hidden order-2">
          <button className="duration-5000" onClick={toggleMenu}>
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Display navigation links on medium and large screens */}
        <div className="hidden md:flex">
          <ul className="flex gap-5 font-body">
            <li>
              <a href="/#experience" alt="experience">
                0.1 Experience
              </a>
            </li>
            <li>
              <a href="/#projects" alt="projects">
                0.2 Projects
              </a>
            </li>
            <li>
              <a href="/#about" alt="about">
                0.3 About
              </a>
            </li>
            <li>
              <a href="/#contact" alt="contact">
                0.4 Contact
              </a>
            </li>
          </ul>
        </div>
      <Theme />
      </nav>

      {/* Full-screen menu overlay */}
      {isMenuOpen && (
        <div
        className="relative inset-0  max-h-full flex justify-center items-center dark:bg-gray-900 dark:text-slate-100 bg-slate-100 text-gray-900 z-7"
        onClick={toggleMenu}
        >
          {/* Navigation links for small screens */}
          <ul className="md:hidden flex flex-col gap-5 font-body">
            <li>
              <a href="/#experience" alt="experience">
                0.1 Experience
              </a>
            </li>
            <li>
              <a href="/#projects" alt="projects">
                0.2 Projects
              </a>
            </li>
            <li>
              <a href="#about" alt="about">
                0.3 About
              </a>
            </li>
            <li>
              <a href="/#contact" alt="contact">
                0.4 Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
