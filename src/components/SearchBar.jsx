import React from "react";
import styled from "styled-components";
import SearchButtons from "./Button";
import LogoSection from "./Logo";

const SearchBarWrapper = styled.div`
  padding: 4em 4em 1em 4em;
  display: flex;
  justify-content: space-between;
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

export default function SearchBar() {
  return (
    <SearchBarWrapper>
      <SearchForm action='/' method='get'>
        <Input
          type='text'
          id='search-username'
          placeholder='Username'
          name='search'
        />
        <SearchButtons />
      </SearchForm>
      <LogoSection />
    </SearchBarWrapper>
  );
}
