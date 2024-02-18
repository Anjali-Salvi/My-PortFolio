import React from "react";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import GoToTop from '../Components/GoToTop'
import MainImg from "../Components/MainImg";
import ProjectMain from '../Components/ProjectMain';
import ProjectBg from "../Assets/ProjectBg.jpg";
import { FaArrowAltCircleDown } from "react-icons/fa";

const About = () => {
  return (
    <div>
      <NavBar />
      <MainImg
        heading="My Projects"
        text="Some of My Recent Works"
        imageSrc={ProjectBg}
        altText="project-img"
        scrollTo="projectsection"
        arrowIcon={FaArrowAltCircleDown} 
      />
      <div id='projectsection'>
        <ProjectMain />
      </div>
      <GoToTop/>
      <Footer />
    </div>
  );
};

export default About;
