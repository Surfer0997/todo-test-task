import styled from 'styled-components';
import { Todo } from '../../../types/todoTypes';
import { TodoControls } from './TodoControls';
import { TodoUpdateForm } from './TodoUpdateForm';
import './TodoItem.css';

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem = ({ todo }: TodoItemProps) => {
  const { id, text, done, editing } = todo;

  const StyledTodoContainer = styled.div`
    text-decoration: ${done ? 'line-through' : ''};
    width: 90%;
    margin-left: 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 0.5rem;
    border-bottom: solid;
    margin-bottom: 0.5rem;
  `;

  return (
    <div>
      <StyledTodoContainer>
        {!editing ? <span>{text}</span> : <TodoUpdateForm id={id} text={text} />}
        {!editing && <TodoControls todo={todo} />}
      </StyledTodoContainer>
    </div>
  );
};
