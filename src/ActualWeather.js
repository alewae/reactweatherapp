import React from "react";
import FormattedDate from "./FormattedDate";
import "./ActualWeather.css";

export default function ActualWeather(props) {
  return (
    <div className="ActualWeather">
      <div className="card final-city-name" style={{ width: 18 + "em" }}>
        <FormattedDate date={props.data.date} />
        <p className="city">{props.data.city}</p>
      </div>
      <p className="chooseUnit">
        <em>
          Choose your desired unit{" "}
          <a href="/" className="celcius">
            °C
          </a>{" "}
          /
          <a href="/" className="fahrenheit">
            °F
          </a>
        </em>
      </p>
      <div className="overview-date">
        <h5 className="date_title">
          <strong>Actual weather</strong>
        </h5>
        <h4 className="temperature">
          <span id="temp-1">{Math.round(props.data.temperature)}°C</span>
        </h4>
        <ul>
          <li className="wind">Wind: {Math.round(props.data.wind)} m/s</li>
          <li className="humidity">
            Humidity: {Math.round(props.data.humidity)}%
          </li>
        </ul>
      </div>
    </div>
  );
}
