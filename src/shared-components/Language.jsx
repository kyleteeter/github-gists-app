import styled from "styled-components";

export const Language = styled.div`
  background: ${(props) => (props.primary ? "#F55245" : "#315563")};
  color: white;
  text-decoration: none;
  font-size: 1em;
  margin-left: 1em;
  padding: .25em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size:0.75em;
  @media (max-width: 1017px) {
    margin-left: 0.5em;
  }
`;
