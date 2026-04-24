import { useEffect, useState } from "react";

function ProductFilter() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all"); // state lưu danh mục đang chọn

  // Lấy dữ liệu products
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Lấy danh sách category từ products, loại bỏ trùng
  const categories = ["all", ...new Set(products.map((p) => p.category))];

  // Lọc sản phẩm theo category
  const filteredProducts =
    category === "all"
      ? products
      : products.filter((p) => p.category === category);

  return (
    <div>
      <h2>Danh sách sản phẩm</h2>

      {/* Dropdown chọn category */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      {/* Hiển thị sản phẩm */}
      {filteredProducts.length === 0 ? (
        <p>Không tìm thấy sản phẩm</p>
      ) : (
        filteredProducts.map((p) => (
          <p key={p.id}>
            {p.title} - ${p.price} - {p.category}
          </p>
        ))
      )}
    </div>
  );
}

export default ProductFilter;