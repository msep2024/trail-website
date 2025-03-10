import React from "react";

import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";

import About from "./Components/About/About";
import Title from "./Components/Title/Title";
import Courses from "./Components/Courses/Courses";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { Button } from "react-scroll";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Title subTitles="picture" title="Courses Details" />
      <Courses />
      <Title subTitles="TESTIMoNIALS" title="What student say" />
      <Testimonials />
      <Title subTitles="Contact Us" title="Get in Touch" />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
