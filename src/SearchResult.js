import React from "react";
import "./SearchResult.css";

export default function SearchResult() {
  let weatherData = {
    city: "Hawaii",
    date: "Tuesday, 01.12.2020 / 15:57",
  };
  return (
    <div className="SearchResult">
      <div className="card final-city-name" style={{ width: 18 + "em" }}>
        <p className="card-title">{weatherData.city}</p>
        <p className="card-text">{weatherData.date}</p>
      </div>
    </div>
  );
}
