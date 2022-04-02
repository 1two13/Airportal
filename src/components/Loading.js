import styled from "styled-components";

const LoaderBackdrop = styled.div`
	position: fixed;
	display: grid; // Loader를 정가운데에 배치할 수 있게 해준다. 
	place-items: center; // Loader를 정가운데에 배치할 수 있게 해준다. 
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgb(0, 0, 0, 0.03);
`

const Loader = styled.div`
  border: 15px solid #efefef;
  border-top: 15px solid #8aacc8;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`

function Loading() {
	return(
		<LoaderBackdrop>
			<Loader></Loader>
		</LoaderBackdrop>
	)
}

export default Loading;
