import React from "react";
import "./ExploreUs.css";
import cslogo from "../../assets/cslogo.png";

const ExploreUs = () => {
  return (
    <div className="explore-us">
      <h1>Welcome to Career Simplify</h1>
      <div className="explore-left">
        <img src={cslogo} />
      </div>
      <div className="explore-right">
        <h1>Our Mission</h1>
      </div>
    </div>
  );
};

export default ExploreUs;
