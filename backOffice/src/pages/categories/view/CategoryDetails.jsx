import React from "react";
import { useParams } from "react-router-dom/dist";
import useCategoryStore from "../../../zustandStore/categoryStore";
import { useEffect } from "react";

function CategoryDetails() {
  const { id } = useParams();
  const { oneCategory, fetchOne } = useCategoryStore((state) => state);
  console.log(oneCategory,"this is one category")
  useEffect(() => {
    fetchOne(id);
  }, [oneCategory]);
  return (
    <div>
      <img src={oneCategory?.image} alt="category image" loading="lazy" />
      <h1>{oneCategory?.name}</h1>
    </div>
  );
}

export default CategoryDetails;
