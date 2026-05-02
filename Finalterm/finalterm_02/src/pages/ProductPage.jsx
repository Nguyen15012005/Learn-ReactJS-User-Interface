import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/productSlice";
import ProductCard from "./ProductCard";

const ProductPage = () => {
  const { products, loading } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  console.log(products);

  if (loading) return <p>Loading...</p>;
  return (
    <div className="px-4 my-8">
      <h2 className="text-green-500 text-3xl font-bold">Danh sách mặt hàng</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4">
        {!loading &&
          products &&
          products.map((x) => <ProductCard products={x} />)}
      </div>
    </div>
  );
};

export default ProductPage;
