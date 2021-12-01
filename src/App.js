import "./App.css";
import React from "react";

import SearchComponent from "./components/SearchComponent";
import CardTemComponent from "./components/CardTemComponent";
function App() {
  return (
    <div className="App">
      <header className="d-flex justify-content-center align-items-center">
        <h2 className="mt-2 text-light">Weather App</h2>
      </header>
      <SearchComponent />
      <CardTemComponent />
    </div>
  );
}

export default App;
