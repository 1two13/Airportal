import { useState } from 'react';
import styled from 'styled-components';

function SearchBar({ onSubmitHandler, initialQuery = '' }) {
  const [query, setQuery] = useState(initialQuery);
  const queryHandler = (event) => {
    setQuery(event.target.value);
  };

  return (
    <Filter
      onSubmit={(event) => {
        event.preventDefault();
        onSubmitHandler(query);
      }}
    >
      <Input
        onChange={queryHandler}
        value={query}
        type="text"
        placeholder="공항코드 / 공항명 / 나라 / 위치 을(를) 입력해주세요."
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
  top: 0px;
  padding: 5px 0;
  background-color: white;
  * {
    border: none;
    border-radius: 5px;
    outline-color: #baddf9;
    color: rgb(121, 121, 121);
    background-color: #fafafa;
    cursor: pointer;
  }
`;

const Input = styled.input`
  margin-right: 7px;
  flex-grow: 3;
  top: 0px;
  padding-left: 1%;
`;

const Button = styled.button`
  flex-grow: 0.7;
  background-color: #8aacc8;
  color: white;
  font-size: 15px;
  transition: all 0.9s, color 1;
  top: 0px;
  &:hover {
    background-color: #82b3c9;
  }
`;
