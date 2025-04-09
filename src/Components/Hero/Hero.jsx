import React from "react";
import { Link } from "react-router-dom";
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
          <Link to="/expolre" smooth={true} duration={500}>
            Explore More
          </Link>{" "}
          <img src={icon} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
