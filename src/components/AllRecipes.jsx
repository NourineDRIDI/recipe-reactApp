import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import OneRecipe from "./OneRecipe";
import { fetchRecipes, searchRecipes } from "../store/recipesSlice";
import Loading from "./Loading";

function AllRecipes({ query = "" }) {
  const dispatch = useDispatch();
  const {recipes} = useSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  

 

  return (
    <div className="d-flex flex-wrap justify-content-center gap-2 p-3">
      {recipes.map((e, i) => {
        return <OneRecipe recipe={e} key={e.id} />;
      })}
    </div>
  );
}

export default AllRecipes;
