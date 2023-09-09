import React from "react";
import "./Tracks.css";

const tracks = () => {
  const trackdata = [
    {
      icon: "ri-mac-line",
      title: "Development",
      desc: "A track to develop Websites and Mobile Apps based on the problem statements we have for you, in line with the theme.",
    },
    {
      icon: "ri-code-s-slash-line",
      title: "Machine Learning",
      desc: "A track for all ML enthusiasts out there. It brings together participants to solve real-data challenges based on Sustainability by applying Machine learning. It aims to bring to life creative solutions to leverage the power of AI to amplify human capability.",
    },
    {
      icon: "ri-command-line",
      title: "Electronics",
      desc: "This track is for all those interested in electronics. It focuses on problem statements based on IoT and Digital Circuit design to solve a real-world sustainability problem.",
    },
    {
      icon: "ri-macbook-fill",
      title: "Web 3.0",
      desc: "This track is for Web3 enthusiasts to turn ideas into actual projects. It offers opportunities to work on blockchain-based problem statements focussing on different areas across NFTs, DeFi, and Metaverse to pursue a more sustainable future.",
    },
  ];

  return (
    <section className="tracks">
      <div className="container">
        <div className="track_Title">
          <h1 className="title">TRACKS</h1>
        </div>
        <div className="track_wrapper">
          {trackdata.map((item, index) => (
            <div key={index} className="track_item">
              <span className="track_icon">
                <i class={item.icon}></i>
              </span>
              <h3 className="track_title">{item.title}</h3>
              <p className="description">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default tracks;
