import styled from "styled-components";
import { linkImg, docImg } from "../assets/";
import { ButtonLink, FileLink, HorizontalDivide } from "../shared-components";

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

const Icon = styled.img`
  width: 1em;
  height: 1em;
`;

const H3 = styled.h3`
  font-weight: normal;
  max-width: 60%;
`;

const H4 = styled.h4`
  font-weight: normal;
`;

function bgColor(language) {
  if (language === "JavaScript") {
    return "#F6695F";
  }
  if (language === "Ruby") {
    return "#305562";
  }
  if (language === "Text") {
    return "darkblue";
  }
  if (language === "Markdown") {
    return "green";
  }
  if (language === "JSON") {
    return "orange";
  } else {
    return "black";
  }
}

const Language = styled.div`
  color: white;
  text-decoration: none;
  font-size: 1em;
  margin-left: 1em;
  padding: 0.25em 0.5em;
  border: none;
  border-radius: 5px;
  font-size: 0.75em;
  @media (max-width: 1017px) {
    margin-left: 0.5em;
  }
`;

export function SearchResults(props) {
  const { error, isLoaded, gists } = props;
  if (error) {
    return <SearchResultsWrapper>Error: {error.message}</SearchResultsWrapper>;
  } else if (isLoaded === false) {
    return <SearchResultsWrapper>No Search Results</SearchResultsWrapper>;
  } else if (isLoaded === null) {
    return <SearchResultsWrapper>No Gists Found</SearchResultsWrapper>;
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
                    style={{ margin: "0.75em 1em" }}
                  >
                    Open Forks
                  </ButtonLink>
                  <a href={gist.html_url} target='_blank' rel='noreferrer'>
                    <Icon src={linkImg} alt='Link Chain Icon' />
                  </a>
                </CardTopLinks>
              </CardTop>
              <HorizontalDivide />
              <H4>Files</H4>
              <>
                {Object.values(gist.files).map((file) => {
                  return (
                    <CardBottom>
                      <Icon src={docImg} alt='Link Chain Icon' />
                      <FileLink
                        href={file.raw_url}
                        key={`file${gist.id}`}
                        target='_blank'
                        rel='noreferrer'
                      >
                        {file.filename}
                      </FileLink>
                      <Language
                        style={{
                          backgroundColor: bgColor(file.language),
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
