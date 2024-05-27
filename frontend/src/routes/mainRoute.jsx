import React from "react";
import { Routes, Route } from "react-router-dom";
import WishlistPage from "../pages/WishlistPage/WishlistPage.jsx";
import SingleProductPage from "../pages/SingleProductPage/SingleProductPage.jsx";
import { Cart } from "../components/Cart.jsx";
import Products from "../pages/Products.jsx";
import { Paymentpage } from "../pages/Payment/Paymentpage.jsx";
import Login from "../pages/Login.jsx";
import Error from "../pages/Error.jsx";
import Navbar from "../components/home/Navbar.jsx";
import Footer from "../components/home/Footer.jsx";
import Home from "../components/home/Home.jsx";
import Womenprod from "../components/home/Womenprod.jsx";
import Homeprod from "../components/home/Homeprod.jsx";
import Myaccount from "../pages/MyAccount/Myaccount.jsx";
import { ToastContainer } from "react-toastify";
import OrderSuccessfull from "../components/OrderSuccessfull.jsx";

export default function MainRoute() {
  return (
    <>
      <ToastContainer position="bottom-left" />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist/:id" element={<WishlistPage />} />
        <Route path="/single-product" element={<SingleProductPage />} />
        <Route path="/cart/:id" element={<Cart />} />
        <Route patch="/account" element={<Myaccount />} />
        <Route path="/payment/:id" element={<Paymentpage />} />
        <Route path="/products/*" element={<SingleProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/payment" element={<Paymentpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/women" element={<Womenprod />} />
        <Route path="/accessories" element={<Homeprod />} />
        <Route path="/order_successful" element={<OrderSuccessfull />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}
