import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { updateTodoItem } from "../../../store/todoSlice";

interface TodoUpdateFormProps {
    id: number;
    text: string;
}

export const StyledForm = styled.form`
    width: 100%;
    display: flex;
    justify-content: space-between;
       

    & input[type="submit"] {
        height: 2.3rem;
        padding: .3rem .6rem;
        background-color: white;
        cursor: pointer;
        font-weight: 600;
        transition: .5s;
        &:hover {
          background-color: #61dafb;
        }
    }
    & input[type="text"] {
        height: 2rem;
    }
`;

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
        <StyledForm onSubmit={submitUpdatedTodoHandler}>
          <input value={newTodoText} onChange={newTodoTextInputHandler} maxLength={50} style={{width:'70%', textIndent:'.5rem'}}/>
          <input type="submit" style={{width:'25%'}} />
        </StyledForm>
    )
}