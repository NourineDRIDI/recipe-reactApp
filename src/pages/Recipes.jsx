import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import AllRecipes from "../components/AllRecipes";
import Loading from "../components/Loading";
import { useSelector } from "react-redux";

function Recipes({ food, query }) {
const loading = useSelector(state=>state.recipes.loading)
 
  console.log(food,"this is the food")
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div style={{ paddingTop: "20px" }}>
          <h3 className="text-center fw-bold fs-2">
            Make a choice and enjoy your{" "}
            <span style={{ color: "#B66055" }}>food journey </span> with us!
          </h3>
          <Title title={""} />
          <AllRecipes food={food} query={query} />
        </div>
      )}
    </div>
  );
}

export default Recipes;
