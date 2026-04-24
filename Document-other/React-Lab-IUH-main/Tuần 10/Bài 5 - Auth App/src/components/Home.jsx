import React from "react";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../features/authSlice";
import UserInfo from "./UserInfo";
import LoginForm from "./LoginForm";

function Home() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {isLoggedIn ? <UserInfo /> : <LoginForm />}
    </div>
  );
}

export default Home;
