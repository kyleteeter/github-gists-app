import { useState } from "react";
import styled from "styled-components";
import { CardTop, Files, Forks } from ".";
import { HorizontalDivide } from "../shared-components";

const SearchResultsWrapper = styled.div`
  padding: 2em 0.5em;
  @media (max-width: 1017px) {
    padding: 1.5em;
  }
`;

const Card = styled.div`
  padding: 1.5em 1.5em;
  border: 2px solid #f1f1f1;
  border-radius: 5px;
  margin-bottom: 1em;
  @media (max-width: 1017px) {
    padding: 0.5em;
  }
`;



export function SearchResults({ error, isLoaded, gists }) {
  const [forks, setForks] = useState("");

  const getForks = (url) => {
    if (!forks) {
      fetch(url)
        .then((response) => response.json())
        .then((forks) => {
          setForks(forks);
        });
    } else {
      setForks("");
    }
  };

  if (error) {
    return <SearchResultsWrapper>Error: {error.message}</SearchResultsWrapper>;
  }
  if (isLoaded === false) {
    return <SearchResultsWrapper>No Results</SearchResultsWrapper>;
  }

  return (
    <SearchResultsWrapper>
      <>
        {gists.map((gist) => (
          <Card key={gist.id}>
            <CardTop gist={gist} getForks={getForks} />
            <HorizontalDivide />
            <Files files={gist.files} gistid={gist.id} />
            <Forks forks={forks} />
          </Card>
        ))}
      </>
    </SearchResultsWrapper>
  );
}
