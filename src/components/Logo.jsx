import React from "react";
import styled from "styled-components";
import logo from "../assets/github-logo.png";

const LogoWrapper = styled.div`
  padding-top: 5px;
  margin-right: 0.5em;
  display: flex;
`;

const Logo = styled.img``;

const LogoText = styled.div`
  font-size: 2.7em;
  font-family: "Asap", sans-serif;
`;

export default function LogoSection() {
  return (
    <LogoWrapper>
      <Logo src={logo} alt='Logo' width='45' height='45' />{" "}
      <LogoText>&nbsp;GitHub Gists</LogoText>
    </LogoWrapper>
  );
}
