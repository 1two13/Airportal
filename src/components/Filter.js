import { useState } from "react";
import styled from "styled-components";

const StyledFilter = styled.form`
	.inputBox {
		margin-left: 7px;
		margin-right: 7px;
	}
`

function Filter({onSubmitHandler}) {
	// select 상태값
	const [filter, setFilter] = useState();
	// input 상태값
	const [query, setQuery] = useState();

	const filterHandler = (event) => {
		setFilter(event.target.value)
	}
	const queryHandler = (event) => {
		setQuery(event.target.value);
	};

	return (
		<StyledFilter onSubmit={(event) => {
			event.preventDefault();
			onSubmitHandler(filter, query);
		}}>
			<select onChange={filterHandler}>
				<option value="0">공항이름</option>
				<option value="1">공항코드</option>
				<option value="2">나라이름</option>
			</select>
			<input 
				onChange={queryHandler}
				className="inputBox"
				type="text"
				placeholder="공항코드 또는 공항이름을 입력해주세요." 
				size="35"
			></input>
			<button>검색</button>
		</StyledFilter>
	);
};

export default Filter;