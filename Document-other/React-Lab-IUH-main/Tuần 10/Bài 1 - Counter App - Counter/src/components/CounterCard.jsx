import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

function CounterCard() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div className="bg-gray-100/50 shadow-lg rounded-2xl p-6 w-64 text-center">
      <h2 className="text-2xl font-bold mb-4">Số hiện tại: {state.count}</h2>
      <div className="flex justify-center gap-4">
        <button
          onClick={() => dispatch({ type: "decrement" })}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Giảm
        </button>
        <button
          onClick={() => dispatch({ type: "increment" })}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Tăng
        </button>
      </div>
    </div>
  );
}

export default CounterCard;
