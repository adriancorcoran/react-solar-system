import React from "react";
import OrbitingObject from "./components/OrbitingObject";
import ScaleControl from "./components/ScaleControl";
import SpeedControl from "./components/SpeedControl";
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
        speed: 1,
        speedStep: 0.2,
        speedLimitLower: 0.2,
        speedLimitUpper: 5,
        frameRate: 70,
        zIndex: 5000,
        scale: 0.4,
        scaleStep: 0.1,
        scaleLimitLower: 0.1,
        scaleLimitUpper: 2,
        cxOffset: 0,
        cyOffset: 0
      },
      solarSystem: { ...solarSystemData }
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

  updateUniverseCenter = (cxOffset = 0, cyOffset = 0) => {
    this.setState({
      universe: {
        ...this.state.universe,
        center: {
          cx: window.innerWidth / 2 + cxOffset,
          cy: window.innerHeight / 2 + cyOffset
        }
      }
    });
  };

  clickAction = (changeType, change) => {
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

  render() {
    // style object and render position using state
    const style = {
      zIndex: this.state.universe.zIndex
    };

    return (
      <div id="universe" className="universe" style={style}>
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />

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
      </div>
    );
  }
}

export default App;
