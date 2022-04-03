import { useState } from "react";
import styled from "styled-components";

const StyledFilter = styled.form`
	display: flex;
	justify-content: space-around;
	height: 38px;
	margin-bottom: 10px;
	
	* {
		border: none;
		border-radius: 5px;
		outline-color: #baddf9;
		color: rgb(121, 121, 121);
		background-color: #fafafa;
		cursor: pointer;
	}

	select {
		width: 150px;
		flex-grow: 0.5;
	}

	input {
		margin-left: 7px;
		margin-right: 7px;
		flex-grow: 3;
	}
	
	button {
		flex-grow: 0.5;
		background-color: #baddf9;
	}
`

function Filter({onSubmitHandler}) {
	// select 상태값
	const [filter, setFilter] = useState("0");
	// input 상태값
	const [query, setQuery] = useState("");

	const filterHandler = (event) => {
		setFilter(event.target.value);
	}
	const queryHandler = (event) => {
		setQuery(event.target.value);
	};
	
	return (
		<StyledFilter onSubmit={(event) => {
			event.preventDefault();
			onSubmitHandler(filter, query);
			setQuery("");
		}}>
			<select onChange={filterHandler}>
				<option value="0">공항코드</option>
				<option value="1">나라</option>
				<option value="2">위치</option>
				<option value="3">공항이름</option>
			</select>
			<input 
				onChange={queryHandler}
				value={query}
				type="text"
				placeholder="공항코드 또는 공항이름을 입력해주세요." 
				size="35"
			></input>
			<button>검색</button>
		</StyledFilter>
	);
};

export default Filter;