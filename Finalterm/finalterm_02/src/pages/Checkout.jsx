import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createDeliveryOrder } from "../features/deliveryOrderSlice";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    customerName: "",
    address: "",
    total: 0,
    items: [],
  });

  const handlerOnchange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handlerSubmit = () => {
    const payload = {
      ...form,
      items: items,
      total: items.reduce((total, x) => total + x.quantity * x.price, 0),
    };

    dispatch(createDeliveryOrder(payload));
    navigate("/orders");
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-2/3 rounded-lg shadow-lg border-2 my-10 p-5 space-y-3">
        <div className="flex flex-col">
          <label htmlFor="">Tên khách hàng</label>
          <input
            type="text"
            onChange={handlerOnchange}
            name="customerName"
            className="border-2 border-gray-300 px-2 py-1 rounded-lg"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Địa chỉ</label>
          <input
            type="text"
            onChange={handlerOnchange}
            name="address"
            className="border-2 border-gray-300 px-2 py-1 rounded-lg"
          />
        </div>
      </div>
      <div className="w-full max-h-130 overflow-y-auto">
        <h1>Đơn mua:</h1>
        {items.length > 0 &&
          items.map((x) => (
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
      <button
        onClick={handlerSubmit}
        className="w-1/3 mt-10 bg-blue-500 text-white font-bold rounded-lg py-2 hover:bg-blue-700 cursor-pointer px-7"
      >
        Thanh Toán
      </button>
    </div>
  );
};

export default Checkout;
