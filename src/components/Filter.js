import styled from "styled-components";

const StyledFilter = styled.div`
	.searchBtn {
		margin-left	: 7px;
	}
`

function Filter() {
	return (
		<StyledFilter>
			<select>
				<option>공항이름</option>
				<option>공항코드</option>
				<option>나라이름</option>
			</select>
			<input type="text" placeholder="공항코드 또는 공항이름을 입력해주세요." size="35"></input>
			<button className="searchBtn">검색</button>
		</StyledFilter>
	);
};

export default Filter;