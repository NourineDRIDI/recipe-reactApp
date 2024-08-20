import React from "react";
import { TbToolsKitchen3 } from "react-icons/tb";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { BiSolidDish } from "react-icons/bi";
import { MdCategory } from "react-icons/md";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";


function SideBar({setToggle , toggle}) {

    


  return (
    <div
      className="bg-light position-fixed d-flex flex-column justify-content-between align-items-center h-100 p-3 "
      style={{ width: toggle ? 200 : 50 }}
    >
      <div>
        <div className="d-flex align-items-center justify-content-center " >
          <TbToolsKitchen3 size={10} />
          {toggle && <p className="mt-3 mr-5">
            <a className="navbar-brand text-black fw-bold fs-5" href={"/"}>
              Perfect<span style={{ color: "#B66055" }}>Recipe</span>
            </a>{" "}
          </p>}
        {toggle ? <FaRegArrowAltCircleLeft className="toggle" onClick={()=>setToggle(!toggle)} />: <FaRegArrowAltCircleRight className="toggle"   onClick={()=>setToggle(!toggle)}/>}
        </div>
        <div>
          <ul>
            <li>
              <MdDashboard /> {toggle && <Link to={""}>Dashbord</Link>}
            </li>
            <li>
              <FaUsers /> {toggle && <Link to={""}>Users</Link>}
            </li>
            <li>
              <BiSolidDish /> {toggle && <Link to={""}>Recipes</Link>}
            </li>
            <li>
              <MdCategory /> {toggle && <Link to={""}>Categories</Link>}
            </li>
          </ul>
        </div>
      </div>

      <div>
       {toggle && <button className="btn btn-warning">Log out</button>}
      </div>
    </div>
  );
}

export default SideBar;
