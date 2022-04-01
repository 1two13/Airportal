import styled from "styled-components";

const Loader = styled.div`
  border: 10px solid #f3f3f3; 
  border-top: 10px solid #22408E; 
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 2s linear infinite;

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`

function Loading() {
	return(
		<Loader></Loader>
	)
}

export default Loading;
