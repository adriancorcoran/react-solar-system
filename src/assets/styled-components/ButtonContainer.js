import styled from "styled-components";

const ButtonContainer = styled.div`
  display: block;
  text-align: center;
  z-index: 9998;
  opacity: 0.1;
  position: absolute;
  top: calc(50% - 20px);
  animation: fadeOut 1s linear;

  &:hover {
    animation: fadeIn 1s linear both;
  }

  & button {
    display: block;
    margin: 10px;
    padding: 5px;
    min-height: 20px;
    color: #fff;
    font-size: 1em;
    font-family: Arial, Helvetica, sans-serif;
    border: 2px solid #fff;
    background: none;
  }

  @keyframes fadeIn {
    from {
      opacity: 0.1;
    }
    to {
      opacity: 0.5;
    }
  }
  @keyframes fadeOut {
    from {
      opacity: 0.5;
    }
    to {
      opacity: 0.1;
    }
  }
`;

export default ButtonContainer;
