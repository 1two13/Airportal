import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import Loading from "./components/Loading";
import AirportList from "./components/AirportList";

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
	
	// 주소에 따라 데이터가 달라지는 함수 
	const onSubmitHandler = (filter, query) => {
		console.log(filter, query)
		// filter 가 0일 때 => fetch 로 다른 주소 가져오기
		fetch(`http://localhost:8080/search/code?code=${query}`)
		.then((res) => res.json()) 
		.then((data) => {
			if(filter === "0") return setData(data)
		})
		.catch((error) => console.log(error))
		.finally(() => setLoading(false))
		// filter 가 1일 때 
		fetch(`http://localhost:8080/search/country?country=${query}`)
		.then((res) => res.json()) 
		.then((data) => {
			if(filter === "1") return setData(data)
		})
		.catch((error) => console.log(error))
		.finally(() => setLoading(false))
		// filter 가 2일 때 
		fetch(`http://localhost:8080/search/location?location=${query}`)
		.then((res) => res.json()) 
		.then((data) => {
			if(filter === "2") return setData(data)
		})
		.catch((error) => console.log(error))
		.finally(() => setLoading(false))
		// filter 가 3일 때 
		fetch(`http://localhost:8080/search/name?name=${query}`)
		.then((res) => res.json()) 
		.then((data) => {
			if(filter === "3") return setData(data)
		})
		.catch((error) => console.log(error))
		.finally(() => setLoading(false))
	};
	
  return (
		<div className="App">
			<Filter onSubmitHandler={onSubmitHandler}/>
			{loading ? <Loading /> : <AirportList data={data} />}
    </div> 
  );
}

export default App;
