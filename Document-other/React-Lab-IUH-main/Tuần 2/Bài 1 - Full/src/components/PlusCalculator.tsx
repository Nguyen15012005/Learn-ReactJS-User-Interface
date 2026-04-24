import { useState } from "react";

const PlusCalculator = () => {
  const [firstNumber, setFirstNumber] = useState<number>(0);
  const [secondNumber, setSecondNumber] = useState<number>(0);
  const [result, setResult] = useState<number | undefined>(undefined);

  const handleCalc = () => {
    setResult(firstNumber + secondNumber);
  };

  return (
    <div className="w-lg min-h-[150px] my-12 mx-auto p-8 border-2 border-gray-300 shadow-lg rounded-lg flex flex-col space-y-4 justify-center items-center">
      <div className="flex flex-row justify-center items-center space-x-4">
        <input
          type="number"
          value={firstNumber}
          onChange={(e) => setFirstNumber(Number(e.target.value))}
          className="w-24 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-lg text-center shadow-md"
          placeholder="Số 1"
        />

        <p className="text-2xl">+</p>

        <input
          type="number"
          value={secondNumber}
          onChange={(e) => setSecondNumber(Number(e.target.value))}
          className="w-24 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-lg text-center shadow-md"
          placeholder="Số 1"
        />
      </div>
      <button
        onClick={handleCalc}
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg text-lg shadow-md hover:bg-blue-600 transition"
      >
        Tính kết quả
      </button>
      {result !== null && (
        <p className="mt-4 text-xl font-semibold text-gray-700">
          Kết quả: <span className="text-blue-600">{result}</span>
        </p>
      )}
    </div>
  );
};

export default PlusCalculator;
