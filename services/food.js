import axios from "axios";

export const getAllFoodByCategory = async (category) => {
  const res = await axios.get(
    `https://food-order-online-backend.onrender.com/api/food/category?c=${category}`
  );
  return res;
};

export const getAllFoodsByCartToken = async (token) => {
  const res = await axios.get(`https://food-order-online-backend.onrender.com/api/orders/token/${token}`, {
    params: { token },
  });
  return res;
};
