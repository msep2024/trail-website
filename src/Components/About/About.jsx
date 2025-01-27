import React from "react";

import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>About Project</h3>
        <h2>Naturing Tomorrow's Leaders Today</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam debitis
          odit quo cupiditate commodi mollitia et consequuntur odio quasi,
          expedita tempora eaque! Quisquam, fuga quis? Iste minus perferendis
          aspernatur eius.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
          doloremque molestiae mollitia accusantium impedit blanditiis ipsa
          nobis iure sunt, culpa voluptatem maxime, animi cumque autem corrupti
          quod odit commodi aspernatur!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          repellendus illo velit molestias ducimus, repellat facilis suscipit.
          At natus nostrum nulla. Aperiam dolore animi consectetur delectus
          fugiat itaque, unde sint.
        </p>
      </div>
    </div>
  );
};

export default About;
