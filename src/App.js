import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather />

      <footer>
        This project was coded by Ashley Brianna and is {""}
        <a
          href="https://github.com/Ashleyxbrianna/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          Open-Sourced on Github
        </a>
      </footer>
    </div>
  );
}
