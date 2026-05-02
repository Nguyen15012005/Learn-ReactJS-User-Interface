import { useRef, useState } from "react";

const TodoItem = ({ item, dispatch }) => {
  const [isUpdating, setIsUpdating] = useState(false);

  const inputRef = useRef(null);

  const handleUpdateTodo = () => {
    if (inputRef.current) {
      dispatch({
        type: "update",
        payload: { id: item.id, content: inputRef.current.value },
      });
    }

    setIsUpdating(false);
  };

  return (
    <div className="min-h-[80px] flex justify-center items-center bg-white px-2 py-2 rounded-lg hover:bg-gray-400/80 hover:text-white space-x-4">
      <div className="flex-grow">
        {isUpdating && (
          <textarea
            ref={inputRef}
            defaultValue={item.content}
            type="text"
            className="border-2 border-gray-300 px-1 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 "
          />
        )}

        {!isUpdating && (
          <p className="overflow-hidden max-h-[70px] text-justify ">
            {item.content}
          </p>
        )}
      </div>

      <button
        onClick={
          isUpdating
            ? () => handleUpdateTodo()
            : () => setIsUpdating(!isUpdating)
        }
        className="bg-green-500 hover:bg-green-600 min-w-[80px] rounded-lg py-1 text-white cursor-pointer"
      >
        {isUpdating ? "Hoàn tất" : "Cập nhật"}
      </button>
      <button
        onClick={() => dispatch({ type: "delete", payload: { id: item.id } })}
        className="bg-red-500 hover:bg-red-600 min-w-[80px] rounded-lg py-1 text-white cursor-pointer"
      >
        Xóa
      </button>
    </div>
  );
};

export default TodoItem;
