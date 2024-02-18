import React from "react";
import "./Restaurant.css";
import Footer from "../Footer";
import NavBar from "../NavBar";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import restaurantmain from "../../Assets/restaurantMain.png";

const Restaurant = () => {
  return (
    <div>
      <NavBar />
      <div className="main-audio">
        <div className="audio-header">
          <h1>Restaurant Table Booking System</h1>
        </div>
        <div className="audio-content">
          <h1> DESCRIPTION: </h1>
          <p>
          The Restaurant Table Booking System, developed with Python, Tkinter, and MySQL, 
          provides an efficient solution for managing table reservations. 
          User-friendly Tkinter interface ensures seamless navigation for staff and customers. 
          Integration with MySQL enables the storage and management of reservation details, 
          customer information, and booking status, enhancing the overall dining experience.
            <Link
              to="https://github.com/Anjali-Salvi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="audio-button">
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
          <img className="mainimg-project" me src={restaurantmain} alt="restaurantmain" />
        </div>
      </div>
      <Footer />
    </div>
  
  );
};

export default Restaurant;
