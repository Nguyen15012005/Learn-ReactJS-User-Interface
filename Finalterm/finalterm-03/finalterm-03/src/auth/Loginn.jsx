import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

function Login() {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "123456") {
      localStorage.setItem("isLoggedIn", "true");

      toast.success("Đăng nhập thành công");

      navigate("/orders");
    } else {
      toast.error("Sai tài khoản hoặc mật khẩu");
    }
  };

  return (
    <div>
      <h1>Login</h1>

      <input
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
