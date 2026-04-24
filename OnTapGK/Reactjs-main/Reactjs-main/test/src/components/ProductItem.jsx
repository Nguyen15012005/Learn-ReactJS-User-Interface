import React from 'react';

function ProductItem({ product, onDelete }) {
  return (
    <div className="card h-100 shadow-sm">
      {/* Thay src bằng ảnh placeholder nếu bạn chưa có ảnh thật trong public/images/ */}
      <img src={product.image} className="card-img-top" alt={product.name} style={{ height: '200px', objectFit: 'cover' }} onError={(e)=>{e.target.src="https://via.placeholder.com/200"}} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-primary">{product.name}</h5>
        <p className="card-text mb-1"><strong>Giá:</strong> {product.price.toLocaleString()} VNĐ</p>
        <p className="card-text mb-3"><strong>Danh mục:</strong> {product.category}</p>
        <button 
          className="btn btn-danger mt-auto" 
          onClick={() => onDelete(product.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ProductItem;