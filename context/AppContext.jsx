/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { placeOrder } from "../services/order";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [foodCart, setFoodCart] = useState([]);
  const navigate = useNavigate();
  const [copiedLink, setCopiedLink] = useState("");

  const storedToken = localStorage.getItem("jwtToken");
    const storedName = localStorage.getItem("name");
    const storedEmail = localStorage.getItem("email");
    const storedCopiedLink = localStorage.getItem("copiedLink");
    const storedFoodCart = JSON.parse(localStorage.getItem("foodCart")) || [];

  useEffect(() => {
    

    setToken(storedToken);
    setName(storedName);
    setEmail(storedEmail);
    setFoodCart(storedFoodCart);
    if (storedCopiedLink) setCopiedLink(storedCopiedLink);

    const protectedRoutes = ["/orders", "/payment", "/order-successful", "/profile", "/address"];
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
      if (storedCopiedLink) {
        if (storedCopiedLink.startsWith("http://") || storedCopiedLink.startsWith("https://")) {
          window.location.href = storedCopiedLink;
        } else {
          navigate(storedCopiedLink);
        }
        
      }
      else navigate("/products");
    }, 500);
  };

  const logout = () => {
    localStorage.clear();
    setTimeout(() => {
      navigate("/login");
    }, 500);
  };

  const setCopyLink = (link) => {
    setCopiedLink(link);
    localStorage.setItem("copiedLink", copiedLink);
    setTimeout(() => {
      setCopiedLink("");
    }, 3000);
  };

  const updateFoodCart = async (items) => {
    if (storedToken) {
      const updatedCart = [...foodCart];

      items.forEach((item) => {
        const itemIndex = updatedCart.findIndex(
          (cartItem) => cartItem.id === item.id
        );

        if (itemIndex >= 0) {
          updatedCart[itemIndex].quantity += item.quantity;
        } else {
          updatedCart.push(item);
        }
      });

      setFoodCart(updatedCart);
      localStorage.setItem("foodCart", JSON.stringify(updatedCart));

      try {
        const data = {
          email,
          items: updatedCart,
          token,
        };

        const res = await placeOrder(data);
        console.log("Cart updated in database:", res.data);
      } catch (error) {
        console.error("Error updating cart in database:", error);
      }
    } else {
      navigate("/login");
    }
  };

  const removeItemFromCart = (itemId) => {
    const updatedCart = foodCart.filter((item) => item.id !== itemId);
    setFoodCart(updatedCart);
    localStorage.setItem("foodCart", JSON.stringify(updatedCart));
  };

  const clearCart = () => {
    localStorage.removeItem("foodCart");
  };

  return (
    <AppContext.Provider
      value={{
        name,
        email,
        token,
        login,
        logout,
        copiedLink,
        setCopyLink,
        foodCart,
        updateFoodCart,
        removeItemFromCart,
        clearCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
