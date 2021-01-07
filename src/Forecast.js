import React, { useState } from "react";
import axios from "axios";
import ForecastList from "./ForecastList";
import "./Forecast.css";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecast(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="Forecast row">
        <ForecastList data={forecast.list[0]} unit={props.unit} />
        <ForecastList data={forecast.list[1]} unit={props.unit} />
        <ForecastList data={forecast.list[2]} unit={props.unit} />
        <ForecastList data={forecast.list[3]} unit={props.unit} />
        <ForecastList data={forecast.list[4]} unit={props.unit} />
        <ForecastList data={forecast.list[5]} unit={props.unit} />
      </div>
    );
  } else {
    const apiKey = "d35ea4f1a6c2987f94eb1e419288d906";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForecast);
    return (
      <div className="Forecast">
        <div className="row overview-weather">The forecast is loading...</div>
      </div>
    );
  }
}
