import React from "react";
import { NavLink } from "react-router-dom";

export const CustomNavLink = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "py-2 flex flex-row justify-left space-x-2 bg-pink-500 w-full px-2 hover:cursor-pointer text-white"
          : "py-2 flex flex-row justify-left space-x-2 hover:bg-pink-300/50 w-full px-2 hover:cursor-pointer text-gray-500"
      }
    >
      {children}
    </NavLink>
  );
};
