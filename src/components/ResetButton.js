import React from "react";
import ButtonContainer from "../assets/styled-components/ButtonContainer";

class ResetButton extends React.Component {
  reset = () => {
    this.props.clickAction("reset");
  };

  render() {
    return (
      <ButtonContainer style={{ left: 0 }}>
        <button onClick={this.reset}>Reset</button>
      </ButtonContainer>
    );
  }
}

export default ResetButton;
