import * as React from "react";
import "../Home/Home.css";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home_container">
      <div className="home_title">
        <ul className="buttons_container">
          <li>
            <Button type="primary" onClick={() => navigate(`/beers`)}>
              Our Beers
            </Button>
          </li>
          <li>
            <Button type="primary" onClick={() => navigate(`/beers/random`)}>
              Random Beer
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};
