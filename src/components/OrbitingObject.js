import React from "react";
import styled from "styled-components";

const Planetoid = styled.div`
  background: radial-gradient(circle at 10px 10px, #2da8ff, #000);
  border-radius: 100%;
  box-shadow: 2px 2px 5px 0px #000;
  position: absolute;
  top: ${props => props.position.py}px;
  left: ${props => props.position.px}px;
  width: ${props => props.diameter}px;
  height: ${props => props.diameter}px;
  display: ${props => props.display};
`;

class OrbitingObject extends React.Component {
  // create the object and init the state
  constructor(props) {
    super(props);
    this.state = { ...props.properties };
    // this.state = {
    //   display: "none",
    //   diameter: 50,
    //   center: {
    //     cx: 720,
    //     cy: 400
    //   },
    //   position: {
    //     px: 0,
    //     py: 0
    //   },
    //   radius: 500,
    //   angle: 0,
    //   viewTilt: 0.25
    // };
  }

  // mount the object and create the interval
  componentDidMount() {
    this.intervalID = setInterval(() => {
      let angle = this.state.angle;
      // angle = (angle + Math.PI / 360) % (Math.PI * 2);
      angle += 0.025;
      if (angle >= 360) angle = 0;
      this.move(angle);
    }, 50);
  }

  // unmount the object and destroy the interval
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  // move to next step in interval
  move(a) {
    // 1. take a copy of state
    const position = { ...this.state.position };
    let angle = { ...this.state.angle };
    let px = this.state.center.cx + this.state.radius * Math.cos(a);
    let py =
      this.state.center.cy +
      this.state.radius * this.state.viewTilt * Math.sin(a);
    // 2. update the item
    position.px = px;
    position.py = py;
    angle = a;
    // 3. update state
    this.setState({ position });
    this.setState({ angle });
    this.setState({ display: "block" });
  }

  render() {
    return (
      <Planetoid
        display={this.state.display}
        diameter={this.state.diameter}
        position={this.state.position}
      />
    );
  }
}

export default OrbitingObject;
