import RateFilter from "./RateFilter";
import TimeFilter from "./TimeFilter";
import TypeFilter from "./TypeFilter";

const Filters = () => {
  return (
    <div className="border-2 border-gray-300 w-2/3 mx-auto px-4 py-2 rounded-lg">
      <h3 className="text-3xl font-bold">Filters</h3>
      <TypeFilter />
      <TimeFilter />
      <RateFilter />
      <div>
        <button className="w-full h-[50px] bg-pink-500 text-white rounded-lg text-center hover:bg-pink-300 hover:text-pink-500">
          Apply
        </button>
      </div>
    </div>
  );
};

export default Filters;
