import styled from "styled-components";

const ForksWrapper = styled.div`
  padding: 2em 0.5em 1em 0.5em;
  @media (max-width: 1017px) {
    padding: 1.5em;
  }
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export function Forks({ forks, gistId }) {
  if (!forks[gistId]) {
    return <ForksWrapper></ForksWrapper>;
  }

  return (
    <ForksWrapper>
      {Object.values(forks[gistId]).map((fork) => {
        return (
          <a
            href={fork.html_url}
            target='_blank'
            rel='noreferrer'
            key={fork.id}
          >
            <Avatar
              src={fork.owner.avatar_url}
              alt={fork.owner.login}
              style={{ margin: "5px" }}
            />
          </a>
        );
      })}
    </ForksWrapper>
  );
}
