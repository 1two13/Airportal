import { useState } from "react";
import * as React from "react";
import { reset } from "styled-reset";
import styled, { createGlobalStyle } from "styled-components";
import SearchBar from "./components/SearchBar";
import Loading from "./components/Loading";
import AirportList from "./components/AirportList";
import ItemBar from "./components/ItemBar";
import { search } from "./api/api";
import { useNavigate } from "react-router-dom";
import queryString from "query-string";
import { ReactComponent as Top } from "./assets/top.svg";

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

function App() {
  const [loading, setLoading] = useState(false);
  const searchParams = window.location.search; // URL 쿼리 문자열
  const query = queryString.parse(searchParams);
  const [data, setData] = useState(search(query.keyword || ""));
  const navigate = useNavigate();
  const onSubmitHandler = (keyWord) => {
    const result = search(keyWord);
    if (keyWord === "") navigate(`/`);
    else navigate(`/?keyword=${keyWord}`);
    setData(result);
  };
  const handleScroll = () => {
    // 현재 위치가 이미 최상단일 경우 return
    if (!window.scrollY) return;
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <React.Fragment>
      <GlobalStyles />
      <Application>
        <SearchBar
          onSubmitHandler={onSubmitHandler}
          initialQuery={query.keyword || ""}
        />
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
