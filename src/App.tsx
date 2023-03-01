import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { NavBar } from "./components/NavBar/NavBar";
import { PagesContainer } from "./components/PagesContainer/PagesContainer";
import { useParams, useNavigate } from "react-router-dom";
import { AppUrls } from "./types/Apptypes";
import { Home } from "./components/Home/Home";
import { BeerDetails } from "./components/BeerDetails/BeerDetails";
import { RandomBeer } from "./components/RandomBeer/RandomBeer";
import axios from "axios";
import recipesApi from "./api/recipesApi";
import { APP_ID } from "./keys";

export const App = () => {
  const params = useParams();

  console.log(process.env.APP_KEY);

  useEffect(() => {
    recipesApi
      .get(
        `v2?type=public&q=fresh crab&app_id=${APP_ID}&app_key=${process.env.REACT_APP_API_KEY}`,
        {}
      )
      .then((res) => console.log(res));
  });

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/:page" element={<PagesContainer />} />

        <Route path="/:page/:id" element={<BeerDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};
