import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

import Title from "./Title";
import Header from "./Header";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Footer2 from "./Footer2";

function WeatherAppReact() {
  return (
    <div className="WeatherAppReact">
      <Header />
      <Title />
      <Weather defaultCity="Berlin" />
      <Forecast />
      <Footer2 />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<WeatherAppReact />, rootElement);
