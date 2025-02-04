import React, { useRef } from "react";

import "./Testimonials.css";

import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import srv from "../../assets/srv.jpg";
import chhabi from "../../assets/chhabi.jpg";
import shivam from "../../assets/shivam.jpg";
// import user1 from "../../assets/user-1.png";
// import user2 from "../../assets/user-2.png";
// import user3 from "../../assets/user-3.png";
import user4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={srv} alt="" />
                <div>
                  <h3>Sumit Ranjan Verma</h3>
                  <span>MSEP, INDIA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
                perferendis facere fugiat ipsum a perspiciatis aliquam
                asperiores debitis culpa! Quae quidem quaerat facilis nemo neque
                nulla laborum ad facere pariatur?
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={chhabi} alt="" />
                <div>
                  <h3>Chhabi kumari</h3>
                  <span>MSEP, INDIA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
                perferendis facere fugiat ipsum a perspiciatis aliquam
                asperiores debitis culpa! Quae quidem quaerat facilis nemo neque
                nulla laborum ad facere pariatur?
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={shivam} alt="" />
                <div>
                  <h3>Shivam Kumar Singh</h3>
                  <span>MSEP, INDIA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
                perferendis facere fugiat ipsum a perspiciatis aliquam
                asperiores debitis culpa! Quae quidem quaerat facilis nemo neque
                nulla laborum ad facere pariatur?
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user4} alt="" />
                <div>
                  <h3>Prakash Kumar</h3>
                  <span>MSEP, INDIA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
                perferendis facere fugiat ipsum a perspiciatis aliquam
                asperiores debitis culpa! Quae quidem quaerat facilis nemo neque
                nulla laborum ad facere pariatur?
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
