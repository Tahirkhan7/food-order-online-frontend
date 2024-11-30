import axios from "axios";

const BASE_URL = import.meta.env.API_URL;

export const getAllAddresses = async (email) => {
  const res = await axios.get(`https://food-order-online-backend.onrender.com/api/address/all/${email}`);
  return res;
};

export const getAddressById = async (id) => {
  const res = await axios.get(`https://food-order-online-backend.onrender.com/api/address/${id}`);
  return res;
};

export const addAddress = async (data) => {
  const res = await axios.post(`https://food-order-online-backend.onrender.com/api/address/add`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};

export const updateAddress = async (data) => {
  const res = await axios.put(`https://food-order-online-backend.onrender.com/api/address/edit`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};

export const deleteAddress = async (id) => {
  const res = await axios.delete(`https://food-order-online-backend.onrender.com/api/address/delete/${id}`);
  return res;
};
