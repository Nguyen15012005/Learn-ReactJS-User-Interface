import { useState } from "react";

const HelloButton = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="w-lg min-h-[150px] my-12 mx-auto p-8 border-2 border-gray-300 shadow-lg rounded-lg flex flex-col space-y-4 justify-center items-center">
      <button
        onClick={() => setIsClicked(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Nhấn tôi điiii!!!
      </button>
      {isClicked && <p>Xin chào!!! Chúc ngày mới tốt lành</p>}
    </div>
  );
};

export default HelloButton;
