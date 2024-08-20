import React, { useEffect, useState } from "react";
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
import { blogs, datacategories, recipes } from "../data/data";
import RecipeDetails from "../pages/RecipeDetails";
import CategoryDetails from "../pages/CategoryDetails";
import Categories from "../pages/Categories";
import BlogDetails from "../pages/BlogDetails";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../store/recipesSlice";
import { fetchDataCategories } from "../store/categorySlice";


function Router() {
    const food = useSelector((state)=> state.recipes.recipes)
    const[query,setQuery] = useState("")
    const category = useSelector((state)=> state.categories.categories)
    const [myBlog,setMyBlog]=useState(blogs)

    const dispatch = useDispatch();
   
    
    const addNewRecipe = (newRecipe) => {
      setFood([...recipes,{id:recipes.at(-1).id+1   ,...newRecipe}])
    }

    useEffect(()=>{
      dispatch(fetchRecipes())

    }, [])
    useEffect(()=>{
      dispatch(fetchDataCategories())

    }, [])

      return (
    <BrowserRouter>
      <Navbar setQuery={setQuery}/>
      <div style={{paddingTop:"110px", paddingBottom:"10px"}}>
       
        <Routes>
          <Route path="/" element={<Home food={food} query={query} category={category} myBlog={myBlog} />} />
          <Route path="/recipes" element={<Recipes food={food} query = {query}/>} />
          <Route path="/categories" element={<Categories category={category} query={query}/>} />
          <Route path="/recipeDetails/:id" element={<RecipeDetails food={food} />} />
          <Route path="/categoryDetails/:id" element={<CategoryDetails category={category} food={food} query={query}/>} />
          <Route path="/addrecipe" element={<AddRecipe addNewRecipe={addNewRecipe}/>} />
          <Route path="/blogs" element={<Blogs myBlog={myBlog} query={query}/>} />
          <Route path="/blogDetails/:id" element={<BlogDetails myBlog={myBlog} />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/loading" element={<Loading />} />
          
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default Router;
