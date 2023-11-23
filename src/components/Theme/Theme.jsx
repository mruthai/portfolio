import React from 'react'
import { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const Theme = () => {
  const [darkMode, setDarkMode] = useState(false)


  // className dark to change background color
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    // You can add logic to change the theme here, e.g., by adding classes to your HTML root element.
    // document.documentElement.classList.toggle('dark'); // Add a 'dark' class to enable dark mode
  };

  return (
    <div className="flex items-center bg-pink-400 rounded-xl h-7 w-10">
      {darkMode ? (
        <FaSun
          className="text-yellow-500 text-xl cursor-pointer"
          onClick={toggleTheme}
        />
      ) : (
        <FaMoon
          className="text-yellow-500 text-xl cursor-pointer"
          onClick={toggleTheme}
        />
      )}
    </div>
  );
};

export default Theme