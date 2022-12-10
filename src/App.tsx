import styled from 'styled-components';
import { Header } from './components/Header/Header';
import { Todos } from './components/Todos/Todos';

const TodoAppContainer = styled.div`
text-align: center;
color: #61dafb;
display: flex;
flex-direction: column;
align-items: center;
`;

function App() {
  return (
      <TodoAppContainer>
        <Header />
        <Todos />
      </TodoAppContainer>
  );
}

export default App;
