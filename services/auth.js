import axios from "axios";
export const register = async (data) => {
  const res = axios.post(
    `https://food-order-online-backend.onrender.com/api/user/register`,
    data,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  return res;
};

export const loginUser = async (data) => {
  const res = axios.post(
    `https://food-order-online-backend.onrender.com/api/user/login`,
    data,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
  return res;
};

export const getAllUsers = async (email) => {
  const res = await axios.get(`https://food-order-online-backend.onrender.com/api/user`, {
    params: { email },
  });
  return res;
};


export const myDetails = async (email) => {
  const res = axios.get(
    `https://food-order-online-backend.onrender.com/api/user/${email}`,
    {}
  );
  return res;
};

export const updateUser = async (data) => {
  const res = await axios.put(
    `https://food-order-online-backend.onrender.com/api/user/update`,
    data,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  return res;
};