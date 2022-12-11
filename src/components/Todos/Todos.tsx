import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../store/store';
import { Card } from '../UI/Card';
import { NewTodoForm } from './NewTodoForm/NewTodoForm';
import { TodoItem } from './TodoItem/TodoItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Todo } from '../../types/todoTypes';

const TodoHeader = styled.div`
  text-align: left;
  background: #61dafb;
  color: white;
  width: 100%;
  padding: 0.5rem 0;
  text-indent: 1rem;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
`;

const displayTodos = (todos:Todo[]) => {
    return todos.map(item => (
      <CSSTransition timeout={500} classNames="todo-item todo-item" key={item.id}>
        <TodoItem todo={item} />
      </CSSTransition>
    ))
}

export const Todos = () => {
  const todos = useSelector((state: RootState) => state.todo.todos);

  return (
    <Card>
      <TodoHeader className="todo-header">
        <h3>ToDo app</h3>
      </TodoHeader>
      <div className="todo-body">
        <NewTodoForm />
        <TransitionGroup component="div"  className="list">
          {displayTodos(todos)}
        </TransitionGroup>
      </div>
    </Card>
  );
};
