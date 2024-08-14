import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaPrint } from "react-icons/fa";
import { CiSaveDown2 } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import Loading from "../components/Loading";

function RecipeDetails({ food }) {
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();

  useEffect(() => {
    let founded = food.find((e) => e.id === +id);
    setRecipe(founded);
  }, [id, food]);

  const handleSaveFavorite = () => {
    alert(`Recipe "${recipe.name}" has been saved to your favorites!`);
  };

  const handleShare = () => {
    const recipeUrl = window.location.href;
    navigator.clipboard.writeText(recipeUrl);
    alert(`Recipe link copied to clipboard: ${recipeUrl}`);
  };

  const handlePrint = () => {
    window.print();
  };
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return (
    <div> {loading ? ( 
    <Loading/> ) : (
      
      <div className="container d-flex justify-content-center align-items-center gap-4 pb-5">
        <div className="container d-flex justify-content-center align-items-center gap-4 pb-5">
          <section className="recipe-body-1">
            <div>
              <div className="col-md-7">
                <img
                  id="recipeImage"
                  alt={recipe.name}
                  src={recipe.image}
                  loading="lazy"
                  className="img-fluid"
                />
              </div>
              <div className="d-flex align-items-center justify-content-start p-3 gap-2">
                <p id="recipeTimes">
                  Preparation Time: {recipe.prepTime} | Cook Time:{" "}
                  {recipe.cookTime} | Servings: {recipe.servings}
                </p>
              </div>
              <h3>Ingredients:</h3>
              <ul id="recipeIngredients">
                {recipe.ingredients &&
                  recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
              </ul>
              <h3>Instructions:</h3>
              <ol id="recipeInstructions">
                {recipe.instructions &&
                  recipe.instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                  ))}
              </ol>
            </div>
            <div className="container mt-5" style={{ width: "650px" }}>
              <div className="card p-3 b bg-body-secondary">
                <img
                  id="recipeCardImage"
                  className="card-img-top"
                  alt="Recipe Card Image"
                  style={{ objectFit: "contain" }}
                  src={recipe.image}
                />
                <div className="card-body">
                  <h5 id="recipeCardTitle" className="card-title">
                    {recipe.name}
                  </h5>
                  <p id="recipeCardAuthorDate" className="card-text"></p>
                  <div className="d-flex justify-content-between align-items-center">
                    <button
                      className="btn save-favorite d-flex justify-content-between align-items-center"
                      style={{
                        backgroundColor: "#B66055",
                        borderColor: "#B66055",
                        color: "white",
                      }}
                      onClick={handleSaveFavorite}
                    >
                      <CiSaveDown2 style={{ width: "20px", height: "20px" }} />
                      Save Favorite
                    </button>
                    <button
                      className="btn share-recipe d-flex justify-content-between align-items-center"
                      style={{
                        backgroundColor: "#B66055",
                        borderColor: "#B66055",
                        color: "white",
                      }}
                      onClick={handleShare}
                    >
                      <CiShare2 style={{ width: "20px", height: "20px" }} />
                      Share
                    </button>
                    <button
                      className="btn print-recipe d-flex justify-content-between align-items-center"
                      style={{
                        backgroundColor: "#B66055",
                        borderColor: "#B66055",
                        color: "white",
                      }}
                      onClick={handlePrint}
                    >
                      <FaPrint style={{ width: "20px", height: "20px" }} />
                      Print Recipe
                    </button>
                    <Link
                      className="btn btn-outline-dark text-black"
                      to="/categories"
                    >
                      More Recipes
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    )}
    </div>
  );
}

export default RecipeDetails;
