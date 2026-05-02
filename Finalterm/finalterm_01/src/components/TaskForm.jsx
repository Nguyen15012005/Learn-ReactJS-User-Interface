import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTask } from "../hooks/useTask";

const TaskForm = () => {
  const navigate = useNavigate();
  const { createTask } = useTask();
  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "",
    dueDate: "",
  });

  const handlerChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handlerSubmit = (e) => {
    // Add success
    createTask(form);
    navigate("/tasks");
  };
  return (
    <div className="w-1/3 mx-auto border-2 p-4 border-gray-300 mb-5 my-4 rounded-lg">
      <h3 className="text-center font-bold text-2xl text-blue-500">
        Thêm Công Việc Mới
      </h3>
      <div className="my-5">
        <label htmlFor="">Tiêu đề</label>
        <input
          type="text"
          name="title"
          className="border-2 border-gray-300 w-full"
          onChange={handlerChange}
        />
      </div>

      <div className="my-5">
        <label htmlFor="">Nội dung</label>
        <input
          type="text"
          name="description"
          className="border-2 border-gray-300 w-full"
          onChange={handlerChange}
        />
      </div>

      <div className="my-5">
        <label htmlFor="">Trạng thái</label>
        <input
          type="text"
          name="status"
          className="border-2 border-gray-300 w-full"
          onChange={handlerChange}
        />
      </div>

      <div className="my-5">
        <label htmlFor="">Ngày kết thúc</label>
        <input
          type="text"
          name="dueDate"
          className="border-2 border-gray-300 w-full"
          onChange={handlerChange}
        />
        <button
          onClick={handlerSubmit}
          className="w-full rounded-lg bg-green-600 text-white text-center py-2 cursor-pointer my-4 hover:bg-green-900"
        >
          Thêm
        </button>
      </div>
    </div>
  );
};

export default TaskForm;
