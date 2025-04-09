import React from "react";

import "./Courses.css";

import white_arrow from "../../assets/white-arrow.png";
import Card from "../Card/Card";

import autocad from "../../assets/autocadlogo.jpg";
import matlab from "../../assets/matlab.jpg";
import webdevelopment from "../../assets/webdevelopmentlogo.jpg";
import civilautocad from "../../assets/civilautocad.jpg";

import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <div className="courses">
      <div className="courses-picture">
        <Link>
          <Card name="autoCAD" img={autocad} buttonName="Explore more" />
        </Link>
        <Link>
          <Card name="MATLAB" img={matlab} buttonName="Explore more" />
        </Link>
        <Link to="/webdevelopment">
          <Card
            name="DEVELOPMENT"
            img={webdevelopment}
            buttonName="Explore more"
          />
        </Link>
        <Link>
          <Card
            name="Civil- autoCAD"
            img={civilautocad}
            buttonName="Explore more"
          />
        </Link>
      </div>
      <Link to="courses1">
        <button className="btn dark-btn">
          See more here <img src={white_arrow} alt="" />
        </button>
      </Link>
    </div>
  );
};

export default Courses;
