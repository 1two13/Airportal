import Filter from "./components/Filter";

function App() {
	// 로딩 상태 값
	// 공항 배열 상태 값

	// useEffect 통해서 최초 로딩시 전체 목록 가져오기 /airport

	const onSubmitHandler = (filter, query) => {
		// fetch로 검색하고 공항 배열 상태 변경
		console.log(filter, query)
	};

  return (
    <div className="App">
			<Filter onSubmitHandler={onSubmitHandler}/>
			{/* 로딩중이냐? */}
			{/* 배열이 비어있냐? */}
    </div> 
  );
}

export default App;
