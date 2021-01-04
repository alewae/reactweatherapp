import React from "react";
import "./ActualWeather.css";

export default function ActualWeather() {
  let weatherData = {
    temp: 18,
    wind: 10,
    humidtiy: 72,
    icon: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
  };
  return (
    <div className="ActualWeather">
      <div className="container">
        <div className="overview-date">
          <h5 className="date_title">
            <strong>Actual weather</strong>
          </h5>
          <img src={weatherData.icon} alt="icon" />
          <h4 className="temperature">
            <span id="temp-1">{weatherData.temp}°C</span>
          </h4>
          <ul>
            <li className="wind">Wind: {weatherData.wind} km/h</li>
            <li className="humidity">Humidity: {weatherData.humidtiy}%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
