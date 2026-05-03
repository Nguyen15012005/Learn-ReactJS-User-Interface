import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDeliveryOrders } from "../features/deliveryOrderSlice";

const OrderPage = () => {
  const { orders, loading } = useSelector((state) => state.orders);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDeliveryOrders());
  }, [dispatch]);
  console.log(orders);

  if (loading) return <p>Loading...</p>;
  return (
    <div className="px-4 my-8">
      <h2 className="text-green-500 text-3xl font-bold">Danh sách đơn hàng</h2>
      <div className="space-y-4">
        {!loading &&
          orders &&
          orders.map((x) => (
            <div className="border-2 border-s-lime-500 p-4 rounded-lg p-4 shadow-xl">
              <p>{x.customerName}</p>
              <p>{x.address}</p>
              <div className="w-full max-h-130 overflow-y-auto">
                {x.items.length > 0 &&
                  x.items.map((x) => (
                    <div className="flex-col my-2 border-2 border-lime-500 rounded-lg px-1 py-2 justify-between">
                      <div className="flex justify-between">
                        <div className="">
                          <p>Mặt hàng: {x.name}</p>
                        </div>
                        <div className="flex space-x-2">
                          <p>Giá tiền: {x.price}</p>
                          <p>Số lượng: {x.quantity}</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default OrderPage;
