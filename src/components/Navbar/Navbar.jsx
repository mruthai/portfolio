import React, { useState } from 'react'
import Theme from '../Theme/Theme'
import { FiMenu } from 'react-icons/fi'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    return (
        <nav className="flex flex-row justify-between items-center h-20 px-5">
            <Theme />
            <div>
                <h1 className="font-sans">The Ultimate Variable</h1>
            </div>

            {/* Hamburger menu icon */}
            <div className="md:hidden">
                <button onClick={toggleMenu}>
                    <FiMenu size={24} />
                </button>
            </div>

            {/* Navigation links */}
            <ul
                className={`md:flex flex-col md:flex-row gap-5 font-body ${isMenuOpen ? 'flex' : 'hidden md:flex'
                    }`}
            >
                <li className="">
                    <a href="/#experience" alt="experience">
                        0.1 Experience
                    </a>
                </li>
                <li className="">
                    <a href="/#projects" alt="projects">
                        0.2 Projects
                    </a>
                </li>
                <li className="">
                    <a href="/#about" alt="about">
                        0.3 About
                    </a>
                </li>
                <li className="">
                    <a href="/#contact" alt="contact">
                        0.4 Contact
                    </a>
                </li>
            </ul>
            
            
        </nav>
    )
}

export default Navbar