import React from "react";

const ProductCard = ({ products }) => {
  return (
    <div
      className="border-2 border-lime-500 py-1 px-2 rounded-lg shadow-xl space-y-6 py-10 transition-transform duration-300 
                hover:scale-103 cursor-pointer"
    >
      <div className="w-full text-center">
        <h1 className="text-2xl font-bold text-green-500 uppercase">{products.name}</h1>
      </div>
      <p className="text-l font-semibold text-black-500">
        Mô tả: {products.description}
      </p>
      <p className="text-l font-semibold text-red-500">
        Giá tiền: {products.price} VNĐ
      </p>
      <div className="w-full flex justify-center mt-10">
        <button className="w-2/3 bg-green-500 text-white font-bold rounded-lg py-2 hover:bg-green-700 cursor-pointer">
          Thêm vào giỏ hàng
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
