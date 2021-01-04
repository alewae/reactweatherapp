import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import reportWebVitals from "./reportWebVitals";

import Title from "./Title";
import Header from "./Header";
import Search from "./Search";
import SearchResult from "./SearchResult";
import Unit from "./Unit";
import ActualWeather from "./ActualWeather";
import Forecast from "./Forecast";
import Footer2 from "./Footer2";

function WeatherAppReact() {
  return (
    <div className="WeatherAppReact">
      <Header />
      <Title />
      <Search />
      <SearchResult />
      <Unit />
      <ActualWeather />
      <Forecast />
      <Footer2 />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<WeatherAppReact />, rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
