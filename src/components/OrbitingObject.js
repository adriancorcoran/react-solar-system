import React from "react";
// helpers and data
import { getPosition, getZIndex } from "../lib/helpers";

class OrbitingObject extends React.Component {
  // create the object and init the state
  constructor(props) {
    super(props);
    this.state = {
      // ...props.solarObject,
      position: { px: 0, py: 0 },
      gradient: { gx: 0, gy: 0 },
      display: "none",
      zIndex: props.zIndex
    };
  }

  // mount the object and create the interval to update the position
  componentDidMount() {
    // set a reference in state to the parent element, if exists
    if (this.props.solarObject.parentId !== false) {
      this.setState({
        parentElement: document.querySelector(
          `#${this.props.solarObject.parentId}`
        )
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
    let solarObject = { ...this.props.solarObject, ...this.state };
    let universe = { ...this.props.universe };
    let solarSystem = { ...this.props.solarSystem };
    //  ------------------------------------------------
    //  CALCULATE POSITION
    //  ------------------------------------------------
    // calculate new angle
    let angle = solarObject.angle + solarObject.speed * universe.speed;
    // check if over 360 and reset - stop number getting too high
    if (angle >= 360) angle = 0;
    //  ------------------------------------------------
    // calculate parent position - default to universe
    let parentPosition = {
      cx: universe.center.cx,
      cy: universe.center.cy
    };
    // check for parent
    if (solarObject.parentId && solarObject.parentId !== "universe") {
      // get parent position
      parentPosition = getPosition(solarObject.parentElement);
    }
    //  ------------------------------------------------
    // calculate x and y position
    let xOffset =
      solarObject.radius * universe.scale * Math.cos(angle) -
      (solarObject.diameter * universe.scale) / 2;
    let px = parentPosition.cx + xOffset;
    //
    let yOffset =
      solarObject.radius *
        universe.scale *
        (1 - universe.viewTilt) *
        Math.sin(angle) -
      (solarObject.diameter * universe.scale) / 2;
    let py = parentPosition.cy + yOffset - solarObject.orbitalTilt * xOffset;

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
        ? getZIndex(solarObject.parentElement) - solarObject.zIndexVariation
        : getZIndex(solarObject.parentElement) + solarObject.zIndexVariation
    });

    //  ------------------------------------------------
    //  CALCULATE HIGHLIGHT POSITION
    //  ------------------------------------------------
    // set the initial % position for the gradient highlight
    // formula is the same for the top hemi and then different in each bottom quadrant
    let gx = 50;
    let gy = 50;

    // don't do it for the sun
    if (solarObject.parentId !== "universe") {
      // && solarObject.name === "Venus") {
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
        //  ------------------------------------------------
        //  X POSITION
        //  ------------------------------------------------
        // need the % of the current position (px) compared to the left most position
        // (universe.center.cx - solarObject.radius) over the entire orbital range
        // (2 * solarObject.radius)

        // planets
        let totalRadiusX = universe.center.cx - solarObject.radius;
        let totalOrbitX = 2 * solarObject.radius;
        // satellites
        if (solarObject.parentId !== "sun") {
          totalRadiusX -= solarSystem[solarObject.parentId].radius;
          totalOrbitX += 2 * solarSystem[solarObject.parentId].radius;
        }
        // calculation
        let gDecimalX = (px - totalRadiusX) / totalOrbitX;
        gx = 100 - Math.round(gDecimalX * 100);
        //  ------------------------------------------------
      } else {
        //  ------------------------------------------------
        //  X POSITION
        //  ------------------------------------------------
        // bottom left hemisphere
        if (hemiLeftUniverse) {
          // also multiply by 1+gDecimalX to give a sense of easing from 0 to -500 speeding
          // up as we get closer to -500

          // planets
          let totalRadiusX =
            universe.center.cx -
            universe.scale * (solarObject.radius + solarObject.diameter);
          let totalOrbitX = universe.scale * solarObject.radius;
          // satellites
          if (solarObject.parentId !== "sun") {
            totalRadiusX -=
              universe.scale * solarSystem[solarObject.parentId].radius;
            totalOrbitX +=
              universe.scale * solarSystem[solarObject.parentId].radius;
          }
          // calculation - the offset of the gradient is proportional to the diameter
          // of the diameter
          let gDecimalX = (px - totalRadiusX) / totalOrbitX;
          gx =
            100 +
            gDecimalX * Math.pow(0.7 * universe.scale + gDecimalX, 3) * 200;
        } else {
          // bottom right hemisphere

          // planets
          let totalRadiusX =
            universe.center.cx +
            universe.scale * (solarObject.radius - solarObject.diameter); // minus the diameter to correct for a y position bug
          let totalOrbitX = universe.scale * solarObject.radius;
          // satellites
          if (solarObject.parentId !== "sun") {
            totalRadiusX +=
              universe.scale * solarSystem[solarObject.parentId].radius;
            totalOrbitX +=
              universe.scale * solarSystem[solarObject.parentId].radius;
          }
          // calculation - the offset of the gradient is proportional to the diameter
          // of the diameter
          let gDecimalX = (totalRadiusX - px) / totalOrbitX;
          gx = gDecimalX * Math.pow(0.8 * universe.scale + gDecimalX, 3) * -200;
        }
        //  ------------------------------------------------
      }
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
      gradient: { gx, gy },
      display: "block"
    });
  }

  // style object and render position using state
  render() {
    const style = {
      background:
        "radial-gradient(circle at " +
        this.state.gradient.gx +
        "% " +
        this.state.gradient.gy +
        "%, " +
        this.props.solarObject.color +
        ", #000)",
      borderRadius: "100%",
      // boxShadow: `1px 1px 5px 0px #000`,
      position: "absolute",
      top: `${this.state.position.py}px`,
      left: `${this.state.position.px}px`,
      width: `${this.props.solarObject.diameter * this.props.universe.scale}px`,
      height: `${this.props.solarObject.diameter *
        this.props.universe.scale}px`,
      display: this.state.display,
      zIndex: this.state.zIndex
    };

    return (
      <div
        id={this.props.solarObject.id}
        className="orbiting-object"
        style={style}
      >
        &nbsp;
      </div>
    );
  }
}

export default OrbitingObject;
