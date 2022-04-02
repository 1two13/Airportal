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
	
	// 주소에 따라 내용이 달라지는 함수 (13-18)
	const onSubmitHandler = (filter, query) => {
		console.log(filter, query)
		// filter 가 0일 때 => fetch 로 다른 주소 가져오기
		// filter 가 1일 때 
		// filter 가 2일 때 
		// filter 가 3일 때 
	};
	
  return (
		<div className="App">
			<Filter onSubmitHandler={onSubmitHandler}/>
			{loading ? <Loading /> : <AirportList data={data} />}
    </div> 
  );
}

export default App;
