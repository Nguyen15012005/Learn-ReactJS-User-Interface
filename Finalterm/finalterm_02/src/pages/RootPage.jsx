import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";

const RootPage = () => {
  const { items } = useSelector((state) => state.cart);
  console.log(items);
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootPage;
