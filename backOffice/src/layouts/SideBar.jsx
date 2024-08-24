import React from "react";
import { TbToolsKitchen3 } from "react-icons/tb";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { BiSolidDish } from "react-icons/bi";
import { MdCategory } from "react-icons/md";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

function SideBar({ setToggle, toggle }) {
  return (
    <div
      className="bg-light position-fixed d-flex flex-column justify-content-between align-items-center h-100 p-3 "
      style={{ width: toggle ? 200 : 80 }}
    >
      <div>
        <div className="d-flex align-items-center justify-content-center ">
          <TbToolsKitchen3 size={20} />
          {toggle && (
            <p className="mt-3 mr-5">
              <Link className="navbar-brand text-black fw-bold fs-5" to={"/"}>
                Perfect<span style={{ color: "#B66055" }}>Recipe</span>
              </Link>{" "}
            </p>
          )}
          {toggle ? (
            <FaRegArrowAltCircleLeft
              className="toggle"
              onClick={() => setToggle(!toggle)}
            />
          ) : (
            <FaRegArrowAltCircleRight
              className="toggle"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
        <div>
          <ul>
            <li>
              <MdDashboard />{" "}
              {toggle && (
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={"/"}
                >
                  Dashbord
                </Link>
              )}
            </li>
            <li>
              <BiSolidDish />{" "}
              {toggle && (
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={"recipes"}
                >
                  Recipes
                </Link>
              )}
            </li>
            <li>
              <MdCategory />{" "}
              {toggle && (
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={"categories"}
                >
                  Categories
                </Link>
              )}
            </li>
            <li>
              <FaUsers />{" "}
              {toggle && (
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={"users"}
                >
                  Users
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>

      <div>
        {toggle && (
          <button
            className="btn"
            style={{
              backgroundColor: "#B66055",
              borderColor: "#B66055",
              color: "white",
            }}
          >
            Log out
          </button>
        )}
      </div>
    </div>
  );
}

export default SideBar;
