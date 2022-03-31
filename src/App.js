import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import Loading from "./components/Loading";

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
	
	const onSubmitHandler = (filter, query) => {
		// fetch로 검색하고 공항 배열 상태 변경
		console.log(filter, query)
	};
	
  return (
		<div className="App">
			<Filter onSubmitHandler={onSubmitHandler}/>
			{loading ? <Loading /> : data !== [] && data.map((el, id) => {
				return (
					<div key={id}>
						<div>{el.IATA}</div>
						<div>{el.country}</div>
						<div>{el.korean}</div>
						<div>{el.english}</div>
					</div>
				)}
			)}
			
			{/* 데이터가 잘 들어왔을 때 화면에 보여줄 데이터 */}
			{data !== [] && data.map((el, id) => {
				return (
					<div key={id}>
						<div>{el.IATA}</div>
						<div>{el.country}</div>
						<div>{el.korean}</div>
						<div>{el.english}</div>
					</div>
				)}
			)}
    </div> 
  );
}

export default App;
