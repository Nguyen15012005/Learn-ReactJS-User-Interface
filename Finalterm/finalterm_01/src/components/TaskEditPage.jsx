import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useTask } from "../hooks/useTask";

const TaskEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { editTask } = useTask();

  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "",
    dueDate: "",
  });

  const { data, loading: isLoading } = useFetch(
    `http://localhost:731/tasks/${id}`,
  );

  useEffect(() => {
    if (data) setForm(data);
  }, [data]);

  const handlerChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handlerSubmit = () => {
    editTask({ id, task: form });
    navigate(`/tasks/${id}`);
  };

  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="w-1/3 mx-auto border-2 p-4 border-gray-300 mb-5 my-4 rounded-lg">
      <h3 className="text-center font-bold text-2xl text-blue-500">
        Sửa Công Việc
      </h3>
      <div className="my-5">
        <label htmlFor="">Tiêu đề</label>
        <input
          type="text"
          name="title"
          className="border-2 border-gray-300 w-full"
          onChange={handlerChange}
          defaultValue={form.title}
        />
      </div>

      <div className="my-5">
        <label htmlFor="">Nội dung</label>
        <input
          type="text"
          name="description"
          className="border-2 border-gray-300 w-full"
          onChange={handlerChange}
          defaultValue={form.description}
        />
      </div>

      <div className="my-5">
        <label htmlFor="">Trạng thái</label>
        <input
          type="text"
          name="status"
          className="border-2 border-gray-300 w-full"
          onChange={handlerChange}
          defaultValue={form.status}
        />
      </div>

      <div className="my-5">
        <label htmlFor="">Ngày kết thúc</label>
        <input
          type="text"
          name="dueDate"
          className="border-2 border-gray-300 w-full"
          onChange={handlerChange}
          defaultValue={form.dueDate}
        />
      </div>
      <div className="flex flex-row justify-between mt-10">
        <button
          onClick={() => navigate(-1)}
          className="w-1/3 rounded-lg bg-gray-600 text-white text-center py-2 cursor-pointer hover:bg-gray-900"
        >
          Quay lại
        </button>
        <button
          onClick={handlerSubmit}
          className="w-1/3 rounded-lg bg-blue-600 text-white text-center py-2 cursor-pointer hover:bg-blue-900"
        >
          Sửa
        </button>
      </div>
    </div>
  );
};

export default TaskEditPage;
