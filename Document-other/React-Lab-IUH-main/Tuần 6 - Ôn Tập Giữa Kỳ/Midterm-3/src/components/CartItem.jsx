import React from "react";

export const CartItem = ({ item, dispatch }) => {
  return (
    <div className="flex items-center bg-gray-200 border-2 border-gray-300 shadow-lg rounded-lg px-4 py-2 my-4">
      <div className="flex items-center grow space-x-8">
        <img src={item.img} alt="" className="size-24" />
        <div>
          <p className="font-bold text-lg">{item.tieude}</p>
          <p>{item.gia} VNĐ</p>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <p className="font-bold text-xl">x {item.quantity}</p>
        <div className="flex flex-row justify-center items-center space-x-4">
          <button
            onClick={() => dispatch({ type: "ADD", payload: item })}
            className="bg-green-500 hover:bg-green-600 text-white w-[80px] py-2 rounded-lg"
          >
            Thêm
          </button>
          <button
            onClick={() =>
              dispatch({ type: "REMOVE", payload: { id: item.id } })
            }
            className="bg-red-500 hover:bg-red-600 text-white w-[80px] py-2 rounded-lg"
          >
            Bớt
          </button>
        </div>
      </div>
    </div>
  );
};
