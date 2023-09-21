import React from 'react';

const Card = ({ year, title, description, tools }) => {
  return (
    <div className="flex flex-row">
        <div className=" w-1/5 items-start">
        <p className="pt-1 text-sm text-slate-500">{year}</p>
        </div>
        <div className="w-3/5">
      <h2 className="font-bold text-lg">{title}</h2>

      <p className="mt-2">{description}</p>
      <ul className="flex flex-row gap-4">
        {tools.map((item, index) => (
          <li key={index} className="my-3 text-sm ">{item}</li>
        ))}
      </ul>
        </div>

    </div>
  );
};

export default Card;
