import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faLink } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styled from "styled-components";
import {
  ButtonLink,
  FileLink,
  HorizontalDivide,
  Language,
} from "../shared-components";

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

const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.25em;
`;

const CardTopLinks = styled.div`
  margin-top: 1em;
`;

const CardBottom = styled.div`
  display: flex;
  margin: 0.25em;
`;

const H3 = styled.h3`
  font-weight: normal;
  max-width: 60%;
`;

const H4 = styled.h4`
  font-weight: normal;
`;

export function SearchResults(props) {
  const { error, isLoaded, gists } = props;
  if (error) {
    return <SearchResultsWrapper>Error: {error.message}</SearchResultsWrapper>;
  } else if (!isLoaded) {
    return <SearchResultsWrapper>No Search Results </SearchResultsWrapper>;
  } else {
    return (
      <SearchResultsWrapper>
        <>
          {gists.map((gist) => (
            <Card key={gist.id}>
              <CardTop>
                <H3>{gist.description || "No Description"} </H3>
                <CardTopLinks>
                  <ButtonLink
                    primary
                    href={gist.forks_url}
                    target='_blank'
                    rel='noreferrer'
                  >
                    Open Forks
                  </ButtonLink>
                  <a href={gist.html_url} target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon color='#2EA44E' icon={faLink} />
                  </a>
                </CardTopLinks>
              </CardTop>
              <HorizontalDivide />
              <H4>Files</H4>
              <>
                {Object.values(gist.files).map((file, index) => {
                  return (
                    <CardBottom>
                      <FontAwesomeIcon color='#CCCCCC' icon={faFile} />
                      <FileLink
                        href={file.raw_url}
                        key={index}
                        target='_blank'
                        rel='noreferrer'
                      >
                        {file.filename}
                      </FileLink>
                      <Language
                        style={{
                          backgroundColor:
                            file.language === "JavaScript"
                              ? "#F55245"
                              : "#315563",
                        }}
                      >
                        {file.language || "No Language Detected"}
                      </Language>
                    </CardBottom>
                  );
                })}
              </>
            </Card>
          ))}
        </>
      </SearchResultsWrapper>
    );
  }
}
