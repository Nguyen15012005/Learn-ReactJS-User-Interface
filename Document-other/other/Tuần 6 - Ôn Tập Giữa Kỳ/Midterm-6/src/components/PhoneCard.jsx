import React from "react";

export const PhoneCard = ({ item, onRemove }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border-gray-300 border-2 bg-white hover:bg-gray-100 cursor-pointer transition duration-200 ease-in-out transform hover:-translate-y-1 relative">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{item.number}</div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{item.type}
        </span>
      </div>
      <button
        onClick={() => onRemove(item.id)}
        className="absolute top-0 right-0 mt-2 mr-2 text-white bg-red-500 hover:bg-red-600 rounded-full p-1 focus:outline-none"
        title="Remove"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};
