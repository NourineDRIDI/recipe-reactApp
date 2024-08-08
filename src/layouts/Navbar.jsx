import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Icon from '../assets/icons/Icon.png'
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { TbToolsKitchen3 } from "react-icons/tb";



function Navbar() {
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem("connected"))
    const [conectedUser,setConectedUser] = useState(false)

const logOut = () => {
    localStorage.removeItem("connected")
    setConectedUser(false)
}
useEffect(()=>{
    console.log(user,"this is the conencted user")
    if(user) setConectedUser(true)
},[user])


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light position-fixed w-100">
            <div className="container-fluid d-flex justify-content-between">
                <div className="d-flex justify-content-center align-items-center"><TbToolsKitchen3 style={{ width: '29px', height: '29px' }}/>
                    <p className="mt-3 mr-5">
                        <a className="navbar-brand text-black fw-bold fs-3" href="index.html">
                            Perfect<span style={{ color: '#B66055' }}>Recipe</span>
                        </a>
                    </p>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse fw-bold fs-6" id="navbarNav">
                   <ul className="navbar-nav mx-auto">
                        <li className="nav-item active">
                            <button className="nav-link text-black" href="index.html">Home</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link text-black" onClick={()=>navigate("recipes")}>Recipes</button>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-black" href="addrecipe.html">Add Recipe</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-black" href="blog.html">Blog</a>
                        </li>
                        <li className="nav-item d-flex align-items-center">
                            <a className="nav-link text-black" href="aboutus.html">About us</a>
                            <div><input type="search" /> <FaSearch  size={23} color='#B66055'/>
                            </div>
                        </li>
                    </ul>
                    
                  
                    <div className="d-flex justify-content-end">
                       {conectedUser? <div className='d-flex gap-1 align-items-center'>
                            <p>{user.name}</p>
                            <img src="https://img.freepik.com/premium-photo/3d-illustration-beautiful-girl-with-curly-hair-glasses_1057-147022.jpg"  alt="profile" className="img-fluid rounded-circle" width={60} />
                            <button className='btn' onClick={logOut}>Log out</button>
                        </div>: <div className='d-flex gap-1'>
                        <div>
                            <Link className="btn btn-outline-dark text-black fw-bold fs-6" to="/login">Log in</Link>
                        </div>
                        <div>
                            <Link className="btn ms-2 fw-bold fs-6" to="/signup"
                                style={{ backgroundColor: '#B66055', borderColor: '#B66055', color: 'white' }} >Sign up</Link>
                        </div>
                        </div>}
                       
                    </div>
                </div>
            </div>
        </nav>
    );
}


export default Navbar
