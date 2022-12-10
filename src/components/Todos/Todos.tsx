import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../store/store';
import { Card } from '../UI/Card';
import { NewTodoForm } from './NewTodoForm/NewTodoForm';
import { TodoItem } from './TodoItem/TodoItem';

const TodoHeader = styled.div`
  text-align: left;
  background:#61dafb;
  color: white;
  width: 100%;
  padding: .5rem 0;
  text-indent: 1rem;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
`;


export const Todos = () => {
  const todos = useSelector((state: RootState) => state.todo.todos);

  return (
    <Card>
      <TodoHeader className="todo-header"><h3>ToDo app</h3></TodoHeader>
      <div className="todo-body">
        <NewTodoForm />
        <div className="todos">
          {todos.map(item => (
            <TodoItem todo={item} key={item.id} />
          ))}
        </div>
      </div>
    </Card>
  );
};
