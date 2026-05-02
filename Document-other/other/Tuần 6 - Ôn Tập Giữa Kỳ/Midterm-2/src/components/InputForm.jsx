import { useRef } from "react";

const InputForm = ({ dispatch }) => {
  const inputRef = useRef(null);

  const handleAddTodo = () => {
    if (inputRef.current) {
      dispatch({
        type: "create",
        payload: { content: inputRef.current.value },
      });
    }
  };

  return (
    <div className="w-fit border-2 border-gray-500 mx-auto p-4 flex flex-col items-center space-y-4 rounded-lg ">
      <h1 className="text-3xl font-bold">Thêm Ghi Chú</h1>
      <div className="flex justify-center items-center">
        <input
          type="text"
          ref={inputRef}
          className="w-[250px] min-h-[30px] bg-white pl-2 border-2 border-gray-500 rounded-bl-lg rounded-tl-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleAddTodo}
          className="bg-blue-500 hover:bg-blue-600 rounded-br-lg rounded-tr-lg px-2 text-white min-h-[30px]"
        >
          Thêm công việc
        </button>
      </div>
    </div>
  );
};

export default InputForm;
