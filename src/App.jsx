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
      isLoaded: false,
      error: null,
    };
  }

  getGists = (username) => {
    fetch(`https://api.github.com/users/${username}/gists`)
      .then((response) => response.json())
      .then(
        (gists) => {
          if (gists.length === 0){
            this.setState({
              isLoaded: false,
            });
          } else{
          this.setState({
            isLoaded: true,
            gists: gists,
          })}
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  };

  updateLoad = () => {
    this.setState({
      isLoaded: false
    })
  }

  render() {
    const { error, isLoaded, gists } = this.state;
    return (
      <Wrapper>
        <SearchBar isLoaded={isLoaded} getGists={this.getGists} updateLoad={this.updateLoad} />
        <HorizontalDivide />
        <SearchResults error={error} isLoaded={isLoaded} gists={gists} />
      </Wrapper>
    );
  }
}

export default App;
