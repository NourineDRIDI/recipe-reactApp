import React from "react";
import { useNavigate } from "react-router-dom";

function OneCategory({ category }) {
  const navigate = useNavigate();
  return (
    <div>
      <img
        src={category.image}
        className="img-fluid rounded-circle"
        alt={category.name}
        loading="lazy"
        style={{ width: "250px", height: "250px", cursor: "pointer" }}
        onClick={() => navigate(`/categoryDetails/${category.id}`)}
      />
      <h5 className="mt-2 text-center">{category.name}</h5>
    </div>
  );
}

export default OneCategory;
