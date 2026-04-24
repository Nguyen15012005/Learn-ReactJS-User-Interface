import React from "react";
import { useSelector } from "react-redux";
import TodoCard from "./TodoCard";

function TodoList() {
  const todos = useSelector((state) => state.todo);

  return (
    <div>
      {todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
