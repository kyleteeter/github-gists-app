import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  background: ${(props) => (props.primary ? "#2EA44E" : "#CB4449")};
  color: white;
  font-size: 1em;
  margin: 0.5em;
  padding: 0.75em 1.25em;
  border: none;
  border-radius: 5px;
  @media (max-width: 1017px) {
    font-size: 0.75em;
    margin: 0.5em;
    padding: 0.25em 1em;
  }
`;

export default function SearchButtons() {
  return (
    <ButtonWrapper>
      <Button primary type='submit'>
        Get Gists
      </Button>
      <Button>Reset</Button>
    </ButtonWrapper>
  );
}
