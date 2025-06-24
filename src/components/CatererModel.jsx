import React from "react";

const CatererModal = ({ isOpen, onClose, caterer }) => {
  if (!isOpen || !caterer) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl max-w-xl w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold text-pink-500 mb-4">{caterer.name}</h2>
        <p className="mb-4">{caterer.bio}</p>
        <h4 className="font-semibold mb-2">Dishes & Work:</h4>
        <div className="grid grid-cols-2 gap-4">
          {caterer.workImages.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Dish ${i + 1}`}
              className="w-full h-32 object-cover rounded-md"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatererModal;
