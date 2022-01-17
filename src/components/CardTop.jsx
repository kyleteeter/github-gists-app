import styled from "styled-components";
import { linkImg } from "../assets/";
import { ButtonLink, Icon } from "../shared-components";

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

export function CardTop ({ gist, getForks }) {
  return (
    <CardSection>
      <H3>{gist.description || "No Description"} </H3>
      <CardTopLinks>
        <ButtonLink
          primary
          key={`forks${gist.id}`}
          style={{ margin: "0.75em 1em" }}
          onClick={() => getForks(gist.forks_url)}
        >
          Open Forks
        </ButtonLink>
        <a href={gist.html_url} target='_blank' rel='noreferrer'>
          <Icon src={linkImg} alt='Link Chain Icon' />
        </a>
      </CardTopLinks>
    </CardSection>
  );
}
