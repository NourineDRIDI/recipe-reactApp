import React from 'react'
import OneCategory from './OneCategory'

function AllCategories({category}) {
  return (
    <div className=' d-flex flex-wrap justify-content-center align-items-center gap-5 p-3'>
      {category && category.map((e) => (
        <OneCategory category={e} key={e?.id} />
      ))}
    </div>
  )
}

export default AllCategories
