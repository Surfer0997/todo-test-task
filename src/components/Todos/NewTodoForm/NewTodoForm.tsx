import { useState, ChangeEvent, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { addTodoItem } from "../../../store/todoSlice";

export const NewTodoForm = () => {
    const [newTodoText, setNewTodoText] = useState('');
    const dispatch = useDispatch();

    const todoTextInputHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setNewTodoText(e.target.value);
    }

    const addTodoHandler = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(addTodoItem(newTodoText));
        setNewTodoText('');
    }

    return (
        <div className="form-container">
          <form onSubmit={addTodoHandler}>
            <input type="text" placeholder="Enter todo here" maxLength={50} value={newTodoText} onChange={todoTextInputHandler}/>
            <input type="submit" />
          </form>
        </div>
    )
}