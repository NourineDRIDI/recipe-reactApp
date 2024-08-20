import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./layouts/Navbar";
import SideBar from "./layouts/SideBar";
import Footer from "./layouts/Footer";
import { useState } from "react";

function App() {
  const [toggle, setToggle]= useState(true)


  return (
    <div>
      <SideBar toggle={toggle} setToggle={setToggle}/>
      <div style={{paddingLeft: toggle ? 200 : 50 }} >
        <Navbar />
        <Footer/>
      </div>
    </div>
  );
}

export default App;
