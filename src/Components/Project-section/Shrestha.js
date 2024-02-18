import React from "react";
import "./Shrestha.css";
import Footer from "../Footer";
import NavBar from "../NavBar";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import shresthamain from "../../Assets/shresthamain.png";

const Portfolio = () => {
  return (
    <div>
      <NavBar />
      <div className="main-portfolio">
        <div className="portfolio-header">
          <h1>Shrestha Club Website</h1>
        </div>
        <div className="portfolio-content">
          <h1> DESCRIPTION: </h1>
          <p>
          As a member of the development team, I contributed to crafting a dynamic ReactJS 
          front-end website for Shrestha Club, a non-profit organization. The website showcases 
          the club’s activities, events, and achievements, with a responsive design for 
          compatibility across devices. MySQL securely stores user data. The website utilized 
          ReactJS, HTML, CSS, and MySQL as its core technologies. 
            
            <Link
              to="https://github.com/Anjali-Salvi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="portfolio-button">
                <span style={{ marginRight: "10px" }}>View on </span>
                <FaGithub
                  size={30}
                  style={{
                    color: "white",
                  }}
                />
              </button>
            </Link>
          </p>
        </div>
        <div className="image-project">
          <img className="mainimg-project" me src={shresthamain} alt="shresthamain" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
