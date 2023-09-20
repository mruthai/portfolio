import React, { useState, useEffect, useMemo } from 'react';

const WordTyper = ({ classWordTyperContainer, classWordTyper }) => {
  const initialWords = useMemo(() => ['Software Developer', 'Entrepreneur', 'Teacher', 'Coach', 'Author', 'Collaborator', 'Father'],
    []
  );

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(initialWords[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord(initialWords[currentWordIndex]);
      setCurrentWordIndex((currentWordIndex + 1) % initialWords.length);
    }, 4000); // Change word every 7 seconds

    return () => clearInterval(interval);
  }, [currentWordIndex, initialWords]);

  return (
    <div className={`${classWordTyperContainer}`}>
      <p className={`${classWordTyper}`}>{currentWord}.</p>
    </div>
  );
};

export default WordTyper;
