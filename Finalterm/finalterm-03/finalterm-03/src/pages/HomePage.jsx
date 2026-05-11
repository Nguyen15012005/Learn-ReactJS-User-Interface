import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="flex flex-row h-full bg-blue-500 justify-center items-center">
      <div className="space-y-4 text-center">
        <h2 className="text-white font-bold text-5xl">
          Chào Mừng Bạn Đến Với Website Của Chúng Tôi
        </h2>

        <p className="text-white font-thin text-3xl">
          Sự Hài Lòng Của bạn là ưu tiên hàng đầu của chúng tôi
        </p>
      </div>
    </div>
  );
};

export default HomePage;
