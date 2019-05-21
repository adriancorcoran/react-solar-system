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
      gradient: { gx: 0, gy: 0 },
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
    let solarSystem = { ...this.props.solarSystem };
    //  ------------------------------------------------
    //  CALCULATE POSITION
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
    // calculate x and y position
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
    //  CALCULATE Z-INDEX
    //  ------------------------------------------------
    // calculate which hemisphere of the orbit around the parent body we are in
    // this is used to set the z-index
    let hemiTopParent = true; //  top hemisphere
    if (py > parentPosition.cy) {
      hemiTopParent = false; //  bottom hemisphere
    }
    // set the z index to the negative value of the z-index value
    // this makes the objects pass behind each other correctly
    this.setState({
      zIndex: hemiTopParent
        ? getZIndex(this.state.parentElement) - solarObject.zIndexVariation
        : getZIndex(this.state.parentElement) + solarObject.zIndexVariation
    });

    //  ------------------------------------------------
    //  CALCULATE HIGHLIGHT POSITION
    //  ------------------------------------------------
    // set the initial % position for the gradient highlight
    // formula is the same for the top hemi and then different in each bottom quadrant
    let gx = 50;

    // don't do it for the sun
    if (solarObject.parentId !== "universe") {
      // && solarObject.name === "Earth") {
      // calculate which hemisphere of the orbit around the universe center we are in
      // this is used to set the body highlight position
      let hemiTopUniverse = true; //  top hemisphere
      let hemiLeftUniverse = true; //  left hemisphere
      if (py > universe.center.cy) {
        hemiTopUniverse = false; //  bottom hemisphere
      }
      if (px > universe.center.cx) {
        hemiLeftUniverse = false; //  right hemisphere
      }

      // top hemisphere
      if (hemiTopUniverse) {
        // need the % of the current position (px) compared to the left most position
        // (universe.center.cx - solarObject.radius) over the entire orbital range
        // (2 * solarObject.radius)

        // planets
        let totalRadius = universe.center.cx - solarObject.radius;
        let totalOrbit = 2 * solarObject.radius;
        // satellites
        if (solarObject.parentId !== "sun") {
          totalRadius -= solarSystem[solarObject.parentId].radius;
          totalOrbit += 2 * solarSystem[solarObject.parentId].radius;
        }
        // calculation
        let gDecimal = (px - totalRadius) / totalOrbit;
        gx = 100 - Math.round(gDecimal * 100);
      } else {
        // bottom left hemisphere
        if (hemiLeftUniverse) {
          // planets
          // need the % of the current position (px) compared to the radius position
          // (universe.center.cx - solarObject.radius) over half the orbital range
          // (solarObject.radius)
          // also multiply by 1+gDecimal to give a sense of easing from 0 to -500 speeding
          // up as we get closer to -500

          // planets
          let totalRadius = universe.center.cx - solarObject.radius;
          let totalOrbit = solarObject.radius;
          // satellites
          if (solarObject.parentId !== "sun") {
            totalRadius -= solarSystem[solarObject.parentId].radius;
            totalOrbit += solarSystem[solarObject.parentId].radius;
          }
          // calculation
          let gDecimal = (px - totalRadius) / totalOrbit;
          gx = gDecimal * 200 * (1 + gDecimal) + 100;
        } else {
          // planets
          // need the % of the current position (px) compared to the radius position
          // (universe.center.cx - solarObject.radius) over half the orbital range
          // (solarObject.radius)
          // also multiply by 1+gDecimal to give a sense of easing from 0 to -500 speeding
          // up as we get closer to -500

          // planets
          let totalRadius = universe.center.cx + solarObject.radius;
          let totalOrbit = solarObject.radius;
          // satellites
          if (solarObject.parentId !== "sun") {
            totalRadius += solarSystem[solarObject.parentId].radius;
            totalOrbit += solarSystem[solarObject.parentId].radius;
          }
          // calculation
          let gDecimal = (totalRadius - px) / totalOrbit;
          gx = gDecimal * -200 * (1 + gDecimal);
        }
      }
    }

    //  ------------------------------------------------
    // let hemiLeft = true; //  left hemisphere
    //  ------------------------------------------------
    // if (px > parentPosition.cx) {
    //   hemiLeft = false; //  right hemisphere
    // }
    //  ------------------------------------------------
    //  ------------------------------------------------

    //  ------------------------------------------------
    // update state
    this.setState({
      ...this.state,
      angle: angle,
      position: {
        px,
        py
      },
      gradient: { gx, gy: 0 },
      display: "block"
    });
  }

  render() {
    // style object and render position using state
    const style = {
      background:
        "radial-gradient(circle at " +
        this.state.gradient.gx +
        "% 25%, " +
        this.state.color +
        ", #000)",
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
