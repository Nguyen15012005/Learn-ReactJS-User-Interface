import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addItem({ ...product, quantity: 1 }));
  };

  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover mb-2 rounded"
      />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600">{product.price.toLocaleString()}₫</p>
      <button
        onClick={handleAdd}
        className="mt-2 w-full py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Thêm vào giỏ
      </button>
    </div>
  );
}

export default ProductCard;
