import React from "react";
import "./Footer.css";
import {
  FaGithub,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footerMain">
      <div className="footer">
        <div className="left">
          <div className="phone">
            <FaPhone
              size={30}
              style={{
                color: "white",
                padding: "15px",
              }}
            />
            <p>+91-8692048848</p>
          </div>
          <div className="email">
            <FaMailBulk
              size={30}
              style={{
                color: "white",
                padding: "15px",
              }}
            />
            <p>salvianjali68@gmail.com</p>
          </div>
          <div className="location">
            <FaHome
              size={30}
              style={{
                color: "white",
                padding: "15px",
              }}
            />
            <p>Goregaon, Mumbai - 400097</p>
          </div>
        </div>
        <div className="right">
          <div className="tag">
            <p>SOCIAL LINKS </p>
          </div>
          <div className="social">
            <div className="linkedin">
              <a href="https://www.linkedin.com/in/anjali-salvi" target="_blank" rel="noreferrer">
                <FaLinkedin
                  size={40}
                  style={{
                    color: "white",
                    padding: "15px",
                  }}
                />
              </a>
            </div>
            <div className="githubFooter">
              <a href='https://github.com/Anjali-Salvi' target="_blank" rel="noreferrer">
                <FaGithub
                  size={40}
                  style={{
                    color: "white",
                    padding: "15px",
                  }}
                />
              </a>
            </div>
            <div className="insta">
              <a href='https://www.instagram.com/anjaliiii_0423/' target="_blank" rel="noreferrer">
                <FaInstagram
                  size={40}
                  style={{
                    color: "white",
                    padding: "15px",
                  }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
