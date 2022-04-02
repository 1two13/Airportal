function AirportList({data}) {
  return (			
		<div>
			{/* 데이터가 잘 들어왔을 때 화면에 보여줄 데이터 */}
			{data !== [] && data.map((el, id) => {
				return (
					<div key={id}>
						<span>{el.IATA}</span>
						<span>{el.country}</span>
						<span>{el.location}</span>
						<span>{el.korean}</span>
						<span>{el.english}</span>
					</div>
				)}
			)}
    </div> 
  );
}

export default AirportList;