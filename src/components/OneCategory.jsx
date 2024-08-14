import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/joy/Box";
import Skeleton from "@mui/joy/Skeleton";
function OneCategory({ category, id }) {
  const [box, setBox] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(()=>setBox(false), 1000);
  }, []);
  return (
    <div>
      {box ? (
        <div>
          <Box
            className="d-flex flex-column"
            sx={{ m: "auto", display: "flex", alignItems: "center", gap: 2 }}
          >
            <Skeleton variant="circular" width={250} height={250} />
            <div>
              <Skeleton
                variant="rectangular"
                width={200}
                height="1em"
                sx={{ mb: 1 }}
              />
              <Skeleton variant="rectangular" width={140} height="1em" />
            </div>
          </Box>
        </div>
      ) : (
        <div>
          <img
            src={category?.image}
            className="img-fluid rounded-circle"
            alt={category?.name}
            loading="lazy"
            style={{ width: "250px", height: "250px", cursor: "pointer" }}
            onClick={() => navigate(`/categoryDetails/${category?.id}`)}
          />
          <h5 className="mt-2 text-center">{category?.name}</h5>
        </div>
      )}
    </div>
  );
}

export default OneCategory;
