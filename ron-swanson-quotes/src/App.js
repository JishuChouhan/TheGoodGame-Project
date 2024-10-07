// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuoteCard from './QuoteCard';
import './index.css';

const App = () => {
  const [quote, setQuote] = useState('');
  const [savedQuotes, setSavedQuotes] = useState([]);

  // Function to fetch a new quote
  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
      setQuote(response.data[0]);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  useEffect(() => {
    fetchQuote(); // Fetch a quote on component mount
  }, []);

  // Function to save a quote, but only if it's not already in the savedQuotes array
  const saveQuote = () => {
    if (!savedQuotes.includes(quote)) {
      setSavedQuotes([...savedQuotes, quote]);
    } else {
      alert("This quote is already saved!"); // Optionally, notify the user
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-blue-700 my-8">Ron Swanson Quotes</h1>
      <QuoteCard quote={quote} onSave={saveQuote} />
      <button
        className="bg-green-500 text-white px-6 py-3 rounded-md mt-4 hover:bg-green-600 transition"
        onClick={fetchQuote}
      >
        Get New Quote
      </button>
      <h2 className="text-2xl font-semibold text-gray-700 my-6">Saved Quotes</h2>
      {savedQuotes.length > 0 && savedQuotes.map((q, index) => (
        <div key={index} className="border-2 border-gray-300 p-6 my-4 rounded-lg bg-gray-100 text-center shadow-md">
          <p className="text-xl mb-4 font-semibold">{q}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
