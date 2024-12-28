import Navbar from "./components/Navbar";
// import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Hhome";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shopping from "./pages/Shopping";
import React, { useRef, useState } from 'react';
import './Style.css';
import CreateNewProduct from "./pages/CreateNewProduct";
import AllProductsForAdmin from "./pages/AllProductsForAdmin";
import EditProduct from "./components/EditProduct";



function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/allproductsforadmin" element={<AllProductsForAdmin />} />
          <Route path="/createnewproduct" element={<CreateNewProduct />} />
          <Route path="/editproduct/:id" element={<EditProduct />} />
        </Routes>
      </main>
      
    </>
  );
}

export default App;
