import React from "react";
import { Link } from "react-router-dom";

export const BookItem = ({ book }) => {
  return (
    <div className="flex flex-col border-2 border-gray-500 p-4 rounded-lg items-center">
      <img src={book.img} alt="" className="w-full h-1/2" />
      <h3 className="text-xl font-bold">{book.tieude}</h3>
      <h4 className="text-lg text-gray-500">{book.tacgia}</h4>
      <p className="min-h-[50px] italic">{book.mota}</p>
      <p className="text-red-500 font-bold">{book.gia} VNĐ</p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg py-2 w-11/12 my-4">
        <Link to={`/book/${book.id}`}>Xem chi tiết</Link>
      </button>
    </div>
  );
};

// {
//   id: 0,
//   tieude: "Lập trình JavaScript nâng cao",
//   tacgia: "Nguyễn Văn A",
//   mota: "Cuốn sách cung cấp kiến thức chuyên sâu về JavaScript, từ cơ bản đến nâng cao.",
//   gia: 250000,
//   img: "/book1.jpg",
// },
