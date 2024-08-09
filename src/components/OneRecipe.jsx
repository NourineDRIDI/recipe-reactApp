import React from "react";
import { useNavigate } from "react-router-dom";

function OneRecipe({recipe}) {
  const navigate = useNavigate()
  return (
        <div className="card card-style" style={{width:"18rem"}} onClick={()=>navigate(`/recipeDetails/${recipe.id}`)}>
          <img
            src={recipe.image}
            className="card-img-top card-img-top-style"
            alt={recipe.name}
            loading="lazy"
            height={150}
          />
          <div className="card-body">
            <p className="card-title fs-6">{recipe.name}</p>
            <a href="javascript:void(0)" className="btn btn-outline-dark">
              View Recipe
            </a>
          </div>
        </div>
  );
}

export default OneRecipe;
