import { Task } from "../../types/task";

type Props = {
  task: Task;
  onDone: (id: string) => void;
};
const TodoItem: React.FC<Props> = ({ task, onDone }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200 flex flex-col gap-2">
      <h3 className="text-lg font-semibold text-gray-800">{task.title}</h3>
      <p className="text-sm text-gray-600">{task.description}</p>
      <p className="text-xs text-gray-400">🗓 Created: {task.dateCreated}</p>
      <button
        className={`px-4 py-1 text-sm font-medium rounded-md ${
          task.done ? "bg-green-500 text-white" : "bg-yellow-500 text-gray-900"
        } transition duration-200 hover:opacity-80`}
        onClick={() => onDone(task.id)}
      >
        {task.done ? "✅ Hoàn thành" : "⏳ Chưa hoàn thành"}
      </button>
    </div>
  );
};

export default TodoItem;
