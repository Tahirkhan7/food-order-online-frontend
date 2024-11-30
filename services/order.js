import axios from "axios";

export const placeOrder = async (data) => {
  const res = await axios.post(
    `${import.meta.env.VITE_BASE_URL}/api/orders/update`,
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
  const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/orders/all`);
  return res;
};

export const getOrderByToken = async (token) => {
  const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/orders/token/${token}`, {
    params: { token },
  });
  return res;
};

export const updateOrderStatusApi = async (token) => {
  const res = await axios.put(`${import.meta.env.VITE_BASE_URL}/api/orders/updateStatus`, {
    params: { token },
  });
  return res;
};

export const getOrderById = async (orderId) => {
  const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/orders/${orderId}`);
  return res;
};
