import styled from "styled-components";

const StyledAirportList = styled.div`
  display: flex;
  margin-top: 2px;
  padding-top: 8px;
  span {
    flex: 1;
    text-align: center;
    height: 25px;
    overflow: hidden;
    text-overflow: ellipsis; // 생략기호(...)를 만들어 준다.
    white-space: nowrap;
  }

  // 홀수번째 자식들에게만 적용되는 CSS
  :nth-child(odd) {
    background-color: #eeffff;
  }
  // 짝수번째 자식들에게만 적용되는 CSS
  :nth-child(even) {
    background-color: #e3f2fd;
  }
`;

function AirportList({ data }) {
  return (
    <div>
      {/* 데이터가 잘 들어왔을 때 화면에 보여줄 데이터 */}
      {data !== [] &&
        data.map((el, id) => {
          return (
            <StyledAirportList key={id}>
              <span>{el.IATA}</span>
              <span>{el.country}</span>
              <span>{el.location}</span>
              <span>{el.korean}</span>
              <span>{el.english}</span>
            </StyledAirportList>
          );
        })}
    </div>
  );
}

export default AirportList;
