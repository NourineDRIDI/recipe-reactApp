import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Recipes from "../pages/Recipes";
import AddRecipe from "../pages/AddRecipe";
import Blogs from "../pages/Blogs";
import AboutUs from "../pages/AboutUs";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import Loading from "../components/Loading";

function Router() {
    
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{paddingTop:"100px", paddingBottom:"170px"}}>
       
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/addrecipe" element={<AddRecipe />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
