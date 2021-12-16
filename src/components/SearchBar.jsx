import React from "react";
import styled from "styled-components";

const SearchContainer = styled.section`
  padding: 4em;
  background: lightgray;
`;

const Button = styled.button`
  background: ${(props) => (props.primary ? "#2EA44E" : "#CB4449"  )};
  color: white;
  font-size: 1em;
  margin: .5em;
  padding: .75em 1.25em;
  border: none;
  border-radius: 3px;
`;

export default function SearchBar() {
  return (
    <SearchContainer>
      Search
      <Button primary>Get Gists</Button>
      <Button>Reset</Button>
      Logo
    </SearchContainer>
  );
}
