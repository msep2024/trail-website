import React from "react";
import "./Hero.css";
import icon from "../../assets/dark-arrow.png";
const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We Ensure better education for a better future</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
          aperiam facere! Velit rem deleniti voluptatibus tenetur, reiciendis
          aut ad non ea? Nisi nesciunt maxime et eius eos natus corrupti nam?
        </p>
        <button className="btn">
          Explore More <img src={icon} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
