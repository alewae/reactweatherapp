import React from "react";

export default function ForecastList(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = ("0" + date.getHours()).substr(-2);

    return `${hours}:00`;
  }

  function temperature() {
    let temperature = Math.round(props.data.main.temp);
    if (props.unit === "fahrenheit") {
      temperature = Math.round((temperature * 9) / 5 + 32);
      return `${temperature}°F`;
    } else {
      return `${temperature}°C`;
    }
  }

  function wind() {
    let wind = Math.round(props.data.wind.speed);
    if (props.unit === "fahrenheit") {
      wind = Math.round(wind * 2.237);
      return `${wind} mph`;
    } else {
      return `${wind} km/h`;
    }
  }
  function humidity() {
    let humidity = props.data.main.humidity;
    return `${humidity}%`;
  }
  return (
    <div className="col-sm-2">
      <div className="ForecastList overview-weather">
        <strong>{hours()}</strong>
        <img
          src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
          alt="weather icon"
        />
        <p className="temperature">{temperature()}</p>
        <ul>
          <li>Wind: {wind()}</li>
          <li>Humidity: {humidity()}</li>
        </ul>
      </div>
    </div>
  );
}
