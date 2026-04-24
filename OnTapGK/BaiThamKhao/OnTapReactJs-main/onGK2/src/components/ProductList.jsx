import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import ProductItem from "./ProductItem";
import { UseFetchData } from "../hooks/useFetchData";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const inputRef = useRef(null);
  const categories = [...new Set(products.map((p) => p.category))];

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await UseFetchData();
        setProducts(data);
      } finally {
        setLoading(false);
      }
    };
    getData();
    if (inputRef.current) inputRef.current.focus();
  }, []);

  const productSearch = useMemo(() => {
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(search.toLowerCase()) &&
        (filter == "all"
          ? true
          : product.category.toLowerCase() === filter.toLowerCase()),
    );
  }, [products, search, filter]);

  const handleDelete = useCallback((id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  }, []);
  if (loading) return <h1>Loading .....</h1>;

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input
        ref={inputRef}
        type="text"
        id="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        {categories.map((category) => {
          return (
            <option key={category} value={category}>
              {category}
            </option>
          );
        })}
      </select>
      <h1>Danh sách sản phẩm: </h1>
      <ul className="grid">
        {productSearch.map((product) => {
          return (
            <ProductItem
              product={product}
              onDelete={handleDelete}
            >
              Sản phẩm
            </ProductItem>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductList;
