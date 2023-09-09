import home2 from "./home2.json";
import Lottie from "lottie-react";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import "./Hero.css";
import {Link} from "react-scroll"

const Hero = () => {
  const [title, setTitle] = useState("");
  const [sd, setSd] = useState("");
  const [ed, setEd] = useState("");
  const [rsd, setRsd] = useState("");
  const [red, setRed] = useState("");
  const [cno, setCno] = useState("");

  useEffect(() => {
    Axios.get("https://web-it-like-spider.onrender.com/hackathon/home/").then(
      (res) => {
        const apiData = res.data;
        const name = apiData.name;
        const start_date = apiData.start_date;
        const end_date = apiData.end_date;
        const registration_start_date = apiData.registration_start_date;
        const registration_end_date = apiData.registration_end_date;
        const Contact_no = apiData.contact_number;
        setTitle(name);
        setSd(start_date);
        setEd(end_date);
        setRsd(registration_start_date);
        setRed(registration_end_date);
        setCno(Contact_no);
      }
    );
  }, []);

  return (
    <section className="hero_section">
      <div className="container">
        <div className="hero_wrapper">
          <div className="hero_content">
            <div>
              <h2>Innovate, Integrate, Inspire</h2>
              <h2>Your Journey through </h2>
              <h2 className="highlight">{title}</h2>
            </div>
            <div className="description">
              <div className="left">
                <h3>
                  <span className="date">Start Date</span>
                  <span>{sd}</span>
                </h3>
                <h3>
                  <span className="date">End Date</span>
                  <span>{ed}</span>
                </h3>
                <div className="contactno">
                  <i className="ri-phone-line"></i>
                  <p>{cno}</p>
                </div>
              </div>
              <div className="right">
                <h3>
                  <span className="date">Reg Start Date</span>
                  <span>{rsd}</span>
                </h3>
                <h3>
                  <span className="date">Reg End Date</span>
                  <span>{red}</span>
                </h3>
              </div>
            </div>
            <div className="hero_btn">
                  <Link  to="register" smooth={true}  offset={-150}>  <button className="primary_btn">Register Now</button></Link>
            </div>
          </div>

          <div className="hero_img">
            <Lottie loop={true} animationData={home2} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
