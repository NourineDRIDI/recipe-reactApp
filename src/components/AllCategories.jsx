import React from 'react'
import OneCategory from './OneCategory'

function AllCategories({category}) {
  return (
    <div className='d-flex flex-wrap justify-content-center gap-3 p-5'>
      {category && category.map((e) => (
        <OneCategory category={e} key={e.id} />
      ))}
    </div>
  )
}

export default AllCategories
