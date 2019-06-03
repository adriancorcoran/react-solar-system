import React from "react";

class ScaleButton extends React.Component {
  // create the object and init the state
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const style = {
      backgroundColor: "#fff",
      position: "absolute",
      top: "100px",
      left: "100px",
      width: "100px",
      height: "100px",
      // top: `${this.state.position.py}px`,
      // left: `${this.state.position.px}px`,
      // width: `${this.props.solarObject.diameter * this.props.universe.scale}px`,
      // height: `${this.props.solarObject.diameter *
      //   this.props.universe.scale}px`,
      display: "block"
    };

    return (
      <div style={style} onClick={this.props.clickAction}>
        &nbsp;
      </div>
    );
  }
}

export default ScaleButton;
