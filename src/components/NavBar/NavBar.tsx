import React, { useState } from "react";
import "../NavBar/NavBar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { NavLink, useNavigate } from "react-router-dom";
import { NavBarPages } from "../../utilities/utility";
import AppLogo from "../../images/app_logo.png";
import BrewDog from "../../images/brewdog.png";

export const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const navigate = useNavigate();
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
          <div className="navbar_logo" onClick={() => navigate("/home")}>
            <img className="avatar" src={BrewDog} alt="beer" />
          </div>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {NavBarPages.map((item, index) => {
              return (
                <li className="nav-item" key={index}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      "nav-links" + (isActive ? " activated" : "")
                    }
                    onClick={closeMobileMenu}
                  >
                    {item.page}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};
