// src/QuoteCard.js
import React from 'react';

const QuoteCard = ({ quote, onSave }) => {
  return (
    <div className="border-2 border-gray-300 p-6 my-4 rounded-lg bg-gray-100 text-center shadow-md">
      <p className="text-xl mb-4 font-semibold">{quote}</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        onClick={onSave}
      >
        Save to List
      </button>
    </div>
  );
};

export default QuoteCard;
