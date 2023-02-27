import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { NavBar } from "./components/NavBar/NavBar";
import { PagesContainer } from "./components/PagesContainer/PagesContainer";
import { useParams, useNavigate } from "react-router-dom";
import { AppUrls } from "./types/Apptypes";
import { Home } from "./components/Home/Home";
import { BeerDetails } from "./components/BeerDetails/BeerDetails";

export const App = () => {
  const params = useParams();
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
