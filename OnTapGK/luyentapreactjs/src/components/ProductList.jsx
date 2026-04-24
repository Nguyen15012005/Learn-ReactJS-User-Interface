import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { UseFetchAPI } from "../hooks/UseFetchAPI";
import ProductItem from "./ProductItem";
import "../assets/grid.css";

const ProductList = () => {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all")
  const categories = [...new Set(products.map((p)=>p.category))];

  const inputRef = useRef(null);

  useEffect(() => {
    const getDataProducts = async () => {
      try {
        const data = await UseFetchAPI();
        setProduct(data);
      } catch (error) {
        setError("Lỗi khi load dữ liệu!", error);
      } finally {
        setLoading(false);
      }
    };

    getDataProducts();
    if (inputRef.current) inputRef.current.focus();
  }, []);

  const productSearch = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) &&(filter === "all"?true:product.category.toLowerCase() === filter.toLocaleLowerCase()),
    );
  }, [products, search, filter]);

  const handleDelete = useCallback((id) => {
    setProduct((prev) => prev.filter((p) => p.id !== id));
  }, []);

  if (loading) return <p>Loading Tasks...</p>;
  if (error) return <p>Error Tasks...</p>;
  return (
    <div>
      <label htmlFor="search">Search</label>
      <input
        type="text"
        ref={inputRef}
        id="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select name="" id="" value={filter} onChange={(e)=> setFilter(e.target.value)}>
        <option value="all">ALL</option>
        {
          categories.map((category)=>{
            return (
              <option key={category} value={category}>{category}</option>
            )
          })
        }
      </select>
      <h1>Danh sách sản phẩm: </h1>
      <ul className="grid">
        {productSearch.map((product) => {
          {products.length === 0 && <h1>Không tìm thấy sản phẩm</h1>}
          return (
            <ProductItem className="card" product={product} onDelete={handleDelete}>
              Sản phẩm
            </ProductItem>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductList;
