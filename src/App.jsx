import React from "react";
import "./App.css";
import styled from "styled-components";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";

const Wrapper = styled.section`
  padding: 4em;
  @media (max-width: 1017px) {
    padding: 1em;
  }
`;

const HorizontalDivide = styled.hr`
  margin: 0em 4.5em;
  @media (max-width: 1017px) {
    margin: 0em 1.5em;
  }
`;

function App() {
  return (
    <Wrapper>
      <SearchBar />
      <HorizontalDivide />
      <SearchResults />
    </Wrapper>
  );
}

export default App;
