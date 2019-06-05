import React from "react";
import styled from "styled-components";

const ScaleControlContainer = styled.div`
  /* display: flex; */
  display: none;
  justify-content: center;
  align-content: center;
  align-items: center;
  border: 1px solid #f00;
  z-index: 9999;

  & * {
    display: block;
    margin: 5px;
    padding: 5px;
    min-height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    color: #fff;
    border: 1px solid #fff;
    background: none;
  }
`;

class ScaleControl extends React.Component {
  // create the object and init the state
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScaleControlContainer>
        <button onClick={this.props.clickAction}>+</button>
        <p>Scale</p>
        <button onClick={this.props.clickAction}>+</button>
      </ScaleControlContainer>
    );
  }
}

export default ScaleControl;
