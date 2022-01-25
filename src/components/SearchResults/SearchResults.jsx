import { useState } from "react";
import styled from "styled-components";
import { CardTop, Files, Forks } from ".";
import { HorizontalDivide } from "../../shared-components";

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
  const [forks, setForks] = useState({});
  const [activeGistId, setActiveGistId] = useState("");

  const getForks = (url, id) => {
    setActiveGistId(id);
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setForks((prevState) => ({
          ...prevState,
          [id]: response,
        }));
        // setForks(prevState => forks{ ...prevState.forks, [activeGistId], forks })
        console.log("forks", forks);
      });
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
            <CardTop
              gist={gist}
              getForks={getForks}
              activeGistId={activeGistId}
            />
            <HorizontalDivide />
            <Files files={gist.files} id={gist.id} />
            <Forks forks={forks} activeGistId={activeGistId} />
          </Card>
        ))}
      </>
    </SearchResultsWrapper>
  );
}
