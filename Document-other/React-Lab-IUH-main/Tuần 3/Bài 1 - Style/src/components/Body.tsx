import Filters from "./Filters";
import Result from "./Result";

const Body = () => {
  return (
    <div className="my-12 grid grid-cols-2">
      <Filters />
      <Result />
    </div>
  );
};

export default Body;
