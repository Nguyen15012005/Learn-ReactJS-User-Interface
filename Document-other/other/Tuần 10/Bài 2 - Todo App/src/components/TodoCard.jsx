import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../features/todoSlice";

function TodoCard({ todo }) {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center p-3 border rounded mb-2 bg-white shadow-sm">
      <span className={todo.completed ? "line-through text-gray-400" : ""}>
        {todo.text}
      </span>
      <div className="flex gap-2">
        <button
          onClick={() => dispatch(toggleTodo(todo.id))}
          className="px-3 py-1 rounded bg-yellow-400 hover:bg-yellow-500 text-white"
        >
          {todo.completed ? "↺" : "✓"}
        </button>
        <button
          onClick={() => dispatch(deleteTodo(todo.id))}
          className="px-3 py-1 rounded bg-red-500 hover:bg-red-600 text-white"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export default TodoCard;
