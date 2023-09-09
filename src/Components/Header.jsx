import "./Header.css";
import React, { useRef } from "react";

const header = () => {
  const nav_links = [
    {
      path: "#home",
      display: "Home",
    },
    {
      path: "#About",
      display: "About",
    },
    {
      path: "#Service",
      display: "Service",
    },
    {
      path: "#Project",
      display: "Project",
    },
    {
      path: "#contact",
      display: "Contact",
    },
  ];

  return (
    <header className="header">
      <div className="container">
        <div className="nav_wrapper">
          <div className="logo">
            <h2>TCE-MDU</h2>
          </div>

          <div className="navigation">
            <ul className="menu">
              {nav_links.map((item, index) => (
                <li className="menu_item">
                  <a href="" className="menu_link">
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default header;
