import React, { useState } from 'react'
import Theme from '../Theme/Theme'
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    return (
        
        <div className="relative">
        <nav className="flex flex-row justify-between items-center h-20 px-5">
          <Theme />
          <div>
            <h1 className="font-sans">The Ultimate Variable</h1>
          </div>
  
          {/* Hamburger menu icon or Close icon based on isMenuOpen */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isMenuOpen ? <FiX size={24}  /> : <FiMenu size={24} />}
            </button>
          </div>
        </nav>
  
        {/* Full-screen menu overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 flex justify-center items-center dark:bg-gray-900 dark:text-slate-200 bg-slate-200 text-gray-900 z-0"
            onClick={toggleMenu}
          >
            <ul className="md:flex flex-col md:flex-row gap-5 font-body">
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
        )}
      </div>
    );
  }

export default Navbar