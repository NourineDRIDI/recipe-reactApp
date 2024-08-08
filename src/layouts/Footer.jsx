import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiFillTikTok } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";


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
    <footer className="bg-light text-center text-lg-start p-2 d-flex align-items-center justify-content-center position-fixed w-100 bottom-0">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">PerfectRecipe</h5>
            <p>
              The purpose of lorem ipsum is to create a natural looking block of
              text (sentence, paragraph, page, etc.) that doesn't distract from
              the layout.
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Quick links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="index.html" className="text-dark">
                  Home
                </a>
              </li>
              <li>
                <a href="./pages/recipes.html" className="text-dark">
                  Recipes
                </a>
              </li>
              <li>
                <a href="blog.html" className="text-dark">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Quick links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="share-recipe.html" className="text-dark">
                  Share Recipe
                </a>
              </li>
              <li>
                <a href="aboutus.html" className="text-dark">
                  About Us
                </a>
              </li>
              <li>
                <a href="contact.html" className="text-dark">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>          
        </div>
      <div className="text-center text-md-right">
            <p className="mb-1">© 2023 RecipeLogo. All Rights Reserved</p>
            <div className="social-icons d-flex justify-content-center">
              <a href="https://www.tiktok.com/en/" style={{ color: "inherit", textDecoration: "none" }}>
              <AiFillTikTok style={{ width: "30px", height: "30px" }}/>
              </a>
              <a href="https://x.com/?lang=en" style={{ color: 'inherit', textDecoration: 'none' }}>
              <FaXTwitter  style={{ width: "30px", height: "30px" }}/>
              </a>
              <a href="https://www.facebook.com/" style={{ color: 'inherit', textDecoration: 'none' }}>
              <AiOutlineFacebook style={{ width: "30px", height: "30px" }}/>
                </a>
              <a href="https://www.instagram.com/" style={{ color: 'inherit', textDecoration: 'none' }}>
              <FaInstagram style={{ width: "30px", height: "30px" }} />
              </a>
              <a href="https://www.pinterest.com/" style={{ color: 'inherit', textDecoration: 'none' }}>
              <FaPinterestP style={{ width: "30px", height: "30px" }}/>
              </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer 