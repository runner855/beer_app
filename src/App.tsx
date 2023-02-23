import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { PagesContainer } from "./components/PagesContainer/PagesContainer";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/beers" element={<PagesContainer />} />
      </Routes>
    </div>
  );
};

export default App;
