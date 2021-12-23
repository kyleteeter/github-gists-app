import React from "react";
import styled from "styled-components";

const SearchResultsWrapper = styled.div`
  padding: 2em 4.5em;
  @media (max-width: 1017px) {
    padding: 1.5em;
  }
`;

export function SearchResults() {
  return (
    <SearchResultsWrapper>
      No gists found. Try searching by a username.
    </SearchResultsWrapper>
  );
}
