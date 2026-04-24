import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch dữ liệu khi component render lần đầu
  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Lỗi khi fetch dữ liệu:", error);
        setLoading(false);
      });
  }, []);

  // Xử lý xoá sản phẩm
  const handleDelete = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  // Lọc sản phẩm realtime theo tên
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Hiển thị Loading theo đúng yêu cầu
  if (loading) {
    return <h3 className="text-center text-secondary my-5">Loading tasks...</h3>;
  }

  return (
    <div>
      {/* Khung tìm kiếm */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Tìm kiếm sản phẩm theo tên..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Danh sách dạng Grid */}
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
        {filteredProducts.map(product => (
          <div className="col" key={product.id}>
            <ProductItem product={product} onDelete={handleDelete} />
          </div>
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <p className="text-center text-danger mt-4">Không tìm thấy sản phẩm nào!</p>
      )}
    </div>
  );
}

export default ProductList;