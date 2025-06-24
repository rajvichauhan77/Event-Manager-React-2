import React from "react";

const CatererCard = ({ caterer, onMoreClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-5 text-center">
      <img
        src={caterer.image}
        alt={caterer.name}
        className="w-full h-60 object-cover rounded-md mb-4"
      />
      <h4 className="text-xl font-bold text-pink-500">{caterer.name}</h4>
      <p className="text-sm text-gray-600 mb-3">{caterer.specialty}</p>
      <p className="text-sm mb-3">{caterer.quote}</p>
      <button
        onClick={onMoreClick}
        className="bg-pink-500 text-white px-4 py-2 rounded-md mt-3"
      >
        More Details
      </button>
    </div>
  );
};

export default CatererCard;
