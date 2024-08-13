import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AspectRatio from "@mui/joy/AspectRatio";
import Stack from "@mui/joy/Stack";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import Skeleton from "@mui/joy/Skeleton";
import Typography from "@mui/joy/Typography";
function OneRecipe({ recipe }) {
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  return (
    <div
      className="card card-style"
      style={{ width: "18rem" }}
      onClick={() => navigate(`/recipeDetails/${recipe.id}`)}
    >
      <AspectRatio ratio="21/9">
        <Skeleton loading={loading} variant="overlay">
          <img
            src={
              loading
                ? "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                : recipe.image
            }
            className="card-img-top card-img-top-style"
            alt={recipe.name}
            loading="lazy"
            height={150}
          />
        </Skeleton>
      </AspectRatio>
      {loading ? (
        <Button className="mt-2">
        Read more
        <Skeleton animation="wave" />
      </Button>
      ) : (
        <div className="card-body">
          <p className="card-title fs-6">{recipe.name}</p>
          <a href="javascript:void(0)" className="btn btn-outline-dark">
            View Recipe
          </a>
        </div>
      )}
    </div>
  );
}

export default OneRecipe;
