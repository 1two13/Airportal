import styled from 'styled-components';

function NavBar() {
  return (
    <Nav>
      <span>IATA</span>
      <span>나라</span>
      <span>위치</span>
      <span>공항명(Kr)</span>
      <span>공항명(En)</span>
    </Nav>
  );
}

export default NavBar;

const Nav = styled.div`
  display: flex;
  position: sticky;
  height: 30px;
  top: 48px;
  overflow: hidden;
  white-space: nowrap;
  padding-top: 2px;
  color: rgb(121, 121, 121);
  background-color: #baddf9;
  border-radius: 5px;
  cursor: pointer;
  span {
    flex: 1;
    text-align: center;
    line-height: 30px;
  }
`;
