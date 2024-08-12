import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/joy/Button";
import SvgIcon from "@mui/joy/SvgIcon";
import { styled } from "@mui/joy";

const VisuallyHiddenInput = styled("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

function AddRecipe({ addNewRecipe }) {
  const [recipe, setRecipe] = useState({
    name: "",
    category: "",
    image: "",
    prepTime: "",
    cookTime: "",
    servings: "",
    ingredients: "",
    instructions: "",
    createdDate: (new Date()).toString().slice(0,24),
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, type, value, files } = e.target;

    if (type === "file") {
      setRecipe({ ...recipe, image: URL.createObjectURL(files[0]) });
    } else {
      setRecipe({ ...recipe, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      ...recipe,
      ingredients: recipe.ingredients
        .split(",")
        .map((ingredient) => ingredient.trim()),
      instructions: recipe.instructions
        .split(".")
        .map((instruction) => instruction.trim())
        .filter(Boolean),
    };

    addNewRecipe(newRecipe);
    setRecipe({
      name: "",
      categoryId: "",
      image: "",
      prepTime: "",
      cookTime: "",
      servings: "",
      ingredients: "",
      instructions: "",
      createdDate:(new Date()).toString().slice(0,24),
    });
    navigate("/recipes");
  };

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <h2>Add New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Recipe Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={recipe.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Category</label>
          <input
            type="text"
            name="category"
            className="form-control"
            value={recipe.category}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group d-flex flex-column align-items-center">
          <label>Upload your Image here</label>

          {recipe.image && (
            <img
              src={recipe.image}
              alt="image choosed"
              loading="lazy"
              width={200}
              className="rounded-circle text-center"
            />
          )}

          <Button
            component="label"
            role={undefined}
            tabIndex={-1}
            variant="outlined"
            color="neutral"
            startDecorator={
              <SvgIcon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                  />
                </svg>
              </SvgIcon>
            }
          >
            Upload a file
            <VisuallyHiddenInput
              type="file"
              name="image"
              accept="image/*"
              className="form-control"
              onChange={handleChange}
              required
            />
          </Button>
        </div>
        <div className="form-group">
          <label>Prep Time</label>
          <input
            type="text"
            name="prepTime"
            className="form-control"
            value={recipe.prepTime}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Cook Time</label>
          <input
            type="text"
            name="cookTime"
            className="form-control"
            value={recipe.cookTime}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Servings</label>
          <input
            type="text"
            name="servings"
            className="form-control"
            value={recipe.servings}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Ingredients (comma-separated)</label>
          <textarea
            name="ingredients"
            className="form-control"
            value={recipe.ingredients}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Instructions (period-separated)</label>
          <textarea
            name="instructions"
            className="form-control"
            value={recipe.instructions}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="btn fw-bold fs-6 text-center "
          style={{
            backgroundColor: "#B66055",
            borderColor: "#B66055",
            color: "white",
          }}
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipe;
