import React from "react";
import styled from "styled-components";

const SearchResultsWrapper = styled.div`
  padding: 2em 4.5em;
  @media (max-width: 1017px) {
    padding: 1.5em;
  }
`;

 export function SearchResults(props) {
  return (
    <SearchResultsWrapper>
      <div>
          {props.gists.map((gist) => (
            <div key={gist.id}>
              
              <div>{(gist.description) || 'No Description'} </div>
              <a href={gist.forks_url} target="_blank" rel="noreferrer">Open Forks</a>
              <p>Files:</p>
              <ul>
                {Object.values(gist.files).map((file, index) => {
                  return (
                    <li key={index}>
                      <a href={file.raw_url} target="_blank" rel="noreferrer">
                        {file.filename}
                      </a>
                      <div>{file.language}</div>
                    </li>
                  );
                })}
              </ul>

            </div>
          ))}
        </div>
    </SearchResultsWrapper>
  );
}
