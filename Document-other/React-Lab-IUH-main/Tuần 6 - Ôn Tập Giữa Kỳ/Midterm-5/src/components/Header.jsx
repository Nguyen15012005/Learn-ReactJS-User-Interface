import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="min-h-[80px] bg-blue-500 flex justify-center items-center space-x-12">
      <button className="bg-blue-400 rounded-lg px-8 py-2 text-white font-bold text-lg">
        <Link to="/">Home</Link>
      </button>
      <button className="bg-blue-400 rounded-lg px-8 py-2 text-white font-bold text-lg">
        <Link to="/cart">Cart</Link>
      </button>
    </div>
  );
};
