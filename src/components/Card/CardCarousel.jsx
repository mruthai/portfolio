import React, { useState } from 'react';
import Card from './Card'; // Adjust the import path as needed

const CardCarousel = ({ cardsData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cardsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="mb-10">
      <Card {...cardsData[currentIndex]} />
      <div className="flex flex-row w-4/5 justify-end">
        <button
          onClick={prevCard}
          className="text-xl font-bold hover:text-gray-900 dark:hover:text-slate-200 dark:text-slate-100 text-slate-500"
        >
         ←
        </button>
        <button
          onClick={nextCard}
          className=" ml-10 text-xl font-bold hover:text-gray-900 dark:hover:text-slate-200 dark:text-slate-100 text-slate-500"
        >
         →
        </button>
      </div>
    </div>
  );
};

export default CardCarousel;
