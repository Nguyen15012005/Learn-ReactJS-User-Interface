import { Food } from "./Foods";

type Props = {
  food: Food;
};

const FoodItem: React.FC<Props> = ({ food }) => {
  return (
    <div className="border-2 border-gray-200 rounded-lg shadow-lg space-y-8 pb-2">
      <img src={food.imgUrl} alt="" className="w-full" />
      <div className="space-y-4 px-4">
        <h4 className="text-lg font-bold">{food.name}</h4>
        <p className="bg-pink-200 text-pink-400 text-md px-4 py-2 rounded-2xl w-fit ">
          {food.cookTime} minutes
        </p>
      </div>
    </div>
  );
};

export default FoodItem;
