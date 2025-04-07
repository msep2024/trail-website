import React from "react";
import Card from "../Card/Card";
import AdvanceExcel from "../../assets/Advanceexcel.jpg";
import powerbi from "../../assets/powerBi.jpg";
import Aws from "../../assets/Aws.jpg";
import sql from "../../assets/sql.png";
import "./Courses.css";

const Courses1 = () => {
  return (
    <div className="courses">
      <div className="courses-picture">
        <Card
          name="Advance Excel"
          img={AdvanceExcel}
          buttonName="Comming Soon..."
        />
        <Card name="Power BI" img={powerbi} buttonName="Comming Soon..." />
        <Card name="AWS" img={Aws} buttonName="Comming Soon..." />
        <Card name="SQL" img={sql} buttonName="Comming Soon..." />
        <Card buttonName="Comming Soon..." />
        <Card buttonName="Comming Soon..." />
        <Card buttonName="Comming Soon..." />
        <Card buttonName="Comming Soon..." />
      </div>
    </div>
  );
};

export default Courses1;
