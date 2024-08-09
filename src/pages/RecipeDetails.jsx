import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function RecipeDetails({ food }) {
  const [recipe, setRecipe] = useState({});


  const {id} = useParams()
  


  useEffect(()=>{
    let founded = food.find(e=>e.id===+id)
    setRecipe (founded)
  },[])



  return (
    <div className="container d-flex justify-content-center align-items-center gap-4 pb-5">
      <section className="recipe-body-1">
        <div className="col-md-7">
          <img
            id={recipe.id}
            alt={recipe.name}
            loading="lazy"
            className="img-fluid"
            src={recipe.image}
          />
          <h1>{recipe.name}</h1>
        </div>
        <p><strong>Preparation Time:</strong> {recipe.prepTime}</p>
        <p><strong>Cook Time:</strong> {recipe.cookTime}</p>
        <p><strong>Servings:</strong> {recipe.servings}</p>
  
        <h3>Ingredients:</h3>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
  
        <h3>Instructions:</h3>
        <ol>
          {recipe.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </section>
    </div>
  );
  }

export default RecipeDetails;
