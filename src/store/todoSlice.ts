import { createSlice, Middleware } from '@reduxjs/toolkit';
import { mockTodos, Todo } from '../types/todoTypes';

const reHydrateStore = () => {
  const localStoredData = localStorage.getItem('todoApplicationState');
  if (localStoredData) {
    return JSON.parse(localStoredData).todo.todos; // re-hydrate the store
  } else {
    return {todos: mockTodos as Todo[],}
  }
};

const initialState = {todos: reHydrateStore() as Todo[]};

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
    },
  },
});

//MIDDLEWARE
export const localStorageMiddleware:Middleware = (state) => {
  return next => action => {
    const result = next(action);
    localStorage.setItem('todoApplicationState', JSON.stringify(state.getState()));
    console.log('Stored to localstorage');
    return result;
  };
};



export const { updateTodoItem, addTodoItem, deleteTodoItem } = todoSlice.actions;
export default todoSlice.reducer;
