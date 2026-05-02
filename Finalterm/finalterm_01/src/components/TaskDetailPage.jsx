import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const TaskDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data: task, loading: isLoading } = useFetch(
    `http://localhost:731/tasks/${id}`,
  );

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="w-full justify-center flex items-center h-full">
      <div className="bg-blue-100 border-2 border-gray-300 rounded-lg px-1 py-2 w-1/3">
        {!isLoading && task && (
          <div className="">
            <h1 className="text-blue-800 font-bold">{task.title}</h1>
            <p>Mô tả: {task.description}</p>
            <p>Trạng thái: {task.status}</p>
            <p>Ngày hết hạn: {task.dueDate}</p>
            <div className="flex flex-row justify-between items-center px-5 mt-10">
              <button
                onClick={() => navigate(-1)}
                className="w-1/3 rounded-lg bg-gray-600 text-white text-center py-2 cursor-pointer hover:bg-gray-900"
              >
                Quay lại
              </button>
              <button
                onClick={() => navigate(`/tasks/${task.id}/edit`)}
                className="w-1/3 rounded-lg bg-red-600 text-white text-center py-2 cursor-pointer hover:bg-red-900"
              >
                Sửa
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskDetailPage;
