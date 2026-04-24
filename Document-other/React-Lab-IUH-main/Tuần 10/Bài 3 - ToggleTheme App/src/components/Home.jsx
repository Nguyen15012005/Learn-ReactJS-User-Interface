import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../features/themeSlice";

function Home() {
  const dark = useSelector((state) => state.theme.dark);
  const dispatch = useDispatch();

  useEffect(() => {
    const root = window.document.documentElement;
    if (dark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center transition-colors duration-300 ${
        dark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <h1 className="text-3xl font-bold mb-6">
        🌗 Chế độ {dark ? "Tối" : "Sáng"}
      </h1>

      <button
        onClick={() => dispatch(toggleTheme())}
        className={`px-6 py-2 rounded font-semibold ${
          dark
            ? "bg-yellow-400 text-black hover:bg-yellow-500"
            : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
      >
        Chuyển sang chế độ {dark ? "Sáng ☀️" : "Tối 🌙"}
      </button>
    </div>
  );
}

export default Home;
