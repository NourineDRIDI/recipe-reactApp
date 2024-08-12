import React from 'react'

function Title({title,color,fontSize}) {
  return (
    <div className='p-4'>
      <h5 style={{color:color||"black", fontSize:fontSize||"25px"}}>{title}</h5>
    </div>
  )
}

export default Title
