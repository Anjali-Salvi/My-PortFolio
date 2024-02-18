// Contact.js
import React from 'react';
import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar';
import MainImg from '../Components/MainImg';
import Form from '../Components/Form';
import GoToTop from '../Components/GoToTop'
import ContactBg from "../Assets/ContactBg.webp";
import { FaArrowAltCircleDown} from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <NavBar />
      <MainImg
        heading="Contact Me"
        text="Let's have a chat"
        imageSrc={ContactBg}
        altText="contact-img"
        scrollTo="form-section"
        arrowIcon={FaArrowAltCircleDown}
      />
      
      <div id="form-section">
        <Form />

      </div>
      <GoToTop/>
      <Footer />
    </div>
  );
};

export default Contact;
