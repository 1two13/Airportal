import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchBar from "./components/SearchBar";
import Loading from "./components/Loading";
import AirportList from "./components/AirportList";
import NavBar from "./components/NavBar";

const Application = styled.div`
	max-width: 800;
	width: 75%; 
	margin: auto;
`;

function App() {
	// 로딩 상태 값 
	const [loading, setLoading] = useState(true);
	// 공항 배열 상태 값
	const [data, setData] = useState([]);
	// 최초 로딩시 전체 목록 가져오기 /airport
	useEffect(() => {
		fetch('http://localhost:8080/airport')
		.then((res) => res.json()) 
		// 성공했을 때 setData 
		.then((data) => setData(data))
		.catch((error) => console.log(error))
		.finally(() => setLoading(false))
	}, []);
	
	const onSubmitHandler = (query) => {
		fetch(`http://localhost:8080/search/?query=${query}`)
		.then((res) => res.json()) 
		.then((data) => setData(data))
		.catch((error) => console.log(error))
		.finally(() => setLoading(false))		
	};
	
  return (
		<Application>
			<SearchBar onSubmitHandler={onSubmitHandler}/>
			<NavBar />
			{loading ? <Loading /> : <AirportList data={data} />}
    </Application> 
  );
}

export default App;
