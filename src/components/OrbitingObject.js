import React from "react";
// helpers and data
import { getPosition, getZIndex } from "../lib/helpers";

class OrbitingObject extends React.Component {
  // create the object and init the state
  constructor(props) {
    super(props);
    this.state = {
      ...props.solarObject,
      position: { px: 0, py: 0 },
      display: "none",
      zIndex: props.zIndex
    };
  }

  // mount the object and create the interval to update the position
  componentDidMount() {
    // set a reference in state to the parent element, if exists
    if (this.state.parentId !== false) {
      this.setState({
        parentElement: document.querySelector(`#${this.state.parentId}`)
      });
    }

    // set an interval for moving
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
    // console.log(this.state);
    //  ------------------------------------------------
    // get copy of state and universe
    let solarObject = { ...this.state };
    let universe = { ...this.props.universe };
    //  ------------------------------------------------
    // calculate new angle
    let angle =
      solarObject.angle +
      solarObject.angleChange * solarObject.speed * universe.speed;
    // check if over 360 and reset - stop number getting too high
    if (angle >= 360) angle = 0;
    //  ------------------------------------------------
    // calculate parent position - default to universe
    let parentPosition = {
      cx: universe.center.cx,
      cy: universe.center.cy
    };
    // check for parent
    if (this.state.parentId) {
      // get parent position
      parentPosition = getPosition(this.state.parentElement);
    }
    //  ------------------------------------------------
    // calculate position
    let px =
      parentPosition.cx +
      solarObject.radius * Math.cos(angle) -
      solarObject.diameter / 2;
    let py =
      parentPosition.cy +
      solarObject.radius *
        (1 - this.props.universe.viewTilt) *
        Math.sin(angle) -
      solarObject.diameter / 2;
    //  ------------------------------------------------
    // calculate which quadrant of the orbit we are in
    // this is used to move the object shadow and set the z-index

    // top left quadrant: x < cx and y > cy
    // top right quadrant: x > cx and y > cy
    // bottom right quadrant: x > cx and y < cy
    // bottom left quadrant: x < cx and y < cy
    let hemiTop = true; //  top hemisphere
    let hemiLeft = true; //  left hemisphere
    if (px > parentPosition.cx) {
      hemiLeft = false; //  right hemisphere
    }
    if (py > parentPosition.cy) {
      hemiTop = false; //  bottom hemisphere
    }
    //  ------------------------------------------------
    // set the z index to the negative value of the z-index value
    if (hemiTop) {
      this.setState({
        zIndex:
          getZIndex(this.state.parentElement) - solarObject.zIndexVariation
      });
    } else {
      // set to the positive value
      this.setState({
        zIndex:
          getZIndex(this.state.parentElement) + solarObject.zIndexVariation
      });
    }

    //  ------------------------------------------------
    // update state
    this.setState({
      ...this.state,
      angle: angle,
      position: {
        px,
        py
      },
      display: "block"
    });
  }

  render() {
    // style object and render position using state
    const style = {
      background:
        "radial-gradient(circle at 25% 25%, " + this.state.color + ", #000)",
      borderRadius: "100%",
      boxShadow: "2px 2px 5px 0px #000",
      position: "absolute",
      top: `${this.state.position.py}px`,
      left: `${this.state.position.px}px`,
      width: `${this.state.diameter}px`,
      height: `${this.state.diameter}px`,
      display: this.state.display,
      zIndex: this.state.zIndex
    };

    return (
      <div id={this.state.id} className="orbiting-object" style={style}>
        &nbsp;
      </div>
    );
  }
}

export default OrbitingObject;
