import axios from "axios";

export const placeOrder = async (data) => {
  const res = await axios.post(
    `https://food-order-online-backend.onrender.com/api/orders/update`,
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return res;
};

export const getAllOrders = async () => {
  const res = await axios.get(`https://food-order-online-backend.onrender.com/api/orders/all`);
  return res;
};

export const getOrderByToken = async (token) => {
  const res = await axios.get(`https://food-order-online-backend.onrender.com/api/orders/token/${token}`, {
    params: { token },
  });
  return res;
};

export const updateOrderStatusApi = async (token) => {
  const res = await axios.put(`https://food-order-online-backend.onrender.com/api/orders/updateStatus`, {
    params: { token },
  });
  return res;
};

export const getOrderById = async (orderId) => {
  const res = await axios.get(`https://food-order-online-backend.onrender.com/api/orders/${orderId}`);
  return res;
};
