import React, { useState, useEffect } from 'react';

const WordTyper = ({customClassName, classWordTyperContainer, classWordTyper}) => {
  const words = ['Software Developer', 'Entrepreneur', 'Teacher', 'Coach', 'Team Leader', 'Father'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(words[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord(words[currentWordIndex]);
      setCurrentWordIndex((currentWordIndex + 1) % words.length);
    }, 4000); // Change word every 7 seconds

    return () => clearInterval(interval);
  }, [currentWordIndex, words]);

  return (
    <div className={`${classWordTyperContainer}`}>
      <p className={`${customClassName} `}>Hi I'm Martin, I'm also a </p>
      <p className={`${classWordTyper}`}>{currentWord}.</p>
    </div>
  );
};

export default WordTyper;
