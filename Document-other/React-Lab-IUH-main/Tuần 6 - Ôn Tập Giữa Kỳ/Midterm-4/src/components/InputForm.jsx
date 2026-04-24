import React, { useRef } from "react";

export const InputForm = ({ onSubmit }) => {
  const nameInputRef = useRef(null);
  const phoneInputRef = useRef(null);

  const handleSubmit = () => {
    if (nameInputRef.current && phoneInputRef.current) {
      const contact = {
        name: nameInputRef.current.value,
        phone: phoneInputRef.current.value,
      };

      onSubmit(contact);
    }
  };

  return (
    <div className="w-1/3 mx-auto p-6 rounded-lg shadow-md bg-white border-2 border-gray-300">
      <h1 className="text-2xl font-bold text-center mb-4">Biểu mẫu liên hệ</h1>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-2 font-medium">
            Họ tên:
          </label>
          <input
            ref={nameInputRef}
            id="name"
            type="text"
            className="p-2 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Nhập họ tên của bạn"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone" className="mb-2 font-medium">
            Số điện thoại:
          </label>
          <input
            ref={phoneInputRef}
            id="phone"
            type="text"
            className="p-2 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Nhập số điện thoại của bạn"
          />
        </div>
      </div>

      <div className="text-center my-4">
        <button
          onClick={handleSubmit}
          className="bg-blue-500 p-2 w-11/12 text-white rounded-lg hover:bg-blue-600"
        >
          Thêm Liên Hệ
        </button>
      </div>
    </div>
  );
};
