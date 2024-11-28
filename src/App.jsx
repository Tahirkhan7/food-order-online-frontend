import { Route, Routes } from "react-router-dom";
import "./index.css";
// import Home from "../pages/home-page/Home";
import SpecialOffers from "../pages/special-offers/SpecialOffers";
import Restaurants from "../pages/restaurants/Restaurants";
import TrackOrder from "../pages/track-order/TrackOrder";
import DefaultLayout from "../layout/DefaultLayout";
import Order from "../pages/orders/Order";
import Payment from "../pages/payments/Payment";
import OrderSuccessful from "../pages/order-successful/OrderSuccessful";
import Profile from "../pages/profile/Profile";
import Cart from "../pages/cart/Cart";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import Address from "../pages/address/Address";
import A from "../pages/a/A";
import ProductPage from "../pages/product-page/ProductPage";
import ProductCartPage from "../pages/product-cart-page/ProductCartPage";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route element={<DefaultLayout />}>
        {/* <Route index element={<Home />} /> */}
        <Route index element={<Login />} />
        <Route path="/special-offers" element={<SpecialOffers />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/track-order" element={<TrackOrder />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/order-successful" element={<OrderSuccessful />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/address" element={<Address />} />
        <Route path="/a" element={<A />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/product-cart" element={<ProductCartPage />} />
      </Route>
    </Routes>
  );
}

export default App;
