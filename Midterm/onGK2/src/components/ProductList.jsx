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
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await UseFetchData();
        setProducts(data);
        setLoading(true);
      } finally {
        setLoading(false);
      }
    };
    getData();
    if (!inputRef.current) inputRef.current.focus();
  }, []);

  const productSearch = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [products, search]);

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
      <h1>Danh sách sản phẩm: </h1>
      <ul className="grid">
        {productSearch.map((product) => {
          return (
            <div key={product.id}>
              <ProductItem product={product} onDelete={handleDelete}>
                Sản phẩm
              </ProductItem>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductList;
