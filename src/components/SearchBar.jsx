import React from "react";
import { useState } from "react/cjs/react.development";
import styled from "styled-components";
import { Logo } from ".";
import { Button, ButtonWrapper } from "../shared-components";

const SearchBarWrapper = styled.div`
  padding: 1em 0.25em;
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
  color: #1d1d1d;
  font-size: 1em;
  margin: 0.5em;
  padding: 0.25em;
  border: 2px solid #f1f1f1;
  border-radius: 5px;
`;

export function SearchBar(props) {
  const [inputValue, setInputValue] = useState("");

  function handleReset(event) {
    event.preventDefault();
    setInputValue("");
    props.clearResults();
  }

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.getGists(inputValue);
  }

  return (
    <SearchBarWrapper>
      <SearchForm>
        <Input
          type='text'
          id='search-username'
          placeholder='Username'
          name='search'
          value={inputValue}
          onChange={handleChange}
        />
        <ButtonWrapper>
          <Button primary onClick={handleSubmit} style={{margin: '0.5em'}}>
            Get Gists
          </Button>
          <Button onClick={handleReset} style={{margin: '0.5em'}}>Reset</Button>
        </ButtonWrapper>
      </SearchForm>
      <Logo />
    </SearchBarWrapper>
  );
}
