import React from "react";
import { Link } from "react-scroll";
import "./Hero.css";
import icon from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We Ensure better education for a better future</h1>
        <p>
          This is a Platform which you provide guidance to grow your career.
        </p>
        <button className="btn">
          <a href="/expolre" smooth={true} duration={500}>
            Explore More
          </a>{" "}
          <img src={icon} />
        </button>
        <div className="notice">
          <p>
            Hi everyone, the result will display for the test of Carrier
            Simplify
          </p>
          <a href="">Google.com</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
