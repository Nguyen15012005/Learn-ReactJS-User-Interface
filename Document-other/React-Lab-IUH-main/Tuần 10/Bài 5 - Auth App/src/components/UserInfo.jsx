import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/authSlice";

function UserInfo() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className="bg-white p-6 rounded-xl shadow text-center">
      <h2 className="text-xl font-bold mb-2">👋 Xin chào, {user.name}</h2>
      <p className="text-gray-600 mb-4">Tài khoản: {user.username}</p>
      <button
        onClick={() => dispatch(logout())}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Đăng xuất
      </button>
    </div>
  );
}

export default UserInfo;
