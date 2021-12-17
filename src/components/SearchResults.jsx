import React from "react";
import styled from "styled-components";

const SearchResultsWrapper = styled.div`
  padding: 2em 4.5em;
`;

export default function SearchResults() {
  return (
    <SearchResultsWrapper>
      No gists found. Try searching by a username.
    </SearchResultsWrapper>
  );
}
