import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer1">
      <div className="container">
        <footer className="f-distributed">
          <div className="footer-left">
            <h2>
              TCE <span>Hackathon</span>
            </h2>

            <p className="footer-link">
              <a href="#">Home</a> | <a href="#">about</a> |{" "}
              <a href="#">Tracks</a> |<a href="#">Timeline</a>
            </p>

            <p className="footer-institute">
              Copyrights @ 2021 <strong>TCE-MDU </strong>
            </p>
          </div>

          <div className="footer-center">
            <div>
              <i className="ri-map-pin-line"></i>
              <p>
                TCE <span> Madurai</span>
              </p>
            </div>
            <div>
              <i className="ri-phone-line"></i>
              <p>+91 1472583691</p>
            </div>
            <div>
              <i className="ri-mail-line"></i>
              <p>
                <a href="#">tcehck@gmail.com</a>
              </p>
            </div>
          </div>

          <div className="footer-right">
            <p className="footer-about">
              <span className="about-title1">About the Institution</span>
              <span>
                <strong>TCE</strong> Lorem ipsum dolor sit amet, consectetur
              </span>
              adipisicing elit.
            </p>
            <div className="footer-icon">
              <a href="#">
                <i className="ri-linkedin-line"></i>
              </a>
              <a href="#">
                <i className="ri-instagram-line"></i>
              </a>
              <a href="#">
                <i className="ri-google-fill"></i>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
