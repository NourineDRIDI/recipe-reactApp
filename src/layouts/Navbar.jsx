import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { TbToolsKitchen3 } from "react-icons/tb";

function Navbar({ setQuery }) {
  const user = JSON.parse(localStorage.getItem("connected"));
  const [conectedUser, setConectedUser] = useState(false);

  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("connected");
    setConectedUser(false);
  };
  const handleSearch = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    console.log(user, "this is the conencted user");
    if (user) setConectedUser(true);
  }, [user]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light position-fixed w-100" style={{zIndex:3}}>
      <div className="container-fluid d-flex justify-content-between">
        <div className="d-flex justify-content-center align-items-center">
          <TbToolsKitchen3 style={{ width: "29px", height: "29px" }} />
          <p className="mt-3 mr-5">
            <Link className="navbar-brand text-black fw-bold fs-3" to={"/"}>
              Perfect<span style={{ color: "#B66055" }}>Recipe</span>
            </Link>
          </p>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse fw-bold fs-6" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active">
              <Link className="nav-link text-black" to={"/"}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-black" to={"/recipes"}>
                Recipes
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-black" to={"/addrecipe"}>
                Add Recipe
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-black" to={"/blog"}>
                Blog
              </Link>
            </li>
            <li className="nav-item d-flex align-items-center">
              <Link className="nav-link text-black" to={"/aboutus"}>
                About us
              </Link>
              <div>
                <input type="search" onChange={handleSearch} />{" "}
                <FaSearch size={23} color="#B66055" />
              </div>
            </li>
          </ul>

          <div className="d-flex justify-content-end">
            {conectedUser ? (
              <div className="d-flex gap-1 align-items-center">
                <span>{user.name}</span>
                <img
                  src="https://img.freepik.com/premium-photo/3d-illustration-beautiful-girl-with-curly-hair-glasses_1057-147022.jpg"
                  alt="profile"
                  className="img-fluid rounded-circle"
                  width={60}
                />
                <button className="btn" onClick={logOut}>
                  Log out
                </button>
              </div>
            ) : (
              <div className="d-flex gap-1">
                <div>
                  <Link
                    className="btn btn-outline-dark  fw-bold fs-6"
                    to="/login"
                  >
                    Log in
                  </Link>
                </div>
                <div>
                  <Link
                    className="btn ms-2 fw-bold fs-6"
                    to="/signup"
                    style={{
                      backgroundColor: "#B66055",
                      borderColor: "#B66055",
                      color: "white",
                    }}
                  >
                    Sign up
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
