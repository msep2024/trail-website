import React, { useEffect, useState } from "react";
import "./Navbar.css";
import menu_icon from "../../assets/menu-icon.png";
import cslogo from "../../assets/cslogo.png";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <RouterLink to="/">
        <img src={cslogo} className="logo" alt="CS Logo" />
      </RouterLink>
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <ScrollLink to="hero" smooth={true} offset={0} duration={500}>
            Home
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="annoucument"
            smooth={true}
            offset={-260}
            duration={500}
          >
            Announcements
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="about" smooth={true} offset={0} duration={500}>
            About us
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="courses" smooth={true} offset={-260} duration={500}>
            Courses
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="testimonials"
            smooth={true}
            offset={-260}
            duration={500}
          >
            Testimonial
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="contact"
            smooth={true}
            offset={-260}
            duration={500}
            className="btn"
          >
            Contact us
          </ScrollLink>
        </li>
        <li>
          <RouterLink to="/login" className="login">
            Login <FaUserCircle className="login-icon" />
          </RouterLink>
        </li>
      </ul>
      <img
        src={menu_icon}
        alt="Menu"
        className="menu-icon"
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;
