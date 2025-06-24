import React from "react";

const Photographer = ({ isOpen, onClose, photographer }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl max-w-xl w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        {photographer && (
          <>
            <h2 className="text-2xl font-bold text-pink-500 mb-4">
              {photographer.name}
            </h2>
            <p className="mb-4">{photographer.description}</p>
            <div className="grid grid-cols-2 gap-4">
              {photographer.extraPhotos.map((photo, index) => (
                <img
                  key={index}
                  src={photo}
                  alt={`${photographer.name} extra ${index + 1}`}
                  className="w-full h-32 object-cover rounded-md"
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Photographer;
