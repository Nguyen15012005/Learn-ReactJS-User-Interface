import { useState } from "react";
import { Task } from "../../types/task";

type Props = {
  newTask: (task: Task) => void;
};

const TodoForm: React.FC<Props> = ({ newTask }) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleSubmit = () => {
    if (!title || !description) {
      return;
    }

    const task: Task = {
      id: Math.random().toString(),
      title: title,
      description: description,
      done: false,
      dateCreated: new Date().toISOString(),
    };

    newTask(task);

    setTitle("");
    setDescription("");
  };

  return (
    <div className="bg-white shadow-lg p-6 rounded-lg border border-gray-200 w-full max-w-md mx-auto">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        📝 Thêm Công Việc Mới
      </h2>

      <input
        type="text"
        className="w-full px-4 py-2 mb-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-lg"
        placeholder="Tiêu đề công việc"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <textarea
        className="w-full px-4 py-2 mb-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-lg"
        placeholder="Mô tả công việc"
        rows={3}
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />

      <button
        type="submit"
        className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded-lg text-lg shadow-md hover:bg-blue-600 transition"
        onClick={handleSubmit}
      >
        ➕ Thêm Công Việc
      </button>
    </div>
  );
};

export default TodoForm;
