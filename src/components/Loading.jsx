import React from "react";
import Lottie from "react-lottie";
import pan from "../assets/lotties/pan.json";
import Spinner from 'react-bootstrap/Spinner';

function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: pan,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div >
      <Lottie options={defaultOptions} height={300} width={300} />
      <div className="d-flex justify-content-center gap-3  mt-4" style={{paddingLeft:"20px"}}>
      <Spinner animation="grow" variant="primary"  style={{width:20,height:20,backgroundColor:"#B66055"}}/>
      <Spinner animation="grow" variant="secondary" style={{width:20,height:20,backgroundColor:"#B66055"}} />
      <Spinner animation="grow" variant="success" style={{width:20,height:20,backgroundColor:"#B66055"}} />
       </div>
     
    </div>
  );
}

export default Loading;
