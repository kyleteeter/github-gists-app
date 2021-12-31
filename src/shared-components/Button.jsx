import styled from "styled-components";

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  background: ${(props) => (props.primary ? "#2EA44E" : "#CB4449")};
  color: white;
  font-size: 1em;
  margin: 0.5em;
  padding: 0.75em 1.25em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  @media (max-width: 1017px) {
    font-size: 0.75em;
    margin: 0.5em;
    padding: 0.25em 1em;
  }
`;

export const ButtonLink = styled.a`
  background:#2EA44E;
  color: white;
  text-decoration:none;
  font-size: 1em;
  margin: 0.75em;
  padding: 0.5em 1.0em 0em 1em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  @media (max-width: 1017px) {
    font-size: 0.75em;
    margin: 0.5em;
    padding: 0.25em 1em;
  }
`;

export const FileLink = styled.a`
  text-decoration:none;
  margin-left:5px;
  color:black;
`;