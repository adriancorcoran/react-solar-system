import React from "react";
import OrbitingObject from "./components/OrbitingObject";
import ScaleControl from "./components/ScaleControl";
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
        speed: 0.5,
        frameRate: 70,
        zIndex: 5000,
        scale: 0.4,
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

  updateScale = change => {
    console.log(`hi there!`);
    this.setState({
      universe: {
        ...this.state.universe,
        scale: 1,
        speed: 1
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
        <ScaleControl clickAction={this.updateScale} />
      </div>
    );
  }
}

export default App;
