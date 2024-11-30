import { Route, Routes } from "react-router-dom";
import "./index.css";
import Homepage from "../pages/homepage/Homepage";
import DefaultLayout from "../layout/DefaultLayout";
import Order from "../pages/orders/Order";
import Payment from "../pages/payments/Payment";
import OrderSuccessful from "../pages/order-successful/OrderSuccessful";
import Profile from "../pages/profile/Profile";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import Address from "../pages/address/Address";
import ProductPage from "../pages/product-cart-page/ProductCartPage";
import { ModalProvider } from "../modal/ModalContext";
import { SearchProvider } from "../context/SearchContext";

function App() {
  return (
    <SearchProvider>
    <ModalProvider>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route element={<DefaultLayout />}>
        <Route index element={<Homepage />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/order-successful" element={<OrderSuccessful />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/address" element={<Address />} />
        <Route path="/products" element={<ProductPage />} />
      </Route>
    </Routes>
    </ModalProvider>
    </SearchProvider>
  );
}

export default App;
