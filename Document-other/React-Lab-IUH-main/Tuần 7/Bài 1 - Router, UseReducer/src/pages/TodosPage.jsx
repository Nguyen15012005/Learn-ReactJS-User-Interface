import { useEffect, useState } from "react";

const TodosPAge = () => {
  const [todosData, setTodosData] = useState([]);
  const [formData, setFormData] = useState({ title: "", description: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://67c7c86ec19eb8753e7aba01.mockapi.io/todos"
      );

      if (response.ok) {
        const data = await response.json();
        setTodosData(data);
      }
    };

    fetchData();
  }, []);

  const handleDeleteTodos = async (id) => {
    const response = await fetch(
      `https://67c7c86ec19eb8753e7aba01.mockapi.io/todos/${id}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      setTodosData(todosData.filter((todo) => todo.id !== id));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://67c7c86ec19eb8753e7aba01.mockapi.io/todos",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }
    );

    if (response.ok) {
      const data = await response.json();
      setTodosData([...todosData, data]);
    }

    setFormData({ title: "", description: "" });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="my-6 w-2/3 border-gray-500 border-2 mx-auto min-h-[200px] flex flex-col justify-center items-center space-y-4 p-4 bg-white rounded-lg shadow-md"
      >
        <h1 className="text-xl font-bold text-center text-gray-700">
          Thêm danh sách công việc
        </h1>

        <div className="flex flex-col w-full max-w-md space-y-2">
          <label htmlFor="title" className="font-medium text-gray-600">
            Tiêu đề
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleChange}
            className="border-2 border-gray-500 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Nhập tiêu đề công việc"
            required
          />
        </div>

        <div className="flex flex-col w-full max-w-md space-y-2">
          <label htmlFor="description" className="font-medium text-gray-600">
            Nội dung
          </label>
          <textarea
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
            className="border-2 border-gray-500 rounded-lg px-3 py-2 w-full h-24 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            placeholder="Nhập nội dung công việc"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transition"
        >
          Thêm Công Việc
        </button>
      </form>
      <h1 className="text-5xl font-bold border-b-2 border-gray-300 w-11/12 mx-auto pb-2">
        Todos List
      </h1>
      <div className="my-12 grid grid-cols-4 gap-4 w-11/12 mx-auto ">
        {todosData.map((todo) => {
          return (
            <div
              className="px-4 py-1 rounde-lg border-2 border-gray-500 flex flex-col justify-between items-center space-y-4 pb-2"
              key={todo.id}
            >
              <p className="text-lg font-bold">{todo.title}</p>
              <p className="max-w-md">Mô tả: {todo.description}</p>
              <button
                onClick={() => handleDeleteTodos(todo.id)}
                className="w-2/3 bg-red-500 hover:bg-red-600 cursor-pointer py-1 text-center text-white text-lg font-bold rounded-lg"
              >
                Xóa đơn
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TodosPAge;
