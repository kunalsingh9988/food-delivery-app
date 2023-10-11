import React from "react";
import "./HeroSection.css";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <div id="heroSection">
      <div className="leftHero">
        <h1>
          Order <span> food </span> anytime, anywhere
        </h1>
        <p>
          Browse from our list to specials to place your order and have food
          delivered to you in no time. Affordable, tasty and fast!{" "}
        </p>
        <Link to="/products"> <button className="orderBtn">Order Now</button></Link>
      </div>
      <div className="rightHero">
        <img className="foodImg"  src="images_svg/foodimg.png" alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
