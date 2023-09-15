import React from 'react'
import Theme from '../Theme/Theme'

const Navbar = () => {
    return (
        <nav className="flex flex-row justify-evenly items-center h-20 dark:bg-gray-900 bg-slate-200  dark:text-slate-200 text-gray-900">
                <div className="">
                    <h1 className="font-sans "> The Ultimate Variable </h1>
                </div>
                <ul className="flex flex-row gap-5 font-body">
                    <li className=""> <a href="/#experience" alt="experience">0.1 Experience</a> </li>
                    <li className=""> <a href="/#projects" alt="projects">0.2 Projects</a> </li>
                    <li className=""> <a href="/#about" alt="about">0.3 About</a> </li>
                    <li className=""> <a href="/#contact" alt="contact">0.4 Contact</a> </li>
                </ul >
               <div>
                <Theme />
               </div>
        </nav>
    )
}

export default Navbar