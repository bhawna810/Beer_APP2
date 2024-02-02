import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import AllBeers from "../pages/AllBeers";
import ProductDetails from "../pages/ProductDetails";
import FavoriteHeaderUI from "../components/UI/favorite-section/FavoriteHeaderUI";


const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Home" />} />
       <Route path="/home" element={<Home />} />
     <Route path="/beers" element={<AllBeers />} />
     <Route path="/beers/:id" element={<ProductDetails />} />
     <Route path="/favorites" element={<FavoriteHeaderUI />} />
    
    </Routes>
  );
};

export default Routers;