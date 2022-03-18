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

export function Forks({ data }) {
  if (!data) { return <ForksWrapper></ForksWrapper>; }
  if (!data.length) { return <ForksWrapper>No Forks</ForksWrapper>; }

  return (
    <ForksWrapper>
      <a href={data.html_url} target='_blank' rel='noreferrer' key={data.id}>
        {data.map(function (data) {
          return (
            <Avatar
              src={data.owner.avatar_url}
              alt={data.owner.login}
              style={{ margin: "5px" }}
              key={data.id}
            />
          );
        })}
      </a>
    </ForksWrapper>
  );
}
