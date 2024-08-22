import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";

import Categories from "../pages/Cetegories";
import RecipesList from "../pages/recipes/view/RecipesList";
import AddRecipe from "../pages/recipes/view/AddRecipe";
import RecipesDetails from "../pages/recipes/view/RecipesDetails";
import Recipes from "../pages/recipes/Recipes";
import UserProfile from "../pages/UserProfile";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="recipes" element={<Recipes />} >
          <Route index element={<RecipesList />} />
          <Route path="addrecipes" element={<AddRecipe />} />
          <Route path="recipedetails" element={<RecipesDetails />} />
          
          </Route>
          <Route path="categories" element={<Categories />} />
          <Route path="userprofile" element={<UserProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
