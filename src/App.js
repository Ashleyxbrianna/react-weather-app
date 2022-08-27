import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="New York" />
      <div>
        <iframe
          title="weather playlist"
          className="playlist"
          src="https://open.spotify.com/embed/playlist/7AMR4CgEa1NAkny2xy2Yuc?utm_source=generator"
          width="100%"
          height="380"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      </div>

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
