import notFound from "../assets/notFound.png";

const Result = () => {
  return (
    <div className="flex-row justify-center items-center w-2/3">
      <h1 className="text-5xl font-bold text-center">
        Sorry, no result for "Huynh Duc Phu sieu dep trai"
      </h1>
      <img src={notFound} alt="" className="text-center" />
      <div className="space-x-4">
        <button className="bg-pink-100 text-pink-300 py-2 px-4 rounded-lg hover:bg-pink-300 hover:text-pink-100">
          Sweet Cake
        </button>
        <button className="bg-pink-100 text-pink-300 py-2 px-4 rounded-lg hover:bg-pink-300 hover:text-pink-100">
          Sweet Cake
        </button>
        <button className="bg-pink-100 text-pink-300 py-2 px-4 rounded-lg hover:bg-pink-300 hover:text-pink-100">
          Sweet Cake
        </button>
        <button className="bg-pink-100 text-pink-300 py-2 px-4 rounded-lg hover:bg-pink-300 hover:text-pink-100">
          Sweet Cake
        </button>
      </div>
    </div>
  );
};

export default Result;
