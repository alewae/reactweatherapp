import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  let date = ("0" + props.date.getDate()).substr(-2);
  let month = months[props.date.getMonth()];
  let year = props.date.getFullYear();
  let day = days[props.date.getDay()];
  let hours = ("0" + props.date.getHours()).substr(-2);
  let minutes = ("0" + props.date.getMinutes()).substr(-2);

  return (
    <div>
      {day}, {date}.{month}.{year} / {hours}:{minutes}
    </div>
  );
}
