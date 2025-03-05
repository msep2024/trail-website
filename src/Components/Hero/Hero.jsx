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
          <a href="https://www.google.com/">Explore More</a> <img src={icon} />
        </button>
        <div className="notice">
          <p>Hii everyone result will display of test of carrier simplify</p>
          <a href="https://www.google.com/">Google.com</a>
          <a href="https://www.netflix.com/">Netflix.com</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
