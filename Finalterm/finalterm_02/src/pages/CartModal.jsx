import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../features/cartSlice";
import { useNavigate } from "react-router-dom";

function CartModal({ isOpen, onClose }) {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if (!isOpen) return null;
  return (
    <div className="fixed bg-black/50 inset-0 flex justify-center items-center">
      <div className="bg-white min-h-[600px] w-1/3 rounded-lg p-2">
        <div className=" flex flex-row justify-between text-center px-6">
          <h2 className="text-green-500 font-bold text-3xl mt-4">Giỏ hàng</h2>
          <button
            onClick={onClose}
            className="text-white font-bold text-xl mt-5 px-4 py-1 bg-red-500 rounded-2xl hover:bg-red-800 cursor-pointer"
          >
            X
          </button>
        </div>
        <div className="max-h-130 overflow-y-auto">
          {items.length > 0 &&
            items.map((x) => (
              <div className="flex-col my-2 border-2 border-lime-500 rounded-lg px-1 py-2 justify-between">
                <div className="flex justify-between">
                  <div className="">
                    <p>Mặt hàng: {x.name}</p>
                  </div>
                  <div className="flex space-x-2">
                    <p>Giá tiền: {x.price}</p>
                    <p>Số lượng: {x.quantity}</p>
                  </div>
                </div>
                <div className="flex justify-evenly mt-4">
                  <button
                    onClick={() => dispatch(addToCart(x))}
                    className="bg-green-500 text-white font-bold rounded-lg py-2 hover:bg-green-700 cursor-pointer px-7"
                  >
                    Tăng SL
                  </button>
                  <button
                    onClick={() => dispatch(removeFromCart(x.id))}
                    className="bg-red-500 text-white font-bold rounded-lg py-2 hover:bg-red-700 cursor-pointer px-7"
                  >
                    Giảm SL
                  </button>
                </div>
              </div>
            ))}
        </div>

        {items.length > 0 && (
          <div className="flex justify-center mt-5 border-t-2 pt-2">
            <button
              onClick={() => {
                navigate("/checkout");
                onClose();
              }}
              className="bg-blue-500 text-white font-bold rounded-lg py-2 hover:bg-blue-700 cursor-pointer px-7"
            >
              Thanh Toán
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartModal;
