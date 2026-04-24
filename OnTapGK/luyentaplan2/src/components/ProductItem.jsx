import React from "react";
import "../assets/style.css";
const ProductItem = ({ product, onDelete }) => {
  return (
    <li className="card">
      <img src={product.image} alt="" />
      <p>{product.name}</p>
      <p>{product.price}</p>
      <p>{product.category}</p>
      <button
        onClick={() => {
          onDelete(product.id);
        }}
      >
        {" "}
        Xóa
      </button>
    </li>
  );
};

export default React.memo(ProductItem);
