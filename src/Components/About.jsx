import React from 'react';
import "./About.css";
import aboutimg from "./aboutimg.json";
import Lottie from "lottie-react";

const about = () => {
  return (
    <section  name="about" className="about">
        <div className="container">
            <div className="about_wrapper">

                <div className="about_img">
                    <Lottie loop={true} animationData={aboutimg}/>
                </div>

                <div className="about_content">
                    <h1 className="about_title">ABOUT</h1>
                    <p className="about_description">
                     TCE proudly present TCE-MDU Hackathon. A 36-hour-long hackathon where thousands of students from all over India come together and work on a variety of problem statements. Problem statements include both software and electronic tracks. This collaboration between three of the most prestigious institutions in the country brings you a golden opportunity to test your skills against the best of the best contenders for cash prizes, goodies, and more! Participants will be building projects from scratch, which will be presented to our panel of experienced judges to decide our winners finally. Join us and use this opportunity to think out of the box!
                    </p>

                </div>

            </div>
        </div>
    </section>
  )
}

export default about