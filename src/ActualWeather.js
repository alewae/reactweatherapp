import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import "./ActualWeather.css";

export default function ActualWeather(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="ActualWeather">
        <div className="card final-city-name" style={{ width: 18 + "em" }}>
          <p className="city">{props.data.city}</p>
          <FormattedDate date={props.data.date} />
        </div>
        <p className="chooseUnit">
          <em>
            Desired unit system:{" "}
            <a href="/" className="celsius" onClick={convertToCelsius}>
              metric
            </a>{" "}
            or{" "}
            <a href="/" className="fahrenheit" onClick={convertToFahrenheit}>
              imperial
            </a>
          </em>
        </p>
        <div className="overview-date">
          <h5 className="date_title">
            <strong>Actual weather</strong>
          </h5>
          <img src={props.data.icon} alt="weather icon" />
          <h4 className="temperature">
            <span id="temp-1">{Math.round(props.data.temperature)}°C</span>
          </h4>
          <ul>
            <li className="wind">
              Wind: {Math.round(props.data.wind * 3.6)} km/h
            </li>
            <li className="humidity">
              Humidity: {Math.round(props.data.humidity)}%
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    let fahrenheitTemp = (props.data.temperature * 9) / 5 + 32;
    return (
      <div className="ActualWeather">
        <div className="card final-city-name" style={{ width: 18 + "em" }}>
          <p className="city">{props.data.city}</p>
          <FormattedDate date={props.data.date} />
        </div>
        <p className="chooseUnit">
          <em>
            Desired unit system:{" "}
            <a href="/" className="celsius" onClick={convertToCelsius}>
              metric
            </a>{" "}
            or{" "}
            <a href="/" className="fahrenheit" onClick={convertToFahrenheit}>
              imperial
            </a>
          </em>
        </p>
        <div className="overview-date">
          <h5 className="date_title">
            <strong>Actual weather</strong>
          </h5>
          <img src={props.data.icon} alt="weather icon" />
          <h4 className="temperature">
            <span id="temp-1">{Math.round(fahrenheitTemp)}°F</span>
          </h4>
          <ul>
            <li className="wind">
              Wind: {Math.round(props.data.wind * 2.237)} mph
            </li>
            <li className="humidity">
              Humidity: {Math.round(props.data.humidity)}%
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
