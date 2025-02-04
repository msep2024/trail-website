import React from "react";
import { FaCopyright } from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        {" "}
        <FaCopyright />
        2025 Carrier simplify. All rights reserved
      </p>
      <ul>
        <li>Terms & Services</li>
        <li>Privacy policy</li>
      </ul>
    </div>
  );
};

export default Footer;
