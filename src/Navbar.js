import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import photo from "./Images/User Image.png";
import LOGO from './Images/LOGO.png'

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="nav_bod">
      <div className="nav_conta">
        <IconContext.Provider value={{ color: "black" }}>
          <div className="navbar">
            <a className="menu-bars">
              <FaIcons.FaBars onClick={showSidebar} />
            </a>
          </div>
        </IconContext.Provider>
        <IconContext.Provider value={{ color: "white" }}>
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
                <a className="menu-bars">
                  <AiIcons.AiOutlineClose />
                </a>
              </li>
          <img src={LOGO} className="user2" />

              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <a>
                      {item.icon}
                      <span>{item.title}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </IconContext.Provider>
          <img src={photo} className="user" />
      </div>
    </div>
  );
}

export default Navbar;
