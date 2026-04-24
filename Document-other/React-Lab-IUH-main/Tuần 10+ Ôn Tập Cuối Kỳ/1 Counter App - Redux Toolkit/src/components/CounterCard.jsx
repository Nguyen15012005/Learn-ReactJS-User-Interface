import React from "react";
import CounterController from "./CounterController";
import CounterDisplay from "./CounterDisplay";

const CounterCard = () => {
  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-100 p-8 min-h-screen">
      <div className="bg-white rounded-2xl p-8 shadow-lg max-w-md w-full border border-gray-100">
        <div className="text-center mb-6">
          <h1 className="text-gray-800 text-2xl font-semibold mb-4">Counter</h1>
        </div>

        <CounterDisplay />
        <CounterController />
      </div>
    </div>
  );
};

export default CounterCard;
