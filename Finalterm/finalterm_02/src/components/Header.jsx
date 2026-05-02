import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center border-2 border-gray-300 px-4 py-8">
      <div className="">
        <span className="text-5xl text-green-500 font-bold">
          E-commerce App
        </span>
      </div>
      <div className="">
        <nav className="space-x-10">
          <NavLink
            to={""}
            className={({ isActive }) =>
              `cursor-pointer text-green-500 hover:text-green-900 text-lg
                ${isActive ? "font-bold text-green-900 border-b-green-900" : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/products"}
            className={({ isActive }) =>
              `cursor-pointer text-green-500 hover:text-green-900 text-lg
            ${isActive ? "font-bold text-green-900 border-b-green-900" : ""}`
            }
          >
            Products
          </NavLink>
          <NavLink
            to={"/orders"}
            className={({ isActive }) =>
              `cursor-pointer text-green-500 hover:text-green-900 text-lg
            ${isActive ? "font-bold text-green-900 border-b-green-900" : ""}`
            }
          >
            Orders
          </NavLink>
          <button className="cursor-pointer bg-green-500 hover:bg-green-900 text-lg px-5 py-1 rounded-lg text-white">
            Cart
          </button>
          
        </nav>
      </div>
    </div>
  );
};

export default Header;
