import axios from "axios";

const BASE_URL = import.meta.env.API_URL;

export const getAllPayments = async (email) => {
  const res = await axios.get(`https://food-order-online-backend.onrender.com/api/payment/all/${email}`);
  return res;
};

export const getPaymentById = async (id) => {
  const res = await axios.get(`https://food-order-online-backend.onrender.com/api/payment/${id}`);
  return res;
};

export const addPayment = async (data) => {
  const res = await axios.post(`https://food-order-online-backend.onrender.com/api/payment/add`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};

export const updatePayment = async (data) => {
  const res = await axios.put(`https://food-order-online-backend.onrender.com/api/payment/edit`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};

export const deletePayment = async (id) => {
  const res = await axios.delete(`https://food-order-online-backend.onrender.com/api/payment/delete/${id}`);
  return res;
};
