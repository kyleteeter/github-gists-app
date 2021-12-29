import React from "react";
import styled from "styled-components";
import { SearchBar, SearchResults } from "./components";

const Wrapper = styled.section`
  padding: 4em;
  @media (max-width: 1017px) {
    padding: 1em;
  }
`;

const HorizontalDivide = styled.hr`
  margin: 0em 4.5em;
  @media (max-width: 1017px) {
    margin: 0em 1.5em;
  }
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gists: [],
    };
  }

  getGists = (username) => {
    fetch(`https://api.github.com/users/${username}/gists`)
      .then((response) => response.json())
      .then((gistList) => {
        this.setState({ gists: gistList });
        console.log(this.state.gists);
      });
  };

  render() {
    return (
      <Wrapper>
        <SearchBar getGists={this.getGists} />
        <HorizontalDivide />
        <SearchResults />
        <ul>
          {this.state.gists.map((gist) => (
            <li key={gist.id}>
              {gist.id} {gist.url}
            </li>
          ))}
        </ul>
      </Wrapper>
    );
  }
}

export default App;
