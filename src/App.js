import React from "react";
import Date from "./components/date";
import Apod from "./components/imgOfDay";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Date />
      <Apod />
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
