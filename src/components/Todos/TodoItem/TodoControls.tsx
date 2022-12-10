import { useDispatch } from 'react-redux';
import { Todo } from '../../../types/todoTypes';
import { deleteTodoItem, updateTodoItem } from '../../../store/todoSlice';

enum TodoControlAction {
  check = 'check',
  edit = 'edit',
  delete = 'delete',
}

interface TodoItemProps {
  todo: Todo;
}

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
    <>
      <button onClick={handleTodoControls(TodoControlAction.check)}>✔️</button>
      <button onClick={handleTodoControls(TodoControlAction.edit)}>✏️</button>
      <button onClick={handleTodoControls(TodoControlAction.delete)}>❌</button>
    </>
  );
};
