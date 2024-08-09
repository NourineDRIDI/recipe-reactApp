import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Recipes from "../pages/Recipes";
import AddRecipe from "../pages/AddRecipe";
import Blogs from "../pages/Blogs";
import AboutUs from "../pages/AboutUs";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import Loading from "../components/Loading";
import Home from "../pages/Home";
import { datacategories, recipes } from "../data/data";
import RecipeDetails from "../pages/RecipeDetails";
import CategoryDetails from "../pages/CategoryDetails";


function Router() {
    const [food,setFood]= useState(recipes)
    const[query,setQuery] = useState("")
    const [category,setCategory]=useState(datacategories)
      return (
    <BrowserRouter>
      <Navbar setQuery={setQuery}/>
      <div style={{paddingTop:"100px", paddingBottom:"170px"}}>
       
        <Routes>
          <Route path="/" element={<Home food={food} query={query} category={category}/>} />
          <Route path="/recipes" element={<Recipes food={food} query = {query}/>} />
          <Route path="/recipeDetails/:id" element={<RecipeDetails food={food} />} />
          <Route path="/categoryDetails/:id" element={<CategoryDetails category={category} />} />
          <Route path="/addrecipe" element={<AddRecipe />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/loading" element={<Loading />} />
          
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
