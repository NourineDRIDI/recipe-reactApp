import React from 'react'
import { CgProfile } from "react-icons/cg";
function Navbar() {
  return (
    <nav className='bg-dark position-fixed w-100' >
        <div>
        <input type="text" placeholder="Search.."/>
        </div>
        <div className='d-flex justify-content-end align-items-center gap-2'>
            <p>userName</p>
            <CgProfile />
        </div>
      
    </nav>
  )
}

export default Navbar

