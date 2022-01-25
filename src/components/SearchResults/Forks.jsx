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

export function Forks({ forks, activeGistId }) {

  if (forks[activeGistId].length === 0) {
    return <ForksWrapper>No Forks</ForksWrapper>;
  }

  return (
    <ForksWrapper>
      {if ()}
          {Object.values(forks[activeGistId]).map((fork) => {
            return (
                <a href={fork.html_url} target='_blank' rel='noreferrer' key={activeGistId}>
                  {console.log('avatar', fork.owner.avatar_url)}
                  <Avatar
                    src={fork.owner.avatar_url}
                    alt={fork.owner.login}
                  />
                </a>
            );
          })}
  
    </ForksWrapper>
  );
}
