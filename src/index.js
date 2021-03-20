import React from "react";
import ReactDom from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loading from './Loading';

const seasonConfig = {
  winter: {
    text: "Chilly",
    iconName: "snowflake",
  },
  summer: {
    text: "Hot",
    iconName: "sun",
  },
};
class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  season = SeasonDisplay(this.lat, new Date().getMonth());

  Season = seasonConfig[this.season];

  conditionalRendering() {
    if (this.state.errorMessage && !this.state.lat) {
      return this.state.errorMessage;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return (
        <div>
          <i className={`${this.Season.iconName} icon`} />
          <h1>{this.Season.text}</h1>
          <i className={`${this.Season.iconName} icon`} />
        </div>
      );
    }
    return <Loading text="Please, allow the location access" />;
  }

  render() {
    return <div>{this.conditionalRendering()}</div>;
  }
}

ReactDom.render(<App />, document.getElementById("root"));
