import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./layouts/Navbar";
import SideBar from "./layouts/SideBar";
import Footer from "./layouts/Footer";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      <SideBar toggle={toggle} setToggle={setToggle} />
      <div style={{ paddingLeft: toggle ? 200 : 50 }}>
        <Navbar />
        <div style={{ paddingTop: "150px", paddingLeft: "100px", paddingRight:"100px" }}>
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
