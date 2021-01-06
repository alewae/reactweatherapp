import React, { useState } from "react";
import ActualWeather from "./ActualWeather";
import Forecast from "./Forecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [unit, setUnit] = useState("celsius");

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    const apiKey = "d35ea4f1a6c2987f94eb1e419288d906";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row search-city">
          <i className="fas fa-search search-icon"></i>
          <form className="form-inline" onSubmit={handleSubmit}>
            <div className="form-group mx-sm-3 mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Enter city name"
                autoComplete="off"
                onChange={handleCityChange}
              />
            </div>
            <button type="submit" className="btn btn-primary mb-2 searchButton">
              Search
            </button>
          </form>
        </div>
        <ActualWeather data={weatherData} unit={unit} setUnit={setUnit} />
        <Forecast city={weatherData.city} unit={unit} />
      </div>
    );
  } else {
    search();
    return (
      <div className="sorry">
        "Please hold on, Petrus is looking up the actual weather"
      </div>
    );
  }
}
