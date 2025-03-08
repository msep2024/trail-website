import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="userContainer">
      <h1>{props.name}</h1>
      <img src={props.img} alt="img"></img>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
        suscipit labore corporis! Voluptatum dolores laudantium, quasi
        asperiores tempora doloribus quo? Doloribus quo natus exercitationem
        obcaecati? Nostrum officia architecto adipisci provident?
      </p>
      <button>{props.buttonName}</button>
    </div>
  );
};

export default Card;
