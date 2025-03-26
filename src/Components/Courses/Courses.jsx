import React from "react";

import "./Courses.css";

import white_arrow from "../../assets/white-arrow.png";
import Card from "../Card/Card";

import autocad from "../../assets/autocadlogo.jpg";
import matlab from "../../assets/matlab.jpg";
import webdevelopment from "../../assets/webdevelopmentlogo.jpg";
import civilautocad from "../../assets/civilautocad.jpg";
import AdvanceExcel from "../../assets/Advanceexcel.jpg";
import powerbi from "../../assets/powerBi.jpg";
import Aws from "../../assets/Aws.jpg";
import sql from "../../assets/sql.png";

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
        <Card
          buttonName="Comming soon"
          img={AdvanceExcel}
          name="Advance Excel"
        />
        <Card buttonName="Comming soon" img={powerbi} name="Power BI" />
        <Card buttonName="Comming soon" img={Aws} name="Aws" />
        <Card buttonName="Comming soon" img={sql} name="SQL" />
      </div>
      <button className="btn dark-btn">
        See more here <img src={white_arrow} alt="" />
      </button>
    </div>
  );
};

export default Courses;
