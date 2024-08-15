import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearch } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { TbToolsKitchen3 } from "react-icons/tb";
import Box from "@mui/joy/Box";
import Skeleton from "@mui/joy/Skeleton";
import "../navbar.css";
function Navbar({ setQuery }) {


  const [conectedUser, setConectedUser] = useState(false);
  const [skelton, setSkelton] = useState(true);
  const [path, setPath] = useState(location.href.split("/").at(-1));
  const [clicked, setClicked] = useState(false);


  const user = JSON.parse(localStorage.getItem("connected"));
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("connected");
    setConectedUser(false);
    navigate("/login");
  };
  const handleSearch = (event) => {
    setQuery(event.target.value);
  };

  const notShow = () => {
    setClicked(true)
  }


  useEffect(() => {
    if (user) {
      setConectedUser(true);
      setTimeout(() => setSkelton(false), 2000);
    }
  }, [user]);
  useEffect(() => {
    setPath(location.href.split("/").at(-1));
  }, [location.href.split("/").at(-1)]);



  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light position-fixed w-100"
        style={{ zIndex: 99 }}
      >
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
            onClick={() => setClicked(false)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse fw-bold fs-6 `}
            style = {{
              display : clicked && "none"
            }}
            id="navbarNav"
          >
            <ul className="navbar-nav mx-auto d-flex ">
              <li className={`nav-item ${path === "" && "active"}`} onClick={notShow}>
                <NavLink className="nav-link text-black" to={"/"}>
                  Home
                </NavLink>
              </li>
              <li className={`nav-item ${path === "recipes" && "active"}`} onClick={notShow}>
                <NavLink className="nav-link text-black" to={"/recipes"}>
                  Recipes
                </NavLink>
              </li>
              <li className={`nav-item ${path === "categories" && "active"}`} onClick={notShow}>
                <NavLink className="nav-link text-black" to={"/categories"}>
                  Categories
                </NavLink>
              </li>
              <li className={`nav-item ${path === "addrecipe" && "active"}`}onClick={notShow}>
                <NavLink className="nav-link text-black" to={"/addrecipe"}>
                  Add Recipe
                </NavLink>
              </li>
              <li className={`nav-item ${path === "blogs" && "active"}`}onClick={notShow}>
                <NavLink className="nav-link text-black" to={"/blogs"}>
                  Blogs
                </NavLink>
              </li>
              <li className="nav-item d-flex align-items-center gap-5">
                <div>
                  <input
                    type="search"
                    onChange={handleSearch}
                    placeholder="Search"
                  />{" "}
                  <FaSearch size={23} color="#B66055" />
                </div>
              </li>
            </ul>
            <div className="d-flex justify-content-end">
              {conectedUser ? (
                skelton ? (
                  <Box
                    sx={{
                      m: "auto",
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <Skeleton variant="rectangular" width={160} height="1em" />
                    <Skeleton variant="circular" width={48} height={48} />
                    <div>
                      <Skeleton
                        variant="rectangular"
                        width={200}
                        height="1em"
                        sx={{ mb: 1 }}
                      />
                      <Skeleton
                        variant="rectangular"
                        width={140}
                        height="1em"
                      />
                    </div>
                    <Skeleton variant="circular" width={48} height={48} />
                  </Box>
                ) : (
                  <div className="d-flex gap-2 align-items-center">
                    <span>{user?.name}</span>
                    <img
                      src={user?.profilePicture}
                      alt={user?.name}
                      className="img-fluid rounded-circle"
                      style={{ height: 60, width: 60 }}
                    />
                    <button
                      className="btn"
                      style={{
                        backgroundColor: "#B66055",
                        borderColor: "#B66055",
                        color: "white",
                      }}
                      onClick={logOut}
                    >
                      Log out
                    </button>
                  </div>
                )
              ) : (
                <div className="d-flex gap-1">
                  <div>
                    <Link
                      className="btn btn-outline-dark fw-bold fs-6"
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
    </div>
  );
}
export default Navbar;
