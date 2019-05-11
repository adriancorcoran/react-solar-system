import React from "react";
import styled from "styled-components";

const Planetoid = styled.div`
  width: 50px;
  height: 50px;
  /* background-color: #2da8ff; */
  background: radial-gradient(circle at 10px 10px, #2da8ff, #000);
  border-radius: 100%;
  box-shadow: 2px 2px 5px 0px #000;
`;

class OrbitingObject extends React.Component {
  render() {
    return <Planetoid />;
  }
}

export default OrbitingObject;
