import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-blue-400 min-h-[80px] flex flex-row justify-center items-center space-x-12 text-white font-bold text-xl">
      <Link
        to=""
        className="min-w-[150px] py-1 bg-blue-600 hover:bg-blue-700 text-white font-bold  text-center rounded-lg"
      >
        Home
      </Link>
      <Link
        to="/counter"
        className="min-w-[150px] py-1 bg-blue-600 hover:bg-blue-700 text-white font-bold  text-center rounded-lg"
      >
        Smart Counter
      </Link>
      <Link
        to="/todos"
        className="min-w-[150px] py-1 bg-blue-600 hover:bg-blue-700 text-white font-bold  text-center rounded-lg"
      >
        Todo List
      </Link>
    </div>
  );
};

export default Header;
