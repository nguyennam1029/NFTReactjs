import { Routes, Route, Navigate } from "react-router-dom";

import React from "react";
import Home from "../pages/Home";
import Market from "../pages/Market";
import Create from "../pages/Create";
import Contact from "../pages/Contact";
import SellerProfile from "../pages/SellerProfile";
import EditProfile from "../pages/EditProfile";
import Wallet from "../pages/Wallet";
import NtfDetails from "../pages/NtfDetails";

//rafce

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Home" />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Market" element={<Market />} />
      <Route path="/Create" element={<Create />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/SellerProfile" element={<SellerProfile />} />
      <Route path="/EditProfile" element={<EditProfile />} />
      <Route path="/Wallet" element={<Wallet />} />
      <Route path="/Market/:id" element={<NtfDetails />} />
    </Routes>
  );
};

export default Routers;
