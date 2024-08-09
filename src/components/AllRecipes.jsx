import React from 'react'
import OneRecipe from './OneRecipe'

function AllRecipes({food,query}) {
  return (
    <div className='d-flex flex-wrap justify-content-center gap-2 p-3'>
      {food.filter(e=>e.name.toLowerCase().includes(query.toLowerCase())).map((e,i)=>{
        return(
          <OneRecipe recipe={e} key={e.id}/>
        )
      })}
    </div>
  )
}

export default AllRecipes
