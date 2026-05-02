import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDeliveryOrders } from "../features/deliveryOrderSlice";

const OrderPage = () => {
  const { orders } = useSelector((state) => state.orders);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDeliveryOrders());
  }, [dispatch]);
  console.log(orders);

  return <div className="px-4">OrderPage</div>;
};

export default OrderPage;
