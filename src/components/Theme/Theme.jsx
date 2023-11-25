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
  };



  return (
    <>
      <div className="relative inline-flex items-center dark:bg-gray-500 bg-slate-50 rounded-xl cursor-pointer h-7 w-10">
        {darkMode ? (
          <FaSun
            className="text-slate-50 text-lg cursor-pointer absolute left-1"
            onClick={toggleTheme}
          />
        ) : (
          <FaMoon
            className="text-gray-500 text-lg cursor-pointer absolute right-0 mr-1 "
            onClick={toggleTheme}
          />
        )}
      </div>
    </>
  );
};

export default Theme