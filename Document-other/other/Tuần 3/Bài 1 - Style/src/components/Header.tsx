import logo from "../assets/Logo_IUH.png";
import man from "../assets/man.png";

const Header = () => {
  return (
    <div className="flex flex-row justify-around items-center h-[150px] border-b-2 border-gray-300">
      <img src={logo} alt="" className="w-[150px]" />
      <input
        type="text"
        className="w-[500px] p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
        placeholder="Nhập nội dung..."
      />
      <nav className="space-x-4">
        <a href="" className="text-gray-400 text-sm">
          What to cook
        </a>
        <a href="" className="text-gray-400 text-sm">
          Recipes
        </a>
        <a href="" className="text-gray-400 text-sm">
          Ingredients
        </a>
        <a href="" className="text-gray-400 text-sm">
          Occasions
        </a>
        <a href="" className="text-gray-400 text-sm">
          About Us
        </a>
      </nav>
      <button className="text-pink-500 bg-pink-100 text-md px-4 py-2 rounded-lg hover:text-pink-100 hover:bg-pink-500">
        Your Recipe Box
      </button>
      <img
        src={man}
        className="w-[60px] border-2 border-pink-500 rounded-full"
        alt=""
      />
    </div>
  );
};

export default Header;
