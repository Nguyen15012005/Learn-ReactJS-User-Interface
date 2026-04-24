import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { data } from "../data/BooksData";
import CartContext from "../context/CartContext";

export const BookDetailsPage = () => {
  const { state, dispatch } = useContext(CartContext);
  console.log(state);

  const { id } = useParams();

  const book = data.find((x) => x.id == id);

  if (!book) return;

  return (
    <div className="flex flex-col items-center my-12">
      <img src={book.img} alt="" className="w-1/3" />
      <h3 className="text-xl font-bold">{book.tieude}</h3>
      <h4 className="text-lg text-gray-500">{book.tacgia}</h4>
      <p className="min-h-[50px] italic">{book.mota}</p>
      <p className="text-red-500 font-bold">{book.gia} VNĐ</p>
      <button
        onClick={() => dispatch({ type: "ADD", payload: book })}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg py-2 w-1/3 my-4"
      >
        Thêm vào giỏ hàng
      </button>
    </div>
  );
};
