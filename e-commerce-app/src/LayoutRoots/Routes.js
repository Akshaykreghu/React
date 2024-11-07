import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Home from "../components/home/Home";
import Logout from "./logout";
import ProductDetails from "../components/productDetails/ProductDetails";
function RoutesLayout() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
            <Route path="/" element={<Home/>} /> 
            <Route path="/logout" element={<Logout/>}/>
            <Route path="/product-details/:id" element={<ProductDetails/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default RoutesLayout;
