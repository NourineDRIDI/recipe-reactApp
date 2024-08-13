import Skeleton from "@mui/joy/Skeleton";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function OneCategory({ category,id }) {
  const [loading,setLoading] = useState(true)


  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  return (
    <div>
  <Skeleton variant="circular" width={250} height={250} loading={loading}>
      <img
        src={loading?"data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=":category?.image}
        className="img-fluid rounded-circle"
        alt={category?.name}
        loading="lazy"
        style={{ width: "250px", height: "250px", cursor: "pointer" }}
        onClick={() => navigate(`/categoryDetails/${category?.id}`)}
      />
      </Skeleton>
    { loading?   <div className="mt-2 d-flex justify-content-center"> <Skeleton variant="rectangular" width={140} height="1em"  /> </div>: <h5 className="mt-2 text-center">{category?.name}</h5>}
    </div>
  );
}

export default OneCategory;
