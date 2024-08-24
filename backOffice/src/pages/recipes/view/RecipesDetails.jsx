import React, { useEffect } from "react";
import { useParams } from "react-router-dom/dist";
import useRecipeStore from "../../../zustandStore/recipeStore";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import Skeleton from "@mui/joy/Skeleton";
import Typography from "@mui/joy/Typography";

// import { useLocation } from 'react-router-dom'

function RecipesDetails() {
  // const data = useLocation()
  // console.log(data.state,"this is the passed data ")
  // const { loading } = useRecipeStore((state) => state);
  const { id } = useParams();
  const { oneRecipe, loading, fetchOne } = useRecipeStore((state) => state);
  console.log(oneRecipe, "this is the recipes");

 
  useEffect(() => {
    fetchOne(id);
  }, [oneRecipe]);

  return (
    <div>
      {loading ? (
        <div>
          <Card variant="outlined" sx={{ width: 700, display: "flex", gap: 2 }}>
            <AspectRatio ratio="21/9">
              <Skeleton variant="overlay">
                <img
                  alt=""
                  src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                />
              </Skeleton>
            </AspectRatio>
            <Typography>
              <Skeleton>
                Lorem ipsum is placeholder text commonly used in the graphic,
              </Skeleton>
            </Typography>
          </Card>
        </div>
      ) : (
        <div>
          <img src={oneRecipe?.image} alt="recipe image" loading="lazy" />
          <h1>{oneRecipe?.name}</h1>
        </div>
      )}
    </div>
  );
}

export default RecipesDetails;
