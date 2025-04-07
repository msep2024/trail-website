import React from "react";

import "./Courses.css";

import white_arrow from "../../assets/white-arrow.png";
import Card from "../Card/Card";

import autocad from "../../assets/autocadlogo.jpg";
import matlab from "../../assets/matlab.jpg";
import webdevelopment from "../../assets/webdevelopmentlogo.jpg";
import civilautocad from "../../assets/civilautocad.jpg";

import { Link } from "react-scroll";

const Courses = () => {
  return (
    <div className="courses">
      <div className="courses-picture">
        <Card name="autoCAD" img={autocad} buttonName="Explore more" />
        <Card name="MATLAB" img={matlab} buttonName="Explore more" />
        <Card
          name="WEB-DEVELOPMENT"
          img={webdevelopment}
          buttonName="Explore more"
        />
        <Card
          name="Civil- autoCAD"
          img={civilautocad}
          buttonName="Explore more"
        />
      </div>
      <a href="/courses1">
        <button className="btn dark-btn">
          See more here <img src={white_arrow} alt="" />
        </button>
      </a>
    </div>
  );
};

export default Courses;
