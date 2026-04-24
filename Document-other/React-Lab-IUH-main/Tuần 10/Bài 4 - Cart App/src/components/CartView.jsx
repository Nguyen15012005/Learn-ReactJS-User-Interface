import React from "react";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectTotalPrice,
  selectTotalQuantity,
} from "../features/cartSlice";
import CartItemCard from "./CartItemCard";

function CartView() {
  const items = useSelector(selectCartItems);
  const totalQty = useSelector(selectTotalQuantity);
  const totalPrice = useSelector(selectTotalPrice);

  return (
    <div className="bg-gray-100 p-6 rounded-xl w-full max-w-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">🛒 Giỏ hàng</h1>

      {items.map((item) => (
        <CartItemCard key={item.id} item={item} />
      ))}

      <div className="mt-4 text-right">
        <p className="font-semibold">Tổng số lượng: {totalQty}</p>
        <p className="font-semibold">
          Tổng tiền: {totalPrice.toLocaleString()}₫
        </p>
      </div>
    </div>
  );
}

export default CartView;
