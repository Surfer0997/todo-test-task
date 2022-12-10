import { createSlice } from '@reduxjs/toolkit';
import { mockTodos, Todo } from '../types/todoTypes';

const initialState = {
  todos: mockTodos as Todo[],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    updateTodoItem: (state, action) => {
      const updatedTodo = action.payload;
      // find index of item to update
      const indexOfTodoToUpdate = state.todos.findIndex(todo=>todo.id === updatedTodo.id);
      // replace
      state.todos[indexOfTodoToUpdate] = updatedTodo;
    },
    addTodoItem: (state, action) => {
      if (action.payload.trim().length < 3) return state; // Not creating an empty todo

      const prevTodo = state.todos.at(-1); // creating id
      let newTodoId: number;
      if (prevTodo) {
        newTodoId = prevTodo.id + 1;
      } else {
        newTodoId = 0;
      }

      const newTodo = {
        id: newTodoId,
        text: action.payload,
        done: false,
        editing: false,
      };

      state.todos.push(newTodo);
    },
    deleteTodoItem: (state, action) => {
      const idToDelete = action.payload;
      state.todos = state.todos.filter(todo=>todo.id !== idToDelete);
    }
  },
});

export const { updateTodoItem, addTodoItem, deleteTodoItem } = todoSlice.actions;
export default todoSlice.reducer;
