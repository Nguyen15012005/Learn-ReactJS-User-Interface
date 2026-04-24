import { useEffect, useState } from "react";
import FoodItem from "./FoodItem";

export type Food = {
  name: string;
  cookTime: number;
  imgUrl: string;
  id: string;
};

const Foods = () => {
  const [data, setData] = useState<Food[]>([]);

  useEffect(() => {
    const url = "https://67c7c86ec19eb8753e7aba01.mockapi.io/foods";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("failed to fetch");
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4">
      {data.map((food) => (
        <FoodItem key={food.id} food={food} />
      ))}
    </div>
  );
};

export default Foods;
