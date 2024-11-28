import axios from "axios";

export const getAllFoodByCategory = async (category) => {
  const res = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/api/food/category?c=${category}`
  );
  return res;
};
