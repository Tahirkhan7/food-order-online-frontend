/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const navigate = useNavigate();
  const [copiedLink, setCopiedLink] = useState('');

  useEffect(() => {
    const storedToken = localStorage.getItem("jwtToken");
    const storedname = localStorage.getItem("name");
    const storedEmail = localStorage.getItem("email");

    setToken(storedToken);
    setName(storedname);
    setEmail(storedEmail);

    const protectedRoutes = ["/", "/dashboard", "/settings"];
    if (!storedToken && protectedRoutes.includes(location.pathname)) {
      navigate("/login");
    }
  }, [navigate, location.pathname]);

  const login = (data) => {
    localStorage.setItem("jwtToken", data.token);
    localStorage.setItem("name", data.name);
    localStorage.setItem("email", data.email);
    setToken(data.token);
    setName(data.name);
    setEmail(data.email);
    toast.success("Login Successful");
        setTimeout(() => {
          navigate("/products");
        }, 500);
  };

  const logout = () => {
    localStorage.removeItem("jwtToken");
    setToken(null);
    setBoardId(null);
        setTimeout(() => {
          navigate("/login");
        }, 500);

  };

  const setCopyLink = (link) => {
    setCopiedLink(link);
    setTimeout(() => {
      setCopiedLink('');
    }, 3000);
  };

  return (
    <AppContext.Provider
      value={{ name, email, token, login, logout, copiedLink, setCopyLink }}
    >
      {children}
    </AppContext.Provider>
  );
};