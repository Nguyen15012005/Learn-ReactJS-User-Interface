import React from "react";
import { useNavigate } from "react-router-dom";
import { useTask } from "../hooks/useTask";

const TaskCard = ({ task }) => {
  const { removeTask } = useTask();
  const navigate = useNavigate();
  return (
    <div className="bg-blue-100 border-2 border-gray-300 rounded-lg px-1 py-2">
      <h1 className="text-blue-800 font-bold">{task.title}</h1>
      <p>{task.description}</p>
      <p>{task.dueDate}</p>
      <div className="flex flex-row justify-between items-center px-5 mt-10">
        <button
          onClick={() => navigate(`/tasks/${task.id}`)}
          className="w-1/3 rounded-lg bg-blue-600 text-white text-center py-2 cursor-pointer hover:bg-blue-900"
        >
          Xem Chi Tiết
        </button>
        <button
          onClick={() => removeTask(task.id)}
          className="w-1/3 rounded-lg bg-red-600 text-white text-center py-2 cursor-pointer hover:bg-red-900"
        >
          Xóa
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
