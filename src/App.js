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

const GlobalStyles = createGlobalStyle`
  ${reset}  
`;

const Application = styled.div`
  max-width: 800;
  width: 75%;
  margin: auto;
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
  return (
    <React.Fragment>
      <GlobalStyles />
      <Application>
        <SearchBar
          onSubmitHandler={onSubmitHandler}
          initialQuery={query.keyword || ""}
        />
        <ItemBar />
        {loading ? <Loading /> : <AirportList data={data} />}
      </Application>
    </React.Fragment>
  );
}

export default App;
