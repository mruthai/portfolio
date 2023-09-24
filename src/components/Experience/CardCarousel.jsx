//Experience card with buttons for the user to cycle through different experiences. 

import React, { useState } from 'react';
import Card from './Card'; 

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
//  Used props on for css and display properties from Card.jsx module- able to code css of the entire card.

  return (
    <div className="transition-all ease-in duration-300 dark:hover:bg-gray-800 hover:bg-slate-50 rounded-lg mb-20 py-10 mr-10 ">
      <h1 id="experience" className="font-bold mb-10 text-2xl pl-5 md:mx-0 mx-5">Journey</h1>
      <Card
        cardContents="h-64 md:flex md:flex-row"
        cardYearDiv="md:w-48 md:my-0 my-5 md:mx-0 mx-5 items-start pl-5"
        cardYear="pt-1 text-sm text-slate-500"
        cardTitleDiv="md:w-3/4 pr-10 md:px-0 px-5"
        cardTitle="font-bold text-lg"
        cardDescription="mt-2 md:mr-14"
        cardUl="md:mt-0 mt-5 md:flex md:flex-row flex flex-wrap md:gap-4 gap-2"
        cardTools="md:my-3 text-sm rounded-xl bg-gray-200 px-3 py-1 text-slate-500 "
        {...cardsData[currentIndex]}
      />
      <div className="md:mt-0 mt-10 flex flex-row md:w-4/5 md:justify-end justify-center">
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
