import React from "react";
import ReactDOM from "react-dom";

const SeasonDisplay = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat < 0 ? "winter" : "summer";
  } else {
    return lat < 0 ? "summer" : "winter";
  }
};

export default SeasonDisplay;
