import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiFillTikTok } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TbToolsKitchen3 } from "react-icons/tb";

function Footer() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed successfully with email: ${email}`);
    setEmail("");
  };

  return (
    <footer
      className="bg-light text-center pt-2 d-flex align-items-center justify-content-center position-fixed w-100 bottom-0"
      style={{ zIndex: 1 }}
    >
      <div className="container d-none d-md-block d-flex align-items-center">
        <div className="row justify-content-center text-center">
          <div className=" col-md-6 mb-4 mb-md-0" style={{paddingLeft:100}}>
          <TbToolsKitchen3 style={{ width: "29px", height: "29px" }} />
            <h5 className="text-uppercase fs-5">Perfect<span style={{ color: "#B66055" }}>Recipe</span></h5>
            <p className="fs-6">
              The purpose of lorem ipsum is to create a natural looking block of
              text (sentence, paragraph, page, etc.) that doesn't distract from
              the layout.
            </p>
          </div>
          <div className=" col-md-6 mb-4 mb-md-0">
          <TbToolsKitchen3 style={{ width: "29px", height: "29px" }} />
            <h5 className="text-uppercase fs-5">Quick <span style={{ color: "#B66055" }}>links</span></h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-dark fs-6">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/recipes" className="text-dark fs-6">
                  Recipes
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-dark fs-6">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/addrecipe" className="text-dark fs-6">
                  Share Recipe
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center text-md-right w-100 d-flex justify-content-around align-items-center p-4">
        <p className="mb-1">© 2023 RecipeLogo. All Rights Reserved</p>
        <div className="social-icons d-flex justify-content-center">
          <a
            href="https://www.tiktok.com/en/"
            aria-label="TikTok"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <AiFillTikTok style={{ width: "30px", height: "30px" }} />
          </a>
          <a
            href="https://x.com/?lang=en"
            aria-label="X"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <FaXTwitter style={{ width: "30px", height: "30px" }} />
          </a>
          <a
            href="https://www.facebook.com/"
            aria-label="Facebook"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <AiOutlineFacebook style={{ width: "30px", height: "30px" }} />
          </a>
          <a
            href="https://www.instagram.com/"
            aria-label="Instagram"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <FaInstagram style={{ width: "30px", height: "30px" }} />
          </a>
          <a
            href="https://www.pinterest.com/"
            aria-label="Pinterest"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <FaPinterestP style={{ width: "30px", height: "30px" }} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
