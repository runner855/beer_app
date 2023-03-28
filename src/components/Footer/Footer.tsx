import * as React from "react";
import "../Footer/Footer.css";
import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaAppStoreIos,
  FaGooglePlay,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export const Footer = () => {
  return (
    <nav className="footer">
      <ul className="footer_container">
        <li>
          <NavLink to="https://www.facebook.com/brewdogofficial/">
            <FaFacebookF />
          </NavLink>
          <NavLink to="https://www.youtube.com/user/BrewDogBeer">
            <FaYoutube />
          </NavLink>
          <NavLink to="https://www.instagram.com/brewdogofficial/?hl=en">
            <AiFillInstagram />
          </NavLink>
          <NavLink to="https://twitter.com/brewdog">
            <FaTwitter />
          </NavLink>
        </li>

        <ul className="app_download_container">
          <li>
            <NavLink to="https://apps.apple.com/gb/app/brewdog/id1291946531">
              <FaAppStoreIos />
            </NavLink>
          </li>
          <li>
            <NavLink to="https://play.google.com/store/apps/details?id=com.barsapp&hl=en_GB">
              <FaGooglePlay />
            </NavLink>
          </li>
        </ul>
      </ul>
    </nav>
  );
};
