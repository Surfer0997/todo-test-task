import { useState, ChangeEvent, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addTodoItem } from '../../../store/todoSlice';
import { StyledForm } from '../TodoItem/TodoUpdateForm';

const StyledFormContainer = styled.div`
  width: '90%';
  margin: 1rem 0 1rem 5%;
`;

export const NewTodoForm = () => {
  const [newTodoText, setNewTodoText] = useState('');
  const dispatch = useDispatch();

  const todoTextInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodoText(e.target.value);
  };

  const addTodoHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTodoItem(newTodoText));
    setNewTodoText('');
  };

  return (
    <StyledFormContainer className="form-container" style={{ width: '90%', marginLeft: '5%' }}>
      <StyledForm onSubmit={addTodoHandler}>
        <input
          type="text"
          placeholder="Enter todo here"
          maxLength={50}
          value={newTodoText}
          onChange={todoTextInputHandler}
          style={{width:'70%'}}
        />
        <input type="submit"  style={{width:'25%'}} value="Add todo"/>
      </StyledForm>
    </StyledFormContainer>
  );
};
