import React from "react";
import OrbitingObject from "./components/OrbitingObject";
import ScaleControl from "./components/ScaleControl";
import SpeedControl from "./components/SpeedControl";
import ResetButton from "./components/ResetButton";
import ShowStarsButton from "./components/ShowStarsButton";
import Footer from "./components/Footer";
// styles
import "./assets/scss/main.scss";
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
        viewTilt: 0.8,
        defaultSpeed: 1,
        speed: 1,
        speedStep: 0.2,
        speedLimitLower: 0.2,
        speedLimitUpper: 5,
        frameRate: 70,
        zIndex: 5000,
        defaultScale: 0.4,
        scale: 0.4,
        scaleStep: 0.1,
        scaleLimitLower: 0.1,
        scaleLimitUpper: 2
      },
      solarSystem: { ...solarSystemData },
      showStars: true
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
  }

  // unmount the object and destroy the interval
  componentWillUnmount() {
    //  ------------------------------------------------
    // clear listener
    window.removeEventListener("resize", this.updateUniverseCenter);
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

  clickAction = (changeType, change = null) => {
    // get current values - need to change in whole numbers to avoid tiny fractions creeping in
    let tmpScale = this.state.universe.scale * 10;
    let tmpScaleStep = this.state.universe.scaleStep * 10;
    let tmpSpeed = this.state.universe.speed * 10;
    let tmpSpeedStep = this.state.universe.speedStep * 10;
    // change scale or speed
    if (changeType === "scale") {
      tmpScale =
        change === "-" ? tmpScale - tmpScaleStep : tmpScale + tmpScaleStep;
    } else if (changeType === "speed") {
      tmpSpeed =
        change === "-" ? tmpSpeed - tmpSpeedStep : tmpSpeed + tmpSpeedStep;
    } else if (changeType === "reset") {
      tmpSpeed = this.state.universe.defaultSpeed * 10;
      tmpScale = this.state.universe.defaultScale * 10;
    }
    // set new scale
    this.setState({
      universe: {
        ...this.state.universe,
        scale: tmpScale / 10,
        speed: tmpSpeed / 10
      }
    });
  };

  toggleStars = () => {
    this.setState({ showStars: !this.state.showStars });
  };

  render() {
    // style object and render position using state
    const style = {
      zIndex: this.state.universe.zIndex
    };

    return (
      <div id="universe" className="universe" style={style}>
        {/* render the stars */}
        {this.state.showStars && (
          <React.Fragment>
            <div id="stars" />
            <div id="stars2" />
            <div id="stars3" />
          </React.Fragment>
        )}

        {/* render the solar system objects */}

        {Object.keys(solarSystemData).map((key, i) => {
          let solarObject = solarSystemData[key];
          return (
            <OrbitingObject
              key={i}
              universe={this.state.universe}
              solarSystem={this.state.solarSystem}
              solarObject={solarObject}
            />
          );
        })}
        <ScaleControl
          clickAction={this.clickAction}
          universeScale={{
            scale: this.state.universe.scale,
            scaleStep: this.state.universe.scaleStep,
            scaleLimitLower: this.state.universe.scaleLimitLower,
            scaleLimitUpper: this.state.universe.scaleLimitUpper
          }}
        />
        <SpeedControl
          clickAction={this.clickAction}
          universeSpeed={{
            speed: this.state.universe.speed,
            speedStep: this.state.universe.speedStep,
            speedLimitLower: this.state.universe.speedLimitLower,
            speedLimitUpper: this.state.universe.speedLimitUpper
          }}
        />
        <ResetButton clickAction={this.clickAction} />
        <ShowStarsButton
          clickAction={this.toggleStars}
          buttonText={this.state.showStars ? "Hide Stars" : "Show Stars"}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
