import styled from "styled-components";

const ButtonContainer = styled.div`
  display: block;
  text-align: center;
  z-index: 9999;
  opacity: 0.1;
  position: absolute;
  /* width: 100%; */
  /* ${props => props.location}: 0; */

  & button {
    display: block;
    margin: 10px;
    padding: 5px;
    min-height: 20px;
    color: #fff;
    font-size: 1em;
    /* font-size: 2em; */
    font-family: Arial, Helvetica, sans-serif;
    border: 2px solid #fff;
    background: none;
      /* padding-bottom: 10px; */
  }
`;

export default ButtonContainer;
