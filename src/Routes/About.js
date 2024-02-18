import React from "react";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import Aboutmain from "../Components/AboutMain";
import MainImg from "../Components/MainImg";
import GoToTop from '../Components/GoToTop'
import { FaArrowAltCircleDown } from "react-icons/fa";
import AboutBg from "../Assets/AboutBg.avif";

const About = () => {
  return (
    <div>
      <NavBar />
      <MainImg
        heading="About Me"
        text="My Personal Journey"
        imageSrc={AboutBg}
        altText="contact-img"
        scrollTo="aboutsection"
        arrowIcon={FaArrowAltCircleDown} 
      />
      <div id='aboutsection'>
        <Aboutmain />
      </div>
      <GoToTop/>
      <Footer />
    </div>
  );
};

export default About;
