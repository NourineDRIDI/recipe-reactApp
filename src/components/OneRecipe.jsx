import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AspectRatio from "@mui/joy/AspectRatio";
import Stack from "@mui/joy/Stack";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Skeleton from "@mui/joy/Skeleton";
import Typography from "@mui/joy/Typography";

function OneRecipe({ recipe }) {
  const [skeleton, setSkeleton] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setSkeleton(false), 1000);
  }, []);

  return (
    <div>
      {skeleton ? (
        <Stack spacing={2} useFlexGap style={{zindex: 1}}>
          <Card variant="outlined" sx={{ width: 380 }}>
            <CardContent orientation="horizontal"></CardContent>
            <AspectRatio ratio="21/9">
              <Skeleton animation="wave" variant="overlay">
                <img
                  alt=""
                  src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                />
              </Skeleton>
            </AspectRatio>
            <Typography sx={{ overflow: "hidden" }}></Typography>
            <Button>
              Read more
              <Skeleton animation="wave" />
            </Button>
          </Card>
        </Stack>
      ) : (
        <div
          className="card card-style"
          style={{ width: "18rem", height : "18rem" }}
          onClick={() => navigate(`/recipeDetails/${recipe.id}`)}
        >
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
          <div className="card-body d-flex flex-column justify-content-between gap-3">
            <p className="card-title fs-6">{recipe.name}</p>
            <Link
              to={`/recipeDetails/${recipe.id}`}
              className="btn btn-outline-light"
              style={{
                borderColor: "#B66055",
                color: "#B66055",
              }}
            >
              View Recipe
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default OneRecipe;
