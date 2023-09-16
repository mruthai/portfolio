import React, { useState, useEffect } from 'react';

const WordTyper = () => {
  const words = ['Software Developer', 'Entrepreneur', 'Teacher', 'Coach', 'Team Leader', 'Father'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(words[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord(words[currentWordIndex]);
      setCurrentWordIndex((currentWordIndex + 1) % words.length);
    }, 4000); // Change word every 7 seconds

    return () => clearInterval(interval);
  }, [currentWordIndex]);

  return (
    <div className="flex flex-row gap-2">
      <p>I'm a </p>
      {currentWord}
    </div>
  );
};

export default WordTyper;
