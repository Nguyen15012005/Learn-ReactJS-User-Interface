import React from "react";
import Header from "../components/Header";
import Footer from "./../components/Footer";
import { Outlet } from "react-router-dom";

const RootPage = () => {
  return (
    <div>
      <div className="">
        <Header />
      </div>
      <div className="">
        <Outlet />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default RootPage;
