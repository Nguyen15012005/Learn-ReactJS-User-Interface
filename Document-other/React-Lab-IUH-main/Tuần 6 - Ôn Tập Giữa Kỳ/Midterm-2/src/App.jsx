import { useReducer } from "react";
import InputForm from "./components/InputForm";
import TodoList from "./components/TodoList";

const initialState = { data: [], currentId: 0 };

const TodoReducer = (state, action) => {
  switch (action.type) {
    case "create":
      return {
        ...state,
        data: [...state.data, { ...action.payload, id: state.currentId }],
        currentId: state.currentId + 1,
      };
    case "delete":
      return {
        ...state,
        data: state.data.filter((todo) => todo.id !== action.payload.id),
      };
    case "update":
      return {
        ...state,
        data: state.data.map((todo) => {
          return todo.id === action.payload.id
            ? { ...todo, content: action.payload.content }
            : todo;
        }),
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(TodoReducer, initialState);
  return (
    <div className="min-h-screen py-12 bg-gray-300/50">
      <InputForm dispatch={dispatch} />
      <TodoList data={state.data} dispatch={dispatch} />
    </div>
  );
}

export default App;
