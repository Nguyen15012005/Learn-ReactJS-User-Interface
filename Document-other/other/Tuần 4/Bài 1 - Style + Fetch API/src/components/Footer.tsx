import logo from "../assets/Logo_IUH.png";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-8">
      <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 justify-around items-center ">
        <div className="flex flex-row justify-between items-center bg-gray-800 rounded-lg px-4 py-2">
          <img src={logo} alt="" className="w-24" />
          <div className="flex flex-col">
            <h1 className="text-xl md:text-3xl text-blue-400 font-bold">IUH</h1>
            <p className="md:text-lg">
              Welcome to our website, lean how to cook like Pro
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
          <a className="text-lg hover:text-blue-600">Recipes</a>
          <a className="text-lg hover:text-blue-600">Ingredients</a>
          <a className="text-lg hover:text-blue-600">Ocassions</a>
        </div>

        <div className="flex flex-col text-gray-300 text-center">
          <p>Hotline: 1900 1234 – Email: huynhducphu2502@gmail.com </p>
          <p>Chịu trách nhiệm nội dung: Huỳnh Đức Phú</p>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-6 border-t border-gray-700 pt-4">
        © 2025 IUH. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
