import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import pan from "../assets/lotties/pan.json";
import Spinner from "react-bootstrap/Spinner";
import knife from "../assets/lotties/wired-lineal-1600-knife.json";
import { useSearchParams } from "react-router-dom";

function Loading() {
  // ! states
  const [lottie, setLottie] = useState(false);

  //! variables and functions
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: pan,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  // !   useEffects
  useEffect(() => {
    setTimeout(() => {
      setLottie(true);
    }, 750);
  }, []);
//    ! conditional rendrenig */
  return (
    <div style={{height:"100vh"}}>
      {lottie ? (
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: knife,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          }}
          height={300}
          width={300}
        />
      ) : (
        <Lottie options={defaultOptions} height={300} width={300} />
      )}
      <div
        className="d-flex justify-content-center gap-3  mt-4"
        style={{ paddingLeft: "20px" }}
      >
        <Spinner
          animation="grow"
          variant="primary"
          style={{ width: 20, height: 20, backgroundColor: "#B66055" }}
        />
        <Spinner
          animation="grow"
          variant="secondary"
          style={{ width: 20, height: 20, backgroundColor: "#B66055" }}
        />
        <Spinner
          animation="grow"
          variant="success"
          style={{ width: 20, height: 20, backgroundColor: "#B66055" }}
        />
      </div>
    </div>
  );
}

export default Loading;
