import React from "react";
import ButtonContainer from "../assets/styled-components/ButtonContainer";

class ShowStarsButton extends React.Component {
  toggleStars = () => {
    this.props.clickAction();
  };

  render() {
    return (
      <ButtonContainer style={{ top: 0, right: 0 }}>
        <button onClick={this.toggleStars}>{this.props.buttonText}</button>
      </ButtonContainer>
    );
  }
}

export default ShowStarsButton;
