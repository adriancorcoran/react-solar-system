import React from "react";

class OrbitingObject extends React.Component {
  // create the object and init the state
  constructor(props) {
    super(props);
    this.state = {
      properties: {
        ...props.properties,
        position: { px: 0, py: 0 },
        display: "none",
        zIndex: props.zIndex
      }
    };
  }

  // mount the object and create the interval to update the position
  componentDidMount() {
    this.intervalID = setInterval(() => {
      this.move();
    }, this.props.universe.frameRate);
  }

  // unmount the object and destroy the interval
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  // move to next step in interval
  move() {
    // get copy of state properties
    let properties = { ...this.state.properties };
    let universe = { ...this.props.universe };
    // get universe angle
    let a = universe.angle * properties.speed + properties.orbitOffset;
    // calculate position
    let px =
      universe.center.cx +
      properties.radius * Math.cos(a) -
      properties.diameter / 2;
    let py =
      universe.center.cy +
      properties.radius * (1 - this.props.universe.viewTilt) * Math.sin(a) -
      properties.diameter / 2;
    // update state
    this.setState({
      properties: {
        ...this.state.properties,
        position: {
          px,
          py
        },
        display: "block"
      }
    });
  }

  render() {
    // style object and render position using state
    const style = {
      background:
        "radial-gradient(circle at 25% 25%, " +
        this.state.properties.color +
        ", #000)",
      borderRadius: "100%",
      boxShadow: "2px 2px 5px 0px #000",
      position: "absolute",
      top: `${this.state.properties.position.py}px`,
      left: `${this.state.properties.position.px}px`,
      width: `${this.state.properties.diameter}px`,
      height: `${this.state.properties.diameter}px`,
      display: this.state.properties.display,
      zIndex: this.state.properties.zIndex
    };

    // top left quadrant: x < cx and y > cy
    // top right quadrant: x > cx and y > cy
    // bottom right quadrant: x > cx and y < cy
    // bottom left quadrant: x < cx and y < cy

    return (
      <div className="orbiting-object" style={style}>
        &nbsp;
      </div>
    );
  }
}

export default OrbitingObject;
