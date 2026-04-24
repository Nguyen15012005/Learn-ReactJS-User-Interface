import React from "react";
import { Header } from "../components/Header";
import Footer from "../components/Footer";
import { Frown } from "lucide-react";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-col justify-center items-center flex-grow">
        <Frown className="size-1/8" />
        <h1 className="text-5xl font-bold my-6">404</h1>
        <p className=" text-gray-500 text-lg text-center">Page Not Found</p>
        <Link
          to={"/dashboard"}
          className="px-4 py-1 bg-blue-500 hover:bg-blue-600 my-4 rounded-lg text-white font-bold text-lg"
        >
          Back To Dashboard
        </Link>
      </div>
      <Footer />
    </div>
  );
};
