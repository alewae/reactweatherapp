import React, { useState } from "react";
import axios from "axios";
import "./ActualWeather.css";

export default function ActualWeather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather.icon,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="ActualWeather">
        <div className="container">
          <div className="overview-date">
            <h5 className="date_title">
              <strong>Actual weather</strong>
            </h5>
            <img src={weatherData.icon} alt="weather icon" />
            <h4 className="temperature">
              <span id="temp-1">{Math.round(weatherData.temperature)}°C</span>
            </h4>
            <ul>
              <li className="wind">Wind: {Math.round(weatherData.wind)} m/s</li>
              <li className="humidity">
                Humidity: {Math.round(weatherData.humidity)}%
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "d35ea4f1a6c2987f94eb1e419288d906";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Please hold on, Petrus is looking up the actual weather";
  }
}
