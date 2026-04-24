import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { UseFetchAPI } from "../hooks/UseFetchAPI";
import ProductItem from "./ProductItem";
import "../assets/style.css";
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const inputRef = useRef(null);

  const categories = [...new Set(products.map((p) => p.category))];

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await UseFetchAPI();
        setProducts(data);
      } catch (error) {
        setError("Loi roi");
      } finally {
        setLoading(false);
      }
    };
    getData();
    if (inputRef.current) inputRef.current.focus();
  }, []);

  const handleSearch = useMemo(() => {
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(search.toLowerCase()) &&
        (filter === "all"
          ? true
          : product.category.toLowerCase() === filter.toLowerCase()),
    );
  }, [products, search, filter]);

  const handleDelete = useCallback((id) => {
    return setProducts((prev) => prev.filter((p) => p.id !== id));
  }, []);

  if (loading) return <h1 style={{ color: "blue" }}>Loading.....</h1>;
  if (error) return <h1 style={{ color: "red" }}>Error.....</h1>;
  return (
    <div className="">
      <label htmlFor="search">Nhập tên sản phẩm cần tìm</label>
      <input
        ref={inputRef}
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        id="search"
      />
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">Tất cả sản phẩm</option>
        {categories.map((category) => {
          return (
            <option key={category} value={category}>
              {category}
            </option>
          );
        })}
      </select>
      <h1>Danh Sach San Pham</h1>
      {handleSearch.map((product) => {
        return (
          <ul className="grid" key={product.id}>
            <ProductItem product={product} onDelete={handleDelete}>
              San Phẩm
            </ProductItem>
          </ul>
        );
      })}
    </div>
  );
};

export default ProductList;
