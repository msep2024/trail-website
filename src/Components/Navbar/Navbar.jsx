import React, { useEffect, useState } from "react";
import "./Navbar.css";

import menu_icon from "../../assets/menu-icon.png";
import cslogo from "../../assets/cslogo.png";

import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };
  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={cslogo} className="logo" />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          {" "}
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          {" "}
          <Link to="program" smooth={true} offset={0} duration={500}>
            Annoucuments
          </Link>
        </li>
        <li>
          {" "}
          <Link to="about" smooth={true} offset={0} duration={500}>
            About us
          </Link>
        </li>
        <li>
          {" "}
          <Link to="courses" smooth={true} offset={-260} duration={500}>
            Courses
          </Link>
        </li>
        <li>
          {" "}
          <Link to="testimonials" smooth={true} offset={-260} duration={500}>
            Testimonial
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={-260}
            duration={500}
            className="btn"
          >
            Contact us
          </Link>
        </li>
        <li>
          <Link to="/Login">
            <button className="login">Login</button>
          </Link>
        </li>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
