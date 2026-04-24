import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import { CartItem } from "../components/CartItem";

export const CartPage = () => {
  const { state } = useContext(CartContext);

  return (
    <div className="flex flex-col w-2/3 mx-auto space-y-4 my-12">
      {state.cart.map((x) => (
        <CartItem cartItem={x} key={x.id} />
      ))}

      <h3 className="my-12 text-xl font-bold">Tổng giá tiền: {state.total}</h3>
    </div>
  );
};
