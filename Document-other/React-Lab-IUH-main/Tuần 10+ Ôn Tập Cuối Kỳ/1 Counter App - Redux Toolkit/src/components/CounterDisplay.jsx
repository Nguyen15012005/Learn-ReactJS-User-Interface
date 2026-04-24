import React from "react";
import { useSelector } from "react-redux";

const CounterDisplay = () => {
  const count = useSelector((state) => state.counter.value);

  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-6 mb-8 shadow-sm">
      <span className="font-sans text-6xl text-white font-bold tracking-wide block overflow-hidden transition-all duration-300 ease-in-out">
        {count}
      </span>
    </div>
  );
};

export default CounterDisplay;
