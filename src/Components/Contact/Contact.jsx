import React from "react";

import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

import "./Contact.css";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4f77101a-e8b5-4f38-8e27-9119a75460e0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
          voluptatem quae at labore fuga libero hic quod enim, minima
          asperiores, harum recusandae iure facere! Cum omnis exercitationem
          debitis pariatur libero!
        </p>
        <ul>
          <li>
            {" "}
            <img src={mail_icon} alt="" />
            msepclient@2024gmail.com
          </li>
          <li>
            {" "}
            <img src={phone_icon} alt="" /> +91-7763018452
          </li>
          <li>
            {" "}
            <img src={location_icon} alt="" />
            Adress
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          ></input>
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            required
          />

          <label>whatapps Number</label>
          <input
            type="tel"
            name=" whatsapp-number"
            placeholder="Enter your Whatsapp number"
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
          <label>Write your message</label>
          <textarea
            name="message"
            rows={6}
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
