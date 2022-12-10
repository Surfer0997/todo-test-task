import { Todo } from '../../../types/todoTypes';
import { TodoControls } from './TodoControls';
import styles from './TodoItem.module.css';
import { TodoUpdateForm } from './TodoUpdateForm';

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem = ({ todo }: TodoItemProps) => {
  const { id, text, done, editing } = todo;

  const spanClass = `${styles['todo-item']} ${done ? styles.done : ''}`;

  

  return (
    <div className={spanClass}>
      {!editing ? (
        <span>{text}</span>
      ) : (
        <TodoUpdateForm id={id} text={text}/>
      )}
      {!editing && <TodoControls todo={todo}/>}
    </div>
  );
};
