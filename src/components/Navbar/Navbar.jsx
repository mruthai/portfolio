import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="app__navbar">
                <div className="app__navbar-title">
                    <h1 className="app__h1-ubuntu"> The Ultimate Variable </h1>
                </div>
                <ul className="app__anchors">
                    <li className="p__ubuntu"> <a href="/#about" alt="about">0.0 About</a> </li>
                    <li className="p__ubuntu"> <a href="/#experience" alt="experience">0.1 Experience</a> </li>
                    <li className="p__ubuntu"> <a href="/#projects" alt="projects">0.2 Projects</a> </li>
                    <li className="p__ubuntu"> <a href="/#contact" alt="contact">0.3 Contact</a> </li>

                </ul >
        </nav>
    )
}

export default Navbar