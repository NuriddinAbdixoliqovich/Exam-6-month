import React from "react";
import {Route, Routes } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./components/Pages/Home";
import Shop from "./components/Pages/Shop";
import PlantCare from "./components/Pages/PlantCare";
import Blog from "./components/Pages/Blog";
import { Navigate } from "react-router-dom"


export default function App() {
  return (
    <>
    <Navbar />
      <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/plantcare" element={<PlantCare />} />
          <Route path="/blog" element={<Blog />}  />
          <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>

  
    </>
  )
}
