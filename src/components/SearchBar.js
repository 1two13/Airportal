import { useEffect, useState } from 'react';
import Select from 'react-select';
import styled from 'styled-components';

import {
  ALL,
  IATA,
  COUNTRY,
  LOCATION,
  AIRPORT_NAME,
  SEARCHBAR_PLACEHOLDER,
} from '../static/constants';

function SearchBar({ onSubmitHandler, initialQuery = '' }) {
  const options = [
    { value: ALL, label: ALL },
    { value: IATA, label: IATA },
    { value: COUNTRY, label: COUNTRY },
    { value: LOCATION, label: LOCATION },
    { value: AIRPORT_NAME, label: AIRPORT_NAME },
  ];
  const [query, setQuery] = useState(initialQuery);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  useEffect(() => {
    onSubmitHandler('', ALL);
    setQuery('');
  }, []);

  const changeOptionHandler = (e) => {
    setSelectedOption(e.value);
  };

  const queryHandler = (e) => {
    setQuery(e.target.value);
  };

  return (
    <Filter
      onSubmit={(e) => {
        e.preventDefault();
        onSubmitHandler(query, selectedOption);
      }}
    >
      <StyledSelect
        options={options}
        defaultValue={options[0]}
        onChange={(e) => changeOptionHandler(e)}
      />
      <Input
        onChange={queryHandler}
        value={query}
        type="text"
        placeholder={SEARCHBAR_PLACEHOLDER}
        size="35"
      ></Input>
      <Button>검색</Button>
    </Filter>
  );
}

export default SearchBar;

const Filter = styled.form`
  display: flex;
  justify-content: space-evenly;
  height: 38px;
  position: sticky;
  z-index: 99;
  padding: 5px 0;
  background-color: white;
  top: 0px;
  * {
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }
`;

const StyledSelect = styled(Select)`
  width: 15%;
  margin-right: 1%;
  outline-color: #baddf9;
`;

const Input = styled.input`
  margin-right: 7px;
  flex-grow: 3;
  padding-left: 1%;
  outline-color: #baddf9;
  color: rgb(121, 121, 121);
  background-color: #fafafa;
`;

const Button = styled.button`
  flex-grow: 0.7;
  background-color: #8aacc8;
  color: white;
  font-size: 15px;
  transition: all 0.9s, color 1;
  &:hover {
    background-color: #82b3c9;
  }
`;
