import React from "react";

import { data } from "../data/BooksData";
import { ShopItem } from "./ShopItem";

export const Shop = ({ dispatch }) => {
  return (
    <div>
      <h1 className="text-5xl font-bold pb-4 border-gray-300 border-b-2">
        Cửa hàng
      </h1>
      <div className="grid grid-cols-4 gap-4 my-12">
        {data.map((x) => (
          <ShopItem item={x} dispatch={dispatch} key={x.id} />
        ))}
      </div>
    </div>
  );
};
