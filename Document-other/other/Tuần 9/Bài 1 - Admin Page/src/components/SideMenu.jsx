import {
  Blocks,
  ChartSpline,
  FolderOpenDot,
  LayoutDashboard,
  MessageSquareText,
  UsersRound,
} from "lucide-react";
import logo from "../assets/Logo_IUH.png";

import React from "react";
import { CustomNavLink } from "./CustomNavLink";
import { NavLink } from "react-router-dom";

export const SideMenu = () => {
  return (
    <div className="border-gray-300 border-e-2 flex flex-col items-center py-4">
      <img src={logo} alt="" className="w-[150px]" />
      <nav className="my-12 w-full">
        <ul>
          <li>
            <CustomNavLink to={"/dashboard"}>
              <LayoutDashboard />
              <p className="text-lg font-bold">Dashboard</p>
            </CustomNavLink>
          </li>
          <li>
            <CustomNavLink to="/projects">
              <FolderOpenDot />
              <p className="text-lg font-bold">Projects</p>
            </CustomNavLink>
          </li>
          <li>
            <CustomNavLink to="/teams">
              <UsersRound />
              <p className="text-lg font-bold">Teams</p>
            </CustomNavLink>
          </li>
          <li>
            <CustomNavLink to="/analytics">
              <ChartSpline />
              <p className="text-lg font-bold">Analytics</p>
            </CustomNavLink>
          </li>
          <li>
            <CustomNavLink to="/messages">
              <MessageSquareText />
              <p className="text-lg font-bold">Messages</p>
            </CustomNavLink>
          </li>
          <li>
            <CustomNavLink to="/intergrations">
              <Blocks />
              <p className="text-lg font-bold">Intergrations</p>
            </CustomNavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
