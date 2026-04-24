import React from "react";

export const ShopItem = ({ item, dispatch }) => {
  return (
    <div className=" border-2 border-gray-300 rounded-l pb-8">
      <img src={item.img} alt="" className="w-full h-48" />
      <p className="font-bold text-center">{item.tieude}</p>
      <p className="text-gray-500 text-center">{item.tacgia}</p>
      <p className="font-bold text-red-500 text-center">{item.gia} VNĐ</p>
      <div className="w-2/3 mx-auto text-center">
        <button
          onClick={() => dispatch({ type: "ADD", payload: item })}
          className="my-4 rounded-lg bg-blue-500 hover:bg-blue-600 w-full py-2 text-white font-bold"
        >
          Thêm Vào Giỏ Hàng
        </button>
      </div>
    </div>
  );
};
