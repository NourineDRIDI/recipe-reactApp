import React from "react";
import { Link, useNavigate } from "react-router-dom";

function OneRecipe({ recipe }) {
  const navigate = useNavigate();
  return (
    <div
      className="card card-style"
      style={{ width: "18rem" }}
      onClick={() => navigate(`/recipeDetails/${recipe.id}`)}
    >
      <img
        src={recipe.image}
        className="card-img-top card-img-top-style"
        alt={recipe.name}
        loading="lazy"
        height={150}
      />
      <div className="card-body d-flex flex-column justify-content-between gap-3">
        <p className="card-title fs-6">{recipe.name}</p>
        <Link
          to={`/recipeDetails/${recipe.id}`} 
          className="btn btn-outline-dark"
          style={{
            borderColor: "#B66055",
            color: "#B66055",
          }}
        >
          View Recipe
        </Link>
      </div>
    </div>
  );
}

export default OneRecipe;
