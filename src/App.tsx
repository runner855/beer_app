import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { NavBar } from "./components/NavBar/NavBar";
import { PagesContainer } from "./components/PagesContainer/PagesContainer";
import { useParams, useNavigate } from "react-router-dom";
import { AppUrls } from "./types/Apptypes";

const App = () => {
  const params = useParams();
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to={AppUrls.HOME} />} />
        <Route path="/:page" element={<PagesContainer />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
