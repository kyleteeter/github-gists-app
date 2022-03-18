import styled from "styled-components";
import { useState } from "react";
import { linkImg } from "../../assets/";
import { ButtonLink, Icon } from "../../shared-components";

const CardSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.25em;
`;

const CardTopLinks = styled.div`
  margin-top: 1em;
  display: flex;
`;

const H3 = styled.h3`
  font-weight: normal;
  max-width: 60%;
`;

export function CardTop({ gist, getForks, removeFork }) {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleClick = (forks_url, id) => {
    if (!isButtonClicked) {
      getForks(forks_url, id);
      setIsButtonClicked(true);
    }
    if (isButtonClicked) {
      removeFork(id);
      setIsButtonClicked(false);
    }
  };

  return (
    <CardSection>
      <H3>{gist.description || "No Description"} </H3>
      <CardTopLinks>
        <ButtonLink
          primary
          key={`forks${gist.id}`}
          style={{ margin: "0em 1em" }}
          onClick={() => handleClick(gist.forks_url, gist.id)}
        >
          {isButtonClicked ? "Close Forks" : "Open Forks"}
        </ButtonLink>
        <a
          href={gist.html_url}
          target='_blank'
          rel='noreferrer'
          style={{ marginTop: "0.5em" }}
        >
          <Icon src={linkImg} alt='Link Chain Icon' />
        </a>
      </CardTopLinks>
    </CardSection>
  );
}
