import React from 'react';

const Card = ({cardContents, cardYearDiv, cardTitleDiv, cardTitle, cardDescription, cardUl, cardTools, cardYear, year, title, description, tools }) => {
//  Used props on for css and display properties
// Advantage of using props for both allows programmer to write content and style in single module
  return (
    <div className={`${cardContents}`}>
      <div className={`${cardYearDiv}`}>
        <p className={`${cardYear}`}>{year}</p>
      </div>
      <div className={`${cardTitleDiv}`}>
        <h2 className={`${cardTitle}`}>{title}</h2>

        <p className={`${cardDescription}`}>{description}</p>
        <ul className={`${cardUl}`}>
          {tools.map((item, index) => (
            <li key={index} className={`${cardTools}`}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
