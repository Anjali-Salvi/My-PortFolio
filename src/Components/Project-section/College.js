import React from "react";
import "./College.css";
import Footer from "../Footer";
import NavBar from "../NavBar";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import collegemain from "../../Assets/collegeMain.png";

const College = () => {
  return (
    <div>
      <NavBar />
      <div className="main-emotion">

        <div className="emotion-header">
          <h1>College Admission System</h1>
        </div>
        <div className="emotion-content">
          <h1> DESCRIPTION: </h1>
          <p>
            The College Admission System developed using Python, Tkinter, and MySQL 
            provides a streamlined solution for managing college admissions efficiently. 
            The system features a user-friendly interface built with Tkinter for easy 
            navigation and interaction. It seamlessly integrates with a MySQL database to 
            store and manage student information, application details, and admission status.
            <Link
              to="https://github.com/Anjali-Salvi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="emotion-button">
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
          <img className="mainimg-project" src={collegemain} alt='collegemain' />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default College;
