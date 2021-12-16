import React from 'react';
import './App.css';
import styled from "styled-components";
import SearchBar from './components/SearchBar';

const Wrapper = styled.section`
  padding: 4em;
`;

function App() {
  return (
    <Wrapper>
      <SearchBar />
    </Wrapper>
  );
}

export default App;
