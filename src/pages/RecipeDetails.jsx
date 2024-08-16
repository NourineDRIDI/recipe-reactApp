import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaPrint } from "react-icons/fa";
import { CiSaveDown2 } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import Loading from "../components/Loading";

function RecipeDetails({ food }) {
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const founded = food.find((e) => e.id === +id);
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

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="container pb-5">
          <section className="recipe-body-1">
            <div className="row justify-content-center">
              <div className="col-12 col-md-7 mb-4">
                <img
                  id="recipeImage"
                  alt={recipe.name}
                  src={recipe.image}
                  loading="lazy"
                  className="img-fluid"
                />
              </div>
              <div className="col-12">
                <div className="d-flex align-items-center justify-content-center p-3 gap-2 flex-wrap">
                  <p id="recipeTimes" className="fw-bold">
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
            </div>
            <div className="container mt-5">
              <div className="card p-3 bg-body-secondary">
                <img
                  id="recipeCardImage"
                  className="card-img-top"
                  alt="Recipe Card Image"
                  style={{ objectFit: "contain" }}
                  src={recipe.image}
                />
                <div className="card-body">
                  <h5 id="recipeCardTitle" className="card-title">
                    {recipe.name} <hr/>
                  </h5>
                  <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                    <button
                      className="btn save-favorite d-flex justify-content-center align-items-center mb-2 mb-md-0"
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
                      className="btn share-recipe d-flex justify-content-center align-items-center mb-2 mb-md-0"
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
                      className="btn print-recipe d-flex justify-content-center align-items-center mb-2 mb-md-0"
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
      )}
    </div>
  );
}

export default RecipeDetails;
