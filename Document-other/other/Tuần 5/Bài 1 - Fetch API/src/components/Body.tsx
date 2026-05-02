import Filters from "./Filters";
import Result from "./Result";

const Body = () => {
  return (
    <div className="my-12 w-11/12 mx-auto grid grid-cols-2">
      <Filters />
      <Result />
    </div>
  );
};

export default Body;
