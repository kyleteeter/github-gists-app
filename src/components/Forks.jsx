import styled from "styled-components";

const ForksWrapper = styled.div`
  padding: 2em 0.5em;
  @media (max-width: 1017px) {
    padding: 1.5em;
  }
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export function Forks({ forks }) {
  return (
    <ForksWrapper>
      {Object.values(forks).map((fork) => {
        return (
          <>
            {console.log(fork)}
            <a href={fork.html_url} target='_blank'>
              <Avatar
                key={fork.id}
                src={fork.owner.avatar_url}
                alt={fork.owner.login}
              />
            </a>
          </>
        );
      })}
    </ForksWrapper>
  );
}
