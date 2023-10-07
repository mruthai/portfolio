import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Projects from './views/Projects';


function App() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl text-slate-100 dark:text-gray-900 dark:bg-slate-100 bg-gray-900">
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="Projects" element={<Projects />} />
    
      </Routes>
    </div>
  );
}

export default App;
