import axios from "axios";

export const getAllFoodByCategory = async (category) => {
  const res = await axios.get(
    `${import.meta.env.API_URL}/api/food/category?c=${category}`
  );
  return res;
};

export const getAllFoodsByCartToken = async (token) => {
  const res = await axios.get(`${import.meta.env.API_URL}/api/orders/${token}`, {
    params: { token },
  });
  return res;
};
