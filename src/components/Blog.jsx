import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AspectRatio from "@mui/joy/AspectRatio";
import Stack from "@mui/joy/Stack";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Skeleton from "@mui/joy/Skeleton";
import Typography from "@mui/joy/Typography";

function Blog({ myBlog, id }) {
  const [skeleton, setSkeleton] = useState(true);
  const navigate = useNavigate();

  if (!myBlog) return null;
  useEffect(() => {
    setTimeout(() => setSkeleton(false), 1000);
  }, []);
  return (
    <div>
      {skeleton ? (
        <Stack spacing={2} useFlexGap>
          <Card variant="outlined" sx={{ width: 343 }}>
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
        <div className="col-md-6">
          {myBlog.image ? (
            <img
              src={myBlog.image}
              className="img-fluid p-5"
              alt={myBlog.title}
              loading="lazy"
              style={{ width: 600, height: 400 }}
              onClick={() => navigate(`/blogDetails/${myBlog.id}`)}
            />
          ) : (
            <div>No image available</div>
          )}
          <h5 className="mt-2">{myBlog.title}</h5>
          <p>{myBlog.author}</p>
        </div>
      )}
    </div>
  );
}

export default Blog;
