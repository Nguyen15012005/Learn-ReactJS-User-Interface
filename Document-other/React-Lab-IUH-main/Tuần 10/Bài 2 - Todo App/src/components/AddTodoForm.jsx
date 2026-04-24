import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";

function AddTodoForm() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim() !== "") {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        className="border p-2 flex-1 rounded"
        placeholder="Nhập việc cần làm..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Thêm
      </button>
    </div>
  );
}

export default AddTodoForm;
