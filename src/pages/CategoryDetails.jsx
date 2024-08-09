import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Recipes from './Recipes';

function CategoryDetails({ category, food }) {
  const { id } = useParams()
  const [filteredRecipes, setFilteredRecipes] = useState([])
  const [categoryP, setCategory] = useState(null)

  console.log(fil,"foo");
  

  useEffect(() => {
    const selectedCategory = category.find(categoryP => categoryP.id === parseInt(id))
    setCategory(selectedCategory)

    const recipes = food.filter(item => item.categoryId=== parseInt(id))
    console.log(recipes,"rec");
    
    setFilteredRecipes(recipes)
  }, [id, categoryP, food])

  if (!categoryP) {
    return <div>Category not found</div>
  }
  return (
    <div className="container">
      <h2 className="text-center my-4">{categoryP.name}</h2>
      <Recipes food={filteredRecipes} />
    </div>
  );
}

export default CategoryDetails;

