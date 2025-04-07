import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Title from "./Components/Title/Title";
import Courses from "./Components/Courses/Courses";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import Explore from "./Components/Explore/Explore";
import Courses1 from "./Components/Courses/Courses1";

const Home = () => (
  <>
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
  </>
);

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/explore" element={<Explore />} />

          <Route path="/courses1" element={<Courses1 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
