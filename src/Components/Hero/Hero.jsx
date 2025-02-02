import React from "react";
import "./Hero.css";
import icon from "../../assets/dark-arrow.png";
const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We Ensure better education for a better future</h1>
        <p>
          This is a Platform which you provide guidence to growth your carrier.
        </p>
        <button className="btn">
          Explore More <img src={icon} />
        </button>
        <div className="notice"></div>
      </div>
    </div>
  );
};

export default Hero;
