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
`;

const H3 = styled.h3`
  font-weight: normal;
  max-width: 60%;
`;



export function CardTop({ gist, getForks, removeFork, activeGistId }) {
  const [click, setClick] = useState(0);

  const handleClick = (forks_url, id) => {
    if (!click) {
      getForks(forks_url, id)
      setClick(1);
    }
    if (click) {
      removeFork(id)
      setClick(0);
    }
  };

  return (
    <CardSection>
      <H3>{gist.description || "No Description"} </H3>
      <CardTopLinks>
        <ButtonLink
          primary
          key={`forks${gist.id}`}
          style={{ margin: "0.75em 1em" }}
          onClick={() => handleClick(gist.forks_url, gist.id)}
        >
          {(click) ? "Close Forks" : "Open Forks" }
        </ButtonLink>
        <a href={gist.html_url} target='_blank' rel='noreferrer'>
          <Icon src={linkImg} alt='Link Chain Icon' />
        </a>
      </CardTopLinks>
    </CardSection>
  );
}
