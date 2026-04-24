import React, { useContext } from "react";
import CartContext from "../context/CartContext";

export const CartItem = ({ cartItem }) => {
  const { dispatch } = useContext(CartContext);

  return (
    <div className="flex flex-row border-2 border-gray-500 px-2 rounded-lg items-center space-x-8">
      <img src={cartItem.img} alt="" className="w-[200px]" />
      <div className="flex flex-col  grow">
        <h3 className="font-bold">
          {cartItem.tieude}{" "}
          <span className="text-md">x {cartItem.quantity}</span>
        </h3>
        <p className="text-red-500 font-bold">{cartItem.gia} VNĐ</p>
      </div>

      <div className="flex flex-col items-center p-8">
        <button
          onClick={() => dispatch({ type: "ADD", payload: cartItem })}
          className="bg-green-500 hover:bg-green-600 px-4 text-white font-bold rounded-lg py-2 w-11/12 my-4"
        >
          Thêm
        </button>
        <button
          onClick={() =>
            dispatch({ type: "REMOVE", payload: { id: cartItem.id } })
          }
          className="bg-red-500 hover:bg-red-600 px-4 text-white font-bold rounded-lg py-2 w-11/12 my-4"
        >
          Bớt
        </button>
        <button
          onClick={() =>
            dispatch({ type: "DELETE", payload: { id: cartItem.id } })
          }
          className="bg-orange-500 hover:bg-orange-600 px-4 text-white font-bold rounded-lg py-2 w-11/12 my-4"
        >
          Xóa khỏi giỏ hàng
        </button>
      </div>
    </div>
  );
};
