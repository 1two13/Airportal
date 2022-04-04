import { useState } from "react";
import styled from "styled-components";

const StyledFilter = styled.form`
	display: flex;
	justify-content: space-around;
	height: 38px;
	
	* {
		border: none;
		border-radius: 5px;
		outline-color: #8aacc8;
		color: rgb(121, 121, 121);
		background-color: #fafafa;
		cursor: pointer;
	}

	input {
		margin-left: 7px;
		margin-right: 7px;
		flex-grow: 3;
	}
	
	button {
		flex-grow: 0.7;
		background-color: #8aacc8;
		color: white;
		font-size: 15px;
		transition: all 0.9s, color 1;

		&:hover{ 
			background-color: #82b3c9;
		}
	}
`

function Filter({onSubmitHandler}) {
	// input 상태값
	const [query, setQuery] = useState("");

	const queryHandler = (event) => {
		setQuery(event.target.value);
	};
	
	return (
		<StyledFilter onSubmit={(event) => {
			event.preventDefault();
			onSubmitHandler(query);
			setQuery("");
		}}>
			<input 
				onChange={queryHandler}
				value={query}
				type="text"
				placeholder="공항코드 / 공항명 / 나라 / 위치 을(를) 입력해주세요." 
				size="35"
			></input>
			<button>검색</button>
		</StyledFilter>
	);
};

export default Filter;