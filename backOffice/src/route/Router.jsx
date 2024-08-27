import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../pages/Dashboard";
import Users from "../pages/users/Users";

import Categories from "../pages/categories/Cetegories";
import RecipesList from "../pages/recipes/view/RecipesList";
import AddRecipe from "../pages/recipes/view/AddRecipe";
import RecipesDetails from "../pages/recipes/view/RecipesDetails";
import Recipes from "../pages/recipes/Recipes";
import UserProfile from "../pages/UserProfile";
import CategoriesList from "../pages/categories/view/CategoriesList";
import AddCategory from "../pages/categories/view/AddCategory";
import CategoryDetails from "../pages/categories/view/CategoryDetails";
import UsersList from "../pages/users/view/UsersList";
import AddUser from "../pages/users/view/AddUser";
import UserDetails from "../pages/users/view/UserDetails";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />}>
            <Route index element={<UsersList />} />
            <Route path="addUser" element={<AddUser />} />
            <Route path="userdetails/:id" element={<UserDetails />} />
          </Route>
          <Route path="recipes" element={<Recipes />}>
            <Route index element={<RecipesList />} />
            <Route path="addrecipes" element={<AddRecipe />} />
            <Route path="recipedetails/:id" element={<RecipesDetails />} />
          </Route>
          <Route path="categories" element={<Categories />}>
            <Route index element={<CategoriesList />} />
            <Route path="addCategory" element={<AddCategory />} />
            <Route path="categorydetails/:id" element={<CategoryDetails />} />
          </Route>
          <Route path="mainUserProfile" element={<UserProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
