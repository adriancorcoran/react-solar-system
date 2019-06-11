import React from "react";
import styled from "styled-components";

const FooterText = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
  color: #fff;
  text-align: right;
  font-family: "lato", sans-serif;
  font-weight: 300;
  font-size: 1em;
  letter-spacing: 7px;

  @media only screen and (max-width: 768px) {
    right: 0;
    left: 0;
    bottom: 60px;
    text-align: center;
  }

  a,
  a:hover {
    text-decoration: none;
    display: block;
    cursor: pointer;
  }

  p {
    background: -webkit-linear-gradient(white, #38495a);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 2;
  }

  p:last-of-type {
    font-size: 0.7em;
  }
`;

function Footer() {
  return (
    <FooterText>
      <a
        href="https://github.com/adriancorcoran/react-solar-system"
        title="React Solar System"
      >
        <p>React Solar System</p>
        <p>by Adrian Corcoran</p>
      </a>
    </FooterText>
  );
}

export default Footer;
