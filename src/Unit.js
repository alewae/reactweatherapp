import React from "react";
import "./Unit.css";

export default function Unit() {
  return (
    <div className="Unit">
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
    </div>
  );
}
