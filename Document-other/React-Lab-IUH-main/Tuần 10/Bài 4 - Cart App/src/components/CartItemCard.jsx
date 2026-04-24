import React from "react";
import { useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../features/cartSlice";

function CartItemCard({ item }) {
  const dispatch = useDispatch();

  const handleChange = (type) => {
    const newQuantity = type === "inc" ? item.quantity + 1 : item.quantity - 1;
    if (newQuantity >= 1) {
      dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
    }
  };

  return (
    <div className="flex justify-between items-center border rounded-lg p-4 mb-2 bg-white shadow-sm">
      <div>
        <h3 className="font-bold text-lg">{item.name}</h3>
        <p className="text-sm text-gray-600">
          Giá: {item.price.toLocaleString()}₫
        </p>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => handleChange("dec")}
          className="px-2 py-1 bg-gray-200 rounded"
        >
          −
        </button>
        <span>{item.quantity}</span>
        <button
          onClick={() => handleChange("inc")}
          className="px-2 py-1 bg-gray-200 rounded"
        >
          +
        </button>
        <button
          onClick={() => dispatch(removeItem(item.id))}
          className="ml-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Xoá
        </button>
      </div>
    </div>
  );
}

export default CartItemCard;
