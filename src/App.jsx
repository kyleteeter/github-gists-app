import { useState } from "react";
import styled from "styled-components";
import { SearchBar } from "./components";
import { SearchResults } from "./components";
import { HorizontalDivide } from "./shared-components";
import './assets/css/fonts.css';

const Wrapper = styled.section`
  font-family: "Roboto Condensed", sans-serif;
  margin: 4.5em;
  @media (max-width: 1017px) {
    margin: 1em;
  }
`;

export function App() {
  const [gists, setGists] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState("");

  const getGists = (username) => {
    fetch(`https://api.github.com/users/${username}/gists`)
      .then((response) => response.json())
      .then(
        (gists) => {
          if (gists.length === 0) {
            setIsLoaded(false);
          } else {
            setIsLoaded(true);
            setGists(gists);
          }
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }

  const clearResults = () => {
    setGists([]);
  }

  return (
    <Wrapper>
      <SearchBar
        isLoaded={isLoaded}
        getGists={getGists}
        clearResults={clearResults}
      />
      <HorizontalDivide />
      <SearchResults error={error} isLoaded={isLoaded} gists={gists} />
    </Wrapper>
  );
}
