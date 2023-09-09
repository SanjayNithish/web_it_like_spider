import React, { useEffect, useState } from "react";
import "./HomeDetails.css";
import Axios from "axios";

const HomeDetails = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [organizers, setOrganizers] = useState([]);

  useEffect(() => {
    Axios.get("https://web-it-like-spider.onrender.com/hackathon/home/").then(
      (res) => {
        const apiData = res.data;
        const { announcements, organizers } = apiData;
        setAnnouncements(announcements);
        setOrganizers(organizers);
      }
    );
  }, []);

  return (
    <div className="container">
      <div className="home_details">
        <div className="announcements">
          <div className="announcements_title">
            <h2>Announcement</h2>
          </div>
          <div className="announcement_details">
            {announcements.map((announcement, index) => (
              <div key={index} className="ann_container">
                <h3>{announcement.announcement_text}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="organizers">
          <div className="organizers_title">
            <h2>Organizers</h2>
          </div>
          <div className="organizers_details">
            {organizers.map((organizer, index) => (
              <div key={index} className="org_container">
                <h3>{organizer.organizer_info}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDetails;
