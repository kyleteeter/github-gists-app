import React from "react";
import styled from "styled-components";
import { Logo } from ".";
import { Button, ButtonWrapper } from "../shared-components";

const SearchBarWrapper = styled.div`
  padding: 4em 4em 1em 4em;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1017px) {
    flex-direction: column-reverse;
    padding: 1em;
  }
`;

const SearchForm = styled.form`
  display: flex;
`;

const Input = styled.input`
  color: #959595;
  font-size: 1em;
  margin: 0.5em;
  padding: 0.75em 1.25em;
  border: 1px solid #959595;
  border-radius: 5px;
`;

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: "" };
  }

  handleReset = (event) =>{
    event.preventDefault();
    this.setState({ inputValue: "" });
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.getGists(this.state.inputValue);
  }

  render() {
    return (
      <SearchBarWrapper>
        <SearchForm>
          <Input
            type='text'
            id='search-username'
            placeholder='Username'
            name='search'
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
          <ButtonWrapper>
            <Button primary onClick={this.handleSubmit}>
              Get Gists
            </Button>
            <Button onClick={this.handleReset}>Reset</Button>
          </ButtonWrapper>
        </SearchForm>
        <Logo />
      </SearchBarWrapper>
    );
  }
}
