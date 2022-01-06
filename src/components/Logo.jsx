import React from "react";
import styled from "styled-components";
import { logoImg } from "../assets/";

const LogoWrapper = styled.div`
  padding-top: 0.3em;
  margin-right: 0.5em;
  display: flex;
  @media (max-width: 1017px) {
    padding-bottom: 1em;
  }
`;

const LogoImg = styled.img`
  width: 2.8em;
  height: 2.8em;
  @media (max-width: 1017px) {
    width: 2em;
    height: 2em;
  }
`;

const LogoText = styled.div`
  font-size: 2.7em;
  font-family: "Asap", sans-serif;
  @media (max-width: 1017px) {
    font-size: 1.7em;
  }
`;

export function Logo() {
  return (
    <LogoWrapper>
      <LogoImg src={logoImg} alt='Logo' /> <LogoText>&nbsp;GitHub Gists</LogoText>
    </LogoWrapper>
  );
}
