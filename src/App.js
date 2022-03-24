import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const animation = keyframes`
from {
  transform: rotate(0deg);
}
to{
  transform: rotate(360deg);
  border-radius: 50%;
}

`;
const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: ${(props) => props.theme.backgroundColor};
  display: felx;
  justify-content: center;
  align-items: center;
  &:hover {
    transform: scale(1.1);
  }
  span {
    color: ${(props) => props.theme.textColor};
    font-size: 36px;
    &:hover {
      font-size: 50px;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <span>Hello</span>
      </Box>
    </Wrapper>
  );
}

export default App;
