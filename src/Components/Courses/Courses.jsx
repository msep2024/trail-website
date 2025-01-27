import React from "react";

import "./Courses.css";
import course1 from "../../assets/gallery-1.png";
import course2 from "../../assets/gallery-2.png";
import course3 from "../../assets/gallery-3.png";
import course4 from "../../assets/gallery-4.png";
import white_arrow from "../../assets/white-arrow.png";

const Courses = () => {
  return (
    <div className="courses">
      <div className="courses-picture">
        <img src={course1} alt="" />
        <img src={course2} alt="" />
        <img src={course3} alt="" />
        <img src={course4} alt="" />
      </div>
      <button className="btn dark-btn">
        See more here <img src={white_arrow} alt="" />
      </button>
    </div>
  );
};

export default Courses;
