import styled from "styled-components";

const Nav= styled.div`
	display: flex;
	position: sticky; // 원래 있어야 하는 자리 유지 + 스크롤해도 없어지지 않고 자리 유지
	top: 0;
	white-space: nowrap;

	justify-content: space-around;
	align-items: center;
	height: 25px;
	margin-top: 2px;
	padding: 3px;
	color: rgb(121, 121, 121);
	background-color: #baddf9;
	border-radius: 5px;
	cursor: pointer;
`;

function NavBar() {
	return (
		<Nav>
			<span>IATA</span>
			<span>나라</span>
			<span>위치</span>
			<span>공항명(Kr)</span>
			<span>공항명(En)</span>
		</Nav>
	)
}

export default NavBar;