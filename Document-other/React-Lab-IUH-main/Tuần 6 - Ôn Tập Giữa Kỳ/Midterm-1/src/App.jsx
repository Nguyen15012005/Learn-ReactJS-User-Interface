import { useEffect } from "react";
import { useReducer } from "react";
import { useRef } from "react";
// import { useState } from "react";

const initialValue = { count: 0 };

const CounterReducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return { ...state, count: state.count + 1 };
    case "decrease":
      return { ...state, count: state.count - 1 };
    case "reset":
      return 0;
    default:
      return { ...state };
  }
};

function App() {
  const [state, dispatch] = useReducer(CounterReducer, initialValue);
  const ref = useRef(null);

  // const [count, setCount] = useState(0);

  // const increase = () => {
  //   setCount((prevCount) => prevCount + 1);
  // };

  // const decrease = () => {
  //   setCount((prevCount) => prevCount - 1);
  // };

  // const reset = () => {
  //   setCount(0);
  // };

  useEffect(() => {
    if (ref.current) {
      ref.current.innerText = `${state.count}`;
    }
  }, [state.count]);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="size-[300px] border-2 border-gray-500 rounded-lg flex flex-col justify-center items-center space-y-4">
        <h1 className="text-5xl font-bold" ref={ref}></h1>

        <button
          // onClick={increase}
          onClick={() => dispatch({ type: "increase" })}
          className="bg-green-400 hover:bg-green-500 rounded-lg px-2 py-1 min-w-[150px] text-white"
        >
          Tăng
        </button>
        <button
          // onClick={decrease}
          onClick={() => dispatch({ type: "decrease" })}
          className="bg-red-400 hover:bg-red-500 rounded-lg px-2 py-1 min-w-[150px] text-white"
        >
          Giảm
        </button>
        <button
          // onClick={reset}
          onClick={() => dispatch({ type: "reset" })}
          className="bg-gray-400 hover:bg-gray-500 rounded-lg px-2 py-1 min-w-[150px] text-white"
        >
          Đặt lại
        </button>
      </div>
    </div>
  );
}

export default App;
