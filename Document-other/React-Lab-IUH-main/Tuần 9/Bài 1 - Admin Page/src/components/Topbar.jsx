import { Bell, CircleHelp, Search } from "lucide-react";
import man from "../assets/man.png";
import { useLocation } from "react-router-dom";

const Topbar = () => {
  const location = useLocation();

  let title;
  switch (location.pathname) {
    case "/dashboard":
      title = "Dashboard";
      break;
    case "/projects":
      title = "Projects";
      break;
    case "/teams":
      title = "Teams";
      break;
    case "/analytics":
      title = "Analytics";
      break;
    case "/messages":
      title = "Messages";
      break;
    case "/intergrations":
      title = "Intergrations";
      break;
    default:
      title = "Dashboard";
  }

  console.log(title);

  return (
    <div className="flex flex-row justify-between items-center min-h-[100px] border-b-2 border-gray-300 px-12">
      <div className="text-3xl text-pink-500 font-bold flex flex-row items-center">
        <h1>{title}</h1>
      </div>
      <div className="flex flex-row items-center space-x-12">
        <div className="flex justify-center items-center space-x-2">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 hover:text-pink-500 cursor-pointer">
              <Search />
            </span>
            <input
              type="text"
              className="min-w-[300px] pl-10 pr-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
              placeholder="Nhập nội dung..."
            />
          </div>
        </div>
        <Bell className="size-8 hover:text-pink-500 cursor-pointer" />
        <CircleHelp className="size-8 hover:text-pink-500 cursor-pointer" />
        <img
          src={man}
          className="w-[60px] border-2 border-pink-500 hover:border-4 cursor-pointer rounded-full"
          alt=""
        />
      </div>
    </div>
  );
};

export default Topbar;
