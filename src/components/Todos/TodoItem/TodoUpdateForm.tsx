import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodoItem } from "../../../store/todoSlice";

interface TodoUpdateFormProps {
    id: number;
    text: string;
}

export const TodoUpdateForm = ({id, text}:TodoUpdateFormProps) => {
    const [newTodoText, setNewTodoText] = useState(text);
    const dispatch = useDispatch();

    const newTodoTextInputHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setNewTodoText(e.target.value);
    }

    const submitUpdatedTodoHandler = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const updatedTodo = {
            id, text:newTodoText, done: false, editing:false
        }
        dispatch(updateTodoItem(updatedTodo))
    }

    return (
        <form onSubmit={submitUpdatedTodoHandler}>
          <input value={newTodoText} onChange={newTodoTextInputHandler}/>
          <input type="submit" />
        </form>
    )
}