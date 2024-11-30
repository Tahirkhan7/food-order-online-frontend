import axios from "axios";

const BASE_URL = import.meta.env.API_URL;

export const getAllPayments = async (email) => {
  const res = await axios.get(`${BASE_URL}/api/payment/all/${email}`);
  return res;
};

export const getPaymentById = async (id) => {
  const res = await axios.get(`${BASE_URL}/api/payment/${id}`);
  return res;
};

export const addPayment = async (data) => {
  const res = await axios.post(`${BASE_URL}/api/payment/add`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};

export const updatePayment = async (data) => {
  const res = await axios.put(`${BASE_URL}/api/payment/edit`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};

export const deletePayment = async (id) => {
  const res = await axios.delete(`${BASE_URL}/api/payment/delete/${id}`);
  return res;
};
