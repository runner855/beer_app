import React, { useEffect } from "react";
import apiCall from "./api/apiCall";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";

const App = () => {
  useEffect(() => {
    apiCall.get(`beers/random`, {}).then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <div className="App">
      <NavBar />
    </div>
  );
};

export default App;
