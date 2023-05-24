import React, { useState } from 'react';
import { reset } from 'styled-reset';
import styled, { createGlobalStyle } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import SearchBar from './components/SearchBar';
import Loading from './components/Loading';
import AirportList from './components/AirportList';
import ItemBar from './components/ItemBar';
import { search } from './api/api';
import { ReactComponent as Top } from './assets/top.svg';

function App() {
  const [loading, setLoading] = useState(false);
  const searchParams = window.location.search;
  const query = queryString.parse(searchParams);
  const [data, setData] = useState(search(query.keyword || ''));
  const navigate = useNavigate();

  const onSubmitHandler = (keyWord, selected) => {
    const result = search(keyWord, selected);

    if (keyWord === '') navigate(`/`);
    else navigate(`/?keyword=${keyWord}`);
    setData(result);
  };

  const handleScroll = () => {
    if (!window.scrollY) return;
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <React.Fragment>
      <GlobalStyles />
      <Application>
        <SearchBar onSubmitHandler={onSubmitHandler} initialQuery={query.keyword || ''} />
        <ItemBar />
        <TopBtn onClick={handleScroll}>
          <Top />
        </TopBtn>
        {loading ? <Loading /> : <AirportList data={data} />}
      </Application>
    </React.Fragment>
  );
}

export default App;

const GlobalStyles = createGlobalStyle`
  ${reset}  
`;

const Application = styled.div`
  max-width: 800px;
  width: 80%;
  margin: auto;
`;

const TopBtn = styled.div`
  position: fixed;
  bottom: 58px;
  z-index: 99;
  cursor: pointer;
  // 1000px 이상일 때
  left: calc(50vw + 340px);
  // 1000px 미만일 때
  @media (max-width: 1000px) {
    left: calc(90vw - 65px);
  }

  svg {
    position: absolute;
    border-radius: 10px;
    background-color: #8aacc8;
    color: rgb(121, 121, 121);
  }
`;
