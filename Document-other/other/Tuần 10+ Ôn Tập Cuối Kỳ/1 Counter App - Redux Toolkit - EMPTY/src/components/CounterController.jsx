import { Minus, Plus, RotateCcw } from "lucide-react";
import React from "react";

const CounterController = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <button className="bg-white text-red-500 font-medium py-3 px-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2">
          <Minus size={18} />
          <span>10</span>
        </button>
        <button className="bg-white text-green-500 font-medium py-3 px-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2">
          <Plus size={18} />
          <span>10</span>
        </button>
        <button className="bg-white text-red-500 font-medium py-3 px-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2">
          <Minus size={18} />
          <span>1</span>
        </button>
        <button className="bg-white text-green-500 font-medium py-3 px-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2">
          <Plus size={18} />
          <span>1</span>
        </button>
      </div>

      <button className="bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-700 font-medium py-3 px-8 rounded-lg shadow-sm hover:shadow transition-all w-full flex items-center justify-center gap-2">
        <RotateCcw size={18} />
        <span>Reset</span>
      </button>
    </>
  );
};

export default CounterController;
