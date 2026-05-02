import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTasks } from "../features/taskSlice";
import TaskCard from "../components/TaskCard";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useTask } from "../hooks/useTask";

const TaskPage = () => {
  const { tasks, loading: isLoading } = useTask();
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const handlePating = () => {
    if (location.pathname === "/tasks") navigate("/tasks/add");
    else navigate("/tasks");
  };

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  console.log(tasks);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="px-4 my-8">
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-blue-500 font-bold text-2xl my-4">
          Danh sách công việc
        </h2>
        <button
          onClick={handlePating}
          className="px-4 rounded-lg bg-orange-600 text-white text-center py-2 cursor-pointer hover:bg-orange-900"
        >
          {location.pathname === "/tasks" ? "Thêm công việc" : "Trở lại"}
        </button>
      </div>

      <div>
        <Outlet />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
        {!isLoading &&
          tasks &&
          tasks.map((x) => <TaskCard task={x} key={x.id} />)}
      </div>
    </div>
  );
};

export default TaskPage;
