import React, { useRef } from "react";

export const InputForm = ({ addPhone }) => {
  const phoneTypeRef = useRef(null);
  const phoneNumberRef = useRef(null);

  const handleSubmit = () => {
    if (phoneTypeRef.current && phoneNumberRef.current) {
      const phone = {
        type: phoneTypeRef.current.value,
        number: phoneNumberRef.current.value,
      };

      addPhone(phone);
    }
  };

  return (
    <div className="flex flex-col w-1/3 my-12 mx-auto rounded-lg border-2 border-gray-500 px-4 py-2 space-y-4">
      <h1 className="font-bold text-xl text-center">Biểu mẫu điện thoại</h1>
      <div className="space-y-4">
        <label
          htmlFor="phoneType"
          className="block text-sm font-medium text-gray-700"
        >
          Loại điện thoại
        </label>
        <select
          ref={phoneTypeRef}
          id="phoneType"
          className="w-full px-2 py-1 border-2 border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md"
        >
          <optgroup label="Cá nhân">
            <option value="Điện thoại nhà">Điện thoại nhà</option>
            <option value="Di động cá nhân">Điện thoại di động cá nhân</option>
          </optgroup>
          <optgroup label="Công việc">
            <option value="Điện thoại Văn phòng">Điện thoại văn phòng</option>
            <option value="Di động công việc">
              Điện thoại di động công việc
            </option>
          </optgroup>
        </select>
      </div>
      <div className="space-y-4">
        <label
          htmlFor="phoneNumber"
          className="block text-sm font-medium text-gray-700"
        >
          Số điện thoại
        </label>
        <input
          ref={phoneNumberRef}
          id="phoneNumber"
          type="text"
          placeholder="Nhập số điện thoại vào đây"
          className="w-full px-2 py-1 border-2 border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md"
        />
      </div>

      <button
        onClick={handleSubmit}
        className="w-2/3 mx-auto py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-xl font-bold text-white cursor-pointer"
      >
        Thêm điện thoại
      </button>
    </div>
  );
};
