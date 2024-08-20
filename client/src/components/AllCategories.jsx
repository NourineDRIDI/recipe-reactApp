import React from 'react'
import OneCategory from './OneCategory'

function AllCategories({category, query=""}) {
  return (
    <div className=' d-flex flex-wrap justify-content-center align-items-center gap-5 p-3'>
      {category.filter((e)=>{
        return e?.name?.toLowerCase().includes(query?.toLowerCase())}).map((e) => (
        <OneCategory category={e} key={e?.id} />
      ))}
    </div>
  )
}

export default AllCategories
