import React, { useState } from "react";
import { useDispatch } from "react-redux";
import users from "../data/users";
import { login } from "../features/authSlice";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const found = users.find(
      (u) => u.username === username && u.password === password
    );
    if (found) {
      dispatch(login(found));
      setError("");
    } else {
      setError("Sai tên đăng nhập hoặc mật khẩu");
    }
  };

  return (
    <div className="w-full max-w-sm bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">🔐 Đăng nhập</h2>
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
      <input
        type="text"
        placeholder="Tên đăng nhập"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full mb-3 p-2 border rounded"
      />
      <input
        type="password"
        placeholder="Mật khẩu"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full mb-4 p-2 border rounded"
      />
      <button
        onClick={handleSubmit}
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Đăng nhập
      </button>
    </div>
  );
}

export default LoginForm;
