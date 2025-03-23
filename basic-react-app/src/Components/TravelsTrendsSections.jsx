import React from 'react';
import Button1 from './Button1'; // assuming you have a Button1 component

const TravelTrendsSection = () => {
  return (
    <div className="py-12 flex flex-col md:flex-row items-center max-w-6xl mx-auto px-6">
      <div className="md:w-1/2 mb-6 md:mb-0 text-center md:text-left">
        <h2 className="text-4xl font-semibold mb-4">Latest Travel Trends</h2>
        <p className="text-gray-600 mb-4">
          There are real opportunities for companies that keep pace with the latest travel trends and embrace new ways of doing business.
        </p>
        <Button1 className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg text-lg">See More</Button1>
      </div>
      <div className="md:w-1/2 grid grid-cols-2 gap-4">
        <img src="  https://t3.ftcdn.net/jpg/10/62/15/78/360_F_1062157852_NDj4KJDXKRDJ47sbDrs6ITJt377dqplW.jpg" alt="Travel 1" className="rounded-lg w-full" />
        <img src="https://mybestplace.com/uploads/2020/04/Lago-di-Braies-Italia-2.jpg" alt="Travel 2" className="rounded-lg w-full" />
        <img src="https://i.pinimg.com/200x150/dc/47/5a/dc475a9af056eb04f687ab8533b8a1ad.jpg" alt="Travel 3" className="rounded-lg w-full" />
        <img src="https://media.istockphoto.com/id/671793272/photo/idyllic-small-island-with-lone-tree-in-the-ocean.jpg?s=612x612&w=0&k=20&c=PUO3ncUjyRNSFfFhrCzwDZOce_K9z9CHNyVXDKUbBic=" alt="Travel 4" className="rounded-lg w-full" />
      </div>
    </div>
  );
};

export default TravelTrendsSection;
