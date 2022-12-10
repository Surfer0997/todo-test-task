import { useDispatch } from 'react-redux';
import { Todo } from '../../../types/todoTypes';
import { deleteTodoItem, updateTodoItem } from '../../../store/todoSlice';
import styled from 'styled-components';

enum TodoControlAction {
  check = 'check',
  edit = 'edit',
  delete = 'delete',
}

interface TodoItemProps {
  todo: Todo;
}

const StyledControlButton = styled.button`
  padding: .3rem .6rem;
  background-color: white;
  cursor: pointer;
  transition: .5s;
  &:hover {
    background-color: #61dafb;
  }
`;

export const TodoControls = ({ todo }: TodoItemProps) => {
  const { id, done } = todo;
  const dispatch = useDispatch();

  const handleTodoControls = (type: TodoControlAction) => {
    switch (type) {
      case TodoControlAction.check:
        return () => {
          dispatch(updateTodoItem({ ...todo, done: !done }));
        };
      case TodoControlAction.edit:
        return () => {
          dispatch(updateTodoItem({ ...todo, done: false, editing: true }));
        };
      case TodoControlAction.delete:
        return () => {
          dispatch(deleteTodoItem(id));
        };
      default:
        return () => {};
    }
  };

  return (
    <div>
      <StyledControlButton onClick={handleTodoControls(TodoControlAction.check)}>✔️</StyledControlButton>
      <StyledControlButton onClick={handleTodoControls(TodoControlAction.edit)}>✏️</StyledControlButton>
      <StyledControlButton onClick={handleTodoControls(TodoControlAction.delete)}>❌</StyledControlButton>
    </div>
  );
};
