import React, { useRef } from "react";

import "./Testimonials.css";

import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import srv from "../../assets/srv.jpg";
import chhabi from "../../assets/chhabi.jpg";
import shivam from "../../assets/shivam.jpg";

import prakash from "../../assets/prakash.jpg";

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
                <img src="" alt="" />
                <div>
                  <h3>xyz</h3>
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
                <img src="" alt="" />
                <div>
                  <h3>xyz</h3>
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
                <img src="" alt="" />
                <div>
                  <h3>pqrs</h3>
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
                <img src="" alt="" />
                <div>
                  <h3>abcd</h3>
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
