import axios from "axios";

const BASE_URL = import.meta.env.API_URL;

export const getAllAddresses = async (email) => {
  const res = await axios.get(`${BASE_URL}/api/address/all/${email}`);
  return res;
};

export const getAddressById = async (id) => {
  const res = await axios.get(`${BASE_URL}/api/address/${id}`);
  return res;
};

export const addAddress = async (data) => {
  const res = await axios.post(`${BASE_URL}/api/address/add`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};

export const updateAddress = async (data) => {
  const res = await axios.put(`${BASE_URL}/api/address/edit`, data, {
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
