import React from "react";
import "./Timeline.css";

const timeline = () => {
  return (
    <section className="timeline">
      <div className="container">
        <div className="timeline_wrapper">
          <div className="heading">
            <h1>Timeline</h1>
          </div>

          <div className="timeline_content">
            <ul>
              <li>
                <h3 className="title1">Registration Begins</h3>
                <p>Let the fun begin</p>
                <span className="circle"></span>
                <span className="date">26th January</span>
              </li>

              <li>
                <h3 className="title1">Registration Closes</h3>
                <p>Registration form closes</p>
                <span className="circle"></span>
                <span className="date">7th February</span>
              </li>

              <li>
                <h3 className="title1">Mentor Allocation</h3>
                <p>You get your own mentor to clear all your doubts</p>
                <span className="circle"></span>
                <span className="date">9th February</span>
              </li>

              <li>
                <h3 className="title1">Opening Ceremony</h3>
                <p>Hackathon Begins</p>
                <span className="circle"></span>
                <span className="date">10th February</span>
              </li>

              <li>
                <h3 className="title1">Hackathon Concludes</h3>
                <p>36 Hours of fun</p>
                <span className="circle"></span>
                <span className="date">12th February</span>
              </li>

              <li>
                <h3 className="title1">Results Announcement</h3>
                <p>Happy Valentine's Day! 💖</p>
                <span className="circle"></span>
                <span className="date">14th February</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default timeline;
