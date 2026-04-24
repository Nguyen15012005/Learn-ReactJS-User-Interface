import React from "react";

const ProductItem = ({ product, onDelete }) => {
  return (
    <li key={product.id} className="card">
      <img src={product.image} alt="" />
      <p>{product.name}</p>
      <p>{product.price}</p>
      <p>{product.category}</p>
      <button onClick={() => onDelete(product.id)}>Delete</button>
    </li>
  );
};

export default React.memo(ProductItem);
