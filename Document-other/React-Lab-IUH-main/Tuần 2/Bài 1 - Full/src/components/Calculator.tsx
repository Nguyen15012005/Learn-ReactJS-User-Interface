import { useState } from "react";

const Calculator = () => {
  const [firstNumber, setFirstNumber] = useState<number>(0);
  const [secondNumber, setSecondNumber] = useState<number>(0);
  const [operation, setOperation] = useState<string>("+");
  const [result, setResult] = useState<number | undefined>(undefined);

  const handleCalc = () => {
    switch (operation) {
      case "+":
        setResult(firstNumber + secondNumber);
        break;
      case "-":
        setResult(firstNumber - secondNumber);
        break;
      case "*":
        setResult(firstNumber * secondNumber);
        break;
      case "/":
        setResult(firstNumber / secondNumber);
        break;
      default:
        setResult(undefined);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[300px]  p-6">
      <div className="flex items-center gap-4 bg-white shadow-lg p-6 rounded-xl border border-gray-200">
        <input
          type="number"
          value={firstNumber}
          onChange={(e) => setFirstNumber(Number(e.target.value))}
          className="w-24 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-lg text-center shadow-md"
          placeholder="Số 1"
        />

        <select
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-lg cursor-pointer focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-md"
        >
          <option value="+">➕</option>
          <option value="-">➖</option>
          <option value="*">✖️</option>
          <option value="/">➗</option>
        </select>

        <input
          type="number"
          value={secondNumber}
          onChange={(e) => setSecondNumber(Number(e.target.value))}
          className="w-24 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-lg text-center shadow-md"
          placeholder="Số 2"
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

export default Calculator;
