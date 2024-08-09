import React from "react";
import Marquee from "react-fast-marquee";
function Partners() {
  return (
    <Marquee>
      {Array(4)
        .fill(0, 0)
        .map((e, i) => (
          <div className="logos-section d-flex justify-content-around align-items-center flex-wrap p-3 gap-5" key={i}>
            <a href="https://www.nestle.com/">
              <img
                src="https://res.cloudinary.com/dzshhva9w/image/upload/v1723185395/nestle-logo_hvrkwr.png"
                alt="NESTLE"
                style={{ width: "100px", height: "50px" }}
                loading="lazy"
              />
            </a>
            <a href="https://www.apple.com/">
              <img
                src="https://res.cloudinary.com/dzshhva9w/image/upload/v1723185390/apple-logo-_q8lcmx.png"
                alt="APPLE"
                style={{ width: "50px", height: "50px" }}
                loading="lazy"
              />
            </a>
            <a href="https://www.google.com/">
              <img
                src="https://res.cloudinary.com/dzshhva9w/image/upload/v1723185394/google-logo_p1yf1k.png"
                alt="GOOGLE"
                style={{ width: "100px", height: "50px" }}
                loading="lazy"
              />
            </a>
            <a href="https://www.becopets.com/">
              <img
                src="https://res.cloudinary.com/dzshhva9w/image/upload/v1723185391/Beco-Logo_viui1f.png"
                alt="BECO"
                style={{ width: "100px", height: "50px" }}
                loading="lazy"
              />
            </a>
            <a href="https://www.amazon.com/">
              <img
                src="https://res.cloudinary.com/dzshhva9w/image/upload/v1723185390/amazon-logo_nciw78.png"
                alt="AMAZON"
                style={{ width: "100px", height: "50px" }}
                loading="lazy"
              />
            </a>
            <a href="https://www.walmart.com/">
              <img
                src="https://res.cloudinary.com/dzshhva9w/image/upload/v1723185396/walmart-logo_yqymz9.png"
                alt="WALMART"
                style={{ width: "100px", height: "50px" }}
                loading="lazy"
              />
            </a>
          </div>
        ))}
    </Marquee>
  );
}

export default Partners;
