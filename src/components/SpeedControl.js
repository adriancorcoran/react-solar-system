import React from "react";
import ControlContainer from "../assets/styled-components/ControlContainer";

class SpeedControl extends React.Component {
  decrease = () => {
    this.props.clickAction("speed", "-");
  };

  increase = () => {
    this.props.clickAction("speed", "+");
  };

  render() {
    return (
      <ControlContainer style={{ bottom: 0 }}>
        {this.props.universeSpeed.speed >
        this.props.universeSpeed.speedLimitLower ? (
          <button onClick={this.decrease}>-</button>
        ) : (
          <button disabled="disabled" className="disabled">
            -
          </button>
        )}
        <p>Speed is {this.props.universeSpeed.speed}</p>
        {this.props.universeSpeed.speed <
        this.props.universeSpeed.speedLimitUpper ? (
          <button onClick={this.increase}>+</button>
        ) : (
          <button disabled="disabled" className="disabled">
            +
          </button>
        )}
      </ControlContainer>
    );
  }
}

export default SpeedControl;
