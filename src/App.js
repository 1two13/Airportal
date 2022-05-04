import { useState } from "react";
import * as React from "react";
import { reset } from "styled-reset";
import styled, { createGlobalStyle } from "styled-components";
import SearchBar from "./components/SearchBar";
import Loading from "./components/Loading";
import AirportList from "./components/AirportList";
import NavBar from "./components/NavBar";
import { getAirportData, search } from "./api/api";

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
  const [data, setData] = useState(getAirportData());
  const onSubmitHandler = (keyWord) => {
    const result = search(keyWord);
    setData(result);
  };
  return (
    <React.Fragment>
      <GlobalStyles />
      <Application>
        <SearchBar onSubmitHandler={onSubmitHandler} />
        <NavBar />
        {loading ? <Loading /> : <AirportList data={data} />}
      </Application>
    </React.Fragment>
  );
}

export default App;
