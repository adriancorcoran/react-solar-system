import React from "react";
import OrbitingObject from "./components/OrbitingObject";
// import logo from "./logo.svg";
// styles
import "./css/App.css";
import "./css/Starfield.css";
// helpers and data
import { solarSystemData } from "./lib/orbiting-data";

class App extends React.Component {
  // set universe properties
  constructor(props) {
    super(props);
    this.state = {
      universe: {
        center: {
          cx: window.innerWidth / 2,
          cy: window.innerHeight / 2
        },
        angle: 0,
        angleChange: 0.025,
        viewTilt: 0.85,
        speed: 1,
        frameRate: 50
      }
    };
  }

  componentWillMount() {
    // center universe
    this.updateUniverseCenter();
  }

  componentDidMount() {
    //  ------------------------------------------------
    // listen for window resize events and recenter
    window.addEventListener("resize", this.updateUniverseCenter);

    //  ------------------------------------------------
    // loop to update the universal angle for calculating position
    this.intervalID = setInterval(() => {
      // get current angle
      let angle = this.state.universe.angle;
      // increase
      angle += this.state.universe.angleChange * this.state.universe.speed;
      // check if over 360 and reset - stop number getting too high
      if (angle >= 360) angle = 0;
      // update state
      this.setState({ universe: { ...this.state.universe, angle: angle } });
    }, this.state.universe.frameRate);
  }

  // unmount the object and destroy the interval
  componentWillUnmount() {
    //  ------------------------------------------------
    // clear listener
    window.removeEventListener("resize", this.updateUniverseCenter);

    //  ------------------------------------------------
    // clear interval
    clearInterval(this.intervalID);
  }

  updateUniverseCenter = () => {
    this.setState({
      universe: {
        ...this.state.universe,
        center: {
          cx: window.innerWidth / 2,
          cy: window.innerHeight / 2
        }
      }
    });
  };

  renderSolarSystem = () => {
    return solarSystemData.map((item, i) => {
      return (
        <OrbitingObject
          key={i}
          universe={this.state.universe}
          properties={item.properties}
          zIndex={i}
        />
      );
    });
  };

  render() {
    return (
      <div className="universe">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />

        {/* render the solar system data */}
        {this.renderSolarSystem()}
      </div>
    );
  }
}

export default App;
