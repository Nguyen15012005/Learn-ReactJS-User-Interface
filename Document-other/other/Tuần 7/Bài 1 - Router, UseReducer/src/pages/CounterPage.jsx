import { useEffect } from "react";
import { useReducer } from "react";
import { useRef } from "react";
import Button from "../components/Button";

const initialCount = { count: 0 };

const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.payload };
    case "DECREMENT":
      return { count: state.count - action.payload };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};

const CounterPage = () => {
  const [state, dispatch] = useReducer(counterReducer, initialCount);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) ref.current.innerText = `${state.count}`;
  }, [state]);

  return (
    <div className="w-2/3 min-h-[500px] mx-auto my-12 space-y-8 flex flex-col justify-center items-center bg-gray-200 rounded-lg">
      <h1 className="text-6xl  font-bold text-center ">Bộ Đếm Thông Minh</h1>
      <h2
        className="text-5xl font-bold bg-white rounded-lg px-4 py-2 min-w-[200px] text-center"
        ref={ref}
      ></h2>
      <div className="flex flex-col space-y-2">
        <div className="space-x-4">
          <Button
            style="bg-green-500 hover:bg-green-600"
            onClick={() => dispatch({ type: "INCREMENT", payload: 1 })}
          >
            Tăng 1
          </Button>
          <Button
            style="bg-green-500 hover:bg-green-600"
            onClick={() => dispatch({ type: "INCREMENT", payload: 10 })}
          >
            Tăng 10
          </Button>
        </div>
        <div className="space-x-4">
          <Button
            style="bg-red-500 hover:bg-red-600"
            onClick={() => dispatch({ type: "DECREMENT", payload: 1 })}
          >
            Giảm 1
          </Button>
          <Button
            style="bg-red-500 hover:bg-red-600"
            onClick={() => dispatch({ type: "DECREMENT", payload: 10 })}
          >
            Giảm 10
          </Button>
        </div>
        <div className="flex justify-center items-center">
          <Button
            style="bg-gray-400 hover:bg-gray-500"
            onClick={() => dispatch({ type: "RESET" })}
          >
            Đặt lại
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CounterPage;
