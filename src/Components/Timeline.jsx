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
                <h3 className="title1">Design</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
                  veniam voluptas alia
                </p>
                <span className="circle"></span>
                <span className="date">September 1</span>
              </li>

              <li>
                <h3 className="title1">wireframe</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
                  veniam voluptas alia
                </p>
                <span className="circle"></span>
                <span className="date">September 1</span>
              </li>

              <li>
                <h3 className="title1">coading</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
                  veniam voluptas alia
                </p>
                <span className="circle"></span>
                <span className="date">September 1</span>
              </li>

              <li>
                <h3 className="title1">Testing</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
                  veniam voluptas alia
                </p>
                <span className="circle"></span>
                <span className="date">September 1</span>
              </li>

              <li>
                <h3 className="title1">Responsive</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
                  veniam voluptas alia
                </p>
                <span className="circle"></span>
                <span className="date">September 1</span>
              </li>

              <li>
                <h3 className="title1">Deploy</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
                  veniam voluptas alia
                </p>
                <span className="circle"></span>
                <span className="date">September 1</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default timeline;
