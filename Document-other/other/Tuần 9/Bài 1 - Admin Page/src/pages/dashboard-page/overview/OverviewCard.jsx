import {
  ArrowUpRight,
  CircleDollarSign,
  ClipboardCheck,
  PersonStanding,
  PersonStandingIcon,
  ShoppingCart,
} from "lucide-react";
import React from "react";

export const OverviewCard = ({ title, total, percent }) => {
  let bg = "bg-blue-300/50 hover:border-blue-500";
  if (title === "Turnover") bg = "bg-pink-300/50 hover:border-pink-500";

  let icon;
  switch (title) {
    case "Turnover":
      icon = <ShoppingCart className="text-pink-500" />;
      break;
    case "Profit":
      icon = <CircleDollarSign className="text-blue-500" />;
      break;
    case "New customer":
      icon = <PersonStandingIcon className="text-blue-500" />;
      break;
    default:
      icon = <ClipboardCheck />;
  }

  return (
    <div
      className={`p-4 rounded-2xl shadow-md ${bg} flex items-center justify-between border-2 border-transparent`}
    >
      <div className="flex flex-col space-y-2">
        <h3 className="text-xl font-semibold text-gray-700">{title}</h3>
        <p className="text-3xl font-bold">${total}</p>
        <p className="text-green-500 flex items-center space-x-1">
          <ArrowUpRight size={16} />
          {percent}% peroid of change
        </p>
      </div>
      <div className="p-2 bg-white rounded-xl shadow-sm">{icon}</div>
    </div>
  );
};
