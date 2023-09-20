import React from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Projects from './views/Projects';

function App() {
  return (
    <div className="relative dark:text-slate-100 text-gray-900 bg-slate-100 dark:bg-gray-900">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
