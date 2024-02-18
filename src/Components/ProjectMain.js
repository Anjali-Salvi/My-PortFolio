import React from "react";
import "./ProjectMain.css";
import projectbg from "../Assets/image.png";
import table from "../Assets/table2.png";
import shrestha from "../Assets/shrestha.png";
import flight from "../Assets/flightmain.jpg";
import college from "../Assets/collegemain.jpg";
import { Link } from 'react-router-dom';

const ProjectMain = () => { 
  return (
    <div className="mainproject">
      <img className="project-bg" src={projectbg} alt="projectbg" />
      <div className="projects">
        {/* Project 1 */}
        <div className="project-1">
          <img
            className="tryp"
            src={flight}
            alt="project1"
          />
          <div className="outerproject"></div>
          <div className="project-content">
            <p>EaseMyTrip</p>
          </div>
          <div className="tech-stack-container">
            <p className="tech-stack-content">Java, SpringBoot, JSP, JPA</p>
            <div  className="read-more-link">
            <Link to = "/Flight-Ticket-Booking-System">{" Read More"}  </Link>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-1">
          <img
            src={college}
            alt="project2"
          />
          <div className="outerproject"></div>
          <div className="project-content">
            <p>College Admission System </p>
          </div>
          <div className="tech-stack-container">
            <p className="tech-stack-content">Python, Tkinter, MySQL</p>
            <div  className="read-more-link">
            <Link to = "/College-Admission-System">{" Read More"}  </Link>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-1">
          <img
            src={table}
            alt="project3"
          />
          <div className="outerproject"></div>
          <div className="project-content">
            <p>Restaurant Table Booking <br/> System</p>
          </div>
          <div className="tech-stack-container">
            <p className="tech-stack-content">Python, Tkinter, MySQL</p>
            <div  className="read-more-link">
            <Link to = "/Restaurant-Table-Booking-System"> {" Read More"}  </Link>
            </div>
          </div>
        </div>

        {/* Project 4 */}
        <div className="project-1">
          <img
            src={shrestha}
            alt="project4"
          />
          <div className="outerproject"></div>
          <div className="project-content">
            <p>Shrestha Club Website</p>
          </div>
          <div className="tech-stack-container">
            <p className="tech-stack-content">ReactJS, HTML, CSS, MySQL</p>
            <div  className="read-more-link">
            <Link to = "/Shrestha-Club">{" Read More"}  </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectMain;
