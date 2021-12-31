import React from "react";
import styled from "styled-components";
import { SearchBar, SearchResults } from "./components";
import { HorizontalDivide } from "./shared-components";

const Wrapper = styled.section`
  margin: 4.5em;
  @media (max-width: 1017px) {
    margin: 1em;
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
      .then((gists) => {
        this.setState({ gists: gists });
        console.log(this.state.gists);
      });
  };

  render() {
    return (
      <Wrapper>
        <SearchBar getGists={this.getGists} />
        <HorizontalDivide />
        <SearchResults gists={this.state.gists}/>
      </Wrapper>
    );
  }
}

export default App;
