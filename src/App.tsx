import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { NavBar } from "./components/NavBar/NavBar";
import { PagesContainer } from "./components/PagesContainer/PagesContainer";
import { useParams } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { BeerDetails } from "./components/BeerDetails/BeerDetails";
import { RecipeDetails } from "./components/RecipeDetails/RecipeDetails";

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
        <Route path="/:page/:id/:recipeId" element={<RecipeDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};
