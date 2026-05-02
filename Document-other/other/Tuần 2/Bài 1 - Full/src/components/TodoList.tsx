import DUMMY_DATA from "../DUMMY_DATA";
import { Task } from "../types/task";
import { useState } from "react";
import TodoItem from "./ui/TodoItem";
import TodoForm from "./ui/TodoForm";

const TodoList = () => {
  const [tasks, setTasks] = useState<Task[]>(DUMMY_DATA);

  const onDone = (id: string) => {
    const newTasks = [...tasks];

    const index = newTasks.findIndex((task) => task.id === id);
    if (index === -1) return;
    const newTask = { ...newTasks[index], done: true };
    newTasks[index] = newTask;

    setTasks(newTasks);
  };

  const newTask = (Task: Task) => {
    setTasks([...tasks, Task]);
  };

  return (
    <div className="mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-4">
        📌 Danh sách công việc
      </h2>

      <div className="grid grid-cols-4 gap-4">
        <TodoForm newTask={newTask}></TodoForm>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 col-span-3">
          {tasks.map((task) => (
            <TodoItem key={task.id} task={task} onDone={onDone} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
