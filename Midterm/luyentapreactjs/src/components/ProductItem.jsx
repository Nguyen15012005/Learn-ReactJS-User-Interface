import React from "react";
import "../assets/grid.css";

const ProductItem = ({ product, onDelete }) => {
  return (
    <li key={product.id} className="card">
      <img src={product.image} alt="" />
      <p>{product.name}</p>
      <p>Giá: {product.price}</p>
      <p>Danh Mục: {product.category}</p>
      <button onClick={() => onDelete(product.id)}>Xóa</button>
    </li>
  );
};

export default React.memo(ProductItem);
