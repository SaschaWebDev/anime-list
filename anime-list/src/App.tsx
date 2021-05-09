import styled from "styled-components";
import { Homepage } from "./app/containers/HomePage";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <AppContainer className="App">
      <Homepage />
    </AppContainer>
  );
}

export default App;
